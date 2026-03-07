export default function InputField({ label, placeholder, type="text" }) {

  return (
    <div className="mb-4">

      <label className="text-sm text-purple-600">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full border p-3 rounded-lg mt-1"
      />

    </div>
  );
}