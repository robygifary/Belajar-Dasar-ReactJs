import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext";

export default function Note({ note }) {
  const [isEditting, setIsEditting] = useState(false);
  const dispatch = useContext(NotesDispatchContext);

  let component;

  function handleChangeText(e) {
    dispatch({
      ...note,
      type: "CHANGE_NOTE",
      text: e.target.value,
    });
  }

  if (isEditting) {
    component = (
      <>
        <input type="text" value={note.text} onChange={handleChangeText} />
        <button onClick={() => setIsEditting(false)}>Save</button>
      </>
    );
  } else {
    component = (
      <>
        {note.text}
        <button onClick={() => setIsEditting(true)}>Edit</button>
      </>
    );
  }

  function handleChangeDone(e) {
    dispatch({
      ...note,
      type: "CHANGE_NOTE",
      done: e.target.checked,
    });
  }

  function handleDelete() {
    dispatch({
      type: "DELETE_NOTE",
      id: note.id,
    });
  }

  return (
    <label>
      <input type="checkbox" checked={note.done} onChange={handleChangeDone} />
      {component}
      <button onClick={handleDelete}>Delete</button>
    </label>
  );
}
