import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Form, Row, Col, InputGroup } from "react-bootstrap";

import { selectActiveInput } from "../slices/activeInputSlice";
import { selectActiveRules } from "../slices/activeRulesSlice";
import textFormatter from "../utils/textFormatter";
import formatRules from "../utils/formatRules";
import type { Rule } from "../library/baseLibrary";

function Output() {
  const dispatch = useDispatch()
  const activeInput = useSelector(selectActiveInput);
  const activeRules = useSelector(selectActiveRules)
  const [formattedHtml, setFormattedHtml] = useState("");

 useEffect(() => {
    if (!activeInput) {
      setFormattedHtml("");
      return;
    }
    const result = textFormatter(activeInput, formattedRules);
    setFormattedHtml(result);
  }, [activeInput, activeRules]);

  const rules: Rule[] = [
      { color: '#FF0000', words: ['big', 'new'] },
      { color: '#00FF00', words: ['small'] }
    ]

  const formattedRules = formatRules(activeRules);

  return (
    <>
      <h2>Output</h2>
      <Form.Control 
        as="textarea"
        className="form-control mt-3 bg-light"
        rows={10}
        value={formattedHtml}
        readOnly
      />
    </>
  );
}

export default Output;
