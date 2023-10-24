import { Fragment } from "react";
import './App.css';



function App() {
  const member = {
    name: "곰돌이사육사",
    job: "개발자",
    addr: "경기도 수원시",
    gender: "남성"
  };

  const getGeeting = (user) => {
    return (user) ? <h1>환영합니다. {member.name}</h1> : <h1>환영합니다. 방문자님.</h1>;
  };

  // 스타일 이름은 전부 카멜 표기법으로 변경 됨
    const style = {
      backgroundColor: "#222",
      color: "royalBlue",
      fontSize: "2em",
    }
  

  return (
    <>
      <h1 style={{color: "red"}}>안녕하세요. 제 이름은 {member.name}이고, 나이는 {member.age}이며, 주소는 {member.addr} 입니다.</h1>
      {/* 조건부 렌더링 : 3항 연산자 사용하는 방법 */}
      {member.name === "리엑트" ? <h1>제 이름은 리엑트 입니다.</h1> : <h2>리엑트 아님</h2>}

      {/*조건부 렌더링 : AND 연산자 사용*/}
      {member.name === "곰돌이사육사" && <h1 style={style}>곰돌이사육사님이 로그인 하셨습니다.</h1>}
      <div className="App">
        <p className="title-name">안녕하세요. 저는 {member.name}입니다.</p>
        <p className="title-name">직업은 {member.job}</p>
        <p className="title-name">주소는 {member.addr}</p>
        <p className="title-name">성별은 {member.gender}</p>
        <div>{getGeeting(true)}</div>
      </div>
      <br/>
    </>
   )
  };
export default App;
