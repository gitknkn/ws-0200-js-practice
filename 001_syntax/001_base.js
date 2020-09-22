/**
 *  1.1 Hello Worldという文字を出力するメソッドを定義してください
 *
 */
function helloWorld() {
  console.log("Hello World");
}

/**
 *  1.2 const を使って"hoge"という文字列を定義した変数を定義し、それを出力する関数を定義してください
 *
 */
function displayConst() {
  const hoge = "hoge"
  console.log(hoge);
}

/**
 *  1.3 let を使って"hoge"という文字列を定義した変数を定義し、それを出力する関数を定義してください
 *
 */
function displayLet() {
  let fuga = "hoge"
  console.log(fuga);
}

/**
 *  1.4 引数に渡した変数を表示するメソッドを実装してください
 *
 */
function displayArgument(arg) {
  console.log(arg);
}

/**
 *  1.5 渡された二つの引数の合計を返却するメソッドを実装してください
 *
 */
function sumTwoArgs(a, b) {
  const sum = a + b
  return sum
}

/**
 *  1.6 渡された二つの引数の差を返却するメソッドを実装してください
 *
 */
function subtractTwoArgs(a, b) {
  const subtract = a - b
  return subtract
}

/**
 *  1.7 渡された二つの引数の商を返却するメソッドを実装してください。0での割り算はnullを返却してください。
 *
 */
function quotientTwoArgs(a, b) {
  const quotient = a / b
  if(quotient === Infinity) {
    return null;
  } else {
    return Math.floor(quotient);
  }
}

/**
 *  1.8 渡された二つの引数の積を返却するメソッドを実装してください
 *
 */
function productTwoArgs(a, b) {
  const  product = a * b
  return product
}

/**
 *  1.9 渡された引数の2で割ったあまりを返却するメソッドを実装してください
 *
 */
function remainderTwoArgs(a) {
  const remainder = a % 2
  return remainder
}

/**
 *  1.10 渡された引数が2の倍数であることを確認するメソッドを実装してください
 *
 */
function isEven(a) {
  const even = a % 2 === 0
  return even
}

/**
 *  1.11 渡された二つの文字列を連結するメソッドを実装してください
 *
 */
function concatString(a, b) {
  const add = a + b
  return add
}

module.exports = {
  helloWorld,
  displayConst,
  displayLet,
  displayArgument,
  sumTwoArgs,
  subtractTwoArgs,
  quotientTwoArgs,
  productTwoArgs,
  remainderTwoArgs,
  isEven,
  concatString
}
