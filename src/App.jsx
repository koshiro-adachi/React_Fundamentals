/*eslint react-hooks/exhaustive-deps:off*/
import React, { useEffect, useState } from "react";
//ReactDomはHTMLに反映する時に必要なももので、経由させるだけの今回のファイルには必要ない
import ColorfullMessage from "./compornents/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickCountReset = () => {
    setNum(0);
    setFaceShowFlag(false);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfullMessage color="blue">元気ですか？</ColorfullMessage>
      <ColorfullMessage color="pink">元気です！</ColorfullMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickCountReset}>カウントリセット</button>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(._.)</p>}
    </>
  );
};

export default App;
//別の場所にApp関数をエクスポートできるという指定
//ファイルの拡張子はjsでも良いが見分けやすいようにコンポーネントにはjsxを使う
//コンポーネントには始め大文字のキャメルケース、パスカルケースを使うようにしよう
