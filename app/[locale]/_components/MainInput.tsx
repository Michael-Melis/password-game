import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

const MainInput = () => {
  // * Localization
  const t = useTranslations('MainPage');

  // * States
  const [password, setPassword] = useState<string>('');
  console.log('🚀 ~ file: MainInput.tsx:10 ~ MainInput ~ password:', password);

  /**
   *
   * #E27D60
   *
   * #E8A87C
   * #C38D9E
   * #41B3A3
   *
   */

  return (
    <div className='flex bg-[#c38db3] justify-center items-center rounded-md h-40 w-10/12'>
      <input
        type='text'
        onChange={(e) => setPassword(e.target.value)}
        placeholder={t('passwordPlaceholder')}
        className='w-10/12 rounded-md p-2 text-[#E27D60]  focus:border-none outline-none  placeholder:text-center placeholder:text-[#C38D9E]'
      />

    </div>
  );
};

export default MainInput;
