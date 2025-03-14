import Header from "@/components/Header";

const Login = () => {
 return (
  <div className="flex flex-col w-full justify-between">
   <Header />
   {/*Body*/}
   <div className="flex justify-center items-center h-screen bg-white">
    <div className="flex flex-col items-center justify-between bg-gray-100 backdrop-blur-lg bg-opacity-60 gap-3 p-5 border border-gray-400 h-[400px] rounded-lg">
     <h1 className="text-3xl font-bold text-primary">Sign In</h1>
     <div className="flex flex-col gap-3">
      <form className="flex flex-col gap-2">
       <input
        type="text"
        placeholder="Email or Phone Number"
        className="p-2 w-[300px] border border-gray-400 bg-transparent rounded-lg focus:outline-none"
       />
      </form>
      <form className="flex flex-col gap-2">
       <input
        type="password"
        placeholder="Password"
        className="p-2 w-[300px] border border-gray-400 bg-transparent rounded-lg focus:outline-none"
       />
      </form>
      <button className="bg-primary text-white w-full px-4 py-2 rounded-lg">
       Sign In
      </button>
     </div>
     <h1 className="text-sm">
      Doesn't have an account? <span className="text-blue-400">Sign Up</span>
     </h1>
    </div>
   </div>
  </div>
 );
};

export default Login;
