import { IsSVGPipe } from './is-svg.pipe';

describe('IsSVGPipe', () => {
  it('create an instance', () => {
    const pipe = new IsSVGPipe();
    expect(pipe).toBeTruthy();
  });
});
