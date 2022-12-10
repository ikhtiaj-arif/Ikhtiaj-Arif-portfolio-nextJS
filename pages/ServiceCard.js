import React from 'react';
import design from '../public/design.png'

import Image from 'next/image';

const ServiceCard = () => {
    return (
        <div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10'>
          <Image src={design} width={100} height={100} className="mx-auto"/>
          <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
          <p className='text-md py-2 leading-8 text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicingsimilique officia quibusdam minus?</p>
          <h4 className='py-4 text-teal-600 font-medium'>Design Tools I Used</h4>
          <p className='text-gray-800 py-1'>Photoshop</p>
          <p className='text-gray-800 py-1'>Photoshop</p>
          <p className='text-gray-800 py-1'>Photoshop</p>
          
        </div>
      </div>
    );
};

export default ServiceCard;