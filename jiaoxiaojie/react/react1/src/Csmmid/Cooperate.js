import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cooperate.css';
import { Col, Button, Form, FormGroup, Label, Input, FormText,InputGroup, InputGroupAddon } from 'reactstrap';
  
class Cooperate extends Component {
  constructor(props) {
    super(props);

  }


  
  render() {
    return (
     <div className="coop">
    <h3 className="choo">申请合作项目</h3>
    
    <div className="tag">
    <span className="rigsp">在线申请</span><span className="dianer">...</span>
    <span className="rigsp1">业务总监审批</span><span className="dianer1">...</span>
    <span className="rigsp1">安全总监审批</span>
    </div>
    
     <Form className="formz">
        <FormGroup row>
          <Label sm={2}>项目名称：</Label>
          <Col sm={10}>
            <Input className="inselect"/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>项目价值：</Label>
          <Col sm={10}>
            <InputGroup>
        <Input className="inselect"/>
        <InputGroupAddon addonType="prepend" style={{fontSize:"14px"}}>万元</InputGroupAddon>
      </InputGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>结算方式:</Label>
          <Col sm={10}>
            <Input type="select" name="select" id="exampleSelect" className="inselect">
            <option>请选择结算方式</option>
            <option>价值结算</option>
            <option>百汇结算</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>申请部门:</Label>
          <Col sm={10}>
            <Input type="select" name="select" id="exampleSelect" className="inselect">
            <option>请选择部门</option>
            <option>1</option>
            <option>2</option>
            <option>1</option>
            <option>2</option>
            <option>1</option>
            <option>2</option>
            <option>1</option>
            <option>2</option>
            </Input>
          </Col>
        </FormGroup>
        
        <FormGroup row>
          <Label sm={2}>业务方总监:</Label>
          <Col sm={10}>
            <Input placeholder="填写邮箱前缀,注意后缀数字" className="inselect"/>
          </Col>
        </FormGroup>
        
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>安全接口人:</Label>
          <Col sm={10}>
            <Input type="select" name="select" id="exampleSelect" className="inselect">
            <option>请选择安全接口人</option>
            <option>价值结算</option>
            <option>百汇结算</option>
            </Input>
          </Col>
        </FormGroup>
        
        <FormGroup row>
          <Label sm={2}>项目背景:</Label>
          <Col sm={10}>
            <Input type="email"/>
          </Col>
        </FormGroup>
        
         <FormGroup row>
          <Label sm={2}>添加项目<br/>文档(非必须):</Label>
          <Col sm={10}>
            <Input type="file" className="file1"/>
           
          </Col>
        </FormGroup>
        
        <FormGroup row>
          <Label sm={2}>项目成果展示：</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" placeholder="1.收益展示
2.价值计算方法" className="inselect"/>
          </Col>
        </FormGroup>
       
       
        <FormGroup check row>
          <Col>
            <Button className="sumbmitbut">提交申请</Button>
          </Col>
        </FormGroup>
      </Form>
    
    
   
    
    
     </div>
    );
  }
}

export default Cooperate;
