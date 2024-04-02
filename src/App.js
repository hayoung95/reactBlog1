/* eslint-disable */

import Ract, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [titles, updateTitles] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [upCount, addUpCount] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>ReactBlog</div>
      </div>
      <div>
        <button onClick={()=>{
          let copy = [...titles];
          copy.sort((a,b)=>{
            const upperCaseA = a.toUpperCase();
            const upperCaseB = b.toUpperCase();

            if(upperCaseA > upperCaseB) return 1;
            if(upperCaseA < upperCaseB) return -1;
            if(upperCaseA === upperCaseB) return 0;
           })
          
           updateTitles(copy);
          }}>가나다순 정렬</button>
        <button onClick={()=>{
          let copy = [...titles];
          copy[0] = '여자 코트 추천';
          updateTitles(copy);
          }}>수정</button>
      </div>
      <div className = "list">
        <h3> { titles[0] } <spam onClick={ ()=>{addUpCount(upCount + 1)}}>👍🏻</spam> { upCount } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className = "list">
        <h3> { titles[1] } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className = "list">
        <h3> { titles[2] } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <Modal></Modal>
    </div>
  );
}

function Modal() {
  return (
  <div className="modal">
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}

export default App;
