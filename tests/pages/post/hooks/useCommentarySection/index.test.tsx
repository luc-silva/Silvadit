import { act, renderHook } from '@testing-library/react';
import { useCommentarySection } from '~/pages/post/hooks/useCommentarySection';

type IChangeEvent = React.ChangeEvent<HTMLInputElement>;

jest.mock('~/service/api', () => ({
  api: {
    post: jest.fn(),
    get: jest.fn(),
    put: jest.fn(),
  },
}));

describe('useCommentarySection', () => {
  describe('inputs', () => {
    it('Should change inputs correctly', () => {
      const { result } = renderHook(useCommentarySection);

      act(() => {
        result.current.handleContent({
          target: { value: 'TEXTOOO' },
        } as React.ChangeEvent<HTMLTextAreaElement>);
      });

      expect(result.current.content).toBe('TEXTOOO');
    });
  });
});
