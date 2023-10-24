// props 기본값 설정 : defaultProps
const MyComponent = props => {
    return <div>안녕하세요. 제 이름은 {props.name} 입니다. 나이는{props.age} 입니다.</div>
}

MyComponent.defaultProps = {
    name: "기본이름",
    age: "22"
}

export default MyComponent;