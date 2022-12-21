import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { assert } from "chai";
import dotenv from "dotenv";
import readConfig from "../index.js";
import { SchemaViolationError } from "../schema-violation-error.js";

const currentDir = dirname(fileURLToPath(import.meta.url));
const testDir = join(currentDir, "..", "..", "test");

describe("readConfig", () => {
  it("should read", async () => {
    dotenv.config({ path: join(testDir, "example.env"), override: true });
    const config = readConfig();
    assert.deepEqual(config, {
      storage: {
        type: "S3",
        s3: {
          bucket: "bucket",
          endPoint: "endPoint",
          accessKey: "accessKey",
          secretKey: "secretKey",
          useSsl: true,
          port: 443,
          region: "region",
          pathStyle: true
        }
      }
    });
  });

  it("should throw", async () => {
    dotenv.config({ path: join(testDir, "invalid.env"), override: true });
    assert.throws(() => readConfig(), SchemaViolationError);
  });
});
