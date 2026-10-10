import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
    
      <p>Welcome to my dashboard!</p>
      <button onClick={() => navigate("/about")}>Go to About</button>
    </div>
  );
};
export default Home;
