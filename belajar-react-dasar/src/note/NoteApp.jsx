import { useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { NotesContext, NotesDispatchContext } from "./NoteContext";

let id = 0;
const initialNote = [
  { id: id++, text: "Belajar HTML", done: false },
  { id: id++, text: "Belajar CSS", done: true },
  { id: id++, text: "Belajar Javascript", done: false },
  { id: id++, text: "Belajar MongoDB", done: false },
];

function notesReducer(notes, action) {
  if (action.type === "ADD_NOTE") {
    notes.push({
      id: id++,
      text: action.text,
      done: false,
    });
  } else if (action.type === "CHANGE_NOTE") {
    const index = notes.findIndex((note) => note.id === action.id);
    notes[index].text = action.text;
    notes[index].done = action.done;
  } else if (action.type === "DELETE_NOTE") {
    const index = notes.findIndex((note) => note.id === action.id);
    notes.splice(index, 1);
  }
}

export default function NoteApp() {
  const [notes, dispatch] = useImmerReducer(notesReducer, initialNote);

  return (
    <div>
      <NotesContext.Provider value={notes}>
        <NotesDispatchContext.Provider value={dispatch}>
          <h1>Note APP</h1>
          <NoteForm />
          <NoteList />
        </NotesDispatchContext.Provider>
      </NotesContext.Provider>
    </div>
  );
}
