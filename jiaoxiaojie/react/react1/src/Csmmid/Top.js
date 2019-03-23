import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Top.css';
import { Container, Row, Col,UncontrolledTooltip} from 'reactstrap';
  
class Top extends Component {
  constructor(props) {
    super(props);

   
  }
  huadong(){
      window.scrollTo({
          left:0,
          top:0,
          behavior:'smooth',
          
      });
  }
  
  
  render() {
    return (
     <div className="topp" onClick={this.huadong}  id="UncontrolledTooltipExample">
     <i className="fa fa-play-circle fa-rotate-270 fa-2x i7" aria-hidden="true"></i>
     <UncontrolledTooltip placement="left" target="UncontrolledTooltipExample">
        返回顶部
      </UncontrolledTooltip>
     </div>
    );
  }
}

export default Top;
