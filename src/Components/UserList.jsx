import { Link } from "react-router-dom";
const UserList = () => {
  const allUsers = [
    { id: "1", name: "Alex" },
    { id: "2", name: "Sarah" },
    { id: "3", name: "John" },
  ];
  return (
    <div>
      <ul>
        {allUsers.map((user) => (
          <li key={user.id}>
            {<Link to={`/users/${user.id}`}>{user.name}</Link>}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserList;
