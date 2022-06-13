import React from "react";
//ReactDomはHTMLに反映する時に必要なももので、経由させるだけの今回のファイルには必要ない
import ColorfullMessage from "./compornents/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert("yeahhhhhhh");
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfullMessage color="blue">元気ですか？</ColorfullMessage>
      <ColorfullMessage color="pink">元気です！</ColorfullMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
//別の場所にApp関数をエクスポートできるという指定
//ファイルの拡張子はjsでも良いが見分けやすいようにコンポーネントにはjsxを使う
//コンポーネントには始め大文字のキャメルケース、パスカルケースを使うようにしよう
