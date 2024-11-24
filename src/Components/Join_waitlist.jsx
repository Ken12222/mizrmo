export default function Join_waitlist() {
  return (
    <div className="my-5 bg-white rounded-full md:w-3/4 lg:w-3/4 mx-auto border-2 border-blue-800">
      <form className="p-1 flex">
        <input
          placeholder="Enter Your Email"
          className="m-3 outline-0 w-full"
          type="text"
        />
        <button className="btn border-0 bg-yellow-300 hover:bg-blue-800 ease-in-out duration-700 hover:text-yellow-400 rounded-full">
          Join Waitlist
        </button>
      </form>
    </div>
  );
}
