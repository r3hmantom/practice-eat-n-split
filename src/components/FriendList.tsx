import Friend from "./Friend";
import { FriendListProps } from "../types";

const FriendList: React.FC<FriendListProps> = ({ friends }) => {
  return (
    <div>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </div>
  );
};

export default FriendList;
