import aboutUs from "../../images/about_us.jpg";

export default function About_US() {
  return (
    <div>
      <h1 className="py-5 text-5xl text-center text-blue-800">About Us</h1>
      <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <p className="my-auto text-xl min-h-80">
          Mizrmo was born out of a simple observation: heavy traffic jams filled
          with too many cars with empty seats, and too many people by the road
          struggling for hours to find transportation.  Same thing before or
          after an event: so many people walking by the road to find
          transportation, and too many cars with empty seats zooming by.
          Coincidentally, you would find an intersection of people from both
          groups who are actually heading to same place but with no way of
          knowing that, and no way of being assured of their safety should they
          want to offer or receive 'lifts'.
        </p>
        <img
          className="min-h-80 w-full my-auto object-cover rounded-lg"
          src={aboutUs}
          alt="person_img"
        />
      </div>
    </div>
  );
}
