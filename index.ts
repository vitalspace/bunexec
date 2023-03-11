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

const result = await tool.exists("./example.json");
result === true
  ? console.log("existe")
  : await tool.createFile("./example.json", JSON.stringify(person));
