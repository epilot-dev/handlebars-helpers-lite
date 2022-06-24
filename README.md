# handlebars-helpers-lite

[![npm version](https://img.shields.io/npm/v/handlebars-helpers-lite.svg)](https://www.npmjs.com/package/handlebars-helpers-lite)
[![License](http://img.shields.io/:license-mit-blue.svg)](https://github.com/epilot-dev/handlebars-helpers-lite/blob/master/LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/handlebars-helpers-lite?label=gzip%20bundle)](https://bundlephobia.com/package/handlebars-helpers-lite)

Common [handlebars-helpers](https://github.com/helpers/handlebars-helpers) (source: [handlebars-kit](https://github.com/oneflow/handlebars-kit)) minimized and built with webpack.

## Usage

```sh
npm install --save handlebars-helpers-lite
npm install --save handlebars lodash moment # peerDependencies
```

```typescript
import handlebars from "handlebars";
import {
  math,
  number,
  date,
  comparison,
  array,
  collection,
  object,
  string,
} from "handlebars-helpers-lite";

handlebars.registerHelper({
  ...math,
  ...number,
  ...date,
  ...comparison,
  ...array,
  ...collection,
  ...object,
  ...string,
});
```
