import React from 'react';
import { homeMockData } from '../mockdata/HomeMockData';
import ChannelCard from '../components/ChannelCard';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {

	return (
		<section className='flex flex-col h-full gap-8'>
			<div className='h-fit py-2 self-center md:self-end mt-10 md:mt-8'>
        <Link to='/submission'>
				<button  className='bg-white text-primary font-semibold p-3 px-4 md:p-4 rounded-full'>
					Submit Channel
				</button>
        </Link>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full mx-auto">
        {React.Children.toArray(
          homeMockData.map(({ logo, href }) => (
            <ChannelCard logo={logo} href={href} />
          ))
        )}
      </div>
		</section>
	);
};

export default HomePage;
