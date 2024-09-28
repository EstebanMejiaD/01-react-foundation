import { User } from "../interfaces";

interface Props {
    user: User;
  }
  
  export const UserRow = ({ user }: Props) => {
    const { id, avatar, email, first_name, last_name } = user;
    return (
      <tr key={id}>
        <td>
          {" "}
          <img src={avatar} alt="User Avatar" />{" "}
        </td>
        <td>{`${first_name} ${last_name}`}</td>
        <td>{email}</td>
      </tr>
    );
  };
  