import DynamicRowTextArea from './elements/DynamicRowTextArea';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TasksToSolve from './tasks/TasksToSolve';
import { useState } from 'react';
import StyledButton from './elements/Button';
import { tasks } from '../_data/tasks';

const MainInput = () => {
  const [challengeNumber, setChallengeNumber] = useState(1);

  const schema = yup.object().shape({
    password: tasks[challengeNumber - 1].conditionToSolve,
  });

  const defaultValues = {
    password: '',
  };

  // * React hook form
  const {
    control,
    handleSubmit,
    watch,
    reset,
    setValue,

    formState: { errors, isValid },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = ({ password }: { password: string }) => {
    // * Go to next challenge
    setChallengeNumber(challengeNumber + 1);
    // * Reset form to reset validation
    reset();
    //* Set value to to use previous password in next challenge
    setValue('password', password);
  };

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
        className='flex bg-[#c38db3] flex-col justify-center items-center rounded-md p-10 h-auto w-10/12 '
        onSubmit={handleSubmit(handleFormSubmit)}>
        <DynamicRowTextArea
          placeholder='passwordPlaceholder'
          numberOfLetters={watch('password').length}
          formProps={formProps}
        />

        <p className='text-4xl mt-5 text-[#E8A87C] break-words w-full '>
          {watch('password')}
        </p>
        <div className='flex justify-end w-full'>
          <StyledButton
            title='nextChallenge'
            useCase='info'
            size='lg'
            buttonProps={{ disabled: !isValid }}
          />
        </div>
      </form>
      <TasksToSolve isValid={isValid} challengeNumber={challengeNumber} />
    </>
  );
};

export default MainInput;
