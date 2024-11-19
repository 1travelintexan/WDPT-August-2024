import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import axios from "axios";

function AllBeersPage() {
  // Mock initial state, to be replaced by data from the API. Once you retrieve the list of beers from the Beers API store it in this state variable.
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    //************with async and await */
    // async function getAllBeers() {
    //   try {
    //     const {data} = await axios.get(
    //       "https://ih-beers-api2.herokuapp.com/beers"
    //     )
    //     setBeers(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // getAllBeers();

    //**********with .then and .catch ****/
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(({ data }) => {
        setBeers(data);
      })
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchTerm}`)
      .then(({ data }) => {
        setBeers(data);
      })
      .catch((err) => console.error(err));
  }, [searchTerm]);
  return (
    <>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {beers &&
          beers.map((beer, i) => {
            return (
              <div key={i}>
                <Link to={"/beers/" + beer._id}>
                  <div
                    className="card m-2 p-2 text-center"
                    style={{ width: "24rem", height: "18rem" }}
                  >
                    <div className="card-body">
                      <img
                        src={beer.image_url}
                        style={{ height: "6rem" }}
                        alt={"image of" + beer.name}
                      />
                      <h5 className="card-title text-truncate mt-2">
                        {beer.name}
                      </h5>
                      <h6 className="card-subtitle mb-3 text-muted">
                        <em>{beer.tagline}</em>
                      </h6>
                      <p className="card-text">
                        Created by: {beer.contributed_by}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default AllBeersPage;
