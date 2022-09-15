// 実行コマンド: npm test
const functions = require('../functions');

test('adds 1 + 2 to equal 3', () => {
  expect(functions.sumOfArray([1, 2])).toBe(3);
});

// emptyはエラーを吐くのでこのままでは通過しない
// test('adds empty array to pass test', () => {
//   expect(functions.sumOfArray([])).toBe(4);
// });

// 型違いでエラーを吐くため、テストケースから除外する
// test("string array causes exception?", (): void => {
//   expect((): number => functions.sumOfArray(["hoge", "fuga"])).toThrow();
// });

test('async adds 1 + 2 to equal 3', () => {
  return functions.asyncSumOfArray([1, 2]).then((data: any) => {
    expect(data).toBe(3);
  })
});

// ここからasyncSumOfArraySometimesZero
jest.mock("../util");

// test('mock adds 1 + 2 to equal 3', () => {
//   const mock1 = jest.fn();
//   const bound = mock1.bind({});
//   bound();
//   expect(functions.asyncSumOfArraySometimesZero.mock.calls([1, 2])).toBe(3);
// });

describe("asyncSumOfArraySometimesZero", (): void => {
  test("empty array returns 0", (): Promise<void> => {
    return expect(functions.asyncSumOfArraySometimesZero([])).resolves.toBe(0);
  });

  test.each([
    { expected: -7, input: [-7] },
    { expected: +3, input: [1, 2] },
    { expected: -4, input: [0, 5, -9, 0] },
  ])(
    "%o",
    ({ expected, input }): Promise<void> => {
      // eslint-disable-next-line prettier/prettier
      return expect(functions.asyncSumOfArraySometimesZero(input)).resolves.toBe(expected);
    }
  );

  // DatabaseMock.save() が例外を投げるテストケース？
});