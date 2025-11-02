import { useDispatch, useSelector } from "react-redux";

import { selectActiveInput, setActiveInput } from "../slices/activeInputSlice";

function Input() {
  const dispatch = useDispatch();
  const activeInput = useSelector(selectActiveInput);

  function setInputHtml(value: string) {
    dispatch(setActiveInput(value))
  } 

  return (
  <>
    <textarea
      className="form-control"
      rows={10}
      value={activeInput}
      onChange={(e) => setInputHtml(e.target.value)}
    />
  </>
  );
}

export default Input;