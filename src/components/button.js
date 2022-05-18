import React from 'react';
import './App.css';

const btnStyle = {
  color: "white",
  background: "teal",
  padding: ".375rem .75rem",
  border: "1px solid teal",
  borderRadius: ".25rem",
  fontSize: "1rem",
  lineHeight: 1.5,
  cursor: "pointer",
  float: "left",
};

function Button(props){
  return(
      <div className='button-main'>
          <a href={props.adrress}><button style={btnStyle}>{props.title}</button></a>
      </div>
  );
}

function App(){
  const adrress= [
    {id:1, _adrress:'/mainmenu.html'},
    {id:2, _adrress:'/setting.html'},
    {id:3, _adrress:'/broad.html'}
  ]

  return(
    <div className='Background'>
      <div className='button-menu'>
        <ol>
          <li><Button title="메인 메뉴"></Button></li>
          <li><Button title="환경 설정"></Button></li>
          <li><Button title="게시판"></Button></li>
        </ol>
      </div>
    </div>

  );
}

export default App;
