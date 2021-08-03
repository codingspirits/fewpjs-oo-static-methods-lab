/* class Formatter {
  //add static methods here
  static capitalize(string){
    return string.toUpperCase()
  }
  static sanitize( string ) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string) {
    wordArray = []
 
    let originalWord = string.split(' ')
    for (key of originalWord){
      if (key != 'an'){
        key[0].toUpperCase
        titleizedArray.push(key)
      }

    }

  }
  }
titlelize */
let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
let a = "an apple a day makes the doctor go away"
let b = a.split(' ')
newWords = []
for (i=0; i<b.length; i++){
  console.log(b[i])
  c = b[i].split('')
  //console.log(c)
  let x = c.slice(1)
  //console.log(x)
if ((exceptions.includes( b[i] )) && (i>0)){
      newWords.push( b[i] )}
    else {
      newWords.push(c[0].toUpperCase() + x.join(''))
    }}
console.log(newWords)
console.log(newWords.join(' '))

static titleize( sentence ) {
  let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
  let result = [];
  let arrayOfWords = sentence.split( " " )
  for ( let n = 0; n < arrayOfWords.length; n++ ) {
    if ( n == 0 ) {
      result.push( this.capitalize( arrayOfWords[ n ] ) )
    } else {
      if ( exceptions.includes( arrayOfWords[ n ] ) ) {
        result.push( arrayOfWords[ n ] )
      } else {
        result.push( this.capitalize( arrayOfWords[ n ] ) )
      }
    }

  }
  return result.join( " " );
}
} 


