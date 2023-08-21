import React from 'react';
import Task, { TaskDifficulty, TaskProps } from './Task';

const TasksToSolve = ({
  challengeNumber,
  isValid,
}: {
  challengeNumber: number;
  isValid: boolean;
}) => {
  const tasks: TaskProps[] = [
    {
      id: 1,
      title: 'title1',
      difficulty: TaskDifficulty.low,
      points: 10,
      solved: false,
      hint: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa reprehenderit, voluptate aliquid dolores, optio veritatis ipsum, debitis quia error et minima.',
      description: 'description1',
      additionalContent: <>lala</>,
    },
    {
      id: 2,
      title: 'title1',
      difficulty: TaskDifficulty.low,
      points: 10,
      solved: false,
      hint: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa reprehenderit, voluptate aliquid dolores, optio veritatis ipsum, debitis quia error et minima.',
      description: 'description1',
      additionalContent: <>lala</>,
    },
  ];

  return (
    <div className='mt-10 max-w-2xl min-w-full rounded flex justify-center'>
      {tasks.map((task, index) => (
        <>
          {index === challengeNumber - 1 && (
            <Task key={task.id} data={{ ...task, solved: isValid }} />
          )}
        </>
      ))}
    </div>
  );
};

export default TasksToSolve;
