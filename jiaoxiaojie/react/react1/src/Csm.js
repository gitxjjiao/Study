import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Csm.css';
import Csmnav from './Csmnav/Csmnav';
import Csmmid from './Csmmid/Csmmid';
import Top from './Csmmid/Top';
import { Container, Row, Col } from 'reactstrap';
class Csm extends Component {
  render() {
    return (
      <div className="csm">
          <div className="bigc">
      <div className="csmnav">
      <Csmnav />
      
      </div>
     
      <div className="mid">
      <Csmmid/>
       
      </div>
      
     
      
      <div className="topd">
      <Top/>
      </div>
     </div>
      
      </div>
    );
  }
}

export default Csm;
