/* tslint:disable */
/* eslint-disable */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Contactprops {
  listing: {
    userRef: string;
    name: string;
  };
}
interface Landlord {
  username: string;
  email: string;
}
export const Contact = ({ listing }: Contactprops) => {
  const [landlord, setLandlord] = useState<Landlord | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing?.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);

  console.log(landlord);
  return (
    <>
      {landlord && (
        <div className="flex flex-col gap-2">
          <p>
            Contact <span className="font-semibold">{landlord?.username}</span>{" "}
            for more enquires
            <span className="font-semibold">
              {listing?.name?.toLowerCase()}
            </span>
          </p>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Please enter your message here"
            className=" w-full border p-3 rounded-lg"
          ></textarea>
          <Link
            className="bg-slate-700 text-white text-center uppercase p-3 rounded-lg hover:opacity-95"
            to={`mailto:${landlord?.email}?subject=Regarding ${listing?.name}&body=${message}`}
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  );
};
