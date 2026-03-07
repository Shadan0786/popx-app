export default function ProfileCard() {

  return (
    <div className="flex items-center gap-4 mb-4">

      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        className="w-16 h-16 rounded-full"
      />

      <div>

        <h3 className="font-semibold">
          Anne
        </h3>

        <p className="text-sm text-gray-500">
          Anne@gmail.com
        </p>

      </div>

    </div>
  );
}