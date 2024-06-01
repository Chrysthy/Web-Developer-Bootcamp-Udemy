const cat = {
    name: "Noob Saibot",
    color: "gray",
    age: 14,

    meow() {

        // console.log(this.color);
        console.log("This is: ", this);
        // console.log(`${this.name} says MEOW`);
        // console.log(this.name);
    }
}

//A palavra this irá se referir em vez do método, ao próprio objeto: cat

cat.meow()

let meow2 = cat.meow

meow2()