import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  return (
    <div className="mt-10">

      <h2 className="text-2xl font-bold mb-2">
        Signin to your PopX account
      </h2>

      <p className="text-gray-500 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <input
        type="email"
        placeholder="Enter email address"
        className="w-full border p-3 rounded-lg mb-4"
      />

      <input
        type="password"
        placeholder="Enter password"
        className="w-full border p-3 rounded-lg mb-6"
      />

      <button
        onClick={() => navigate("/account")}
        className="w-full bg-purple-600 text-white py-3 rounded-lg"
      >
        Login
      </button>

    </div>
  );
}