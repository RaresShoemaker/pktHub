import React, { FormEvent, useState } from 'react';
import { useToast } from '../../context/ToasterBannerContext/hooks';
import { TOASTER_TYPES } from '../../context/ToasterBannerContext/constants';
import CustomInput from '../CustomInput';
import ImgUploader from '../ImageUploader';

interface UploadResponse {
  message: string;
  fileServer: string;
  success: boolean;
  duration: string;
}

const ChannelSubmissionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    platformDescription: '',
    platformLink: ''
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  const uploadFileToJotForm = async (file: File): Promise<UploadResponse> => {
    const FORM_ID = import.meta.env.VITE_JOTFORM_FORM_ID;
    const uploadData = new FormData();
    
    uploadData.append('action', 'multipleUpload');
    uploadData.append('folder', `${FORM_ID}_${Date.now().toString(36)}`);
    uploadData.append('field', 'q11_fileUpload');
    uploadData.append('origin', 'https://submit.jotform.com');
    uploadData.append('qqfile', file);

    const response = await fetch('https://upload.jotform.com/upload', {
      method: 'POST',
      body: uploadData
    });

    if (!response.ok) {
      throw new Error('Failed to upload file');
    }

    return await response.json();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!file) {
      showToast('Please upload a file', TOASTER_TYPES.ERROR, 3000);
      return;
    }

    setIsSubmitting(true);

    try {
      // First, upload the file
      const uploadResponse = await uploadFileToJotForm(file);

      if (!uploadResponse.success) {
        throw new Error('File upload failed');
      }

      const submissionData = new FormData();
      
      // Add form fields
      submissionData.append('submission[6]', formData.companyName);
      submissionData.append('submission[7]', formData.platformDescription);
      submissionData.append('submission[8]', formData.platformLink);
      
      // Add the file data
      submissionData.append('submission[11]', file.name + '#' + uploadResponse.fileServer);

      const JOTFORM_API_KEY = import.meta.env.VITE_JOTFORM_API_KEY;
      const FORM_ID = import.meta.env.VITE_JOTFORM_FORM_ID;

      // Log the payload for debugging
      console.log('Submission payload:', Object.fromEntries(submissionData));

      const response = await fetch(`https://api.jotform.com/form/${FORM_ID}/submissions?apiKey=${JOTFORM_API_KEY}`, {
        method: 'POST',
        body: submissionData,
      });

      const responseData = await response.json();
      console.log('Form submission response:', responseData);
      
      if (!response.ok || responseData.responseCode === 400) {
        throw new Error(responseData.message || 'Submission failed');
      }

      showToast('Form submitted successfully!', TOASTER_TYPES.SUCCESS, 3000);
      
      // Clear form
      setFormData({
        companyName: '',
        platformDescription: '',
        platformLink: '',
      });
      setFile(null);
      
    } catch (error) {
      console.error('Submission error:', error);
      showToast(
        error instanceof Error ? error.message : 'Failed to submit form. Please try again.',
        TOASTER_TYPES.ERROR,
        3000
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <CustomInput
        type='text'
        label='Company Name'
        id='companyName'
        value={formData.companyName}
        onChange={handleInputChange}
      />
      <CustomInput
        type='text'
        label='Platform description'
        id='platformDescription'
        value={formData.platformDescription}
        onChange={handleInputChange}
      />
      <CustomInput
        type='text'
        label='Platform link'
        id='platformLink'
        value={formData.platformLink}
        onChange={handleInputChange}
      />
      <ImgUploader onFileSelect={(file: File | null) => setFile(file)} />
      <button
        type='submit'
        disabled={isSubmitting}
        className='text-primary rounded-full bg-white w-full py-3 text-center font-semibold uppercase disabled:opacity-50'
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default ChannelSubmissionForm;