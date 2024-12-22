import "./HelloWorld.css";

export default function HelloWorld() {
  const props = {
    text: "Hello World Spread Syntax",
  };
  return (
    <div>
      <HeaderHelloWorld {...props} />
      <ParagraphHelloWorld />
    </div>
  );
}

function HeaderHelloWorld({ text = "lupa text" }) {
  return <h1 className="title">{text.toUpperCase()}</h1>;
}

function ParagraphHelloWorld() {
  const paragraph = "Selamat belajar ReactJs";
  return <p className="content">{paragraph.toLowerCase()}</p>;
}
