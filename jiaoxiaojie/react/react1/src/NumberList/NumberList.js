
import React, { Component } from 'react';
import './list.css';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
 import { Button,ListGroup,ListGroupItem } from 'reactstrap';

class NumberList extends React.Component {
                        constructor(props) {
               super(props);
                 this.state = {style:"red",inde:[]};
                 this.dh = this.dh.bind(this);
                 this.del = this.del.bind(this);
           } 
          
          
         
          dh(event){
              var c=event.target.getAttribute("datak");
              var s=this.state.inde
              var g=_.indexOf(s, c+"")
              if(g==-1){
                 s.push(c); 
              }
              else{
                 s.splice(g,1); 
              }
              this.setState({
                  inde: s
              });
          }
           
            del(event){
               var c=event.target.getAttribute("datak");
               console.log(c);
               var numbers=this.props.numbers;
               console.log(numbers);
                numbers.splice(c,1);
               this.setState({numbers:numbers}) 
           }
           
           change(){
               
           }
           
           
            
           render() {
               var st=this.state.style;
               var style={
                   color:st,
                 
               }
               var ll="ll";
              const numbers = this.props.numbers;
              const listItems =numbers.map((number,index) =>
               
               {
                   if(_.indexOf(this.state.inde, index+"")>-1){
                   style = {
                   color:'blue'
                   }
                    var ll="lo";
               }else{
                   style = {
                   color:'red'
                   }
                    var ll="ll";
                    
               }
               
                return(
                <li  className={ll} style={style} key={number.toString()} onClick={()=>this.props.get(this.state.numbers)}>
                   <input type="checkbox" onChange={this.change} />
                   {number}
                   <Button className="b1"  color="warning" size="sm" datak={index} onClick={this.dh}>点击完成</Button>{' '}
                   <Button className="bb" color="danger" size="sm" datak={index} onClick={this.del}>删除</Button>
                   
                 </li>
                 
                ) 
               }
               );
               
               return (
               <ul className="ull">{listItems}</ul>
               
               
               )
           }
           
}          
export default NumberList;