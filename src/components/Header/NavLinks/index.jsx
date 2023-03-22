import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CustomLink from '../../CustomLink';
import { MdMenu, MdClose } from 'react-icons/md';

import { useTranslation } from 'react-i18next';
import '../../../utils/i18next.js'

const NavLinks = () => {
  const auth = useSelector((state) => state.users.auth);
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation()

  return (
    <>
      <div className='sm:hidden'>
        <MdMenu
          onClick={() => setVisible(!visible)}
          className='text-white w-[35px] h-[35px] cursor-pointer'
        />
        <div
          className={`duration-300 ${
            visible
              ? 'absolute top-0 left-0 w-[320px] h-full bg-gray-800'
              : 'absolute left-[-320px]'
          }`}
        >
          <MdClose
            onClick={() => setVisible(!visible)}
            className='absolute text-white w-[35px] h-[35px] cursor-pointer mt-[20px] ml-[260px]'
          />
          <div className='text-white text-[20px] cursor-default mt-6 ml-4'>
            E-commerce
          </div>
          <div className='flex flex-col mt-8'>
            <CustomLink to='/'>{t("header.main")}</CustomLink>
            <CustomLink to='/goods'>{t("header.goods")}</CustomLink>
            {auth ? <CustomLink to='/admin'>{t("header.admin")}</CustomLink> : ''}
          </div>
        </div>
      </div>
      <div className='hidden sm:block'>
        <CustomLink to='/'>{t("header.main")}</CustomLink>
        <CustomLink to='/goods'>{t("header.goods")}</CustomLink>
        {auth ? <CustomLink to='/admin'>{t("header.admin")}</CustomLink> : ''}
      </div>
    </>
  );
};

export default NavLinks;
