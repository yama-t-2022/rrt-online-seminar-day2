//1:08:36

import React from "react";
import { Counter } from "./features/counter/Counter";

function App() {
  return (
    // フラグメント：   https://ja.reactjs.org/docs/fragments.html
    // NOTE 短い記法でもOK
    <React.Fragment>
      <Counter />
    </React.Fragment>
  );
}

export default App;
