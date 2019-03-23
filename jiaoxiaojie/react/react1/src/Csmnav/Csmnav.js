import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Csmnav.css';
import { Container, Row, Col } from 'reactstrap';
import './logo.png';
  
class Csmnav extends Component {
  constructor(props) {
    super(props);

  }
 
  
  render() {
    return (
     <div className="nav1">
        <Row className="nav11">
          <Col xs="2" className="navc">
          
          </Col>
          <Col xs="10" className="navz">
          
          <a className="lod" href="">xiaoyao06
          <i className="fa fa-sort-desc i1"></i>
          <i className="fa fa-sort-asc i2"></i>
          
       <div className="lod1" href="">
          <i className="fa fa-upload i3" ></i>
          退出</div>
          </a>
         
          </Col>
         </Row>
        </div>
    );
  }
}

export default Csmnav;
