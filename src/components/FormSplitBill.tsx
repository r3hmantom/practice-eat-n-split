import Button from "./Button";
import { FormSplitBillProps } from "../types";
import { ChangeEvent, useState } from "react";

const FormSplitBill: React.FC<FormSplitBillProps> = ({
  selectedFriend,
  onSplitBill,
}) => {
  const [bill, setBill] = useState<number>();
  const [paidByUser, setPaidByUser] = useState<number>();
  const paidByFriend = bill && paidByUser && bill - paidByUser;
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleBill(e: ChangeEvent<HTMLInputElement>) {
    setBill(+e.target.value);
  }
  function handlePaidByUser(e: ChangeEvent<HTMLInputElement>) {
    setPaidByUser(+e.target.value > (bill || 0) ? paidByUser : +e.target.value);
  }
  function handleWhoIsPaying(e: ChangeEvent<HTMLSelectElement>) {
    setWhoIsPaying(e.target.value);
  }

  function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    onSplitBill(
      Number(whoIsPaying === "user" ? paidByFriend : -(paidByUser || 0))
    );
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend?.name}</h2>

      <label>💰 Bill value</label>
      <input value={bill} onChange={handleBill} type="number" />

      <label>🧑 Your Expense</label>
      <input value={paidByUser} onChange={handlePaidByUser} type="number" />

      <label>👬 {selectedFriend?.name}'s Expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>💰 Who is paying the bill</label>
      <select value={whoIsPaying} onChange={handleWhoIsPaying}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend?.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
