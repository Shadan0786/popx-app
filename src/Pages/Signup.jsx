import { useNavigate } from "react-router-dom";

export default function Signup() {

  const navigate = useNavigate();

  return (
    <div>

      <h2 className="text-2xl font-bold mb-6">
        Create your PopX account
      </h2>

      <input placeholder="Full Name*" className="w-full border p-3 rounded-lg mb-4"/>
      <input placeholder="Phone number*" className="w-full border p-3 rounded-lg mb-4"/>
      <input placeholder="Email address*" className="w-full border p-3 rounded-lg mb-4"/>
      <input placeholder="Password*" className="w-full border p-3 rounded-lg mb-4"/>
      <input placeholder="Company name" className="w-full border p-3 rounded-lg mb-4"/>

      <p className="mb-2">Are you an Agency?*</p>

      <div className="flex gap-4 mb-8">
        <label className="flex items-center gap-2">
          <input type="radio" name="agency"/>
          Yes
        </label>

        <label className="flex items-center gap-2">
          <input type="radio" name="agency"/>
          No
        </label>
      </div>

      <button
        onClick={() => navigate("/account")}
        className="w-full bg-purple-600 text-white py-3 rounded-lg"
      >
        Create Account
      </button>

    </div>
  );
}