const flowers = [
    {
        id: 1,
        color: "White",
        species: "Rose",
        price: 0.90
    },
    {
        id: 2,
        color:"Red",
        species: "Tulip",
        price: 1.10
    }

] 
const violet = {
    id: 2,
    color:"blue",
    species: "Violet",
    price: 2.10
}

const rose = {
  id: 2,
  color:"yellow",
  species: "Rose",
  price: 0.80
}



const addFlower = (flowerObject) => {
    const lastIndex = flowers.length - 1;
    const currentLastFlower = flowers[lastIndex];
    const maxId = currentLastFlower.id;
    const idForNewflower = maxId +1
    flowerObject.id = idForNewflower
    flowers.push(flowerObject)
  }

  
    addFlower(rose);
    /*
        This function should add an `id` property
        to the object that was sent to the function.
        The value of the `id` property should be 1
        greater than the current maximum `id` in the
        array.

        Once the `id` property has been added to the,
        object, the object should then be put into the
        `flowers` array.
    */

  

const findExpensiveFlowers = () => {
  const expensiveFlowers = []  // Do not change this code
  for (flower of flowers) {
    if (flower.price >= 1.00) {
      expensiveFlowers.push(flower)
    }

  }

console.log(expensiveFlowers)
    /*
        Write a for..of loop that iterate the array
        of flowers, and if the price of a flower is
        greater than or equal to 1.00, it should be
        added to the `expensiveFlowers` array.
    */




    return expensiveFlowers  // Do not change this code
}




// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

/*let newId = {
    id: 6
}

flowers.push(newId)*/


    // console.log(flowerObject())
 console.log(flowers)
//  console.log(expensiveFlowers())
// console.log(expensiveFlowers())