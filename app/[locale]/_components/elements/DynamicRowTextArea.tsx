'use client';

import { useTranslations } from 'next-intl';
import { useScreenWidth } from '../../_hooks/useScreenWidth';
import { calculateNumberOfRows } from '../../_utils/helpers';
import { Control, Controller } from 'react-hook-form';

const DynamicRowTextArea = ({
  placeholder,
  numberOfLetters,
  formProps,
}: {
  placeholder: string;
  numberOfLetters: number;
  formProps: {
    control: Control<
      {
        password: string;
      },
      any
    >;
    errors: any;
  };
}) => {
  // * Localization
  const t = useTranslations('MainPage');

  // * Custom hooks
  const actualWidth = useScreenWidth();

  // * number of rows
  const numberOfRows = calculateNumberOfRows(actualWidth, numberOfLetters);

  return (
    <>
      <Controller
        name='password'
        control={formProps.control}
        render={({ field }) => (
          <textarea
            placeholder={t(placeholder)}
            {...field}
            className='w-full rounded-md p-2 h-auto  text-[#E27D60] text-xl  text-center focus:border-none outline-none  placeholder:text-center placeholder:text-[#C38D9E]'
            rows={numberOfRows}
          />
        )}
      />
      {formProps.errors.password && <p>{formProps.errors.password.message}</p>}
    </>
  );
};

export default DynamicRowTextArea;
