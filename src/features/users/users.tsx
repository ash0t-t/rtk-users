import { AddUser } from "../../utils/add-user";
import { useDeleteUserMutation, useGetUsersQuery } from "./users.api";
import { useNavigate } from "react-router-dom";
import styles from './users.module.css'

export const Users = () => {
  const { data, isLoading, error } = useGetUsersQuery(null);
  const [deleteUser] = useDeleteUserMutation();
  const navigate = useNavigate();

  const handleDelete = (id: string) => {
    deleteUser(id);
  };

  const handleEdit = (id: string) => {
    navigate(`/edit/${id}`); 
  };

  return (
    <div className={styles.container}>
      <h1>Users</h1>
      <AddUser />
      {isLoading && <p>Loading...</p>}
      {data &&
        data.map((user) => (
          <div key={user.id}>
            <p>
              {user.name} with {user.salary} AMD salary
            </p>
            <button onClick={() => handleDelete(user.id)}>delete</button>
            <button onClick={() => handleEdit(user.id)}>edit</button>
          </div>
        ))}
    </div>
  );
};