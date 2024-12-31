function greeter(person: string) {
    return "Hello, " + person;
}

let user = ["Jane", "Doe"];

//Solution 1: Accessing the first element of the array
console.log(greeter(user[0])); // Accesses the first element, "Jane"

//Solution 2:  Concatenating array elements with appropriate type handling
console.log("Hello, " + user.join(" ")); // Joins array elements into a single string

//Solution 3: Using a function that accepts an array
function greeterArray(persons: string[]): string {
    return "Hello, " + persons.join(" ");
}
console.log(greeterArray(user));