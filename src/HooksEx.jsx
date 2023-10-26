import { useState } from "react";

const businessCard = (props) => {
  return (
    <>
      <h3>명함 정보 출력</h3>
      <p>이름 : {props.member.name}</p>
      <p>직책 : {props.member.position}</p>
      <p>회사 : {props.member.company}</p>
      <p>주소 : {props.member.addr}</p>
      <p>메일 : {props.member.email}</p>
      <p>전화 : {props.member.phone}</p>
    </>
  );
};

const UseState = () => {
  const [member, setMember] = useState({
    name: "",
    position: "",
    company: "",
    addr: "",
    email: "",
    phone: "",
  });
  const [submit, setSubmit] = useState(false);

  const onChangeName = (e) => setMember({ ...member, name: e.target.value });
  const onChangePoision = (e) =>
    setMember({ ...member, position: e.target.value });
  const onChangeCompany = (e) =>
    setMember({ ...member, company: e.target.value });
  const onChangeAddr = (e) => setMember({ ...member, addr: e.target.value });
  const onChangeEmail = (e) => setMember({ ...member, email: e.target.value });
  const onChangePhone = (e) => setMember({ ...member, phone: e.target.value });

  const onSubmit = () => {
    setSubmit(true);
  };

  return (
    <>
      <h1>회원 정보 가입</h1>
      <input
        type="text"
        placeholder="이름 입력"
        value={member.name}
        onChange={onChangeName}
      />
      <br />
      <input
        type="text"
        placeholder="직책 입력"
        value={member.position}
        onChange={onChangePoision}
      />
      <br />
      <input
        type="text"
        placeholder="회사 입력"
        value={member.company}
        onChange={onChangeCompany}
      />
      <br />
      <input
        type="text"
        placeholder="주소 입력"
        value={member.addr}
        onChange={onChangeAddr}
      />
      <br />
      <input
        type="text"
        placeholder="메일 입력"
        value={member.email}
        onChange={onChangeEmail}
      />
      <br />
      <input
        type="text"
        placeholder="폰 입력"
        value={member.phone}
        onChange={onChangePhone}
      />
      <br />
      <button onClick={onSubmit}>제출</button>
    </>
  );
};

export default UseState;
