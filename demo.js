/** 
 * 通用输入输出
 */
// const rl = require('readline').createInterface({input:process.stdin})
// const iter = rl[Symbol.asyncIterator]()
// const readline = async ()=>(await iter.next()).value
// void async function(){
// }()


const rl = require('readline').createInterface({ input: process.stdin })
const iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value
void async function () {
  /**
   * 斗地主顺子
   */
  // let plate = (await readline()).trim().toUpperCase().split(' ')
  let plate = '2 9 J 10 3 4 K A 7 Q A 5 6'.split(' ')
  rl.close()
  const plateMap = {
    J: 11,
    Q: 12,
    K: 13,
    A: 14
  }
  const rePlatMap = {
    11: "J",
    12: "Q",
    13: "K",
    14: "A"
  }
  plate = plate.map(i => plateMap[i] ? plateMap[i] : i).map(Number).sort((a, b) => a - b).filter(i => i !== 2)
  const hashMap = {}
  plate.forEach(i => {
    if (!hashMap[i]) hashMap[i] = 0
    hashMap[i]++
  })
  plate = Array.from(new Set(plate))  // 去重，保证是顺序不重复数组
  const res = []
  let shunzi = []
  let flag = true
  while (flag) {
    shunzi = []
    flag = false
    for (const i of plate) {
      if (hashMap[i] > 0) {
        if (shunzi.length === 0) {
          shunzi.push(i)
        }
        else if (shunzi[shunzi.length - 1] === i - 1) {
          shunzi.push(i)
          if (i === plate[plate.length - 1]) {
            if (shunzi.length >= 5) { // 
              res.push(shunzi)
              shunzi.forEach(p => hashMap[p]--)
              flag = true
            }
          } else {
            continue
          }
        } else {
          if (shunzi.length >= 5) { // 
            res.push(shunzi)
            shunzi.forEach(p => hashMap[p]--)
            flag = true
          }
          shunzi = [i]
        }
      } else {
        if (shunzi.length >= 5) { // 
          res.push(shunzi)
          shunzi.forEach(p => hashMap[p]--)
          flag = true
        }
        shunzi = []
      }
    }
  }
  if (res.length === 0) {
    console.log('No')
  } else {
    for (const item of res) {
      console.log(item.map(i => rePlatMap[i] ? rePlatMap[i] : i).join(' '));
    }
  }

  /**
   * 找第k个排列，康托展开公式
   */
  // const n = parseInt(await readline())
  // const k = parseInt(await readline())
  // rl.close()
  // const arr = Array.from({ length: n }, (_, i) => i + 1)
  // const factorial = [1] // 阶乘结果
  // for (let i = 1; i <= n; i++) {
  //   factorial[i] = factorial[i - 1] * i
  // }
  // let position = k - 1  // 当前剩余排列中的位置，-1是因为康托展开，是0开始，但是题目一般是以1开始
  // let result = []
  // for (let i = 1; i <= n; i++) {
  //   const times = factorial[n - i]  // 当前确定一项，比如：1，那么剩余就有 n-1的阶乘个排列可能
  //   const res = Math.floor(position / times)  // 用当前排列中的位置 整除 times个排列可能得到在第几行
  //   result.push(arr[res]) // 比如第2行，那么就是 [1,2,3]中的3，此时代表排列到了第二行，也就是3
  //   arr.splice(res, 1)  // res已经被排列，那么后面的排列就不要再考虑res
  //   position = position % times // 确定下一次排列的位置，
  //   // 整体举例：
  //   // 比如当前排列了 [
  //   // 0: 123 132 
  //   // 1: 213 231 
  //   // 2: 312 321
  //   // ] ，初始我要第3个，可以确定在 第1行，
  //   // 那么2就被确定了。因为此时我要第三个，那么我需要模除剩余排列的次数，为1
  //   // 下一次我就在 尚未确定1、3的排列组合中寻找第1个位置的数据
  // }
  // console.log(result.join(''));

  /**
  * 题目：单词接龙
  */
  // const idx = parseInt(await readline()) // 起始索引
  // const wordNum = parseInt(await readline()) // 单词个数
  // const wordArr = []
  // for (let i = 0; i < wordNum; i++) {
  //   wordArr.push(await readline())
  // }
  // rl.close()
  // const getWord = (word) => {
  //   const l = word.slice(word.length - 1)
  //   const res = wordArr.filter(w => w.slice(0, 1) === l).sort((a, b) => {
  //     if (a.length === b.length) {
  //       return a > b ? 1 : -1 // a的字典顺序比b大，则b在前（降序a-b）
  //     } else {
  //       return b.length - a.length // b比a长，则b在前（升序b-a）
  //     }
  //   })
  //   return res.length > 0 ? res[0] : false
  // }
  // let current = wordArr[idx]
  // let currentArr = [current]
  // wordArr.splice(idx, 1)
  // while (wordArr.length > 0) {
  //   const word = getWord(current)
  //   if (word) {
  //     currentArr.push(word)
  //     wordArr.splice(wordArr.findIndex(i => i === word), 1)
  //   } else {
  //     break;
  //   }
  //   current = word
  // }
  // console.log(currentArr.join(''));
}()

/**
 * 题目：计算充电桩最大功率（0/1背包问题）
 */
// const rl = require('readline').createInterface({ input: process.stdin })
// const iter = rl[Symbol.asyncIterator]()
// const readline = async () => (await iter.next()).value
// void async function () {
//   const n = parseInt(await readline())
//   const device = (await readline()).split(' ').map(Number)
//   const p_max = parseInt(await readline())
//   rl.close()
//   let dp = new Array(p_max + 1).fill(0)
//   // 初始化很重要
//   for (let i = 0; i < n; i++) {
//     for (let j = p_max; j >= device[i]; j--) {
//       // 实际就是循环遍历最大值～当前设备的功率，保证dp[j]是dp[j]（当前最大值/之前设备计算时走过的最大值）和 当前dp[j]最大值不包含当前设备功率时再加上当前功率的值 => 计算的最大值
//       dp[j] = Math.max(dp[j], dp[j - device[i]] + device[i])
//     }
//   }
//   console.log(Math.max(...dp));
// }()
/**
 * 题目：猜单词字谜
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