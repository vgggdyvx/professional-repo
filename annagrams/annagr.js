function anagrams (a, b) {
    y = a.split("").sort();
    z = b.split("").sort();
    areAnagrams = true;
    for (i=0; i<y.length && areAnagrams; i++) {
      if(y.length===z.length) {
        if (y[i]===z[i]){
        } else {
          areAnagrams = false;
        }
      }
      else {
        areAnagrams = false;
      }
  
    }
    let result = areAnagrams ?'Yes' :'No'
    console.log(result)
}
  anagrams("ananas", "nnaass");

  // if (areAnagrams) {
  //   console.log('Yes');
  // } else {
  //   console.log('No');
  // }
  //   return areAnagrams;