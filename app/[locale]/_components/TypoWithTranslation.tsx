import { useTranslations } from 'next-intl';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

type TypoWithTranslationProps = {
  text: string;
  styles: string;
  localizationContainer?: string;
  pTagProps?: DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >;
};

const TypoWithTranslation = ({ data }: { data: TypoWithTranslationProps }) => {
  const { text, styles, pTagProps, localizationContainer = 'MainPage' } = data;

  const t = useTranslations(localizationContainer);
  return (
    <p className={styles} {...pTagProps}>
      {t(text)}
    </p>
  );
};

export default TypoWithTranslation;
