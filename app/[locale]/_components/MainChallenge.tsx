'use client';

import { Dispatch, SetStateAction } from 'react';
import StyledButton from './elements/Button';
import MainInput from './MainInput';


const MainChallenge = ({
  challengeStarted,
  setChallengeStarted,
}: {
  challengeStarted: boolean;
  setChallengeStarted: Dispatch<SetStateAction<boolean>>;
}) => {


  return (
    <div className='rounded-t-2xl flex justify-center w-screen'>
      {challengeStarted ? (
        <div className='flex flex-col w-screen items-center'>
          <MainInput />
        </div>
      ) : (
        <StyledButton
          title='startChallenge'
          size='lg'
          styles='mt-4'
          buttonProps={{
            onClick: () => setChallengeStarted(true),
          }}
        />
      )}
    </div>
  );
};
export default MainChallenge;

