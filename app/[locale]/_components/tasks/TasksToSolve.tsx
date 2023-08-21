import React from 'react';
import Task, { TaskDifficulty, TaskProps } from './Task';
import { tasks } from '../../_data/tasks';

const TasksToSolve = ({
  challengeNumber,
  isValid,
}: {
  challengeNumber: number;
  isValid: boolean;
}) => {
  

  return (
    <div className='mt-10 max-w-2xl min-w-full rounded flex justify-center'>
      {tasks.map((task, index) => (
        <div key={task.id}>
          {index === challengeNumber - 1 && (
            <Task data={{ ...task, solved: isValid }} />
          )}
        </div>
      ))}
    </div>
  );
};

export default TasksToSolve;
