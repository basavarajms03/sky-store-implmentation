import { React, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ApiService from "../../Services/ApiService";
import "./home.css";
import MoviesList from "./Movies-list/MoviesList";

function Home() {
  let title = "Sky Store - The Latest Movies Straight From The Cinema";
  let location = useLocation();
  let showCarousel = true;
  const { moviesData, loading } = ApiService("https://api.tvmaze.com/shows");

  if (location.pathname.includes("new-to-rent")) {
    title = "Sky Store - Rent Movies";
    showCarousel = false;
  }

  if (location.pathname.includes("new-to-buy")) {
    title = "Sky Store - Buy Movies";
    showCarousel = false;
  }

  if (location.pathname.includes("pre-order")) {
    title = "Sky Store - Pre Order";
    showCarousel = false;
  }

  if (location.pathname.includes("movie-box-sets")) {
    title = "Sky Store - Movie Box Sets";
    showCarousel = true;
  }

  if (location.pathname.includes("sky-store-premiere")) {
    title = "Sky Store - Sky Store Premiere";
    showCarousel = false;
  }

  if (location.pathname.includes("store-picks")) {
    title = "Sky Store - Store Picks";
    showCarousel = false;
  }

  if (location.pathname.includes("under34")) {
    title = "Sky Store - Under £4 / €5";
    showCarousel = false;
  }

  if (location.pathname.includes("under45")) {
    title = "Sky Store - Under £5 / €6";
    showCarousel = false;
  }

  if (location.pathname.includes("under56")) {
    title = "Sky Store - Store-Picks";
    showCarousel = false;
  }

  if (location.pathname.includes("sky-vip-gifts")) {
    title = "Sky Store - Sky VIP Gifts";
    showCarousel = false;
  }

  if (location.pathname.includes("all")) {
    title = "Sky Store - All";
    showCarousel = false;
  }

  if (location.pathname.includes("most-popular")) {
    title = "Sky Store - Most Popular";
    showCarousel = false;
  }

  if (location.pathname.includes("new-to-store")) {
    title = "Sky Store - New To Store";
    showCarousel = false;
  }

  if (location.pathname.includes("drama")) {
    title = "Sky Store - Drama";
    showCarousel = false;
  }

  if (location.pathname.includes("comedy")) {
    title = "Sky Store - Comedy";
    showCarousel = false;
  }

  if (location.pathname.includes("kids")) {
    title = "Sky Store - kids";
    showCarousel = false;
  }

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="home-container">
      {showCarousel ? (
        <div className="carousel">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="false"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={
                    "https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_FFE69A95-F20D-41C4-9C60-B1194E32A0FF_2022-11-7-T9-18-19.jpg?s=1440x580&t=bgmesh"
                  }
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={
                    "https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_45EDB016-52D0-4951-A5C1-99209C28C89B_2022-10-3-T9-16-37.jpg?s=1440x580&t=bgmesh"
                  }
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src={
                    "https://images.store.sky.com/api/img/banner/en/6E3243E1-7BDE-45F9-9BE7-364B5469BD6C_C0897B89-27BC-4203-A8F8-3C761605D237_2022-10-24-T9-38-35.jpg?s=1440x580&t=bgmesh"
                  }
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="movies-list">
        <MoviesList movieLists={moviesData} />
      </div>
    </div>
  );
}

export default Home;
