import { useState } from "react";
import type { InputUser } from "../features/users/types";
import { useAddUserMutation } from "../features/users/users.api";

export const AddUser = () => {
  const [user, setUser] = useState<InputUser>({ name: "", salary: 0 });
  const [addUser, result] = useAddUserMutation();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addUser(user).then(res => {
      setUser({ name: "", salary: 0 });
    });
  };
  return (
    <>
      <h3>Add User</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="please enter a name"
          value={user.name}
          onChange={event => setUser({ ...user, name: event.target.value })}
        />
        <input
          type="number"
          step={20000}
          placeholder="please enter a salary"
          value={user.salary}
          onChange={event => setUser({ ...user, salary: +event.target.value })}
        />
        <button>save</button>
      </form>
    </>
  );
};
