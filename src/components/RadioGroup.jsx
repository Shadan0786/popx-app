export default function RadioGroup() {

  return (
    <div className="mb-6">

      <p className="mb-2 text-sm">
        Are you an Agency?*
      </p>

      <div className="flex gap-6">

        <label className="flex items-center gap-2">
          <input type="radio" name="agency"/>
          Yes
        </label>

        <label className="flex items-center gap-2">
          <input type="radio" name="agency"/>
          No
        </label>

      </div>

    </div>
  );
}