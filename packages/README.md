TODO:

## Conventions

### tsconfig.json

* It probably would be better to have ES2015 module and target as default. It is
  a good balance between features and compatibility/support. Legacy modes like
  ES5 and others are mostly for old browser apps and can be overwritten by
  tsconfig.json files those extend this one.
* By default it would be good to enable strict mode. If some package has loosen
  restrictions, this can be set specifically for this package.
* esModuleInterop is a nice helper to work with ES6/Babel ecosystem.
