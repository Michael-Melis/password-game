import { useTranslations } from 'next-intl';

const StyledButton = ({
  title,
  buttonProps,
  styles,
  size = 'md',
  useCase = 'default',
}: {
  title: string;
  buttonProps?: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  size?: 'sm' | 'md' | 'lg';
  styles?: string;
  useCase?: 'success' | 'error' | 'warning' | 'info' | 'default';
}) => {
  const t = useTranslations('Buttons');

  const sizeSwitch = () => {
    switch (size) {
      case 'sm':
        return 'px-2 py-1';
      case 'md':
        return 'px-4 py-2';
      case 'lg':
        return 'px-6 py-3';
      default:
        return 'px-4 py-2';
    }
  };
  const useCaseSwitch = () => {
    switch (useCase) {
      case 'success':
        return 'bg-green-500 ';
      case 'error':
        return 'bg-red-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'info':
        return 'bg-blue-500';
      default:
        return 'bg-[#C38D9E]';
    }
  };

  return (
    <button
      className={`${styles} rounded-md ${useCaseSwitch()} ${sizeSwitch()} text-white  hover:bg-opacity-70 hover:transition ease-in-out duration-300 disabled:opacity-50 disabled:cursor-not-allowed `}
      {...buttonProps}>
      {t(title)}
    </button>
  );
};

export default StyledButton;
