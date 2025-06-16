export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4">
      {/* Header */}
      <div className="w-full h-[8vh] max-w-2xl flex justify-between items-center p-8">
        <div className="text-xl font-semibold">⭐ LocalHelp</div>
        <button className=" bg-gray-100 h-[3rem] w-[4.5rem] p-8 border-none rounded-full text-[1rem] font-extrabold">
          Sign in
        </button>
      </div>

      {/* Main Card */}
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-sm mt-12">
        <h1 className="text-2xl font-semibold text-center mb-8">
          Welcome to LocalHelp
        </h1>

        {/* Email Form */}
        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 bg-gray-100 rounded-md mb-2 outline-none"
          />
          <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-full hover:bg-blue-600 transition">
            Continue with email
          </button>
        </div>

        <div className="text-center text-sm text-gray-400 mb-6">Or</div>

        {/* Phone Form */}
        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium">Phone number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full px-4 py-2 bg-gray-100 rounded-md mb-2 outline-none"
          />
          <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-full hover:bg-blue-600 transition">
            Continue with phone
          </button>
        </div>

        <div className="text-center text-sm text-gray-400 mb-4">Or</div>

        <div className="flex flex-col items-center gap-2 text-sm">
          <a href="#" className="text-blue-500 hover:underline">
            Create an account
          </a>
          <a href="#" className="text-blue-500 hover:underline">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
}
