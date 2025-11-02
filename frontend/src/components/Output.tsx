import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { selectActiveInput } from "../slices/activeInputSlice";
import textFormatter from "../utils/textFormatter";
import formatRules from "../utils/formatRules";
import type { Rule } from "../library/baseLibrary";

function Output() {
  const dispatch = useDispatch()
  const activeInput = useSelector(selectActiveInput);
  const [formattedHtml, setFormattedHtml] = useState("");

 useEffect(() => {
    if (!activeInput) {
      setFormattedHtml("");
      return;
    }
    const result = textFormatter(activeInput, formattedRules);
    setFormattedHtml(result);
  }, [activeInput]);

  const rules: Rule[] = [
      { color: '#FF0000', words: ['big', 'new'] },
      { color: '#00FF00', words: ['small'] }
    ]

  const formattedRules = formatRules(rules);

  return (
    <>
      <textarea
        className="form-control mt-3"
        rows={10}
        value={formattedHtml}
        readOnly
      />
    </>
  );
}

export default Output;
