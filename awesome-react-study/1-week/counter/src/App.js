//import는 외부의 파일을 불러 오는 명령어
import React, { Component } from 'react';
//react 사용하려고 react라이브러리에서 React와 Component를 호출함.
import logo from './logo.svg';
import MyName from './MyName';
import Counter from './Counter'
import './App.css';
//css를 불러옴. 파일 이름은 달라도 된다.

//Component라는 react의 class를 상속 받음
class App extends Component {

  //jsx를 화면에 보여줄때 reader함수를 호출해서 리턴해야함.
  //jsx는 js를 html처럼 사용가능하게 하는 문법.
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p><Counter /></p>
          <p><MyName name="Reac"/></p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
//외부에서 import 불러오려면 export해줘야함.
//default는 하나의 모듈 혹은 class만 export할 때 써준다
//https://enyobook.wordpress.com/2016/08/17/export-default%EC%97%90-%EB%8C%80%ED%95%B4/
export default App;
