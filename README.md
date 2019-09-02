TODO:Description

The main point of solution is to use TypeScript whenever possible. On the one
hand it extends the most modern ES specifications and is very featureful. And on
the other hand it can be transpiled to pretty old version like ES5 for keeping
backward compatibility.

## Packages
TODO:Packages are stored site-by-side in packages/ folder. This is a widely used
practice, but it makes sense if we will have other folders. Maybe config, docs,
specs.

## Yarn workspaces
TODO: We organize packages using Yarn workspaces. It significantly reduces the
size of node_modules employing its reusing between all packages. Also it
simplifies consolidation of dependencies (if some package has a big
node_modules, probably it has other dependencies version than others).

Root package.json to describe included packages in the workspace:

```json
{
  "name": "@sde/workspace",
  "version": "0.0.1",
  "private": true,
  "workspaces": [
    "packages/*"
  ],
  "dependencies": {
    "typescript": "^3.6.2"
  }
}
```

## TODO:Solution file
Probably tsconfig.json in "packages" folder.

```json
{
    "references": [
        { "path": "core" },
        { "path": "cli"}
    ]
}
```

## Package layout
* src
* es5

## Package settings

### package.json
* name
* version
* main points to "es5" folder. An idea is to have "min/max" versions of the
  package. Max version is in Typescript and min is for the best compatibility,
  that is ES5.
* types and typings. There is some tricky things. Property "types" are used by
  modules resolution in TypeScript
  (https://www.typescriptlang.org/docs/handbook/module-resolution.html#how-typescript-resolves-modules).
  At the same time it's mentioned as equal to "typings" for publishing
  (https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html),
  where it points to declaration file. But declaration is not good enough for
  all cases. For example it can't be used for package bundling. So we'll try to
  put different meanings for there properties: "types" will point to the source
  ("src" for src/index.ts) and reflect the initial nature of module resolvings.
  And "typings" will reference to the folder with declarations ("types" for
  types/index.d.ts).
  It's funny but "tsc" is working differently as documented. It firstly looks
  for "typings" poperty and if it doesn't exist, compilation fails. So looks
  like we have to swap them ("types": "types", "typings": "src").
  https://github.com/microsoft/TypeScript/issues/33305

### tsconfig.base.json
* composite - true. For TypeScript projects references.
* module - commonjs. By default we want the best backward compatibility.
* target - es5. By default we want the best backward compatibility.
* declaration - no need, because it's implied by "composite" setting.
* baseUrl - Works only for non-relatives names in conjuction with "paths" below
  (https://www.typescriptlang.org/docs/handbook/module-resolution.html#base-url).
  So if "paths" will be useless, this one will be too.
* paths - If Yarn workspace + "types" property will work, then "paths" looks
  useless.
* strict - true. Better quality control is good by default.
* lib - better to remove, because it is specific for the package.
* resolveJsonModule - true. Access to settings in package.json can be useful.
* exclude - [ "**/*.spec.ts" ]. How it is better to organize specs is still
  under investigation. Right now *.spec.ts file right among the SUT file seems
  to be better solution.

## tsconfig.json
TODO: Basically we should just set directories, because they can be barely
derived. Or not?

```json
{
	"extends": "../tsconfig.base.json",

	"compilerOptions": {
		"rootDir": "src",
		"outDir": "es5",
		"declarationDir": "types"
	},

	"include": [ "src" ]
}
```

## Development and debug
* "--traceResolution" flag for "tsc" can be used to debug modules resolution.

## TODO:
* Polish package.json settings (copyright, license, repository, maintainers, etc.)
