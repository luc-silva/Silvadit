import { act, renderHook } from '@testing-library/react';
import { useRegister } from '~/pages/register/hooks';

type IChangeEvent = React.ChangeEvent<HTMLInputElement>;

jest.mock('~/service/api', () => ({
  api: {
    post: jest.fn(),
    get: jest.fn(),
    put: jest.fn()
  },
}));

describe('useRegister hook', () => {
  describe('Inputs', () => {
    it('Credentials - It should change fields correctly', () => {
      const { result } = renderHook(useRegister);

      act(() => {
        result.current.handleEmail({
          target: { value: 'teste@user.com' },
        } as IChangeEvent);

        result.current.handleConfirmEmail({
          target: { value: 'teste@user.com' },
        } as IChangeEvent);

        result.current.handlePassword({
          target: { value: 'teste_123' },
        } as IChangeEvent);

        result.current.handleConfirmPassword({
          target: { value: 'teste_123' },
        } as IChangeEvent);
      });

      expect(result.current.email).toBe('teste@user.com');
      expect(result.current.confirmEmail).toBe('teste@user.com');
      expect(result.current.password).toBe('teste_123');
      expect(result.current.confirmPassword).toBe('teste_123');
    });

    it('Identity - It should change fields correctly', () => {
      const { result } = renderHook(useRegister);

      act(() => {
        result.current.handleFirstName({
          target: { value: 'John' },
        } as IChangeEvent);

        result.current.handleLastName({
          target: { value: 'Doe' },
        } as IChangeEvent);

        result.current.handleUsername({
          target: { value: 'JohnDoe' },
        } as IChangeEvent);

        result.current.handleCountry({
          target: { value: 'EUA' },
        } as IChangeEvent);

        result.current.handleState({
          target: { value: 'Washington' },
        } as IChangeEvent);

        result.current.handleLanguage({
          target: { value: 'English' },
        } as IChangeEvent);
      });

      expect(result.current.firstName).toBe('John');
      expect(result.current.lastName).toBe('Doe');
      expect(result.current.username).toBe('JohnDoe');
      expect(result.current.country).toBe('EUA');
      expect(result.current.state).toBe('Washington');
      expect(result.current.language).toBe('English');
    });

    it('Images - It should change fields correctly', () => {
      const { result } = renderHook(useRegister);

      const eventHandleMock = {
        target: { files: [new File([], 'teste')] },
      } as unknown as IChangeEvent;

      act(() => {
        result.current.handleProfilePicture(eventHandleMock);

        result.current.handleProfileBanner(eventHandleMock);
      });

      expect(result.current.profilePicture).toBeTruthy();
      expect(result.current.profileBanner).toBeTruthy();
    });

    it('Interrests - It should change fields correctly', () => {
      const { result } = renderHook(useRegister);

      act(() => {
        result.current.setTags(['cience']);

        result.current.handleTags({
          target: { value: 'tech' },
        } as IChangeEvent);
      });

      expect(result.current.tags).toEqual(['cience', 'tech']);
    });
  });

  describe('Lock Forward', () => {
    it('Should lock forward on credentials tab', () => {
      const { result } = renderHook(useRegister);

      act(() => {
        result.current.setConfirmEmail('teste@user.com');
        result.current.setEmail('teste@user.com');
        result.current.setPassword('teste_123');
        result.current.setConfirmPassword('');
      });

      expect(result.current.enabledPages.identity).toBe(false);
    });

    it('Should lock forward on identity tab', () => {
      const { result } = renderHook(useRegister);

      act(() => {
        result.current.setConfirmEmail('teste@user.com');
        result.current.setEmail('teste@user.com');
        result.current.setPassword('teste_123');
        result.current.setConfirmPassword('123');
        result.current.setFirstName('John');
        result.current.setLastName('Doe');
        result.current.setUsername('JohnDoe');
        result.current.setLanguage('ENG');
        result.current.setCountry('EUA');
        result.current.setState('');
      });

      expect(result.current.enabledPages.identity).toBe(true);
      expect(result.current.enabledPages.images).toBe(false);
    });

    it('Should lock forward on identity tab if previous tab is invalidated', () => {
      const { result } = renderHook(useRegister);

      act(() => {
        result.current.setConfirmEmail('teste@user.com');
        result.current.setEmail('teste@user.com');
        result.current.setPassword('');
        result.current.setConfirmPassword('123');
        result.current.setFirstName('John');
        result.current.setLastName('Doe');
        result.current.setUsername('JohnDoe');
        result.current.setLanguage('ENG');
        result.current.setCountry('EUA');
        result.current.setState('Washington');
      });

      expect(result.current.enabledPages.images).toBe(false);
    });
  });
});
