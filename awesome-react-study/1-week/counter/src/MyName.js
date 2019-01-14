import React, {Component} from 'react';
class MyName extends Component{
    render(){
        return (
            <div>Hi My name is {this.props.name}</div>
        )
    }
};
export default MyName;