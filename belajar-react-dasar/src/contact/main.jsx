import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import ContactForm from "./Contactform";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContactForm />
  </StrictMode>
);
