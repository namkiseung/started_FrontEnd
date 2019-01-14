import React, {Component} from 'react';
class Counter extends Component{
    state = {
        number : 0, //1씩 증가하는 예제변수
        dou_num : 0 //2씩 증가하는 변수
    }
    //2씩 증가하는 함수 선언
    handle_Increase = () =>{
        this.setState({
            dou_num : this.state.dou_num + 2
        })
    }
    //2씩 감소하는 함수 선언
    handle_Decrease = () =>{
        this.setState({
            dou_num : this.state.dou_num - 2
        })
    }
    //state의 dou_num를 0으로 초기화
    reset_dou_num = () =>{
        this.setState({
            dou_num : 0
        })
    }
    han_Increase = () =>{
        this.setState({
            number : this.state.number + 1
        })
    }
    han_Decrease = () =>{
        this.setState({
            number : this.state.number - 1
        })
    }
    reset_number = () =>{
        this.setState({
            number : this.state.number = 0
        })
    }
    render(){
        return (
            <div>
                <h1>Counter</h1>
                <div>값  : {this.state.number}</div>
                <button onClick={this.han_Increase}>+</button>
                <button onClick={this.han_Decrease}>-</button>
                <button onClick={this.reset_number}>reset</button>
                <br></br>
                <h1>Counter</h1>
                <div>값  : {this.state.dou_num}</div>                
                <button onClick={this.handle_Increase}>+</button>
                <button onClick={this.handle_Decrease}>-</button>
                <button onClick={this.reset_dou_num}>reset</button>
            </div>
        )
    } 
};
export default Counter;