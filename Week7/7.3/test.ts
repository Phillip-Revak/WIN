let helloWorld = "Hello World";
console.log(helloWorld);

// Interfaces are how we define the shape of an object.
// They are the templates of our objects.

interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "Hayes",
    id: 0,
}

const otherUser: User = {
    name: "Lionel",
    id: 1,
}

let completed: boolean = false;

// declare function getValue(key: string): any;
// // OK, return value of 'getValue' is not checked
// const str: string = getValue("myString");

