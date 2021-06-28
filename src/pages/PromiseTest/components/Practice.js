const a = `
1、Array.prototype.slice()
2、Array.prototype.reduce()
3、Array.from()
`;

console.log(a);

/**
 * 将类数组转换为普通数组,eg arguments
 */
function arguFoo() {
  const newArr1 = Array.prototype.slice.call(arguments);
  const newArr1 = Array.prototype.slice.call(arguments);
}

/**
 * 
 * @param {*} arr 
 * 1、全为正数 => 最大三个值的乘积
 * 2、全为负数 => 最小三个值的乘积
 * 3、有正有负 => 
 * @returns 
 */
function foo(arr) {
  const newArr = arr.sort((a, b) => a-b);
  const length = arr.length;
  return Math.max(
    newArr[length-1] * newArr[length-2] * newArr[length-3],
    newArr[0] * newArr[1] * newArr[2],
  )
}

/**
 * reduce的作用
 * 1、累计器：下一次计算需要上一次的计算结果
 * 求数组总和、总积...
 * 迭代，eg 多维数组 -> 一维数组
 */

/**
 * 宏任务：script、setTimeout、setInterval、setImmediate、I/O、UI renderding
 * 微任务：Promise.then()、Promise.catch()、V8的垃圾回收过程、Node独有的process.nextTick()
 */