import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react";
import { Button, Form, Row, Col, InputGroup } from "react-bootstrap";

import { setActiveRules, selectActiveRules } from "../slices/activeRulesSlice"
import type { Rule } from "../library/baseLibrary";

function RulesBox() {
  const dispatch = useDispatch();
  const [rules, setRules] = useState([])
  const [texts, setTexts] = useState<string[]>([]);
  const activeRules = useSelector(selectActiveRules)
  useEffect(() => {
    if (rules) {
      dispatch(setActiveRules(rules))
    } else {
      setRules([])
      dispatch(setActiveRules([]))
    }
  }, [rules])

  const updateRules = (newRules: Rule[]) => {
    setRules(newRules);
  };

  const handleAddRule = () => {
    updateRules([...rules, { words: [], color: "#000000" }]);
  };

  const handleRemoveRule = (index: number) => {
    const newRules = rules.filter((_, i) => i !== index);
    updateRules(newRules);
  };

  const handleWordsSubmit = (value: string, index: number) => {
    const words = value.split(",").map(w => w.trim())
    console.log(words[0])
    const newRules = rules.map((rule, i) => i === index ? { ...rule, words } : rule )
    updateRules(newRules);
  };

  const handleColorChange = (color: string, index: number) => {
    const newRules = rules.map((rule, i) => i === index ? { ...rule, color } : rule )
    updateRules(newRules);
  };

    return (
  <>
  <h2>Styling Rules</h2>
    <div className="p-2 border rounded mt-3 bg-light">
      {rules.map((rule, index) => (
        <Row key={index} className="mb-2 align-items-center">
          <Col >
            <Form.Label>Words: </Form.Label>
            <Form.Control
              placeholder=""
              value={texts[index]}
              onBlur={(e) => handleWordsSubmit(e.target.value, index)}
            />
          </Col>

          <Col xs="auto">
            <Form.Label>Color</Form.Label>
            <InputGroup>
              <Form.Control
                type="color"
                value={rule.color}
                onChange={(e) => handleColorChange(e.target.value, index)}
                style={{ width: "60px" }}
              />
            </InputGroup>
          </Col>

          <Col xs="auto" className="mt-4">
            <Button 
              className="" 
              variant="primary" 
              type="submit" 
              size="sm"
            >
              ✓
            </Button>
          </Col>

          <Col xs="auto" className="mt-4">
            <Button
              className=""
              variant="outline-danger"
              size="sm"
              onClick={() => handleRemoveRule(index)}
            >
              ✕
            </Button>
          </Col>
        </Row>
      ))}

      <Button variant="primary" onClick={handleAddRule} className="mt-3">
        + Add Color
      </Button>
    </div>
  </>
  );
}

export default RulesBox