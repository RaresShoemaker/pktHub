import React, { FormEvent, useState, useRef } from 'react';
import { useToast } from '../../context/ToasterBannerContext/hooks';
import { TOASTER_TYPES } from '../../context/ToasterBannerContext/constants';
import CustomInput from '../CustomInput';
import ImgUploader from '../ImageUploader';

const ChannelSubmissionForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    company_name: '',
    email: '',
    platform_description: '',
    platform_link: ''
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const { showToast } = useToast();

  const PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID;
  const FORM_ID = import.meta.env.VITE_HUBSPOT_FORM_ID;
  const ACCESS_TOKEN = import.meta.env.VITE_HUBSPOT_ACCESS_TOKEN;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      company_name: '',
      email: '',
      platform_description: '',
      platform_link: ''
    });
    setFile(null);
    setResetKey(prev => prev + 1);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          // Remove the Data URL prefix (e.g., "data:image/jpeg;base64,")
          const base64String = reader.result.split(',')[1];
          resolve(base64String);
        } else {
          reject(new Error('Failed to convert file to base64'));
        }
      };
      reader.onerror = error => reject(error);
    });
  };

  const submitFormToHubSpot = async () => {
    try {
      const hsContext = {
        pageUri: window.location.href,
        pageName: document.title,
        hutk: document.cookie.match(/hubspotutk=(.*?);/)?.[1] || undefined
      };

      const fields = [
        {
          name: 'company_name',
          value: formData.company_name
        },
        {
          name: 'email',
          value: formData.email
        },
        {
          name: 'platform_description',
          value: formData.platform_description
        },
        {
          name: 'platform_link',
          value: formData.platform_link
        }
      ];

      // Add file if it exists
      if (file) {
        const base64String = await convertFileToBase64(file);
        fields.push({
          name: 'file_upload',
          value: base64String
        });
      }

      const response = await fetch(
        `https://forms.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Authorization': `Bearer ${ACCESS_TOKEN}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            fields,
            context: hsContext,
            legalConsentOptions: {
              consent: {
                consentToProcess: true,
                text: 'I agree to allow the company to store and process my personal data.'
              }
            }
          })
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Form submission failed');
      }

      return await response.json();
    } catch (error) {
      console.error('Form submission error:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.company_name ||
      !formData.email ||
      !formData.platform_description ||
      !formData.platform_link
    ) {
      showToast('Please fill in all fields', TOASTER_TYPES.ERROR, 3000);
      return;
    }

    if (!file) {
      showToast('Please upload a file', TOASTER_TYPES.ERROR, 3000);
      return;
    }

    setIsSubmitting(true);

    try {
      await submitFormToHubSpot();
      showToast('Form submitted successfully!', TOASTER_TYPES.SUCCESS, 3000);
      resetForm();
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
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
      <CustomInput
        type="text"
        label="Company Name"
        id="company_name"
        value={formData.company_name}
        onChange={handleInputChange}
      />
      <CustomInput
        type="email"
        label="Email"
        id="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <CustomInput
        type="text"
        label="Platform Description"
        id="platform_description"
        value={formData.platform_description}
        onChange={handleInputChange}
      />
      <CustomInput
        type="text"
        label="Platform Link"
        id="platform_link"
        value={formData.platform_link}
        onChange={handleInputChange}
      />
      <ImgUploader 
        onFileSelect={(file: File | null) => setFile(file)} 
        resetKey={resetKey}
        name='file_upload'
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="text-primary rounded-full bg-white w-full py-3 text-center font-semibold uppercase disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default ChannelSubmissionForm;