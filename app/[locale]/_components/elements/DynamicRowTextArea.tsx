'use client';

import { useTranslations } from 'next-intl';
import { useScreenWidth } from '../../_hooks/useScreenWidth';
import { calculateNumberOfRows } from '../../_utils/helpers';

const DynamicRowTextArea = ({
  setValue,
  placeholder,
  numberOfLetters,
}: {
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  numberOfLetters: number;
}) => {
  // * Localization
  const t = useTranslations('MainPage');

  // * Custom hooks
  const actualWidth = useScreenWidth();

  // * number of rows
  const numberOfRows = calculateNumberOfRows(actualWidth, numberOfLetters);

  return (
    <textarea
      placeholder={t(placeholder)}
      className='w-full rounded-md p-2 h-auto  text-[#E27D60] text-xl  text-center focus:border-none outline-none  placeholder:text-center placeholder:text-[#C38D9E]'
      onChange={(e) => setValue(e.target.value)}
      rows={numberOfRows}
    />
  );
};

export default DynamicRowTextArea;
