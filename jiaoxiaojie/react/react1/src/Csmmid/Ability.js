import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';  
import './Ability.css';
class Ability extends Component {
  constructor(props) {
    super(props);

  }


  
  render() {
    return (
     <div className="coop">
    <h3 className="choo">安全能力与报价</h3>
    
    <Form className="aform">
        <Row form>
          <Col sm={2}>
            <FormGroup>
              <Input placeholder="关键字" />
            </FormGroup>
          </Col>
          <Col sm={2}>
            <FormGroup>
              <Input type="select" name="select" id="exampleSelect">
            <option>所属团队</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
            </FormGroup>
          </Col>
          <Col sm={2}>
            <FormGroup>
              <Input placeholder="内部报价不少于" />
            </FormGroup>
          </Col>
           <Col sm={2}>
            <Button className="shai">筛选</Button>
          </Col>
          
          
        </Row>
    </Form>
    
    <div className="tables">
   </div>
    
    
     </div>
    );
  }
}

export default Ability;
