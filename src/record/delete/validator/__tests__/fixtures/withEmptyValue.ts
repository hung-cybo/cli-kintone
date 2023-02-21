import type { RecordNumber } from "../../../types/field";
import type { TestPattern } from "../index.test";

const appCode = "";

const input: RecordNumber[] = [
  {
    value: "1",
  },
  {
    value: "",
  },
];

const expected = {
  failure: {
    errorMessage: "Invalid record number. ID: <empty_string>",
  },
};

export const pattern: TestPattern = {
  description: "should throw error when the record number is empty",
  appCode,
  input,
  expected,
};
