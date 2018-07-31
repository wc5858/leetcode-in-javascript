# leetcode-in-javascript

注意:丢进leetcode运行的function尾部要有分号- -（部分问题有这种情况）

attention: to run function in leetcode, an end semicolon is necessary

2018.6.29新增：

增加tester功能，使用方式：

`let tester = require('../tester')`

------------------------

1.多考虑边界条件（非法输入、可能会导致数组下标溢出的输入等）

~~2.从数学上过滤一些能直接给出结果的输入，从而提升算法效率~~

2.“数学优化是降维打击”--知乎用户

3.测试用例先行，能降低错误率

4.js语法对性能的影响很大，比如说new Array(n)会影响性能，fill更甚；有时候类型转换来判断字符串'0'和'1'也不如全等判断来的好