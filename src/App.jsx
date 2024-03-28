import "./App.css";
import Profile from "./components/Profile/Profile";
import Friendlist from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import userData from "./components/Profile/userData.json";
import friends from "./components/FriendList/friends.json";
import transactions from "./components/TransactionHistory/transactions.json";

export default function App() {
  return (
    <>
      <Profile user={userData} />
      <Friendlist friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
