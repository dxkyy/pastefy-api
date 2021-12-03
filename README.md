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
const { getCreated } = require("pastefy");

const result = await getCreated("Wz6OMvdT");
console.log(result);
```

###### Output

```bash
2021-12-03 15:51:27.0
```


