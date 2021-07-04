import { Options } from "tsup";

export const tsup: Options = {
    target: "node12",
    entryPoints: ["./src/index.ts", "./src/test.ts"],
    external: ["graphql", "graphql-subscriptions"],
    dts: true,
    clean: true,
    sourcemap: true,
};
