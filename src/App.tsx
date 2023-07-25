import { useState } from "react";
import { FriendList, FormAddFriend, Button, FormSplitBill } from "./components";
import { initialFriends } from "./constants";

interface Friend {
  id: number;
  name: string;
  image: string;
  balance: number;
}
const App = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setshowAddFriend] = useState(false);

  // adding a new friend

  function handleAddFriend(friend: Friend) {
    setFriends([...friends, friend]);
    // closing the form
    setshowAddFriend((show) => !show);
  }

  // showing and hiding add friend form
  function handleShowAddFriend() {
    setshowAddFriend((show) => !show);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
};

export default App;
