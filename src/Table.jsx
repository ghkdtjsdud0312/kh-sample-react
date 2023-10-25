import React from "react"; // 회원정보 넘어가게하기 위해서 사용

const Table = () => {
  const data = [
    { id: 1, name: "장원영", age: 20 },
    { id: 2, name: "이서", age: 18 },
    { id: 3, name: "가을", age: 22 },
    { id: 4, name: "리즈", age: 21 },
  ];
  const handleTableRowClick = (item) => {
    console.log(item);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>이름</th>
          <th>나이</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} onClick={() => handleTableRowClick(item)}>
            {" "}
            {/* key={item.id} 유일한 식별자 값 넣어줘야 함 데이터베이스에서*/}
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
