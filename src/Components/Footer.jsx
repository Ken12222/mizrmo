import mizrmologo from "../../images/mizrmo_logo.png";
import { Link } from "react-router-dom";
import fb from "../../images/fb.png";
import ig from "../../images/ig.png";
import lin from "../../images/lin.png";
import snap from "../../images/snap.png";
import tiktok from "../../images/tiktok.png";
import x from "../../images/x.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-blue-800">
      <div className="w-4/5 mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
        <div className="pt-8 pb-4 md:pb-8 lg:pb-8">
          <img src={mizrmologo} alt="" />
          <p className="text-yellow-400 text-xl">Let's Go Together</p>
        </div>
        <div className="pt-0 pb-4 md:pt-8 lg:pt-8">
          <h1 className="text-white text-2xl">Quick Links</h1>
          <nav>
            <li className="list-none py-2">
              <Link
                className="text-white hover:text-yellow-400 hover:bg-transparent ease-in-out duration-700"
                to="/faq"
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
                to="https://docs.google.com/forms/d/e/1FAIpQLSePDrMXqicR3G3j2aya4t6Du_qsZq6sOIrkPZ4DTorX2taV1A/viewform?usp=sf_link"
                target="blank"
              >
                Join Waitlist
              </Link>
            </li>
          </nav>
        </div>
        <div className="flex flex-col gap-2 pt-0 pb-4 md:pt-8 lg:pt-8">
          <h1 className="text-white text-2xl">Contact Us</h1>
          <a href="" className="text-white">
            Email: info@mizrmo.com
          </a>
          <a href="" type="telephone" className="text-white">
            Phone number: +233 24 741 0909
          </a>
          <div className="flex gap-4 pt-4">
            <Link
              target="blank"
              to="https://x.com/ridemizrmo?t=ZmlUuS3ESIrEfrwUqnXllQ&s=09"
            >
              <img className="w-8" src={x} alt="x_logo" />
            </Link>
            <Link
              target="blank"
              to="https://www.facebook.com/share/1Bxe9PHQ9n/"
            >
              <img className="w-8" src={fb} alt="fb_logo" />
            </Link>
            <Link
              target="blank"
              to="https://www.linkedin.com/company/mizrmo-technologies/"
            >
              <img className="w-8" src={lin} alt="lkdin_logo" />
            </Link>
            <Link target="blank" to="https://www.instagram.com/ridemizrmo/">
              <img className="w-8" src={ig} alt="ig_logo" />
            </Link>
            <Link
              target="blank"
              to="https://www.tiktok.com/@ridemizrmo?_t=8rtKORDv6AB&_r=1"
            >
              <img className="w-8" src={tiktok} alt="tk_logo" />
            </Link>
            <Link
              target="blank"
              to="https://www.snapchat.com/add/ridemizrmo?share_id=fN3e-BH7zaA&locale=en-GB"
            >
              <img className="w-8" src={snap} alt="snp_logo" />
            </Link>
          </div>
        </div>
        <div className="md:col-span-3 lg:col-span-3">
          <p className="text-white text-xl text-center py-6">
            © {currentYear} Mizrmo Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
