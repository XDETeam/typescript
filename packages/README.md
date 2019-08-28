## Conventions

## Project references
TODO:Describe advantages of using TypeScript project references for development
mode and how SDE can be referenced from projects.

### tsconfig.json

TODO:Probably it would be good to describe all possible tsconfig settings and
reason why some of them is included or not.

* It probably would be better to have ES2015 module and target as default. It is
  a good balance between features and compatibility/support. Legacy modes like
  ES5 and others are mostly for old browser apps only and can be overwritten by
  tsconfig.json files those extend this one. ES2015 is good for Node.js, Babel,
  modern browsers, etc.
* By default it would be good to enable strict mode. If some package has loosen
  restrictions, this can be set specifically for this package.
* esModuleInterop is a nice helper to work with ES6/Babel ecosystem.
* It's better to avoid using "declaration" (true) and "declarationDir" in the
  base config. Because we require them for only one type of output, e.g.
  "es2015". When introducing additional types, we just waste time disabling
  "declaration" for other types than "es2015".
* Having tsconfig.json with project references to each package in solution.
  https://www.typescriptlang.org/docs/handbook/project-references.html:
  "Another good practice is to have a "solution" tsconfig.json file that simply
  has references to all of your leaf-node projects".
* Keep base settings in tsconfig.base.json, because tsconfig.json in the same
  folder will contain "solution" based on Typescript project references.