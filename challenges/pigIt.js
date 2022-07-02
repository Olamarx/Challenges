// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    //Code here
    let result = []
    const split = str.split(' ')
    console.log(split)
    split.forEach(element => {
        const first = element.charAt(0)
        const len = element.length
        const others =  element.slice(1)
        const thersLen = others.length + 1
        console.log(thersLen)
        const checkothers = element.charAt(len - 1) === 'y' && element.charAt(len - 2) === 'a' ? element : others;
        const checkFir = element.charAt(len - 1) === 'y' && element.charAt(len - 2) === 'a' ? '' : first;
        // const checkLast = others || others === /a-z/ ? 'ay' : ''
        result.push(`${checkothers}${checkFir}${(others || others === /a-z/) &&  (thersLen-1 !== 'y') ? 'ay' : ''}`)
    });
    console.log(result.join(' '))
  }

  pigIt('O emporatay o oresmay !')