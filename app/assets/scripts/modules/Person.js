class Person {

    constructor(fullName, fovColor) {
        this.name =  fullName;
        this.favoriteColor = fovColor;
    }

    greet() {
        console.log("Hi there, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
    }
}

// module.exports = Person;
export default Person;