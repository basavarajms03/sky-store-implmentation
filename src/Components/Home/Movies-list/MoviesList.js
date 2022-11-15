import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./MoviesList.css";

const MoviesList = ({ movieLists }) => {
  const [records_per_page, setRecordsPerPage] = useState(60);
  let startingPosition = 0;
  let location = useLocation();
  let pageTitle = "Latest Movies & TV";

  if (location.pathname.includes("new-to-rent")) {
    startingPosition = 5;
    pageTitle = "New To Rent";
  }

  if (location.pathname.includes("new-to-buy")) {
    startingPosition = 10;
    pageTitle = "New To Buy";
  }

  if (location.pathname.includes("pre-order")) {
    startingPosition = 8;
    pageTitle = "Pre Order";
  }

  if (location.pathname.includes("movie-box-sets")) {
    startingPosition = 12;
    pageTitle = "Movie Box Sets";
  }

  if (location.pathname.includes("sky-store-premiere")) {
    startingPosition = 7;
    pageTitle = "Sky Store Premiere";
  }

  if (location.pathname.includes("store-picks")) {
    startingPosition = 15;
    pageTitle = "Store Picks";
  }

  if (location.pathname.includes("under34")) {
    startingPosition = 20;
    pageTitle = "Under £3 / €4";
  }

  if (location.pathname.includes("under45")) {
    startingPosition = 17;
    pageTitle = "Under £4 / €5";
  }

  if (location.pathname.includes("under56")) {
    startingPosition = 15;
    pageTitle = "Under £5 / €6";
  }

  if (location.pathname.includes("sky-vip-gifts")) {
    startingPosition = 21;
    pageTitle = "Sky VIP Gifts";
  }

  if (location.pathname.includes("all")) {
    startingPosition = 23;
    pageTitle = "All";
  }

  if (location.pathname.includes("most-popular")) {
    startingPosition = 25;
    pageTitle = "Most Popular";
  }

  if (location.pathname.includes("new-to-store")) {
    startingPosition = 27;
    pageTitle = "New To Store";
  }

  if (location.pathname.includes("drama")) {
    startingPosition = 30;
    pageTitle = "Drama";
  }

  if (location.pathname.includes("comedy")) {
    startingPosition = 33;
    pageTitle = "Comedy";
  }

  if (location.pathname.includes("kids")) {
    startingPosition = 36;
    pageTitle = "Kids";
  }

  function recordsHandler() {
    setRecordsPerPage((prevValue) => prevValue + 15);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="movieslists">
      <h1 className="movies-title">{pageTitle}</h1>
      <div className="movies-info">
        <div className="row">
          {movieLists && movieLists.length > 0
            ? movieLists
                .slice(startingPosition, records_per_page)
                .map((element, i) => {
                  return (
                    <div className="col-md-2 col-4 p-md-2 p-2 mb-5" key={i}>
                      <div className="movie-card">
                        <Link to={"/movies/" + element.id}>
                          <div className="movie-card-image">
                            <img src={element.image?.medium} alt="image_name" />
                          </div>
                          <p className="movie-card-title">{element.name}</p>
                        </Link>
                      </div>
                    </div>
                  );
                })
            : ""}
          <div className="button-container">
            <div className="row">
              <div className="col-md-10 d-flex justify-content-center">
                {movieLists && records_per_page !== movieLists.length ? (
                  <button
                    className="show-more btn-medium"
                    onClick={recordsHandler.bind(this)}
                  >
                    Show More
                  </button>
                ) : (
                  ""
                )}
              </div>
              <div className="back-to-top col-md-2 d-flex justify-content-end">
                <Link to="" onClick={scrollToTop}>
                  <i className="fas fa-chevron-circle-up"></i>Back to top
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
