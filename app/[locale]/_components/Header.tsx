'use client';

import { useTranslations } from 'next-intl';
import TypoWithTranslation from './TypoWithTranslation';

const Header = () => {
  const t = useTranslations('MainPage');

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
    <div className='flex bg-white justify-center h-40 '>
      <TypoWithTranslation data={{ text: 'title', styles: 'text-5xl text-[#C38D9E]' }} />
    
    </div>
  );
};

export default Header;
