import { FriendList, FormAddFriend, Button, FormSplitBill } from "./components";

const App = () => {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
};

export default App;
