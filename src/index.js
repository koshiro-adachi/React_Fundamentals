import React from "react";
import ReactDom from "react-dom";
import App from "./App"; //同じ階層のファイルからApp関数を持ってくる

ReactDom.render(<App />, document.getElementById("root"));
