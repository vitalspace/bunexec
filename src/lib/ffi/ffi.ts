import { dlopen, suffix, FFIType } from "bun:ffi";

const path = `../toolkit.${suffix}`;

const location = new URL(path, import.meta.url).pathname;

const { symbols } = dlopen(location, {
  FileExists: {
    args: [FFIType.ptr],
    returns: FFIType.int,
  },

  CreateFile: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.int,
  },
});

export { symbols };
