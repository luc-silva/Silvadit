export const selectInputSlot = {
  select: {
    className: 'rounded-md text-text bg-bg',
    backgroundColor: 'var(--color-surface)',
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
      '& .MuiSelect-icon': {
        color: 'var(--color-text)', // Ícone da seta
      },
      ' MuiList-root-MuiMenu-list ': {
        backgroundColor: 'var(--color-surface)',
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

export const menuItemStyles = {
  sx: {
    color: 'var(--color-text)',
    backgroundColor: 'var(--color-surface)',
    '&:hover': {
      backgroundColor: 'var(--color-border)',
    },
    '&.Mui-selected': {
      backgroundColor: 'var(--color-primary)',
      color: '#fff',
      '&:hover': {
        backgroundColor: 'var(--color-primary)',
      },
    },
  },
};

export const menuListStyles = {
  sx: {
    backgroundColor: 'var(--color-surface)',
    color: 'var(--color-text)',
    border: '1px solid var(--color-border)',
    boxShadow: '0 4px 8px rgba(0,0,0,0.08)',
  },
};