const arr = ['A','B','C','D','E','F','G'];

function shuffle1(array) {
    var copy = [], n = array.length, i;
  
    // While there remain elements to shuffle…
    while (n) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * n--);
      console.log('index: ',i)
      // And move it to the new array.
      copy.push(array.splice(i, 1)[0]);
      console.log('=============================',array)
    }
    return copy;
}

const result = shuffle1(arr)
console.log('result: ',result)

function shuffle(array) {
    var copy = [], n = array.length, i;
    console.log('start: ',new Date().getTime())
    // While there remain elements to shuffle…
    while (n) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * array.length);
  
      // If not already shuffled, move it to the new array.
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        console.log(array)
        n--;
      }
    }
    console.log('end: ',new Date().getTime())
    return copy;
  }

//   const ret = shuffle(arr)
//   console.log(ret)
