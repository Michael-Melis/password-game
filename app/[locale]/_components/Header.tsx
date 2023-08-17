'use client';

import { useTranslations } from 'next-intl';

const Header = () => {
  const t = useTranslations('MainPage');

  return (
    <div className='flex bg-slate-600 justify-center h-40'>
      <h1 className='text-red-500'>{t('title')}</h1>
    </div>
  );
};

export default Header;
