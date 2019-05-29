/* 任意进制转换算法 */

function baseCoverter(decNumber, base){
    var remStack = new Stack(),
        rem,
        baseString = '',    //结果
        digits = '0123456789ABCDEF';   //2-16数位

    while(decNumber > 0){
        rem = Math.floor(decNumber % base); //求余
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);   //求商
    }

    while(!remStack.isEmpty()){
        baseString += digits[ remStack.pop() ]; //从栈顶开始一一抽出对于数位上的值
    }

    return baseString;  //返回拼接后的字符串
}