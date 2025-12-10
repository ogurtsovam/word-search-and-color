import { Row, Col } from "react-bootstrap";

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './components/Input'
import Output from './components/Output'
import RulesForm from './forms/RulesForm'

function App() {

  return (
  <>
    <Row>
      <Col>
        <RulesForm />
      </Col>
      <Col xs xxl="3">
        <Input />
      </Col>
      <Col xs xxl="3">
        <Output />
      </Col>
    </Row>    
  </>
  )
}

export default App
