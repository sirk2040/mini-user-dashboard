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
      <h2>Users Page</h2>
      <h3>User Id:{id}</h3>
      <h3>User Name: {user ? user.name : "User Not Found"}</h3>
      <button className="go-back" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <nav>
        <Link to={"/users"}>Back To Users List</Link>
      </nav>
    </div>
  );
};
export default Users;
