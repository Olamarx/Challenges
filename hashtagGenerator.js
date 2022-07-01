// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

// Examples

// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false
function generateHashtag(str) {
  
    const split = str.split(' ')
    let result = '#'

    split.forEach(element => {
        const capitalize = element.charAt(0).toUpperCase()
        const others = element.slice(1)
        result = result + capitalize + others;
    });
    result.length > 140 || !str || !result || result === '#' ? false : result;  
  }

  generateHashtag("code" + " ".repeat(140) + "wars")
