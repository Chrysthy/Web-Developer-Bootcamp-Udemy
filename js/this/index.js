const cat = {
    name: "Noob",
    color: "gray",
    age: 14,

    meow() {

        console.log("Meow Meow Meow");
    }
}

//A palavra this irá se referir em vez do método, ao próprio objeto: cat

cat.meow()