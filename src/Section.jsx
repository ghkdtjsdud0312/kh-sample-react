// 컴포넌트 합성 : 여러 개의 컴포넌트를 조합하여 하나의 컴포넌트를 만드는 것
function Heading(props) {
    return <h1>{props.text}</h1>
}
function Paragraph(props) {
    return <p>{props.text}</p>
}

function ImgUrl(props) {
    return <img src={props.url} alt="이미지 테스트"/>
}

const Section = (props) => {
    return(
        <>
            <Heading text={props.title}/>
            <Paragraph text={props.content}/>
            <ImgUrl url={props.url}/>
        </>
    );
}

export default Section;