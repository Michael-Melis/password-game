import DynamicRowTextArea from './elements/DynamicRowTextArea';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TasksToSolve from './tasks/TasksToSolve';
import { useState } from 'react';

const schema = yup.object().shape({
  password: yup.string().min(5).required('Password is required'),
});

const MainInput = ({ onSubmit }: { onSubmit: any }) => {
  const [challengeNumber, setChallengeNumber] = useState(1);

  const defaultValues = {
    password: '',
  };

  // * React hook form
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  /**
   *
   * #E27D60
   *
   * #E8A87C
   * #C38D9E
   * #41B3A3
   *
   */

  const formProps = {
    control,
    errors,
  };

  return (
    <>
      <form
        className='flex bg-[#c38db3] flex-col justify-center items-center rounded-md p-10 h-auto w-10/12'
        onSubmit={handleSubmit(onSubmit)}>
        <DynamicRowTextArea
          placeholder='passwordPlaceholder'
          numberOfLetters={watch('password').length}
          formProps={formProps}
        />

        <p className='text-4xl mt-5 text-[#E8A87C] break-words w-full '>
          {watch('password')}
        </p>
        <button type='submit' disabled={isValid}>Check Password</button>
      </form>
      <TasksToSolve isValid={isValid} challengeNumber={challengeNumber} />
    </>
  );
};

export default MainInput;
