import { useOnline } from "./OnlineHook";

export default function Online() {
  const isOnlie = useOnline();

  return <h1>{isOnlie ? "Online" : "Offline"}</h1>;
}
