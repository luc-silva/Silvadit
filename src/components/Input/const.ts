export const textFieldInputSlot = {
  input: {
    className: 'bg-base-100 rounded-md text-text bg-bg',
    sx: {
      color: 'var(--color-text)',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'var(--color-border)',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'var(--color-border)',
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'var(--color-primary)',
        borderWidth: 2,
      },
      '&.Mui-focused': {
        color: 'var(--color-text)',
      },
    },
  },
  inputLabel: {
    sx: {
      color: 'var(--color-text)',
      '&.Mui-focused': {
        color: 'var(--color-primary)',
      },
    },
  },
};
