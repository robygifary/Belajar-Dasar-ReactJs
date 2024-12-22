import { useImmer } from "use-immer";

const initialData = {
  name: "",
  massage: "",
};

export default function ContactForm() {
  const [contact, setContact] = useImmer(initialData);

  function handleNameChange(e) {
    setContact((draft) => {
      draft.name = e.target.value;
    });
  }

  function handleMessageChange(e) {
    setContact((draft) => {
      draft.massage = e.target.value;
    });
  }

  return (
    <div>
      <h1>Contact Form</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={contact.name}
          onChange={handleNameChange}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Message"
          value={contact.massage}
          onChange={handleMessageChange}
        />
        <h1>Contact Detail</h1>
        <p>Name : {contact.name}</p>
        <p>Message : {contact.message}</p>
      </form>
    </div>
  );
}
