'use client';

import { useState } from 'react';
import Header from './_components/Header';
import MainChallenge from './_components/MainChallenge';

export default function Index() {
  const [challengeStarted, setChallengeStarted] = useState<boolean>(false);

  return (
    <>
      <Header challengeStarted={challengeStarted} />
      <MainChallenge
        challengeStarted={challengeStarted}
        setChallengeStarted={setChallengeStarted}
      />
    </>
  );
}
