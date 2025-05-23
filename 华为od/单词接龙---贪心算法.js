// 答案
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  // 读取输入
  let [firstLine, ...words] = input;
  let [k, n] = firstLine.split(" ").map(Number);
  n = words[0];
  words = words.slice(1);
  const res = [];
  const st = words[k];
  words.splice(k, 1);
  res.push(st);

  // 使用对象模拟多个双端队列
  const deques = {};
  for (const word of words) {
    const firstChar = word[0];
    if (!deques[firstChar]) {
      deques[firstChar] = [];
    }
    deques[firstChar].push(word);
  }

  Object.keys(deques).forEach((key) => {
    deques[key].sort((a, b) => {
      if (a.length !== b.length) {
        return b.length - a.length;
      }
      return a < b ? -1 : a > b ? 1 : 0;
    });
  });

  while (true) {
    const now = res[res.length - 1];
    const lastChar = now[now.length - 1];

    if (!deques[lastChar] || deques[lastChar].length === 0) {
      break;
    }

    const nextWord = deques[lastChar].shift();
    res.push(nextWord);
  }

  // 拼接最终结果
  const result = res.join("");
  console.log(result);
});
// 我写的
// const rl = require('readline').createInterface({ input: process.stdin })
// const iter = rl[Symbol.asyncIterator]()
// const readline = async () => (await iter.next()).value
// void async function () {
//   const idx = parseInt(await readline()) // 起始索引
//   const wordNum = parseInt(await readline()) // 单词个数
//   const wordArr = []
//   for (let i = 0; i < wordNum; i++) {
//     wordArr.push(await readline())
//   }
//   rl.close()
//   const getWord = (word) => {
//     const l = word.slice(word.length - 1)
//     const res = wordArr.filter(w => w.slice(0, 1) === l).sort((a, b) => {
//       if (a.length === b.length) {
//         return a > b ? 1 : -1 // a的字典顺序比b大，则b在前（降序a-b）
//       } else {
//         return b.length - a.length // b比a长，则b在前（升序b-a）
//       }
//     })
//     return res.length > 0 ? res[0] : false
//   }
//   let current = wordArr[idx]
//   let currentArr = [current]
//   wordArr.splice(idx, 1)
//   while (wordArr.length > 0) {
//     const word = getWord(current)
//     if (word) {
//       currentArr.push(word)
//       wordArr.splice(wordArr.findIndex(i => i === word), 1)
//     } else {
//       break;
//     }
//     current = word
//   }
//   console.log(currentArr.join(''));
// }()