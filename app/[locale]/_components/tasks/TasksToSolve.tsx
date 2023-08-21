import React from 'react';
import Task, { TaskDifficulty, TaskProps } from './Task';

const TasksToSolve = () => {
  const taskObject: TaskProps = {
    id: '123456',
    title: 'title1',
    difficulty: TaskDifficulty.low,
    points: 10,
    solved: true,
    hint: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa reprehenderit, voluptate aliquid dolores, optio veritatis ipsum, debitis quia error et minima.',
    description: 'description1',

    additionalContent: <>lala</>,
  };

  return (
    <div className='mt-10 max-w-2xl min-w-full rounde flex justify-center'>
      <Task data={taskObject} />
    </div>
  );
};

export default TasksToSolve;
