import React from 'react';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub, AiFillFacebook} from 'react-icons/ai';
import Image from 'next/image';
import deved from '../public/dev-ed-wave.png'


const About = () => {
    return (
        <div>
             <div className='text-center  py-10 w-full md:max-w-3xl mx-auto'>
          <h2 className='text-4xl py-2 text-teal-600 font-medium '>Ikhtiaj Arif</h2>
          <h3 className='text-2xl py-2 text-teal-600 font-medium '>React.JS Developer</h3>
          <p className='text-md py-5 leading-8 text-gray-800'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis porro blanditiis quos at culpa sapiente itaque tenetur adipisci sequi optio distinctio error quidem repellendus, accusamus amet, unde ex! Eveniet, delectus. Facere, ipsum id adipisci magni unde expedita odio ipsa placeat!</p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
          <AiFillLinkedin/>
          <AiFillGithub/>
          <AiFillTwitterCircle/>
          <AiFillFacebook/>
        </div>
        <div className='relative bg-gradient-to-b from-teal-500 rounded-full w-96 h-96 mt-20 mx-auto overflow-hidden'>
          <Image src={deved} layout='fill' objectFit='cover'/>
        </div>
            
        </div>
    );
};

export default About;