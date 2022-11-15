import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ApiService from "../../Services/ApiService";
import "./Movies-Info.css";

function MoviesInfo() {
  const { id } = useParams();

  const { moviesData, loading } = ApiService(
    "https://api.tvmaze.com/shows/" + id
  );

  function toHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return { hours, minutes };
  }

  return (
    <div className="movies-container">
      <div className="row">
        <div className="col-md-3 side-img">
          <img src={moviesData?.image.medium} alt={moviesData?.name} />
          <p>
            <Link to="show">
              <i className="fas fa-play-circle"></i> Trailer
            </Link>
          </p>
        </div>
        <div className="col-md-9 movie-info-container">
          <p className="movie-name">{moviesData?.name}</p>
          <div className="movie-content">
            <ul>
              <li>2022</li>
              <li>
                {toHoursAndMinutes(moviesData?.runtime).hours +
                  "hr " +
                  toHoursAndMinutes(moviesData?.runtime).minutes +
                  "mins"}
              </li>
              <li>cert 12</li>
            </ul>
          </div>
          <p className="out-of-locale-container">
            <i className="fas fa-exclamation-triangle"></i>
            Only content that has been downloaded can be watched outside of UK,
            Republic of Ireland and Channel Islands.
          </p>
          <p className="movie-summary">
            <span
              dangerouslySetInnerHTML={{ __html: moviesData?.summary }}
            ></span>
          </p>
          <div className="movie-footer">
            <div className="row">
              <div className="col-md-2 footer-title">
                <p>Rating:</p>
              </div>
              <div className="col-md-10 footer-subtitle">
                <p>{moviesData?.rating.average}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 footer-title">
                <p>Language:</p>
              </div>
              <div className="col-md-10 footer-subtitle">
                <p>{moviesData?.language}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 footer-title">
                <p>Genres</p>
              </div>
              <div className="col-md-10 footer-subtitle">
                <ul className="genres">
                  {moviesData?.genres.map((element, index) => {
                    return <li key={index}>{element}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesInfo;
