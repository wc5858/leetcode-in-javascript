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

// 大整数加法这里有个更简洁的版本
var addStrings = function(num1, num2) {
    num1 = num1.split('');
    num2 = num2.split('');
    var i = num1.length - 1;
    var j = num2.length - 1;
    var up = 0;
    var res = '';
    while(i >= 0 || j >= 0 || up > 0){
        var sum = up;
        if(i >= 0){
            sum += parseInt(num1[i]);
        }
        if(j >= 0){
            sum += parseInt(num2[j]);
        }
        if(sum >= 10){
            sum -= 10;
            up = 1;
        }else{
            up = 0;
        }
        res = sum + res;
        i --;
        j --;
    }
    return res;
};

(function text() {
    console.log(bigNumberAdd('9'.repeat(18), '1') === ('1' + '0'.repeat(18)))
})()


// 相关资料，其中改进版累加参见之前写的43题
// https://itimetraveler.github.io/2017/08/22/%E3%80%90%E7%AE%97%E6%B3%95%E3%80%91%E5%A4%A7%E6%95%B0%E7%9B%B8%E4%B9%98%E9%97%AE%E9%A2%98%E5%8F%8A%E5%85%B6%E9%AB%98%E6%95%88%E7%AE%97%E6%B3%95/
function bigNumberMultiply(str1, str2) {
    // karatsuba算法，不过在js这边似乎没有很大的性能优势
    // 把大整数相加换成别人写的更简洁的版本后beat65.81%
    const len1 = str1.length
    const len2 = str2.length
    if(len1===0 ||len2===0) return '0'
    // js的整数边界是2^53，9007199254740992，16位
    // (str1*str2) < 10^(len1+len2)
    // 所以len1+len2小于等于15时可以直接用一般乘法给出结果
    if (len1 + len2 < 16) {
        return util.num2str(util.str2num(str1) * util.str2num(str2))
    }
    // 接下来用分治算法递归求解
    const n = Math.floor(Math.max(len1, len2) / 2)
    const a = str1.substring(0,len1-n)
    const b = str1.substring(len1-n)
    const c = str2.substring(0,len2-n)
    const d = str2.substring(len2-n)
    const ac = bigNumberMultiply(a,c)
    const bd = bigNumberMultiply(b,d)
    // 这里求m还有更好的办法即 (a+b)(c+d)-(ac+bd)，不过需要再写个大数减法
    const m = bigNumberAdd(bigNumberMultiply(a,d),bigNumberMultiply(b,c))
    const res = bigNumberAdd(bigNumberAdd(util.zoomN(ac,2*n),util.zoomN(m,n)),bd)
    return res
}

(function text() {
    console.log(bigNumberMultiply("123456789", "987654321") === "121932631112635269")
})()