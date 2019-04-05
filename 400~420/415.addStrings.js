/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const util = {
    num2str: num => `${num}`,
    str2num: str => +str,
    // 字符串number乘10的n次方
    zoomN: (str,n) => str + '0'.repeat(n)
}
// 这个题是leetcode第43题，当时做的不好 重新拿出来做一下
function bigNumberAdd(str1, str2) {
    const len1 = str1.length
    const len2 = str2.length
    if (len1 < 16 && len2 < 16) {
        return util.num2str(util.str2num(str1) + util.str2num(str2))
    }
    const n = Math.min(len1, len2)
    let next = 0 // 实际上next只会是0或1
    let res = ''
    for (let i = 1; i <= n; i++) {
        const cur1 = util.str2num(str1[len1 - i])
        const cur2 = util.str2num(str2[len2 - i])
        const added = cur1 + cur2 + next
        res = util.num2str(added % 10) + res
        next = added > 9 ? 1 : 0
    }
    const rest = len1 > n ? str1 : (len2 > n ? str2 : null)
    if (rest) {
        const len = rest.length
        let i = 1
        while (next > 0 && len - n - i >= 0) {
            const cur = util.str2num(rest[len - n - i])
            if (cur == 9) {
                res = '0' + res
            } else {
                res = util.num2str(cur + 1) + res
                next = 0
            }
            i++
        }
        if (next > 0) {
            // rest遍历完了还有进位1
            return '1' + res
        } else {
            return rest.slice(0, len - n - i + 1) + res
        }
    } else {
        return (next > 0 ? '1' : '')  + res
    }
}
var addStrings = function(num1, num2) {
    return bigNumberAdd(num1,num2);
};