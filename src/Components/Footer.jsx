import mizrmologo from "../../images/mizrmo_logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
      <div className="pt-8 pb-4 md:pb-52 lg:pb-52">
        <img src={mizrmologo} alt="" />
        <p className="text-yellow-400 text-xl">Let's Go Together</p>
      </div>
      <div className="pt-0 pb-4 md:pt-8 lg:pt-8">
        <h1 className="text-white text-3xl">Quick Links</h1>
        <nav>
          <li className="list-none py-2">
            <Link
              className="text-white hover:text-yellow-400 hover:bg-transparent ease-in-out duration-700"
              to="/about_us"
            >
              FAQ
            </Link>
          </li>
          <li className="list-none py-2">
            <Link
              className="text-white hover:text-yellow-400 hover:bg-transparent ease-in-out duration-700"
              to="/contact_us"
            >
              Contact Us
            </Link>
          </li>
          <li className="list-none py-2">
            <Link
              className="text-white hover:text-yellow-400 hover:bg-transparent ease-in-out duration-700"
              to="/join_waitlist"
            >
              Join Waitlist
            </Link>
          </li>
        </nav>
      </div>
      <div className="flex flex-col gap-2 pt-0 pb-4 md:pt-8 lg:pt-8">
        <h1 className="text-white text-3xl">Contact Us</h1>
        <a href="" className="text-white">
          Email: info@mizrmo.com
        </a>
        <a href="" className="text-white">
          Phone number: +233 24 741 0909
        </a>
        {/* <div className="flex pt-4">
          <a href="">
            <img src="" alt="x_logo" />
          </a>
          <a href="">
            <img src="" alt="fb_logo" />
          </a>
          <a href="">
            <img src="" alt="lkdin_logo" />
          </a>
          <a href="">
            <img src="" alt="ig_logo" />
          </a>
          <a href="">
            <img src="" alt="tk_logo" />
          </a>
          <a href="">
            <img src="" alt="snp_logo" />
          </a>
        </div> */}
      </div>
    </div>
  );
}
