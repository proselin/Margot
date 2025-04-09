import { ApplyPipe } from './apply.pipe';

describe('ApplyPipe', () => {
  it('create an instance', () => {
    const pipe = new ApplyPipe();
    expect(pipe).toBeTruthy();
  });

  it('should call with exact argument', () => {
    const pipe = new ApplyPipe();
    const mockFn = jasmine.createSpy('mockFn').and.returnValue(6);
    const result = pipe.transform(mockFn, 2, 'test');
    expect(mockFn).toHaveBeenCalledWith(2, 'test');
    expect(result).toBe(6);
  });

  it('return the result of the function call with arguments', () => {
    const pipe = new ApplyPipe();
    const mockFn = (a: number, b: string) => {return `ages ${a} and be ${b}`};
    const result = pipe.transform(mockFn,42, 'test');
    expect(result).toBe(`ages 42 and be test`);
  });

  it('should return the result of the function call', () => {
    const pipe = new ApplyPipe();
    const mockFn = (a: number) => 42;
    const result = pipe.transform(mockFn, 2);
    expect(result).toBe(42);
  });

  it('should throw an error if the first argument is not a function', () => {
    const pipe = new ApplyPipe();
    expect(() => pipe.transform(null as any)).toThrowError('First argument must be a function');
  });

});


