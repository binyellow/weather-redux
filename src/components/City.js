import React,{Component} from 'react';

class City extends Component{
  handDelete(){
    this.props.handDelete(this.props.index)
  }
  handClick(e){
    // e.preventDefault();
    // console.log(e.target.innerHTML);
    this.props.handClick(e.target.innerHTML);
  }
  render(){
    return(
      <span>
        <a href="#" onClick={this.handClick.bind(this)}>{this.props.city}</a>
        <sup onClick={this.handDelete.bind(this)}>×</sup>
      </span>
    )
  }
}
export default City
