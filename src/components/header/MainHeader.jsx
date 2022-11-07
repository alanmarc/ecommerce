import React, { useState } from 'react'
import { CartIcon } from '../icons/CartIcon';
import { CloseIcon } from '../icons/CloseIcon';
import { MenuIcon } from '../icons/MenuIcon';

const AvatarImage = "https://img.icons8.com/color/96/null/circled-user-male-skin-type-7--v1.png";

export const MainHeader = () => {
  const [navClass, setNavClass] = useState("hidden font-bold md:static md:flex md:flex-row md:h-auto md:mr-auto md:gap-4 md:p-0");

  const handleOpenMenu = () => {
    setNavClass(
      "absolute top-0 left-0 flex h-full w-4/5 flex-col gap-y-[21px] bg-white p-8 font-bold md:static md:flex md:flex-row md:h-auto md:mr-auto md:gap-4 md:p-0"
    );
  };
  const handleCloseMenu = () => {
    setNavClass(
      "hidden font-bold md:static md:flex md:flex-row md:h-auto md:mr-auto md:gap-4 md:p-0"
    );
  };

  return (
    <header className='container mx-auto flex items-center bg-gray-200 gap-8 px-4 py-8'>
      <button className='md:hidden' onClick={ handleOpenMenu }>
          <MenuIcon/>
      </button>
      <p className='font-bold	text-xl mr-auto mb-1 h-5 md:mr-0 '>Tianquiz</p>
      <nav className={ navClass }>
        <button className='mb-12 md:hidden' onClick={ handleCloseMenu }>
          <CloseIcon/>
        </button>
        <a href='#'>Collections</a>
        <a href='#'>Dogs</a>
        <a href='#'>Cats</a>
        <a href='#'>Puppies</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
      </nav>
      <div className='flex gap-4'>
        <button>
          <CartIcon/>
        </button>
        <img src={ AvatarImage } alt="Imagen de Perfil" className='w-10'/>
      </div>
    </header>
  )
}
