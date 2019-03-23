import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Right.css';
import { Container, Row, Col } from 'reactstrap';
import ModalFocusAfterClose from './ModalFocusAfterClose';  
class Right extends Component {
  constructor(props) {
    super(props);

  }

 
  render() {
    return (
    <div className="right1">
    <h3 className="sqcs">申请渗透测试</h3>
    <div className="tag">
    <span className="rigsp">选择类型</span><span className="dianer">...</span>
    <span className="rigsp1">填写信息</span><span className="dianer1">...</span>
    <span className="rigsp1">等待审批</span><span className="dianer1">...</span>
    <span className="rigsp1">物料审核</span><span className="dianer1">...</span>
    <span className="rigsp1">渗透开始</span><span className="dianer1">...</span>
    <span className="rigsp1">填写报告</span><span className="dianer1">...</span>
    <span className="rigsp1">审核报告</span><span className="dianer1">...</span>
    <span className="rigsp1">复测申请</span><span className="dianer1">...</span>
    <span className="rigsp1">复测确认</span><span className="dianer1">...</span>
    <span className="rigsp1">服务评价</span>
    </div>
    <h5 className="choo">请选择需要申请的渗透类型：</h5>
    <Row className="blocrow">
    <Col xs="3" className="block">
    <div className="block1">
    <a className="blocka" href="">Android APP <br/>渗透测试</a></div>
    </Col>
   <Col xs="3" className="block">
   <div className="block1">
   <a className="blocka" href="">iOS APP <br/>渗透测试</a></div>
   </Col>
   <Col xs="3" className="block">
   <div className="block1">
   <a className="blocka" href="">Web 端 <br/>渗透测试</a></div>
   </Col>
   <Col xs="3" className="block">
   <div className="block1">
   <a className="blocka" href="">智能硬件<br/>渗透测试</a></div>
   </Col>
  <Col xs="3" className="block">
  <div className="block1">
  <a className="blocka" href="">车机 <br/>渗透测试</a></div>
  </Col>
    </Row>
    
    <ModalFocusAfterClose/>
     </div>
    );
  }
}

export default Right;
