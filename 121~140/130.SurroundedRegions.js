/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// var solve = function (board) {
//   for (let k = 1; k < Math.min(board.length, board[0].length) / 2; k++) {
//     for (let i = k; i < board.length - k; i++) {
//       for (let j = k; j < board[0].length - k; j++) {
//         if (board[i][j] === 'O') {
//           if (board[i - 1][j] === 'O' || board[i][j - 1] === 'O') {

//           } else {
//             board[i][j] = 'W'
//           }
//         }
//       }
//     }
//     // console.log(JSON.stringify(board))
//     for (let i = board.length - k - 1; i >= k; i--) {
//       for (let j = board[0].length - k - 1; j >= k; j--) {
//         if (board[i][j] === 'W') {
//           if (board[i + 1][j] === 'O' || board[i][j + 1] === 'O') {
//             board[i][j] = 'O'
//           } else {
//             board[i][j] = 'W'
//           }
//         }
//       }
//     }
//   }
//   for (let i = 1; i < board.length - 1; i++) {
//     for (let j = 1; j < board[0].length - 1; j++) {
//       if (board[i][j] === 'W') {
//         board[i][j] = 'X'
//       }
//     }
//   }
//   console.log(board)
//   // console.log(JSON.stringify(board))
//   // for (let i = board.length - 2; i > 0; i--) {
//   //   for (let j = 1; j < board[0].length - 1; j++) {
//   //     if (board[i][j] === 'B') {
//   //       if (board[i + 1][j] === 'O' || board[i][j - 1] === 'O') {
//   //         board[i][j] = 'O'
//   //       } else {
//   //         board[i][j] = 'C'
//   //       }
//   //     }
//   //   }
//   // }
//   // // console.log(JSON.stringify(board))
//   // for (let i = 1; i < board.length - 1; i++) {
//   //   for (let j = board[0].length - 2; j > 0; j--) {
//   //     if (board[i][j] === 'C') {
//   //       if (board[i - 1][j] === 'O' || board[i][j + 1] === 'O') {
//   //         board[i][j] = 'O'
//   //       } else {
//   //         board[i][j] = 'X'
//   //       }
//   //     }
//   //   }
//   // }
//   // console.log(JSON.stringify(board))
// };

// console.log(solve([
//   ["X", "X", "X", "X"],
//   ["X", "O", "O", "X"],
//   ["X", "X", "O", "X"],
//   ["X", "O", "X", "X"]
// ]))
let data1 = [
  ["X", "O", "X", "O", "X", "O", "O", "O", "X", "O"],
  ["X", "O", "O", "X", "X", "X", "O", "O", "O", "X"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "X", "X"],
  ["O", "O", "O", "O", "O", "O", "X", "O", "O", "X"],
  ["O", "O", "X", "X", "O", "X", "X", "O", "O", "O"],
  ["X", "O", "O", "X", "X", "X", "O", "X", "X", "O"],
  ["X", "O", "X", "O", "O", "X", "X", "O", "X", "O"],
  ["X", "X", "O", "X", "X", "O", "X", "O", "O", "X"],
  ["O", "O", "O", "O", "X", "O", "X", "O", "X", "O"],
  ["X", "X", "O", "X", "X", "X", "X", "O", "O", "O"]
]
solve(data1)
console.log(JSON.stringify(data1) === JSON.stringify(
  [["X", "O", "X", "O", "X", "O", "O", "O", "X", "O"],
  ["X", "O", "O", "X", "X", "X", "O", "O", "O", "X"],
  ["O", "O", "O", "O", "O", "O", "O", "O", "X", "X"],
  ["O", "O", "O", "O", "O", "O", "X", "O", "O", "X"],
  ["O", "O", "X", "X", "O", "X", "X", "O", "O", "O"],
  ["X", "O", "O", "X", "X", "X", "X", "X", "X", "O"],
  ["X", "O", "X", "X", "X", "X", "X", "O", "X", "O"],
  ["X", "X", "O", "X", "X", "X", "X", "O", "O", "X"],
  ["O", "O", "O", "O", "X", "X", "X", "O", "X", "O"],
  ["X", "X", "O", "X", "X", "X", "X", "O", "O", "O"]]
))

let data2 = [["O", "X", "X", "X", "X", "X", "O", "O"], ["O", "O", "O", "X", "X", "X", "X", "O"], ["X", "X", "X", "X", "O", "O", "O", "O"], ["X", "O", "X", "O", "O", "X", "X", "X"], ["O", "X", "O", "X", "X", "X", "O", "O"], ["O", "X", "X", "O", "O", "X", "X", "O"], ["O", "X", "O", "X", "X", "X", "O", "O"], ["O", "X", "X", "X", "X", "O", "X", "X"]]
solve(data2)
console.log(JSON.stringify(data2) === JSON.stringify([["O", "X", "X", "X", "X", "X", "O", "O"], ["O", "O", "O", "X", "X", "X", "X", "O"], ["X", "X", "X", "X", "O", "O", "O", "O"], ["X", "X", "X", "O", "O", "X", "X", "X"], ["O", "X", "X", "X", "X", "X", "O", "O"], ["O", "X", "X", "X", "X", "X", "X", "O"], ["O", "X", "X", "X", "X", "X", "O", "O"], ["O", "X", "X", "X", "X", "O", "X", "X"]]))

// 从四周向内遍历
function solve(board) {
  if (!board.length) return;

  // change every square connected to left and right borders from O to temporary #
  for (let i = 0; i < board.length; i++) {
    mark(board, i, 0);
    mark(board, i, board[0].length - 1);
  }

  // change every square connected to top and bottom borders from O to temporary #
  for (let i = 1; i < board[0].length - 1; i++) {
    mark(board, 0, i);
    mark(board, board.length - 1, i);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      // change the rest of O to X
      if (board[i][j] === 'O') board[i][j] = 'X';

      // change temporary # back to O
      if (board[i][j] === '#') board[i][j] = 'O';
    }
  }
}

function mark(board, i, j) {
  if (i < 0 || i > board.length - 1 || j < 0 || j > board[0].length - 1) return;
  if (board[i][j] !== 'O') return;

  board[i][j] = '#';

  mark(board, i - 1, j);
  mark(board, i + 1, j);
  mark(board, i, j - 1);
  mark(board, i, j + 1);
}