async function fetchEgg(chicken) {
    return Promise.resolve(`${chicken} => 🥚`);
  }
  async function fryEgg(egg) {
    return Promise.resolve(`${egg} => 🍳`);
  }
  async function getChicken() {
    return Promise.reject(new Error('can not find 🐓'));
  }



 async function meal() {
    
try{
    let food = await fetchEgg(chicken)



    return console.log(food)

}catch(e){
    throw new Error(e)
}
 }

 meal()