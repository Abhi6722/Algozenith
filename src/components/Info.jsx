import React from 'react';
import Card from './Card';
import InfoText from './InfoText';

const Info = () => {
  const backgroundImageUrl = 'url(graph.png)';
  const backgroundStyle = {
    backgroundImage: backgroundImageUrl,
  };

  return (
    <div className="bg-white text-black py-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-cover" style={backgroundStyle}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-center md:text-start lg:text-start text-5xl sm:text-7xl md:text-7xl lg:text-6xl font-extrabold my-7 mx-3">
            Invest in skills,<span className="text-blue-500">  earn 10X  </span> of what you paid.
          </h2>
          <p className=" text-center md:text-start lg:text-start sm:text-lg my-5 pb-12 mx-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="grid grid-cols-2 gap-4 mx-3">
            <InfoText text1="1.2 Cr/Year" text2="highest fresher package"/>
            <InfoText text1="Multiple <100 Ranks" text2="in kickstart last year"/>
            <InfoText text1="1000+ Offers" text2="from top companies"/>
            <InfoText text1="Trusted by IITians" text2="for their career prep"/>
          </div>
        </div>
        <div className='mx-3 lg:mx-5'>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Info;
