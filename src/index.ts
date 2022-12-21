import readEnvVars from "read-env-vars";
import ajv from "ajv";
import ajvFormats from "ajv-formats";
import { SchemaViolationError } from "./schema-violation-error.js";
import schema from "./config.schema.json" assert { type: "json" };

const Ajv = ajv.default;
const addFormats = ajvFormats.default;

import type { GroovoxConfig } from "./config.js";

function readConfig(): GroovoxConfig {
  const data = readEnvVars("GROOVOX");
  const ajv = addFormats(new Ajv());
  const validate = ajv.compile<GroovoxConfig>(schema);
  if (validate(data)) {
    return data;
  }
  throw new SchemaViolationError(validate.errors || []);
}

export * from "./config.js";
export default readConfig;
