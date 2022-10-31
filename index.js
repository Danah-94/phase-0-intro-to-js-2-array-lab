// Write your solution here!

//cats is assigned an initial value of ["Milo", "Otis", "Garfield"]
const cats = ["Milo", "Otis", "Garfield"];

/*Array functions
destructivelyAppendCat(name)
   appends a cat to the end of the cats array */

function destructivelyAppendCat(name){
    return cats.push(name);
}

/*destructivelyPrependCat(name)
         prepends a cat to the beginning of the cats array */
 
function destructivelyPrependCat(name){
    return cats.unshift(name);
}      

/* destructivelyRemoveLastCat()
         removes the last cat from the cats array */

function destructivelyRemoveLastCat(){
    return cats.pop();
}

/* destructivelyRemoveFirstCat()
        removes the first cat from the cats array */

function destructivelyRemoveFirstCat(){
    return cats.shift();
}         

/* appendCat(name)
         appends a cat to the cats array and returns a new array, leaving the cats array unchanged*/

function appendCat(name){
     const newArray = [...cats, name];
     return newArray;
}     

/* prependCat(name)
         prepends a cat to the cats array and returns a new array, leaving the cats array unchanged */

function prependCat(name) {
     const newArray = [name, ...cats];
     return newArray;
}       

/* removeLastCat()
         removes the last cat in the cats array and returns a new array, leaving the cats array unchanged */

function removeLastCat(){
      const newArray = cats.slice(0, cats.length-1);
      return newArray;
}         

/* removeFirstCat()
        removes the first cat from the cats array and returns a new array, leaving the cats array unchanged */

function removeFirstCat(){
      const newArray = cats.slice(1);
      return newArray;
}        