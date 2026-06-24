export default function SettingsPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-extrabold text-[#5A001A] mb-2">
        Settings
      </h1>

      <p className="text-gray-500 mb-8">
        Manage basic system information.
      </p>

      <div className="bg-white shadow-lg rounded-2xl p-6 border">
        <h2 className="text-xl font-bold mb-6">
          Business Information
        </h2>

        <div className="grid gap-4">

          <div>
            <label className="block font-medium mb-2">
              Business Name
            </label>

            <input
              type="text"
              value="Shubh Bhoj Catering & Events"
              readOnly
              className="w-full border rounded-lg p-3 bg-gray-50"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Contact Number
            </label>

            <input
              type="text"
              value="+91 62631 26954"
              readOnly
              className="w-full border rounded-lg p-3 bg-gray-50"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Email
            </label>

            <input
              type="text"
              value="info@shubhbhoj.com"
              readOnly
              className="w-full border rounded-lg p-3 bg-gray-50"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              System Version
            </label>

            <input
              type="text"
              value="v1.0"
              readOnly
              className="w-full border rounded-lg p-3 bg-gray-50"
            />
          </div>

        </div>
      </div>
    </div>
  );
}