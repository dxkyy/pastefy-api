# pastefy

pastefy is an API for [Pastefy.ga](https://pastefy.ga/).

![image](https://dxkyy.kill-all.men/5hjwhGlQh.png)

## Install the package📥

```bash
npm install pastefy
```

# Functions📚

### Paste📄

```js
const { paste } = require("pastefy");

const result = await paste("Title", "Content");
console.log(result);
```

##### Output

```bash
at3vJTnP
```

### Raw Paste🖥️

```js
const { rawPaste } = require("pastefy");

const result = await rawPaste("Title", "Content");
console.log(result);
```

###### Output

```bash
{
  success: true,
  paste: {
    encrypted: false,
    created: '2021-12-03 15:40:45.255',
    exists: true,
    id: 'uC4euZRS',
    title: 'Title',
    type: 'PASTE',
    content: 'Content',
    raw_url: '/uC4euZRS/raw'
  }
}
```

### Get🔎

```js
const { get } = require("pastefy");

const result = await get("Wz6OMvdT");
console.log(result);
```

###### Output

```bash
{
  encrypted: false,
  created: '2021-12-03 15:51:27.0',
  exists: true,
  id: 'Wz6OMvdT',
  title: 'Pastefy',
  type: 'PASTE',
  content: 'NPM API for https://pastefy.ga/',
  raw_url: '/Wz6OMvdT/raw'
}
```

### Get Title🔎

```js
const { getTitle } = require("pastefy");

const result = await getTitle("Wz6OMvdT");
console.log(result);
```

###### Output

```bash
Pastefy
```

### Get Content🔎

```js
const { getContent } = require("pastefy");

const result = await getContent("Wz6OMvdT");
console.log(result);
```

###### Output

```bash
NPM API for https://pastefy.ga/
```

### Get Created At🔎

```js
const { get } = require("pastefy");

const result = await get("Wz6OMvdT");
console.log(result.created);
```

###### Output

```bash
2021-12-03 15:51:27.0
```

### Get Folder📁

```js
const { folder } = require("pastefy");

const result = await folder("u3jEjS4v");
console.log(result);
```

###### Output

```bash
{
  user_id: 'KSdtLPTK',
  children: [],
  name: 'demo',
  exists: true,
  id: 'u3jEjS4v',
  pastes: [
    {
      folder: 'u3jEjS4v',
      encrypted: false,
      user_id: 'KSdtLPTK',
      created: '2021-12-03 16:57:52.0',
      exists: true,
      id: 'AfUkFhzh',
      title: 'Demo Paste',
      type: 'PASTE',
      content: 'NPM API for https://pastefy.ga/',
      raw_url: '/AfUkFhzh/raw'
    }
  ]
}
```
