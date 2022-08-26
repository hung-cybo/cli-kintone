import type { TestPattern } from "../../index.test";
import { input } from "./input";
import { expected } from "./expected";
import { userSelected } from "../../../transformers/userSelected";
import { fields } from "./fields";

export const pattern: TestPattern = {
  description: "userSelected should create schema correctly",
  transformer: userSelected(fields, input),
  input: input,
  expected: expected,
};
