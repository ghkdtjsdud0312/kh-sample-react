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
import CreateRef from "./UseRef";
import UserList from "./UserList";
import TodoList from "./TodoList";
import NameCard from "./NameCard";
import MemberInfo from "./Hooks2";
import Counter2 from "./Hooks3";
import Average from "./Hooks4";

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
      {/* <TableMap /> */}
      {/* <CreateRef /> */}
      {/* <UserList /> */}
      {/* <TodoList /> */}
      {/* <Counter /> */}
      {/* <NameCard /> */}
      {/* <MemberInfo /> */}
      {/* <Counter2 /> */}
      <Average />
    </>
  );
}

export default App;
