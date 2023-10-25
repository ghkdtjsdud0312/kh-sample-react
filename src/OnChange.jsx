// onChange 이벤트 핸들링(댓글할 때 사용)
import { useState } from "react";

const EventPractice = () => {
  const [message, setMessage] = useState("안녕하세요");
  const changeMsg = (e) => {
    setMessage(e.target.value); // 이벤트가 일어난 타겟을 찾아라, 들어왔던 값을 여기서 읽어 낼 수 있음
  };
  return (
    <>
      <h1>이벤트 실습</h1>
      <input type="text" placeholder="이름을 입력하세요" onChange={changeMsg} />
      <h2>입력 받은 메시지 : {message}</h2>
    </>
  );
};

export default EventPractice;
