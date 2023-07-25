interface ButtonProps {
  children: string;
  onClick?: () => void;
}

interface FriendProps {
  id: number;
  name: string;
  image: string;
  balance: number;
}
interface FormAddFriendProps {
  onAddFriend: (friend: FriendProps) => void;
}

interface FriendListProps {
  friends: FriendProps[];
}

export type { ButtonProps, FriendProps, FormAddFriendProps, FriendListProps };
