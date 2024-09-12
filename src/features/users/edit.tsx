import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetUsersQuery, useEditUserMutation } from "./users.api";

export const Edit = () => {
  const { id } = useParams();
  const { data: users } = useGetUsersQuery(null);
  const [editUser] = useEditUserMutation();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [salary, setSalary] = useState(0);

  useEffect(() => {
    if (users) {
      const foundUser = users.find((user) => user.id === id);
      if (foundUser) {
        setUser(foundUser);
        setName(foundUser.name);
        setSalary(foundUser.salary);
      }
    }
  }, [id, users]);

  const handleSubmit = () => {
    if (user) {
      editUser({ id: user.id, name, salary }).then(() => navigate("/"));
    }
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h3>Edit User</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input
        type="number"
        value={salary}
        onChange={(e) => setSalary(Number(e.target.value))}
      />
      <button onClick={handleSubmit}>Save</button>
      <button onClick={() => navigate("/")}>Cancel</button>
    </div>
  );
};