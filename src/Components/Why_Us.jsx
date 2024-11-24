import verified from "../../images/shield.svg";
import wallet from "../../images/wallet.svg";
import people from "../../images/people.svg";
import leaf from "../../images/leaf.svg";
import dollar from "../../images/dollar.svg";

export default function Why_Us() {
  return (
    <div className="w-4/5 mx-auto py-16 text-center">
      <h1 className="pb-2 text-5xl text-center text-blue-800">
        Why Choose Mizrmo?
      </h1>
      <p className="pb-5">
        Mizrmo is designed to provide value for every user. Here's why thousands
        are ready to join us:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
        <div className="p-5 bg-white rounded-lg">
          <img src={verified} alt="" />
          <p className="text-left text-blue-800 text-xl py-2">
            <strong>Verified Users</strong>
          </p>
          <p className="text-left">
            Every driver and rider completes ID verification, so you can travel
            with confidence.
          </p>
        </div>

        <div className="p-5 bg-white rounded-lg">
          <img src={wallet} alt="" />
          <p className="text-left text-blue-800 text-xl py-2">
            <strong>Cashless Transactions</strong>
          </p>
          <p className="text-left">
            No need for cash—secure payments happen via bank accounts or mobile
            money wallets.
          </p>
        </div>

        <div className="p-5 bg-white rounded-lg">
          <img src={dollar} alt="" />
          <p className="text-left text-blue-800 text-xl py-2">
            <strong>Cost Savings</strong>
          </p>
          <p className="text-left">
            Riders save money, and drivers offset fuel and maintenance costs.
          </p>
        </div>

        <div className="p-5 bg-white rounded-lg">
          <img src={leaf} alt="" />
          <p className="text-left text-blue-800 text-xl py-2">
            <strong>Sustainability</strong>
          </p>
          <p className="text-left">
            Each shared ride reduces emissions and contributes to a cleaner,
            greener world.
          </p>
        </div>

        <div className="p-5 bg-white rounded-lg">
          <img src={people} alt="" />
          <p className="text-left text-blue-800 text-xl py-2">
            <strong>Community Impact</strong>
          </p>
          <p className="text-left">
            Build connections with people in your city or beyond.
          </p>
        </div>
      </div>
    </div>
  );
}
