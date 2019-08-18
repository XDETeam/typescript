import { Dictionary } from "./Dictionary";
import { IKeyValuePair } from "./KeyValuePair";

it("should properly convert objects array to Dictionary", () => {
  const dict = Dictionary.from<IKeyValuePair<string, string>>(
    [{ key: "key1", value: "value1" }, { key: "key2", value: "value2" }],
    "key"
  );
  expect(dict).toEqual({
    key1: { key: "key1", value: "value1" },
    key2: { key: "key2", value: "value2" }
  });
});
