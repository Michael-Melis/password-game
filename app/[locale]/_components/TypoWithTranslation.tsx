import { useTranslations } from 'next-intl';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

type TypoWithTranslationProps = {
  text: string;
  styles: string;
  pTagProps?: DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >;
};

const TypoWithTranslation = ({ data }: { data: TypoWithTranslationProps }) => {
  const { text, styles, pTagProps } = data;

  const t = useTranslations('MainPage');
  return (
    <p className={styles} {...pTagProps}>
      {t(text)}
    </p>
  );
};

export default TypoWithTranslation;
