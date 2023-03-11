import { expect, test, describe } from "bun:test";
import { Toolkit } from "../config/config";

const tool = new Toolkit();

describe("File Exists", async () => {
  const result = await tool.exists("./example.json");
  test("false", () => {
    expect(result).toBe(false);
  });
});


