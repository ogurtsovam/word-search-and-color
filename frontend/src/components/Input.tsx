import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { selectActiveInput, setActiveInput } from "../slices/activeInputSlice";

function Input() {
  const dispatch = useDispatch();
  const activeInput = useSelector(selectActiveInput);
  const [input, setInput] = useState("");
  useEffect(() => {
    if (activeInput) {
      setInput(activeInput)
    } else {
      setInput("")
    }
  }, [activeInput]);

  function setInputHtml(value: string) {
    dispatch(setActiveInput(value))
  } 

  return (
  <>
    <textarea
      className="form-control"
      rows={10}
      value={input}
      onChange={(e) => setInputHtml(e.target.value)}
    />
  </>
  );
}

export default Input;