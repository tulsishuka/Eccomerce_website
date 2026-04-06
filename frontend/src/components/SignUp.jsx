
const SignUp = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Breadcrumb */}
      <nav className="px-4 py-10 md:px-20 text-sm">
        <span className="text-gray-400">Home</span>
        <span className="mx-2 text-gray-400">/</span>
        <span className="font-medium text-black">signin</span>
      </nav>

      <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-20">
        
        {/* Left Side: Image Container */}
        <div className="w-full lg:w-1/2 bg-[#CBE4E8] flex justify-end items-center py-10 lg:py-20 pr-0">
          <img 
            src="https://i.pinimg.com/736x/52/65/00/52650077029633557caeaa694a236a2c.jpg" 
            alt="Shopping Hero" 
            className="w-full max-w-xl object-contain"
          />
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full px-6 py-12 lg:w-1/2 lg:px-20">
          <div className="max-w-md">
            <h1 className="text-3xl font-semibold tracking-tight text-black mb-4">
              Login To Your Account
            </h1>
            <p className="text-black font-medium mb-10">
              Enter Your Details Below
            </p>

            <form className="space-y-8">
              <div className="relative border-b border-gray-300 pb-2">
                <input
                  type="text"
                  placeholder="username"
                  className="w-full border-none bg-transparent py-1 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-0"
                  required
                />
              </div>

              <div className="relative border-b border-gray-300 pb-2">
                <input
                  type="password"
                  placeholder="password"
                  className="w-full border-none bg-transparent py-1 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-0"
                  required
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full rounded bg-[#DB4444] py-4 text-white font-medium hover:bg-[#c13a3a] transition-all"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SignUp;