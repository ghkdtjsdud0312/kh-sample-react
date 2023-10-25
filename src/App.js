import { Fragment } from "react";
import "./App.css";
import Section from "./Section";
import MyComponent from "./MyComponent";
import Say from "./Say";
import Clock from "./Clock";
import EventPractice from "./OnChange";
import EventHandler from "./EventHandler";
import FruitSelect from "./FruitSelect";
import RadioButton from "./RadioButton";
import Table from "./Table";
import TableMap from "./TableMap";

function App() {
  return (
    <>
      {/* <Section title="스포츠" content="This is the content for section 1."/>
        <Section title="정치" content="This is the content for section 2."/> */}
      {/* <MyComponent name="곰돌이사육사" age={30}>
        안녕하세요^^
      </MyComponent> */}
      {/* <Say /> */}
      {/* <Clock /> */}
      {/* <EventPractice /> */}
      {/* <EventHandler /> */}
      {/* <FruitSelect /> */}
      {/* <RadioButton /> */}
      {/* <Table /> */}
      <TableMap />
    </>
  );
}

export default App;
