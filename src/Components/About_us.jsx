import aboutUs from "../../images/about_us.jpg";

export default function About_US() {
  return (
    <div>
      <h1 className="py-8 text-5xl text-center text-blue-800">About Us</h1>
      <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className=" w-full my-auto text-xl min-h-80 space-y-2">
          <p className="xl">
            Mizrmo was born out of a simple observation: every day, countless
            cars with empty seats crawl through heavy traffic heading to work,
            school, events or a fun hangout, while others wait by the roadside
            or walk long distances searching for a ride to the same locations.
          </p>

          <p>
            Mizrmo bridges this gap by connecting drivers with extra seats to
            riders heading the same way. It’s simple, safe, and designed to
            transform how we move.
          </p>
          <p>
            With Mizrmo, we’ve created a platform that brings people together,
            reduces travel costs, and contributes to a greener planet. Our
            platform prioritizes affordability, security, and sustainability,
            ensuring every ride benefits everyone. We’re building a future where
            mobility isn’t just a necessity—it’s an opportunity to make a
            positive impact.
          </p>
        </div>
        <img
          className="min-h-80 w-full my-auto object-cover rounded-lg"
          src={aboutUs}
          alt="person_img"
        />
      </div>
      <div className="w-4/5 mx-auto">
        <h1 className="py-8 text-5xl text-center text-blue-800">
          Getting Started with Mizrmo is Easy
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div>
            <h3 className="text-4xl text-left text-blue-800">For Riders</h3>
            <ol className="flex flex-col gap-2">
              <li className="flex flex-col-2 gap-2 my-5">
                <p className="bg-blue-800 w-fit h-fit py-2 px-4 rounded-full text-white">
                  1
                </p>
                <p>
                  <span>
                    <strong>Sign Up and Verify Your Identity</strong>
                  </span>
                  <br />
                  Create your account and upload your Ghana Card for
                  verification.
                </p>
              </li>

              <li className="flex flex-col-2 gap-2 my-5">
                <p className="bg-blue-800 w-fit h-fit py-2 px-4 rounded-full text-white">
                  2
                </p>
                <p>
                  <span>
                    <strong>Find a Ride</strong>
                  </span>
                  <br />
                  Search for drivers heading your way and book your seat.
                </p>
              </li>

              <li className="flex flex-col-2 gap-2 my-5">
                <p className="bg-blue-800 w-fit h-fit py-2 px-4 rounded-full text-white">
                  3
                </p>
                <p>
                  <span>
                    <strong>Pay Securely</strong>
                  </span>
                  <br />
                  Make payments easily through your bank account or mobile money
                  wallet.
                </p>
              </li>
              <li className="flex flex-col-2 gap-2 my-5">
                <p className="bg-blue-800 w-fit h-fit py-2 px-4 rounded-full text-white">
                  4
                </p>
                <p>
                  <span>
                    <strong>Enjoy Your Journey</strong>
                  </span>
                  <br />
                  Connect with your driver, hop in, and enjoy a safe, affordable
                  ride.
                </p>
              </li>
            </ol>
          </div>

          {/* For Drivers */}
          <div>
            <h3 className="text-4xl text-left text-blue-800">For Drivers</h3>
            <ol className="flex flex-col gap-2">
              <li className="flex flex-col-2 gap-2 my-5">
                <p className="bg-blue-800 w-fit h-fit py-2 px-4 rounded-full text-white">
                  1
                </p>
                <p>
                  <span>
                    <strong>Join as a Driver</strong>
                  </span>
                  <br />
                  Sign up, verify your ID, and upload your vehicle details.
                </p>
              </li>

              <li className="flex flex-col-2 gap-2 my-5">
                <p className="bg-blue-800 w-fit h-fit py-2 px-4 rounded-full text-white">
                  2
                </p>
                <p>
                  <span>
                    <strong>List Your Seats</strong>
                  </span>
                  <br />
                  Share your route and advertise your available seats.
                </p>
              </li>

              <li className="flex flex-col-2 gap-2 my-5">
                <p className="bg-blue-800 w-fit h-fit py-2 px-4 rounded-full text-white">
                  3
                </p>
                <p>
                  <span>
                    <strong>Accept Bookings</strong>
                  </span>
                  <br />
                  Get notified when a rider books with you.
                </p>
              </li>
              <li className="flex flex-col-2 gap-2 my-5">
                <p className="bg-blue-800 w-fit h-fit py-2 px-4 rounded-full text-white">
                  4
                </p>
                <p>
                  <span>
                    <strong>Earn Seamlessly</strong>
                  </span>
                  <br />
                  Receive payments directly to your account or wallet.
                </p>
              </li>
            </ol>
          </div>
          <a className="bg-yellow-400 py-2 px-8 md:col-span-2 lg:md:col-span-2 md:w-2/4 text-center rounded-full text-xl w-full mx-auto">
            Start your journey today
          </a>
          {/* finish ui for larger displays */}
        </div>
      </div>
    </div>
  );
}
