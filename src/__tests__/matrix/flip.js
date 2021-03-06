import { Matrix } from '../..';

test('flip rows', () => {
  const matrix = new Matrix([[1, 2, 3], [4, 5, 6]]);
  const result = matrix.flipRows();
  expect(result).toBe(matrix);
  expect(result.to2DArray()).toStrictEqual([[3, 2, 1], [6, 5, 4]]);
});

test('flip columns', () => {
  const matrix = new Matrix([[1, 2, 3], [4, 5, 6]]);
  const result = matrix.flipColumns();
  expect(result).toBe(matrix);
  expect(result.to2DArray()).toStrictEqual([[4, 5, 6], [1, 2, 3]]);
});
