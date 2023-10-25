import { useState, useEffect } from "react";

const TableMap = () => {
  const data = [
    { id: 100, name: "카즈하", age: 21 },
    { id: 200, name: "은채", age: 20 },
    { id: 300, name: "채원", age: 22 },
    { id: 400, name: "윤진", age: 20 },
  ];
  const [mapData, setMapData] = useState("");

  useEffect(() => {
    setMapData(data);
  }, []); // 데이터베이스에서 받은 내용으로 화면이 그려지고 나타남

  const tableClickEvent = (item) => {
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
        {mapData && // 조건부 렌더링 : 데이터가 있으면 나타내주고 없으면 건너뛰기, 데이터 값이 있을 때만 사용함
          mapData.map((item) => (
            <tr key={item.id} onClick={() => tableClickEvent(item)}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableMap;
