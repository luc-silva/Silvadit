interface IProps {
  size?: 'small' | 'large';
}

export const Loading = ({ size = 'large' }: IProps) => {
  const isLarge = size === 'large';

  return (
    <div
      className={`flex flex-col items-center justify-center ${
        isLarge ? 'p-10' : 'p-5'
      } text-center text-sm text-muted animate-pulse`}
    >
      <div
        className={`${
          isLarge ? 'h-12 w-12' : 'h-6 w-6'
        } border-4 border-primary border-t-transparent rounded-full animate-spin mb-4`}
      />

      {isLarge && 'Carregando dados...'}
    </div>
  );
};
