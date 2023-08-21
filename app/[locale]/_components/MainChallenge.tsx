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
  const handleFormSubmit = (data: any) => {
    // Here you can implement the logic to validate the user input against the challenge conditions
    console.log(data.password);
  };

  return (
    <div className='rounded-t-2xl flex justify-center w-screen'>
      {challengeStarted ? (
        <div className='flex flex-col w-screen items-center'>
          <MainInput onSubmit={handleFormSubmit} />
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

