import { expect, test, describe } from "bun:test";
import { Toolkit } from "../config/config";

const tool = new Toolkit();

describe("Create File.", async () => {
  const result = await tool.createFile("./example.json");
  test("File created successfully.", () => {
    expect(result).toBe("File created successfully.");
  });
});

describe("Create File with content.", async () => {
const truePath: string = "/demp/example.text";
const content: string = "Hello world";
  const result = await tool.createFile(truePath, content);
  test("File created successfully.", () => {
    expect(result).toBe("File created successfully.");
  });
});

describe("Could not write to file.", () => {
  test("Could not write to file.", async () => {
    try {
      const falsePath: string = "/demp/example.text";
      const content: string = "Hello world";
      expect(await tool.createFile(falsePath, content));
    } catch (e: any) {
      expect(e.message).toBe("Could not write to file.");
    }
  });
});
