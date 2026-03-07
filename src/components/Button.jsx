export default function Button({ text, onClick, variant }) {

  const styles = {
    primary: "bg-purple-600 text-white",
    secondary: "bg-purple-200 text-purple-800",
    disabled: "bg-gray-300 text-gray-600"
  };

  return (
    <button
      onClick={onClick}
      className={`w-full py-3 rounded-lg font-medium ${styles[variant]}`}
    >
      {text}
    </button>
  );
}