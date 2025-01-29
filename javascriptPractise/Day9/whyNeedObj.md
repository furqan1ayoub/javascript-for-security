#  Objects Group Related Data Together
### Without objects, we would need multiple separate variables, which makes the code harder to manage.

🔴 Without an object:

```javascript
let name = "John";
let age = 25;
let job = "Hacker";

function introduce(name, age, job) {
    return `Hi, I'm ${name}, a ${age}-year-old ${job}.`;
}

console.log(introduce(name, age, job));
💡 This works but can get messy if you need to track multiple people.
```
🟢 With an object:
```javascript
let person = {
    name: "John",
    age: 25,
    job: "Hacker",
    introduce: function() {
        return `Hi, I'm ${this.name}, a ${this.age}-year-old ${this.job}.`;
    }
};

console.log(person.introduce()); 
```
# ✅ Why is this better?
```
- All related properties (name, age, job) are inside one structure (person).
- Functions (introduce()) are inside too, making it reusable for different people.
```
- **In Simple Terms**

1️⃣ Objects store multiple related values together.

2️⃣ Functions inside objects are called methods.

3️⃣ this refers to the current object.

4️⃣ Use dot notation (.) to access properties and call methods.