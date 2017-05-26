# is-programme-id

Tests if a string is in the format of a BBC programme identifier. It does not check if it represents a known programme.

## Install

```
$ yarn add is-programme-id
```

## Usage

```js
const isProgrammeID = require('isProgrammeID');

isProgrammeID('p050hssx');   // true
isProgrammeID('abc');   // false

```
