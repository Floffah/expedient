# Expedient

The name for this library is a synonym of scheme and was chosen because some forms of its definition
are "Beneficial or being of advantage in a given circumstance" and "Having, showing, or done with
good judgment or sense" or "Capable of working successfully" which although this library may not
achieve, it tries to be a small and quick way to make functional and working graphql schemas

# Usage

`npm i expedient` or `yarn add expedient`

```ts
import {e} from "expedient";

const query = e.buildObject("Query", [
    e.buildField(
        "ping; For rount-trip calculation purposes",
        GraphQLString,
        () => "pong",
    ),
]);

const schema = e.buildSchema(query);

// do something with the schema;
```

See a full blown example in [test.ts](./src/test.ts)

I haven't written documentation for this library yet, however, if you are using typescript in a 
capable ide, you should be able to use it pretty easily. Every type has the word build before it.
E.g. for an interface `e.buildInterface()`, for a field `e.buildField()` with the only 
exceptions being for the query, mutation, and subscription objects which you should use `e.
buildObject()` for and is what `e.buildSchema()` expects.

## Info strings

You'll notice a type called InfoString is used a lot in this package, this represents a single 
string that is used as the name and description, if using typescript 4.2 or newer, it should 
warn you when this is wrong. The format goes `Name` or `Name; Description` (the space after the 
semicolon
is optional)
