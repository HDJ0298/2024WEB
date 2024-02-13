let object = {
    name : "hdj",
    age: 28,
    job: "web developer",
    "hello world" : "hello world",
    a: function () {},
};

console.log(object.name);
console.log(object.age);
console.log(object.job);
console.log(object["hello world"]);
console.log(object.a);

const array = ["a","b","c"];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

array.push("d");

console.log(array);

array.pop();
console.log(array);