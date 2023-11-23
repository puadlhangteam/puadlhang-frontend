function Login() {
  return (
    <div className="flex-col justify-center items-center absolute top-36 sm:right-24 md:right-44 lg:right-20 xl:right-40 2xl:right-64">
      <div className="text-neutral-800 text-[31.25px] text-center font-bold font-['Zen Kaku Gothic Antique'] leading-9">
        Welcome Back
      </div>
      <div className="text-neutral-800 text-[31.25px] text-center font-bold font-['Zen Kaku Gothic Antique'] leading-9">
        How are you today?
      </div>
      <div className="mt-12">
        <form action="" className="mt-6">
          <div className="my-5">
            <label>Email or Username</label>
            <input
              type="text"
              className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-transparent font-normal w-full h-10 flex items-center pl-3 p-4 mt-1 text-sm border-gray-500 rounded-xl border shadow"
              placeholder="Enter your email..."
            />
          </div>
          <div className="my-5">
            <label>Password</label>
            <input
              type="password"
              className="text-gray-600 dark:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-transparent font-normal w-full h-10 flex items-center pl-3 p-4 mt-1 text-sm border-gray-500 rounded-xl border shadow"
              placeholder="Enter your password..."
            />
          </div>
          <div className="mt-8 flex justify-between items-center">
            <div>
              <input type="checkbox" id="remember" />
              <label className="ml-2 font-medium text-base active:scale-[0.98] active:deration-75" htmlFor="remember">
                Remember
              </label>
            </div>
            <button className="font-medium text-base text-violet-500 active:scale-[0.98] active:deration-75 hover:scale-[1.01] ease-in-out transition-all">
              Forgot Password
            </button>
          </div>
          <div className="mt-8 text-center">
            <button className="w-48 bg-violet-500 text-white text-lg font-bold rounded-3xl py-3 active:scale-[0.98] active:deration-75 hover:scale-[1.01] ease-in-out transition-all">
              Sign in
            </button>
          </div>
        </form>
        <div className="mt-8 gap-2 flex justify-center items-center">
          <button className="font-medium active:scale-[0.98] active:deration-75 hover:scale-[1.01] ease-in-out transition-all">
            No account?
          </button>
          <button className="text-violet-500 text-base font-medium ml-2 active:scale-[0.98] active:deration-75 hover:scale-[1.01] ease-in-out transition-all">
            Create one
          </button>
        </div>
        <div className="mt-8 flex justify-center items-center text-gray-400 font-medium">———————— OR ————————</div>
        <div className="mt-8 flex justify-center items-center gap-3">
          <button className="flex rounded-xl px-3 py-3 border-2 border-gray-500 items-center justify-center gap-2 active:scale-[0.98] active:deration-75 hover:scale-[1.01] ease-in-out transition-all">
            <img src="src/assets/icons/Google.svg" alt="Google" className="w-10 h-10" />
            Continue with Google
          </button>
          <button className="flex rounded-xl px-3 py-3 border-2 border-gray-500 items-center justify-center gap-2 active:scale-[0.98] active:deration-75 hover:scale-[1.01] ease-in-out transition-all">
            <img src="src/assets/icons/GitHub.svg" alt="GitHub" className="w-10 h-10" />
            Continue with Github
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
