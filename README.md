# 数学！

## 阶加
阶加（termial）是一种数学运算符号，是由高德纳於1997年在《电脑程式设计艺术》中提出。
定义为所有小于及等于该数的正整数的和。

```
n? = 1 + 2 + 3 + ... + (n-1) + n
```
或者
```
n? = n + (n-1)?
```
或者
```
     n
n? = ∑ i
    i=1
```

#### 实现:
 - 递归
   ```js
   // 尾递归优化
   function termial(n, sum=n){
     if(n <= 1){
         return sum
     }else {
         return termial(n-1, sum+(n-1))
     }
   }
   ```
   
 - 循环
   ```jsx harmony
    function termial(n){
      let res = n;
      while(n>1){
         res = res+(n-1);
 
         n--;
      }
 
      return res;
    }
    ```

## 阶乘

阶乘是基斯顿·卡曼于 1808 年发明的运算符号，是数学术语。

一个正整数的阶乘（factorial）是所有小于及等于该数的正整数的积，
并且0的阶乘为1。自然数`n`的阶乘写作`n!`。

```
!n = (n-1)(n-2)(...)(n-n+1)
```
或者
```
!n = 1 * 2 * 3 * ... * (n-1) * n
```

#### 实现:
 - 递归
   ```js
   function factorial(n, sum=n){
     if(n <= 1){
         return sum||1
     }else {
         return factorial(n-1, sum*(n-1))
     }
   }
   ```
   
 - 循环
   ```jsx harmony
   function factorial(n){
     let res = n;
     while(n>1){
        res = res*(n-1);

        n--;
     }

     return res;
   }
   ```
