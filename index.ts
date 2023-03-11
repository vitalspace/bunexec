import { Toolkit } from "./src/lib/config/config";

const tool = new Toolkit();

type Person = {
  name: string;
  age: number;
  address: string;
};

const person: Person = {
  name: "Luis",
  age: 20,
  address: "USA",
};

const result = await tool.createFile("./mundo/example.json", JSON.stringify(person));
console.log(result)



// const result = await tool.exists("./example.json");
// result === true
//   ? console.log("existe")
//   : await tool.createFile("./example.json", JSON.stringify(person));

// if (await tool.exists("./example.json")) {
//   console.log("existe");
// } else {

//   const result = await tool.createFile("./example.json", JSON.stringify(person));
//   console.log(result);
// }

// if (await tool.exists("./example.txt")) {
//   console.log("existe");
// } else {
//   console.log("no extiste");
// }

// try {
//   const result = await tool.createFile("./example.txt");
//   console.log(result);
// } catch (error) {
//   console.log(error);
// }
