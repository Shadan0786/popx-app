export default function Account() {

  return (
    <div>

      <h2 className="text-lg font-semibold border-b pb-3 mb-6">
        Account Settings
      </h2>

      <div className="flex items-center gap-4 mb-4">

        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          className="w-16 h-16 rounded-full"
        />

        <div>
          <h3 className="font-semibold">
            Anne
          </h3>

          <p className="text-gray-500 text-sm">
            Anne@gmail.com
          </p>
        </div>

      </div>

      <p className="text-gray-500 text-sm">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
        Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
        Dolore Magna Aliquyam Erat.
      </p>

    </div>
  );
}