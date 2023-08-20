import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import DynamicRowTextArea from './DynamicRowTextArea';

const MainInput = () => {
  // * Localization
  const t = useTranslations('MainPage');

  // * States
  const [password, setPassword] = useState<string>('');

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
    <div className='flex bg-[#c38db3] flex-col justify-center items-center rounded-md p-10 h-auto w-10/12'>
      <DynamicRowTextArea
        setValue={setPassword}
        placeholder='passwordPlaceholder'
        numberOfLetters={password.length}
      />

      <p className='text-4xl mt-5 text-[#E8A87C] break-words w-full '>
        {password}
      </p>
    </div>
  );
};

export default MainInput;
