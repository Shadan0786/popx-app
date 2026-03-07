import { useNavigate } from "react-router-dom";

export default function Welcome() {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-end h-screen pb-10">

      <h1 className="text-2xl font-bold mb-2">
        Welcome to PopX
      </h1>

      <p className="text-gray-500 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <button
        onClick={() => navigate("/signup")}
        className="bg-purple-600 text-white py-3 rounded-lg mb-3"
      >
        Create Account
      </button>

      <button
        onClick={() => navigate("/login")}
        className="bg-purple-200 text-purple-800 py-3 rounded-lg"
      >
        Already Registered? Login
      </button>

    </div>
  );
}