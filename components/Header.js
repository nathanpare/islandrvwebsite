import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Dropdown from './Dropdown';

const Header = () => {
  const router = useRouter();

  return (
    <div className='sticky top-0 h-24 flex justify-between
     items-center px-5'>
      <Image onClick={() => router.push("/")} className='cursor-pointer pt-8' src="/island logo png white.png"
       alt='' height={150} width={150} />
      <Dropdown />
    </div>
  );
}

export default Header;
