const fetch = require("node-fetch");
const anyrandom = require("anyrandom");

async function paste(title, content) {
  let t = title;
  let c = content;
  if (!title) {
    t = anyrandom.string(7);
  }
  if (!content) {
    c = title;
    t = anyrandom.string(7);
  }
  const body = {
    title: t,
    content: c,
  };

  const response = await fetch("https://pastefy.ga/api/v2/paste", {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return data.paste.id;
}

async function rawPaste(title, content) {
  let t = title;
  let c = content;
  if (!title) {
    t = anyrandom.string(7);
  }
  if (!content) {
    c = title;
    t = anyrandom.string(7);
  }
  const body = {
    title: t,
    content: c,
  };

  const response = await fetch("https://pastefy.ga/api/v2/paste", {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return data;
}

async function get(id) {
  if (!id) {
    return undefined;
  }
  const response = await fetch(`https://pastefy.ga/api/v2/paste/${id}`);
  const data = await response.json();
  if (data.exists == true) {
    return data;
  } else {
    return new TypeError(`Paste ${id} doesn't exist.`);
  }
}

async function getContent(id) {
  if (!id) {
    return undefined;
  }
  const response = await fetch(`https://pastefy.ga/api/v2/paste/${id}`);
  const data = await response.json();
  if (data.exists == true) {
    return data.content;
  } else {
    return new TypeError(`Paste ${id} doesn't exist.`);
  }
}

async function getTitle(id) {
  if (!id) {
    return undefined;
  }
  const response = await fetch(`https://pastefy.ga/api/v2/paste/${id}`);
  const data = await response.json();
  if (data.exists == true) {
    return data.title;
  } else {
    return new TypeError(`Paste ${id} doesn't exist.`);
  }
}

async function getCreated(id) {
  if (!id) {
    return undefined;
  }
  const response = await fetch(`https://pastefy.ga/api/v2/paste/${id}`);
  const data = await response.json();
  if (data.exists == true) {
    return data.created;
  } else {
    return new TypeError(`Paste ${id} doesn't exist.`);
  }
}

module.exports = {
  paste,
  get,
  rawPaste,
  getContent,
  getCreated,
  getTitle,
};
