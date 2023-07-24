import { useState } from "react";
import { FriendList, FormAddFriend, Button, FormSplitBill } from "./components";

const App = () => {
  const [showAddFriend, setshowAddFriend] = useState(false);
  function handleShowAddFriend() {
    setshowAddFriend((show) => !show);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
};

export default App;
