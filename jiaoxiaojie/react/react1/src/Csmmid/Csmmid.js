import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Csm from '../Csm';
import './Csmmid.css';
import Ability from './Ability';
import Right from './Right';
import Cooperate from './Cooperate';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Link } from 'react-router-dom';
import { Container, Row,Col,Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
  
class Csmmid extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
     
    };
  }

  toggle(){
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  render() {
  
    return (
     <div className="mid1">
     <Row className="midle">
    <Col sm="2" className="left">
    <p className="leftp1"><i className="fa fa-th-large i4" ></i>首页</p>
    
     <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
        <DropdownToggle
          tag="span"
          onClick={this.toggle}
          data-toggle="dropdown"
          aria-expanded={this.state.dropdownOpen}
        >
          <div className="select">
          <i className="fa fa-pencil i5" ></i>
          sbp
          <i className="fa fa-chevron-down i6" ></i>
          </div>
        </DropdownToggle>
        
        <DropdownMenu className="menu1">
        
          <div className="lie"><a href="./Right" className="liea">申请渗透测试</a></div>
          <div className="lie"><a href="./Cooperate" className="liea">渗透测试列表</a></div>
          <div className="lie" >申请合作项目</div>
          <div className="lie" >合作项目列表</div>
          <div className="lie" >安全能力与报价</div>
        </DropdownMenu>
        
       
      </Dropdown>
      
    </Col>
    <Col sm="10" className="right">

 <Router history={ browserHistory }>
                <Route path="/" component={Right}/>
                <Route path="/Right" component={Right} />
                <Route path="/Cooperate" component={Cooperate} />
            </Router> 
    </Col>
     </Row>
     
     </div>
    
    );
  }
}

export default Csmmid;
