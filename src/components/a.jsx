import React, { useState } from 'react';

export default function Apage(props) {
  let { changeState } = props
  const [value, setValue] = useState("")
  const changeValue = (e) => {
    setValue(e.target.value)
  }
  return (
    <>
      <input type="text" onChange={changeValue} />
      <button onClick={() => changeState(value)}>确定</button>
    </>
  );
}
