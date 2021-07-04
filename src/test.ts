import { e } from "./index";
import { GraphQLID, GraphQLString, printSchema } from "graphql";

const user = e.buildInterface("User; Object representing a user object", () => [
    e.buildField("id; Users id", GraphQLID),
    e.buildField("username; Users name", GraphQLString),
]);

const userFields = [
    e.buildField("getUser; Get a user by ID", user, () => ({
        id: 1234,
        username: "someUsername",
    })),
];

const mutation = e.buildObject("Mutation", () => [...userFields]);

const query = e.buildObject("Query", () => [
    e.buildField(
        "ping; For rount-trip calculation purposes",
        GraphQLString,
        () => "pong",
    ),
]);

const schema = e.buildSchema(query, mutation);

console.log(printSchema(schema));
