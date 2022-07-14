// todo: ここに単体テストを書いてみましょう！
const functions = require('../functions');

test('adds 1 + 2 to equal 3', () => {
  expect(functions.sumOfArray([1, 2])).toBe(3);
});

test('adds empty array to pass test', () => {
  expect(functions.sumOfArray([])).toBe(4);
});

// なんでこれ通るの・・・型違いで失敗して欲しいのに
test('adds string array to pass test', () => {
  expect(functions.sumOfArray(["hoge", "fuga"])).toBe("hogefuga");
});

test('async adds 1 + 2 to equal 3', () => {
  return functions.asyncSumOfArray([1, 2]).then((data: any) => {
    expect(data).toBe(3);
  })
});

test('mock adds 1 + 2 to equal 3', () => {
  const mock1 = jest.fn();
  const bound = mock1.bind({});
  bound();
  expect(functions.asyncSumOfArraySometimesZero.mock.calls([1, 2])).toBe(3);
});