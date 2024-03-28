import "./App.css";
import Profile from "./components/Profile/Profile";
import userData from "./components/Profile/userData.json";

export default function App() {
  return (
    <>
      <Profile user={userData} />
    </>
  );
}
