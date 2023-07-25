import { useState } from "react";
import { FriendList, FormAddFriend, Button, FormSplitBill } from "./components";
import { initialFriends } from "./constants";
import { Friend } from "./types";

const App = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setshowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);

  // adding a new friend

  function handleAddFriend(friend: Friend) {
    setFriends([...friends, friend]);
    // closing the form
    setshowAddFriend((show) => !show);
  }

  // showing and hiding add friend form
  function handleShowAddFriend() {
    setshowAddFriend((show) => !show);
    setSelectedFriend(null);
  }

  // selecting friend
  function handleSelection(friend: Friend | null) {
    setSelectedFriend((cur) => (cur?.id === friend?.id ? null : friend));
    setshowAddFriend((prev) => !prev);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  );
};

export default App;
