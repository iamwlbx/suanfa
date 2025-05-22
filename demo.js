/** 
 * 通用输入输出
 */
// const rl = require('readline').createInterface({input:process.stdin})
// const iter = rl[Symbol.asyncIterator]()
// const readline = async ()=>(await iter.next()).value
// void async function(){
// }()

/**
 * 
 */
const rl = require('readline').createInterface({ input: process.stdin })
const iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value
void async function () {
  
}()
/**
 * 猜单词字谜
 */
// const rl = require('readline').createInterface({ input: process.stdin })
// const iter = rl[Symbol.asyncIterator]()
// const readline = async () => (await iter.next()).value

// void async function () {
//   const question = (await readline()).split(',')
//   const ansArr = (await readline()).split(',')
//   rl.close()
//   const q = {}, ans = {}
//   const answer = []
//   for (const ques of question) {
//     q[ques] = {
//       s: ques.split('').sort().join(''),
//       r: Array.from(new Set(ques.split(''))).sort().join('')
//     }
//   }
//   for (const a of ansArr) {
//     ans[a] = {
//       s: a.split('').sort().join(''),
//       r: Array.from(new Set(a.split(''))).sort().join('')
//     }
//   }
//   for (const ques in q) {
//     const { s, r } = q[ques]
//     let flag = false
//     for (const a in ans) {
//       const { s:a_s, r:a_r } = ans[a]
//       console.log(q[ques], ans[a],s,r,a_s,a_r, (s === a_s || s === a_r || r === a_s || r === a_r));
//       if (s === a_s || s === a_r || r === a_s || r === a_r) {
//         answer.push(a)
//         flag = true
//         break
//       }
//     }
//     if (!flag) answer.push('not found')
//   }
//   console.log(answer.join(','));
// }()

/**
 * 题目：猜数字
 */
// const rl = require('readline').createInterface({ input: process.stdin })
// const iter = rl[Symbol.asyncIterator]()
// const readline = async () => (await iter.next()).value
// void async function () {
//   const N = parseInt(await readline())
//   const tip = []
//   for (let i = 1; i <= N; i++) {
//     tip.push((await readline()).split(' '))
//   }
//   // const tip = [
//   //   ['4815', '1A1B'],
//   //   ['5716', '0A1B'],
//   //   ['7842', '0A1B'],
//   //   ['4901', '0A0B'],
//   //   ['8585', '3A0B'],
//   //   ['8555', '2A1B'],
//   // ]
//   rl.close()
//   function getHint(ans, guess) {
//     let A = 0, B = 0
//     const ansCount = new Array(10).fill(0)
//     const guessCount = new Array(10).fill(0)
//     for (let i = 0; i < 4; i++) {
//       if (ans[i] === guess[i]) {
//         A++
//       } else {
//         ansCount[parseInt(ans[i])]++
//         guessCount[parseInt(guess[i])]++
//       }
//     }
//     for (let j = 0; j < 10; j++) {
//       B += Math.min(ansCount[j], guessCount[j])
//     }
//     return `${A}A${B}B`
//   }
//   const possibleAns = []
//   for (let i = 0; i < 10000; i++) {
//     const ans = i.toString().padStart(4, '0')
//     let flag = true
//     for (const [guess, hint] of tip) {
//       if (getHint(ans, guess) !== hint) {
//         flag = false
//         break
//       }
//     }
//     if (flag) possibleAns.push(ans)
//   }
//   if (possibleAns.length === 1) {
//     console.log(possibleAns[0]);
//   } else {
//     console.log('NA');
//   }
// }()

/**
 * 题目：补种胡杨
 */
// const rl = require('readline').createInterface({ input: process.stdin })
// const iter = rl[Symbol.asyncIterator]()
// const readline = async () => (await iter.next()).value
// void async function () {
//   const N = parseInt(await readline())
//   const M = parseInt(await readline())
//   const dead = (await readline()).split(' ').map(Number)
//   const K = parseInt(await readline())
//   rl.close()
//   const tree = Array.from({ length: N }).fill(0)
//   for (const d of dead) {
//     tree[d - 1] = 1
//   }
//   let l = 0, max = 0, dieTotal = 0;
//   for (let r = 0; r < N; r++) {
//     dieTotal += tree[r]
//     // 当死亡树，大于补种树，那么就把left指针缩小窗口
//     while (dieTotal > K) {
//       dieTotal -= tree[l++]
//     }
//     max = Math.max(max, r - l + 1)
//   }
//   console.log(max);
// }()

/**
 * 题目：智能成绩表
 */
// const rl = require('readline').createInterface({ input: process.stdin })
// const iter = rl[Symbol.asyncIterator]()
// const readline = async () => (await iter.next()).value

// void async function () {
//   const allData = []
//   const [n, m] = (await readline()).split(' ')
//   const kemuArr = (await readline()).split(' ')
//   const stu = []
//   for (let i = 0; i < n; i++) {
//     stu.push((await readline()).split(' '))
//   }
//   let kemu = await readline()
//   rl.close()
//   let res = []
//   if (!(kemuArr.includes(kemu))) {
//     stu.sort((a, b) => {
//       const aSum = a.slice(1).reduce((initData, val) => parseInt(initData) + parseInt(val), 0)
//       const bSum = b.slice(1).reduce((initData, val) => parseInt(initData) + parseInt(val), 0)
//       if (aSum == bSum) {
//         return a[0] > b[0] ? 1 : -1
//       }
//       return bSum - aSum
//     })
//   } else {
//     const idx = kemuArr.findIndex(item => item == kemu)
//     stu.sort((a, b) => {
//       if (a[idx + 1] == b[idx + 1]) {
//         return a[0] > b[0] ? 1 : -1
//       } else {
//         return parseInt(b[idx + 1]) - parseInt(a[idx + 1])
//       }
//     })
//   }
//   res = stu.map(item => item[0])
//   console.log(kemu,stu,'########',res.join(' '));
// }()

