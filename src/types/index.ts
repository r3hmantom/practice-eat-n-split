interface ButtonProps {
  children: string;
  onClick?: () => void;
}

interface Friend {
  id: number;
  name: string;
  image: string;
  balance: number;
}

interface FriendProps {
  friend: Friend;
  selectedFriend: Friend | null;
  onSelection: (friend: Friend | null) => void;
}
interface FormAddFriendProps {
  onAddFriend: (friend: Friend) => void;
}

interface FriendListProps {
  friends: Friend[];
  selectedFriend: Friend | null;
  onSelection: (friend: Friend | null) => void;
}

interface FormSplitBillProps {
  selectedFriend: Friend | null;
  onSplitBill: (value: number) => void;
}

export type {
  ButtonProps,
  FriendProps,
  FormAddFriendProps,
  FriendListProps,
  Friend,
  FormSplitBillProps,
};
