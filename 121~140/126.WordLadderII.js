/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} set
 * @return {string[][]}
 */
{
  // 还是有性能问题
  let findLadders = function (beginWord, endWord, wordList) {
    let set = new Set(wordList)
    if (set.size === 0 || !set.has(endWord)) {
      return []
    }
    let ans = []
    set.delete(endWord)
    let beginSet = [{
      word: beginWord,
      data: beginWord
    }]
    let getAns = false
    let level = 1
    while (beginSet.length > 0 && level < wordList.length && !getAns) {
      let temp = []
      for (let item of beginSet) {
        let word = item.word
        for (let i = 0; i < word.length; i++) {
          let former = i == 0 ? '' : word.slice(0, i)
          let after = word.slice(i + 1)

          for (let j = 0; j < 26; j++) {
            let letter = String.fromCharCode(97 + j)
            let newWord = former + letter + after
            if (newWord === endWord) {
              getAns = true
              let ladder = item.data.split('-')
              ladder.push(endWord)
              ans.push(ladder)
            }

            if (set.has(newWord)) {
              temp.push({
                word: newWord,
                data: item.data + '-' + newWord
              })
            }
          }
        }
      }
      beginSet = temp
      level++
    }
    return ans
  };

  console.log(findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]))
  console.log(findLadders("hit", "cog", ["hot", "dot", "dog", "lot", "log"]))
  console.log(findLadders("a", "c", ["a", "b", "c"]))
  console.log(findLadders("hot", "dog", ["hot", "dog"]))
  console.log(findLadders("red", "tax", ["ted", "tex", "red", "tax", "tad", "den", "rex", "pee"]))
  // [["red","ted","tad","tax"],["red","ted","tex","tax"],["red","rex","tex","tax"]]
}
{
  // 其他人的解法，稍微改了下
  let findLadders = function (start, end, dict) {
    // Constants and Check functions.
    var A_CODE = 'a'.charCodeAt(0)
    var WORD_COUNTS = 26
    var wordLength = start.length
    var results = []
    var dictSet = new Set(dict)

    // Check its from -> to is valid operation.
    function isValid(from, to) {
      var i = 0, c = 0
      while (i < wordLength) {
        if (from.charCodeAt(i) !== to.charCodeAt(i)) {
          ++c
          if (c > 1) break
        }
        ++i
      }
      return (c === 1)
    }

    // Create replace str, e.g : 'abc' => 'azc', 'adc' ....etc.
    var replacedWord = function (word, idx, chCode) {
      return word.substr(0, idx) + String.fromCharCode(chCode) + word.substr(idx + 1)
    }

    // If its only one step from start to end.
    if (isValid(start, end)) {
      return [[start, end]]
    }
    if (!dictSet.has(end)) {
      return []
    }

    var startSet = new Set([start])
    var endSet = new Set([end])
    var startPath = [[start]]
    var endPath = [[end]]

    //dict.add(end);
    var isReversing = false;
    var isConnected = false;

    // Use to decide whether use all word possible or use all dice word.
    // 这里作者根据数据量量级选择算法，从而进行优化
    var wordCombinations = WORD_COUNTS * wordLength;
    var dictComputations;

    // Determine current paths.
    var currentPaths;
    var currentLength;
    var currentSet;
    var pathLength;

    // Next path.
    var nextPaths;

    // Loop vars.
    var currentPath, currentWord, targets, target, tmpPath;

    // Loop variables.
    var i, j, k;

    // Init
    currentPaths = startPath;
    currentSet = startSet;
    currentLength = currentPaths.length;

    while (currentLength > 0) {
      nextPaths = [];
      // Remove words in current set.
      targets = currentSet.keys();
      for (target of targets) {
        dictSet.delete(target);
      }
      currentSet.clear();
      dictComputations = dictSet.size * wordLength;
      // Decide whether to use dict iteration of word replaces.
      if (dictComputations < wordCombinations) {
        // If iteration though dict needs less compares, iterate it.
        for (i = 0; i < currentLength; ++i) {
          currentPath = currentPaths[i];
          currentWord = currentPath[currentPath.length - 1];
          targets = dictSet.keys();
          for (target of targets) {
            if (isValid(currentWord, target)) {
              tmpPath = currentPath.slice();
              tmpPath.push(target);
              nextPaths.push(tmpPath);
              currentSet.add(target);
            }
          }
        }
      } else {
        // Otherwise, use bruteforce to check all possibilities.
        for (i = 0; i < currentLength; ++i) {
          currentPath = currentPaths[i];
          currentWord = currentPath[currentPath.length - 1];
          for (j = 0; j < wordLength; ++j) {
            for (k = 0; k < WORD_COUNTS; ++k) {
              target = replacedWord(currentWord, j, A_CODE + k);
              if (dictSet.has(target)) {
                tmpPath = currentPath.slice();
                tmpPath.push(target);
                nextPaths.push(tmpPath);
                currentSet.add(target);
              }
            }
          }
        }
      }
      // Put generated paths for next loop.
      if (isReversing) {
        endPath = nextPaths;
      } else {
        startPath = nextPaths;
      }

      if (startSet.size > endSet.size) {
        targets = endSet.keys();
        currentSet = startSet;
      } else {
        targets = startSet.keys();
        currentSet = endSet;
      }

      for (target of targets) {
        if (currentSet.has(target)) {
          isConnected = true;
          break;
        }
      }
      if (isConnected) {
        break;
      } else {
        // Use the set with smaller size.
        isReversing = startPath.length > endPath.length ? true : false;
        currentSet = isReversing ? endSet : startSet;
        currentPaths = isReversing ? endPath : startPath;
        currentLength = currentPaths.length;
      }
    }

    // If break by connection, connect start with end now.
    if (isConnected) {
      currentLength = startPath.length;
      pathLength = endPath.length;
      // Reverse endPaths.
      for (j = 0; j < pathLength; ++j) {
        endPath[j].reverse();
      }
      for (i = 0; i < currentLength; ++i) {
        currentPath = startPath[i];
        currentWord = currentPath[currentPath.length - 1];
        if (!endSet.has(currentWord)) {
          continue;
        }
        for (j = 0; j < pathLength; ++j) {
          target = endPath[j];
          if (currentWord === target[0]) {
            tmpPath = currentPath.concat(target.slice(1));
            results.push(tmpPath);
          }
        }
      }
    }
    return results;
  };
}