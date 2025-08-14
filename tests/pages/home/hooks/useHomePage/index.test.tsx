import { act, renderHook } from '@testing-library/react';
import { useHomePage } from '~/pages/home/hook/useHomePage';

type IChangeEvent = React.ChangeEvent<HTMLInputElement>;

jest.mock('~/service/api', () => ({
  api: {
    post: jest.fn(),
    get: jest.fn(),
    put: jest.fn()
  },
}));

describe('useHomePage hook', () => {
  describe('Inputs', () => {
    it('Should change fields correctly', () => {
      const { result } = renderHook(useHomePage);

      act(() => {
        result.current.handleTitle({
          target: { value: 'Titulo Teste' },
        } as IChangeEvent);

        result.current.handleContent({
          target: { value: 'Lorem Lorem' },
        } as React.ChangeEvent<HTMLTextAreaElement>);

        result.current.handleImage({
          target: { files: [new File([], 'teste')] },
        } as unknown as IChangeEvent);

        result.current.handleTags({
          target: { value: 'teste' },
        } as IChangeEvent);
      });

      expect(result.current.image).toBeTruthy();
      expect(result.current.title).toBe('Titulo Teste');
      expect(result.current.tags).toEqual(['teste']);
      expect(result.current.content).toBe('Lorem Lorem');
    });
  });
});
