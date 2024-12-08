import Image from "next/image";



export default function SignUP() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      {/* Container */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full max-w-7xl mx-auto gap-8 lg:gap-16 px-4 py-8">
        {/* Image Section */}
        <div className="flex justify-center lg:w-2/3">
          <Image
            className="rounded-lg"
            src="/nikeshoeproduct.jpg"
            alt="Login Illustration"
            width={800}
            height={600}
          />
        </div>

        {/* Login Form Section */}
        <div className="flex flex-col bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Log in to Exclusive
          </h1>
          <p className="text-sm text-gray-600 text-center mb-6">
            Enter your details below
          </p>

          {/* Form */}
          <form className="flex flex-col gap-4">
            <input
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:ring-black/30"
              type="text"
              placeholder="Email or Phone Number"
            />
            <input
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring focus:ring-black/30"
              type="password"
              placeholder="Password"
            />

            {/* Remember Me and Forgot Password */}
            <div className="flex justify-between items-center text-sm mt-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-black border-gray-300 rounded"
                />
                <span className="ml-2 text-gray-600">Remember Me</span>
              </label>
              <button type="button" className="text-gray-600 hover:underline">
                Forgot Password?
              </button>
            </div>

            {/* Buttons */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800"
            >
              Log In
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Not a member?{" "}
            <a href="#" className="text-black font-medium hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
