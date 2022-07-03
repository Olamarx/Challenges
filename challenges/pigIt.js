// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
//pigIt('O emporatay o oresmay !'); // Oay emporatay oay oresmay !
function pigIt(str){
    //Code here
    let result = []
    const split = str.split(' ')

    split.forEach(element => {
        const len = element.length
        
        if ((/([a-zA-Z])/).test(element) && element.slice(len - 2) !== 'ay' ) {
            result.push(`${element.substring(1)}${element[0]}ay`)
        }
        //  else if ((/([a-zA-Z])/).test(element)) {

        // } 
        
        
        else {
            result.push(element)
        }
        
        
    });
    console.log(result.join(' '))
  }

  pigIt('hisTay siay my tringsay')

        // const first = element.charAt(0)
        // const others =  element.slice(1)
        // const checkothers = element.charAt(len - 1) === 'y' && element.charAt(len - 2) === 'a' ? element : others;
        // const checkFir = element.charAt(len - 1) === 'y' && element.charAt(len - 2) === 'a' ? '' : first;

        // const addOrNot = (element.charAt(len - 1) !== 'y' && element.charAt(len - 2) !== 'a') ? 'ay' : '';

        // result.push(`${checkothers}${checkFir}${ others === /a-z/ ? 'ay' : '' || addOrNot }`)
//   substring() works like slice()