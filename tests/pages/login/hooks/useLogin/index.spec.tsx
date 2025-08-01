import { act, renderHook } from '@testing-library/react';
import { useLoginPage } from '~/pages/login/hooks';

type IChangeEvent = React.ChangeEvent<HTMLInputElement>;

describe('useLoginPage hook', () => {
  it('It should change fields correctly', () => {
    const { result } = renderHook(useLoginPage);

    act(() => {
      result.current.handleLogin({
        target: { value: 'teste@user.com' },
      } as IChangeEvent);

      result.current.handlePassword({
        target: { value: 'teste123' },
      } as IChangeEvent);
    });

    expect(result.current.login).toBe('teste@user.com');
    expect(result.current.password).toBe('teste123');
  });
});
