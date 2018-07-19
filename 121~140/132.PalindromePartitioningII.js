/**
 * @param {string} s
 * @return {number}
 */
let minCut = function(s) {
  const n = s.length;
  const cut = new Array(n + 1).fill(0);
  
  for(let i = 0; i <= n; i++) {
      cut[i] = i - 1;
  }
  
  for(let i = 0; i < n; i++) {
      for(let j = 0; i - j >= 0 && i + j < n && s[i - j] == s[i + j]; j++) { // odd length palindrome
          cut[i + j + 1] = Math.min(cut[i + j + 1], 1 + cut[i - j]);
      }

      for(let j = 1; i - j + 1 >= 0 && i + j < n && s[i - j + 1] == s[i + j]; j++) { // even length palindrome
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