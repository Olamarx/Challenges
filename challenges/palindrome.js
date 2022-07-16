let isPalindrome = (x) => {
    const str = x.toString().split('').reverse().join('')
    const float = parseInt(str)
    console.log(str)
    if (x < 0) {
        console.log(false);
    }  
    if (x !== float){
        console.log(false);
    } else {
        console.log(true);
    }
};

isPalindrome(10)