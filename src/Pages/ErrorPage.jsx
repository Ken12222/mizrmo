import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <div className="w-5/6 mx-auto my-32">
        <h1 className="font-bold text-5xl text-center">404</h1>
        <p className="text-center">Page Not Found</p>
        <Link to="/"> Go back Home</Link>
      </div>
    </>
  );
}
