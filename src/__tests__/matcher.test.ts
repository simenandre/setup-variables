import { matcher } from '../matcher';

describe('matcher.ts', () => {
  it('should match _default', () => {
    const res = matcher('test', {
      hello: 'world',
      _default: 'hello world',
    });

    expect(res).toBe('hello world');
  });
  it('should fail if no match could be made', () => {
    const res = () => matcher('test', {
      hello: 'world',
    });

    expect(res).toThrow();
  })

  it('should match based on regex', () => {
    const res = matcher('test', {
      hello: 'world',
      '.*': 'hello world',
    });

    expect(res).toBe('hello world');
  })
});
