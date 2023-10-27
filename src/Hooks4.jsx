// useMemo : 컴포넌트의 성능을 최적화하기 위해 사용, 이전에 계산한 값을 재사용한다는 의미
import { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  console.log("평균 값 계산");
  // 두 개의 입력 값을 입력 받아 하나의 결과 값으로 만들고 다음의 요소 연산
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length; // 평균 값 구해줌
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  //   const onInsert = (e) => {
  //     const nextList = list.concat(parseInt(number));
  //     setList(nextList);
  //     setNumber("");
  //   };

  const onInsert = useCallback(() => {
    if (isNaN(parseInt(number))) return 0;
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputEl.current.focus();
  }, [number, list]);

  const avg = useMemo(
    () => getAverage(list),
    [list]
  ); /*{리스트가 갱신될 때 useMemo // 콜벡함수}*/

  return (
    <>
      <input type="text" value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b> {avg} {/* 즉시 실행 함수 */}
      </div>
    </>
  );
};

export default Average;
