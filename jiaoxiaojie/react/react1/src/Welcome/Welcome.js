 import React, { Component } from 'react';
 import NumberList from '../NumberList/NumberList';
 
import 'bootstrap/dist/css/bootstrap.css';
 import { Button,Input } from 'reactstrap';

 import './wel.css';
  class Welcome extends Component {
                constructor(props) {
       super(props);
       this.state = {value: 'Hello Runoob!',numbers:["123"]};
      
       this.ch = this.ch.bind(this);
       this.dian = this.dian.bind(this);
       this.quan = this.quan.bind(this);
       this.onc=this.onc.bind(this);
   }
                ch(event) {
                	this.setState({value: event.target.value});
                 
                }
                 dian(){
                  if(this.state.value!=""){
                   	this.setState({numbers: this.state.numbers.concat(this.state.value)});
                     this.setState({value:""});
                     }else{
                         alert("qqq");
                     }
                }
                onc(numbers){
                   this.setState({
                          numbers:this.state.numbers
                       });
               }
                quan(){
                    
                }
                
   render() {
     return (
     <div className="panel panel-info">
	<div className="panel-heading">
		<h3 className="panel-title">React1</h3>
	</div>
     <div className="panel-body" >
 		 <h1 id="nei">我的任务列表,共{this.state.numbers.length}项</h1>
         <div id="list1">
            
            <NumberList numbers={this.state.numbers} get={this.onc}  checked={this.state.check}/>
              
         </div>
         <div id="list2">
            
             <Input type="text" id="in" placeholder="请输入新任务名称" value={this.state.value} onChange={this.ch}/>
             <Button outline color="danger" onClick={this.dian}>添加新任务</Button>
             
         </div>
       
 	</div>
    </div>
    );
   }
 }
 
 
 
 export default Welcome;