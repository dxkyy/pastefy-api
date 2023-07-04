# pastefy

pastefy is an API-Wrapper for [Pastefy.app](https://pastefy.app/).

![image](https://dxkyy.kill-all.men/5hjwhGlQh.png)

## Install the package📥

```bash
npm install pastefy
```

# Functions📚

## Pastes📄

### Create 📝

```ts
import Pastefy from "pastefy";
const pastefy = new Pastefy("API_KEY");

const result = await pastefy.paste.create("Title", "Content", options);
console.log(result);
```

##### Output

```bash
{
  success: true,
  paste: {
    exists: true,
    id: 'iXUlzofQ',
    content: 'Pastefy',
    title: 'Test',
    encrypted: false,
    visibility: 'UNLISTED',
    raw_url: 'https://pastefy.app/iXUlzofQ/raw',
    type: 'PASTE',
    created_at: '2023-07-04 18:16:19.35'
  }
}
```

### Get 🔎

```ts
import Pastefy from "pastefy";
const pastefy = new Pastefy("API_KEY");

const result = await pastefy.paste.get("iXUlzofQ");
console.log(result);
```

###### Output

```bash
{
  exists: true,
  id: 'iXUlzofQ',
  content: 'Pastefy',
  title: 'Test',
  encrypted: false,
  visibility: 'UNLISTED',
  raw_url: 'https://pastefy.app/iXUlzofQ/raw',
  type: 'PASTE',
  created_at: '2023-07-04 18:16:19.0'
}
```

### Edit ✏️

```ts
import Pastefy from "pastefy";
const pastefy = new Pastefy("API_KEY");

const result = await pastefy.paste.edit("iXUlzofQ", "New Content", options);
console.log(result);
```

#### Output

```bash
{ success: true }
```

### Delete 🗑️

```ts
import Pastefy from "pastefy";
const pastefy = new Pastefy("API_KEY");

const result = await pastefy.paste.delete("iXUlzofQ");
console.log(result);
```

#### Output

```bash
{ success: true }
```

## Folders📁

### Create 📝

```ts
import Pastefy from "pastefy";
const pastefy = new Pastefy("API_KEY");

const result = await pastefy.folder.create("Title");
console.log(result);
```

#### Output

```bash
{
  success: true,
  folder: {
    exists: true,
    id: 'sr7Wcntu',
    name: 'Test',
    user_id: 'KSdtLPTK',
    children: [],
    pastes: [],
    created: '2023-07-04 18:34:53.722'
  }
}
```

### Get 🔎

```ts
import Pastefy from "pastefy";
const pastefy = new Pastefy("API_KEY");

const result = await pastefy.folder.get("sr7Wcntu");
console.log(result);
```

#### Output

```bash
{
  exists: true,
  id: 'sr7Wcntu',
  name: 'Test',
  user_id: 'KSdtLPTK',
  children: [],
  pastes: [
    {
      exists: true,
      id: 'TEiOgP7k',
      content: 'console.log("Hello World");',
      title: 'Test Paste',
      encrypted: false,
      folder: 'sr7Wcntu',
      user_id: 'KSdtLPTK',
      visibility: 'UNLISTED',
      raw_url: 'https://pastefy.app/TEiOgP7k/raw',
      type: 'PASTE',
      created_at: '2023-07-04 18:35:58.0'
    }
  ],
  created: '2023-07-04 18:34:53.0'
}
```

### Edit ✏️

```ts
import Pastefy from "pastefy";
const pastefy = new Pastefy("API_KEY");

const result = await pastefy.folder.edit("sr7Wcntu", "New Title");
console.log(result);
```

#### Output

```bash
{ success: true }
```

### Delete 🗑️

```ts
import Pastefy from "pastefy";
const pastefy = new Pastefy("API_KEY");

const result = await pastefy.folder.delete("sr7Wcntu");
console.log(result);
```

#### Output

```bash
{ success: true }
```
