Angular With mxGraph
====

a demo project of Angular and mxGraph.

### Run This Demo
```shell
git clone --recursive https://github.com/hungtcs/angular-with-mxgraph.git
cd angular-with-mxgraph
npm start
```

### How to make mxgraph work with angular in your project
1. download mxGraph and put to `/src/assets/lib`
2. add `src/assets/lib/mxgraph/javascript/mxClient.js` to `angular.json` in `build.options.scripts`
3. set `mxBasePath` to `/assets/lib/mxgraph/javascript/src` in `index.html`
4. put [`mxgraph-type-definitions`](https://github.com/hungtcs/mxgraph-type-definitions) under `src/types`

now your can use mxGraph everywhere in your project.
