import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";
import Container from "./Container";
import TodoList from "../todolist/TodoList";
import Table from "../table/Table";
import AlertButton from "../button/AlertButton";
import MyButton from "../button/MyButton";
import Toolbar from "../button/Toolbar";
import SearchForm from "../form/SearchForm";
import SayHelloForm from "../form/SayHelloForm";
import Counter from "../form/Counter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <HelloWorld />
      <TodoList />
      <Table />
      <AlertButton text="Click Me" message="You love me" />
      <MyButton text="Smash Me" onSmash={() => alert("You Smash Me")} />
      <Toolbar
        onClick={(e) => {
          e.stopPropagation();
          alert("You click ToolBar");
        }}
      />
      <SearchForm />
      <SayHelloForm />
      <Counter />
    </Container>
  </StrictMode>
);
