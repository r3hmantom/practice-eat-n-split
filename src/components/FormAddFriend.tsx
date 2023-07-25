import { ChangeEvent, useState } from "react";
import Button from "./Button";
interface Friend {
  id: number;
  name: string;
  image: string;
  balance: number;
}
interface FormAddFriendProps {
  onAddFriend: (friend: Friend) => void;
}

const FormAddFriend: React.FC<FormAddFriendProps> = ({ onAddFriend }) => {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>(
    "https://i.pravatar.cc/48?u=118836"
  );

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    setImage(e.target.value);
  }

  function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    // Returning if there is no name or no image
    if (!image || !name) return;

    // generating  unique id
    const id = Number(crypto.randomUUID());
    // adding new friend
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    // Resetting the input fields
    setName("");
    setImage("https://i.pravatar.cc/48?u=118836");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🕺 Friend name</label>
      <input value={name} onChange={handleNameChange} type="text" />

      <label>🌆 Image URL</label>
      <input value={image} onChange={handleImageChange} type="text" />

      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
