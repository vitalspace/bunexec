import { ptr } from "bun:ffi";
import { symbols } from "../ffi/ffi";
import { encode } from "../encoder/encoder";

class Toolkit {
  constructor() {}

  async exists(path: string): Promise<boolean> {
    const result: number = await symbols.FileExists(ptr(encode(path)));
    return result > 0 ? true : false;
  }

  async createFile(path: string, content?: string): Promise<string> {
    let result: number;

    if (content) {
      result = await symbols.CreateFile(
        ptr(encode(path)),
        ptr(encode(content))
      );
    } else {
      result = await symbols.CreateFile(ptr(encode(path)));
    }

    if (result == 2) {
      throw new Error("Could not create file.");
    } else if (result == 1) {
      throw new Error("Could not write to file.");
    } else {
      return "File created successfully.";
    }
  }
}

export { Toolkit };

// go build --buildmode c-shared -o ./toolkit.so main.go
