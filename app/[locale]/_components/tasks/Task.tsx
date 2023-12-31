import { ReactNode, useEffect, useState } from 'react';
import TypoWithTranslation from '../TypoWithTranslation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble, faLightbulb } from '@fortawesome/free-solid-svg-icons';

export enum TaskDifficulty {
  low = 'low',
  medium = 'medium',
  high = 'high',
  impossible = 'impossible',
}

export type TaskProps = {
  id: number;
  title: string;
  difficulty: TaskDifficulty;
  points: number;
  solved: boolean;
  conditionToSolve: any;
  hint?: string;
  solvedAt?: Date;
  description?: string;
  additionalContent?: ReactNode;
};

const Task = ({ data }: { data: TaskProps }) => {
  // * States
  const [toggleHint, setToggleHint] = useState(false);
  const [bgColor, setBgColor] = useState('bg-[#8A0707] ');

  // * UseEffects
  useEffect(() => {
    setBgColor(data.solved ? 'bg-[#0F9D58]' : 'bg-[#8A0707]');
  }, [data.solved]);

  // * Switches
  const difficultyIconSwitch = (difficulty: TaskDifficulty) => {
    switch (difficulty) {
      case TaskDifficulty.low:
        return { difficulty: '🟢', points: 5 };
      case TaskDifficulty.medium:
        return { difficulty: '🟡', points: 10 };
      case TaskDifficulty.high:
        return { difficulty: '🔴', points: 15 };
      case TaskDifficulty.impossible:
        return { difficulty: '⚫', points: 20 };

      default:
        return { difficulty: '🟢', points: 5 };
    }
  };

  return (
    <div className='flex flex-col max-w-2xl'>
      <div
        className={`border-b-4 border-black text-center p-4 font-mono ${bgColor} rounded-t-xl`}>
        <div className='flex justify-between mb-4'>
          <div className='flex items-center '>
            <TypoWithTranslation
              data={{
                text: 'difficulty',
                localizationContainer: 'MainChallenge',
                styles: 'text-white',
              }}
            />
            <p>{difficultyIconSwitch(data.difficulty).difficulty}</p>
          </div>
          <div className='flex items-center '>
            <TypoWithTranslation
              data={{
                text: 'points',
                localizationContainer: 'MainChallenge',
                styles: 'text-white',
              }}
            />
            <p className='text-xl text-white'>
              {difficultyIconSwitch(data.difficulty).points}
            </p>
          </div>
        </div>
        <TypoWithTranslation
          data={{
            text: data.title,
            localizationContainer: 'MainChallenge',
            styles: 'text-2xl text-white font-bold',
          }}
        />
      </div>
      {data.solved ? (
        <div className={`${bgColor} bg-opacity-20 flex flex-col items-center`}>
          <FontAwesomeIcon
            icon={faCheckDouble}
            className='cursor-pointer p-10 text-6xl text-[#0F9D58] animate-ping'
          />
        </div>
      ) : (
        <div className={`${bgColor} bg-opacity-80 flex flex-col items-center`}>
          {data.description && (
            <TypoWithTranslation
              data={{
                text: data.description,
                localizationContainer: 'MainChallenge',
                styles: 'text-lg text-white text-center p-4 font-mono',
              }}
            />
          )}
          {data.additionalContent && data.additionalContent}
          {data.hint && (
            <>
              <FontAwesomeIcon
                icon={faLightbulb}
                onClick={() => setToggleHint(!toggleHint)}
                className='cursor-pointer animate-pulse p-4 text-xl text-[#FFDF00]'
              />
              {toggleHint && (
                <TypoWithTranslation
                  data={{
                    text: data.hint,
                    localizationContainer: 'MainChallenge',
                    styles: 'text-lg text-white text-center p-4 font-mono',
                  }}
                />
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Task;
