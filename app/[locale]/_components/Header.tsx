'use client';

import TypoWithTranslation from './TypoWithTranslation';
import { useState } from 'react';

const Header = ({ challengeStarted }: { challengeStarted: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  const dataForTitle = {
    text: 'title',
    styles: 'text-2xl md:text-6xl  mx-1 text-white delay-0 mt-4',
  };

  return (
    <div className='flex flex-col justify-center items-center mx-2  md:mx-0 mt-32'>
      <TypoWithTranslation data={dataForTitle} />
      <TypoWithTranslation
        data={{ text: 'rules', styles: 'text-xl  md:text-2xl text-center text-white my-4' }}
      />

      {!challengeStarted && (
        <>
          <TypoWithTranslation
            data={{
              pTagProps: {
                onMouseEnter: () => setIsHovered(true),
                onMouseLeave: () => setIsHovered(false),
              },
              text: isHovered ? 'uWillNeedIt' : 'goodLuck',
              styles: 'text-4xl text-[#C38D9E] mt-4 animate-bounce h-10',
            }}
          />
          <TypoWithTranslation
            data={{
              text: 'pointerDownEmoji',
              styles: 'text-4xl  mt-4  animate-bounce mt-4 h-10',
            }}
          />
        </>
      )}
    </div>
  );
};

export default Header;
