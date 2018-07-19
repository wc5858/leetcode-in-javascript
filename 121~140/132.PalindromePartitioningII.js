/**
 * @param {string} s
 * @return {number}
 */
// 别人写的动态规划
let minCut = function (s) {
  if (s === '') return 0
  const n = s.length;
  const cut = new Array(n + 1)

  for (let i = 0; i <= n; i++) {
    // 初始化为至少要划分的次数
    cut[i] = i - 1;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; i - j >= 0 && i + j < n && s[i - j] == s[i + j]; j++) { // odd length palindrome
      // 在以i为中心，奇数长度的子串中，找最大回文串
      cut[i + j + 1] = Math.min(cut[i + j + 1], 1 + cut[i - j]);
    }

    for (let j = 1; i - j + 1 >= 0 && i + j < n && s[i - j + 1] == s[i + j]; j++) { // even length palindrome
      // 在以i为中心，偶数长度的子串中，找最大回文串
      cut[i + j + 1] = Math.min(cut[i + j + 1], 1 + cut[i - j + 1]);
    }
  }

  return cut[n];
};


let tester = require('../tester')
let testCases = [
  {
    data: [''],
    res: 0,
  },
  {
    data: ['aab'],
    res: 1,
  },
  {
    data: ['adsafdasfa'],
    res: 9,
  },
  {
    data: ['adsafdaasfa'],
    res: 9,
  },
  {
    data: ['ababababababababababababcbabababababababababababa'],
    res: 0,
  },
  {
    data: ['apjesgpsxoeiokmqmfgvjslcjukbqxpsobyhjpbgdfruqdkeiszrlmtwgfxyfostpqczidfljwfbbrflkgdvtytbgqalguewnhvvmcgxboycffopmtmhtfizxkmeftcucxpobxmelmjtuzigsxnncxpaibgpuijwhankxbplpyejxmrrjgeoevqozwdtgospohznkoyzocjlracchjqnggbfeebmuvbicbvmpuleywrpzwsihivnrwtxcukwplgtobhgxukwrdlszfaiqxwjvrgxnsveedxseeyeykarqnjrtlaliyudpacctzizcftjlunlgnfwcqqxcqikocqffsjyurzwysfjmswvhbrmshjuzsgpwyubtfbnwajuvrfhlccvfwhxfqthkcwhatktymgxostjlztwdxritygbrbibdgkezvzajizxasjnrcjwzdfvdnwwqeyumkamhzoqhnqjfzwzbixclcxqrtniznemxeahfozp'],
    res: 452,
  },
]
tester(minCut, testCases)