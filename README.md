# handlebars-helpers-lite

Common [handlebars-helpers](https://github.com/helpers/handlebars-helpers) (source: [handlebars-kit](https://github.com/oneflow/handlebars-kit)) built for the browser with webpack.

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
