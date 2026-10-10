import { useParams, useNavigate, Link } from "react-router-dom";
const Users = () => {
  const allUsers = [
    { id: "1", name: "Alex" },
    { id: "2", name: "Sarah" },
    { id: "3", name: "John" },
  ];
  const { id } = useParams();
  const navigate = useNavigate();
  const user = allUsers.find((user) => user.id === id);
  return (
    <div>
      <h1>Users Page</h1>
      <h2>User Id:{id}</h2>
      <h2>User Name: {user ? user.name : "User Not Found"}</h2>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <nav>
        <Link to={"/users"}>Back To Users List</Link>
      </nav>
    </div>
  );
};
export default Users;
