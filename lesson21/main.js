//
console.log(this);
const arrowFunctionExample = () => {
  console.log(this);
};
arrowFunctionExample();
//homework

const printOutMyFavoriteDog = ()=>{
    return `I love my dog which is called ${this.favoriteDog}`
}
console.log(printOutMyFavoriteDog())
const obj = {
    favoriteDog:"Jupiter",

}
// execute the function that print out "jupiter" instead of Undefined.(on line 12)