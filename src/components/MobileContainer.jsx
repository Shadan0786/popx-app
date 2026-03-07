export default function MobileContainer({ children }) {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="w-96 min-h-screen bg-white p-6">
        {children}
      </div>
    </div>
  );
}