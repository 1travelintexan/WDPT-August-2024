import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BeerDetailsPage() {
  // Mock initial state, to be replaced by data from the Beers API. Store the beer info retrieved from the Beers API in this state variable.
  const [beer, setBeer] = useState();
  const { beerId } = useParams();
  console.log(beerId);
  // React Router hook for navigation. We use it for the back button. You can leave this as it is.
  const navigate = useNavigate();

  useEffect(() => {
    const getOneBeer = async () => {
      try {
        const { data } = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
        );

        setBeer(data);
      } catch (error) {
        console.log(error);
      }
    };
    getOneBeer();
  }, [beerId]);
  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
      {beer && (
        <>
          <img
            src={beer.image_url}
            alt="Beer Image"
            height="300px"
            width="auto"
          />
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>Attenuation level: {beer.attenuation_level}</p>
          <p>Description: {beer.description}</p>
          <p>Created by: {beer.contributed_by}</p>

          <button
            className="btn btn-primary"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
        </>
      )}
    </div>
  );
}

export default BeerDetailsPage;
