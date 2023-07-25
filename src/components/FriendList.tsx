import Friend from "./Friend";
interface Friend {
  id: number;
  name: string;
  image: string;
  balance: number;
}
interface FriendListProps {
  friends: Friend[];
}

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
