import { TaskProps, TaskDifficulty } from '../_components/tasks/Task';
import * as yup from 'yup';

export const tasks: TaskProps[] = [
  {
    id: 1,
    title: 'title1',
    difficulty: TaskDifficulty.low,
    points: 5,
    solved: false,
    description: 'description1',
    conditionToSolve: yup.string().min(5).required('Password is required'),
  },
  {
    id: 2,
    title: 'title2',
    difficulty: TaskDifficulty.low,
    points: 5,
    solved: false,
    description: 'description2',
    conditionToSolve: yup
      .string()
      .min(5)
      .matches(
        /^(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{5,}$/,
        'Password must be at least 5 characters long and contain at least one special character'
      )
      .required('Password is required'),
  },
];
