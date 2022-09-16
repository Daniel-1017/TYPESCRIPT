const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // this is a tuple, an array with fixed length and fixed types
} = {
  name: "Danu",
  age: 16,
  hobbies: ["sports", "videogames"],
  role: [1, "author"],
};

for (let hobby of person.hobbies) {
  console.log(hobby);
}

/*
* explicit type assignment

{
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
}

* inference

{
   name: "Danu",
   age: 16,
   hobbies: ["sports", "videogames"],
   role: [1, "author"],
}
*/

// =========================

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person2 = {
  name: "Danu",
  age: 16,
  hobbies: ["sports", "videogames"],
  role: Role.ADMIN,
};

if (person2.role === Role.AUTHOR) {
  console.log("Role: Admin");
}
