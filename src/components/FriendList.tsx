import Friend from "./Friend";
import { FriendListProps } from "../types";

const FriendList: React.FC<FriendListProps> = ({
  friends,
  selectedFriend,
  onSelection,
}) => {
  return (
    <div>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </div>
  );
};

export default FriendList;
