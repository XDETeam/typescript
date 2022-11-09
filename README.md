# XDE TypeScript Labs

## TODO:Development notes
- For better meshing between this laboratory and projects which are using its code, we temporarily
  rely on Git submodules feature. Some reasons are:
  - Developer-friendly. Easy to start develop, test, debug, push, etc even before employing any 
    sophisticated package/monorepo management tools.
  - Simplification. No need to involve overcomplicated tools for managing many monorepositories.
  - Scalability. This approach can be applied not to Node.js ecosystem only.
  - Good integration of submodules with VSCode development environment.
  
We can consider this as a "fail fast" approach. The easiest approach, check, fix, go further.

If there is some project that actively uses this library and tends to improve it during its own
development, it could be convenient to setup this repo as a submodule into project (e.g.
packages/xde subfolder)

```bash
$ git submodule add https://github.com/XDETeam/typescript packages/xde
```

After that you can run "yarm build" in the packages/xde folder or "yarn watch" to apply changes.

## TODO:Map
Structured components map that can include not only packages provided here, but also link
third-party solutions to avoid reinventing new wheels.
