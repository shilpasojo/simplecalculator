// 1.) Display number in task box
function view(num){    // view(num)  OR  displayNum(num)    // One Argument
    result.value+=num  // 111 22222 3 etc. => Concantenation // To get more than one single digit
}

// 2.) Clear Text Box => To make textBox empty => AC
function clearBox(){ // No Arguments
    result.value=""  // Empty String ""
}

// 3.) Evaluate Expression => Equalto Button press cheyyumbol, arithemetic operations evaluate cheydhu, result kittan. 
function evaluateExpression(){ 
    // expr = result.value
    // output = eval(expr)
    // result.value = output
    //    OR 
    result.value = eval(result.value) // This simple step is enough
}

//  4.) Remove last item from textBox
function removeItem(){
    curExpr = result.value
    result.value = curExpr.slice(0,-1)
}