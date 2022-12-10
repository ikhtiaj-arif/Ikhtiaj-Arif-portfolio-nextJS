import React from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs'

const Nav = () => {
    return (
        <nav className='py-10 mb-12 flex justify-between'>
        <h1 className='text-xl font-burtons'>MD. IKHTIAJ ARIF</h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill className='cursor-pointer text-xl'/>
          </li>
          <li>
            <a
            className='bg-gradient-to-r from-cyan-600 to-teal-500 text-white font-medium px-4 py-2 border-none rounded-lg ml-8 hover:'
            href="https://drive.google.com/file/d/1gwC5BdmG13Gr3QcBh9TBj5XT-EI1Ac_g/view?usp=share_link" target="blank">Resume</a>
          </li>
        </ul>
      </nav>
    );
};

export default Nav;