import Todo from "./Todo";

export default function TodoList() {
  const data = [
    {
      id: 0,
      text: "Belajar HTML",
      isCompleted: true,
    },
    {
      id: 1,
      text: "Belajar CSS",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Belajar Javascript",
      isCompleted: true,
    },
    {
      id: 3,
      text: "Belajar ReactJS",
      isCompleted: false,
    },
    {
      id: 4,
      text: "Belajar ReactJS router",
      isCompleted: false,
    },
  ];

  return (
    <ul>
      {data.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
