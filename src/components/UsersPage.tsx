import { useUsers } from "../hooks/useUsers";
import { UserRow } from "./UserRow";



export const UsersPage = () => {


    const { users, nextPage, previewPage } = useUsers();

  return (
    <>
      <h3>Usuarios:</h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={previewPage}>Preview</button>
        &nbsp;
        <button onClick={nextPage}>Next</button>
      </div>
    </>
  );
};

