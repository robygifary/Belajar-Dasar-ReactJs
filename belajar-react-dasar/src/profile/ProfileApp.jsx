import { ProfileContext } from "./ProfileContext";
import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import { useState } from "react";
import ProfileForm from "./ProfileForm";

export default function ProfileApp() {
  const [name, setName] = useState("");

  return (
    <>
      <ProfileContext.Provider value={name}>
        <h1>Profile App</h1>
        <Profile />
        <ProfileForm name={name} setName={setName} />
        <ProfileAddress />
      </ProfileContext.Provider>
    </>
  );
}
