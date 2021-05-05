const dogNames = ["Joel", "Mr. tickles"];

const dogInfo = [39.6, "Joel", "Beagle", true, 5];

// objects
const joel = {
  id: 1,
  weight: 39.6,
  name: "Joel",
  breed: "Beagle",
  goodBoy: true,
  age: 5
};

const mrT = {
  id: 2,
  weight: 3,
  name: "Mr. Tickles",
  breed: "Daschund",
  goodBoy: true,
  age: 4
};

const dogs = [
  {
    id: 1,
    weight: 39.6,
    name: "Joel",
    breed: "Beagle",
    goodBoy: true,
    age: 5 
  },
  {
      id: 2,
    weight: 3,
    name: "Mr. Tickles",
    breed: "Daschund",
    goodBoy: true,
    age: 4
  },
  {
    id: 3,
    weight: 4.2,
    name: "Benji",
    breed: "Chihuahua",
    goodBoy: true,
    age: 0.25
  },
  {
    id: 4,
    weight: 104.2,
    name: "Nebula",
    breed: "Great Dane",
    goodBoy: false,
    age: 4
  }
]


//console.log(dogs[2]);
//console.log(`${dogs[3].name} is a ${dogs[3].breed} and weighs ${dogs[3].weight}lbs.`);

/*for(const dog of dogs){
  console.log(`${dog.name} is a ${dog.breed}`)
};
*/
for(const dog of dogs){
  if(dog.goodBoy=== true) {
    console.log(`${dog.name} is a good dog.`)
  } else {
    console.log(`${dog.name} is a bad dog.`)
  }; 
}
/*
for(let i=0; i<dogs.length; i++){
  console.log(`${dogs[i].name} is a ${dogs[i].breed}`);


} */

// add dog
let newDog ={
  id: 5,
    weight: 76,
    name: "Parabe",
    breed: "Chow",
    goodBoy: false,
    age: 27
}
dogs.push(newDog) //add newDog to the array

for(const dog of dogs){
  console.log(`${dog.name} is a ${dog.breed}`)
}


// let's change the age of the dogs
// for (const dog of dogs) {
//   dog.age +=1
//   console.log(dogs);

// }

// we just want one dogs info
// for (const dog of dogs) {
//   if(dog.id===3)
//     console.log(dog);
// }

// let's add a new dog
const nextDog = {
  id: 10,
    weight: 20,
    name: "Ms, Giggles",
    breed: "Sheba",
    goodBoy: false,
    age: 75
}

const addNewDog = (dogObject) => {
  const lastIndex = dogs.length -1;
  const currentLastDog = dogs[lastIndex];
  const maxId = currentLastDog.id;
  const idForNewDog = maxId +1
  dogObject.id = idForNewDog
  dogs.push(dogObject)
}
addNewDog(nextDog);

console.log(dogs)