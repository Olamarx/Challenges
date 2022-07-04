// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true





function validParentheses(parens) {
    // your code here ..
    // const obj = {
    //     '(' : ')'
    // }
    const stack = []
    for (let i = 0; i < parens.length; i++) {

        const lastInStack = stack[stack.length - 1]

        if (parens.charAt(i) ==='(') {
            stack.push(parens.charAt(i))
        } else if( lastInStack === '(' && parens.charAt(i) === ')' ) {
            stack.pop()
        } else return false
    }
   return stack.length ? false : true;
  }

  validParentheses("(())((()())())")


//   A CLEVER APPROACH
//   function validParentheses(parens){
//     var n = 0;
//     for (var i = 0; i < parens.length; i++) {
//       if (parens[i] == '(') n++;
//       if (parens[i] == ')') n--;
//       if (n < 0) return false;
//     }
    
//     return n == 0;
//   }