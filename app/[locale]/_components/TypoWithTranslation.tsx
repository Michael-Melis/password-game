import { useTranslations } from 'next-intl';



type TypoWithTranslationProps = {
  text: string;
  styles: string;
 
};

const TypoWithTranslation = ({ data }: { data: TypoWithTranslationProps }) => {
  const { text, styles } = data;

  

  const t = useTranslations('MainPage');
  return <p className={styles}>{t(text)}</p>;
};

export default TypoWithTranslation;
