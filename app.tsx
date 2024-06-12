import React from "react";
import * as ReactDOM from "react-dom/client";
import {
  markdownShortcutPlugin,
  MDXEditor,
} from "@mdxeditor/editor";

const appRoot = window.document.querySelector("#app-root");

if (!appRoot) {
  throw new Error("Missing app root element");
}


const plugins = [
  markdownShortcutPlugin(),
];

ReactDOM.createRoot(appRoot).render(
  <MDXEditor
    markdown='# Hello, world!'
    plugins={plugins}
  />
);

console.log('Up and running!');