/**
 * 题目：整数对最小和
 */
// const rl = require('readline').createInterface({ input: process.stdin })
// const iter = rl[Symbol.asyncIterator]()
// const readline = async () => (await iter.next()).value

// void async function () {
//   const input = []
//   for (i = 0; i < 3; i++) {
//     const r = await readline()
//     input.push(r)
//   }
//   rl.close()
//   const arr1 = input[0].split(' ').map(item => parseInt(item))
//   const arr2 = input[1].split(' ').map(item => parseInt(item))
//   const k = parseInt(input[2])
//   const sumArr = []
//   for (const a of arr1) {
//     for (const b of arr2) {
//       sumArr.push(a + b)
//     }
//   }
//   sumArr.sort((a, b) => a - b)
//   console.log(sumArr.slice(0, k).reduce((initData, val) => initData + val, 0));
// }()

/**
 * 题目：报文响应时间，返回最小响应时间
 */
// const rl = require('readline').createInterface({ input: process.stdin })
// const iter = rl[Symbol.asyncIterator]()
// const readline = async () => (await iter.next()).value

// void async function () {
//   let num = await readline()
//   num = parseInt(num)
//   let arr = []

//   for (let i = 0; i < num; i++) {
//     const line = await readline()
//     arr.push(line.split(' '))
//   }
//   let min = Infinity
//   for (const [T, M] of arr) {
//     const t = parseInt(T)
//     let m = parseInt(M)
//     if (m >= 128) {
//       const exp = (m >> 4) & 0b111
//       const mant = m & 0b1111
//       m = (mant | 0x10) << (exp + 3)
//     }
//     const time = t + m
//     min = Math.min(min, time)
//   }
//   console.log(min);
//   rl.close()
// }()

/**
 * 题目：报数游戏；100个人围成一圈，每个人有一个编码编号从一开始到一百。他们从一开始依次 报数 ，报道M的人自动退出圈圈，然后下一个人接着从1开始报数一直到剩余人数小于M。请问最后剩余人在原先的编码为多少？
 */
// const rl = require("readline").createInterface({ input: process.stdin })
// var iter = rl[Symbol.asyncIterator]()
// const readline = async () => (await iter.next()).value

// void async function () {
//   while (line = await readline()) {
//     const m = parseInt(line)
//     if (m <= 1 || m >= 100) {
//       console.log('ERROR!')
//       rl.close()
//       return
//     }
//     let arr = []
//     for (let i = 0; i < 100; i++)
//       arr[i] = i + 1
//     let idx = 1
//     let pointer = 0
//     while (arr.length >= m) {
//       if (idx == m) {
//         arr.splice(pointer, 1)
//         idx = 1
//       } else {
//         idx++
//         pointer++
//       }
//       if (pointer >= arr.length) {
//         pointer = 0
//       }
//     }
//     console.log(arr.join(','));
//   }
// }()
// const readline = require("readline");

// // 创建接口以读取用户输入
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,

// });

// // 读取整数参数k
// rl.question("", (k) => {
//   k = parseInt(k);

//   // 如果输入的参数k小于等于1或者大于等于100，输出"ERROR!"并退出程序
//   if (k <= 1 || k >= 100) {
//     console.log("ERROR!");
//     rl.close();
//     return;
//   }

//   let q = []; // 创建一个数组表示队列
//   for (let i = 1; i <= 100; i++) {
//     q.push(i); // 初始化队列，包含1到100的编号
//   }

//   // 当队列中剩余的人数大于或等于k时，继续循环
//   while (q.length >= k) {
//     // 依次从队列左侧取出前k-1个人并重新加入到队列右侧
//     for (let i = 0; i < k - 1; i++) {
//       let f = q.shift(); // 从队列的左侧取出一个元素
//       q.push(f); // 将取出的元素加入到队列右侧
//     }
//     q.shift(); // 删除队列左侧第k个人（即数到M的人）
//   }

//   q.sort((a, b) => a - b); // 对剩余的编号按从小到大排序
//   console.log(q.join(",")); // 输出结果，以逗号分隔

//   rl.close();
// });
// const rl = require('readline').createInterface({ input: process.stdin })
// var iter = rl[Symbol.asyncIterator]()
// const readline = async () => (await iter.next()).value

// void async function () {
//   while (line = await readline()) {
//     const m = parseInt(line)
//     if (m <= 1 || m >= 100) {
//       console.log("ERROR!");
//       rl.close()
//       return
//     }
//     const q = Array.from({ length: 100 }, (_, i) => i + 1)
//     while (q.length >= m) {
//       for (let i = 0; i < m - 1; i++) {
//         q.push(q.shift())
//       }
//       q.shift()
//     }
//     q.sort((a, b) => a - b)
//     console.log(q.join(','));
//   }
// }()