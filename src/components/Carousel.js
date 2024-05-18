import { useState } from "react";

const Carousel = (props) => {
  const { imageSrcs } = props;

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePrev = (event) => {
    console.log(event);
    const newIndex =
      selectedIndex === 0 ? imageSrcs.length - 1 : selectedIndex - 1;
    setSelectedIndex(newIndex);
  };

  const handleNext = (event) => {
    console.log(event);
    const newIndex =
      selectedIndex === imageSrcs.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(newIndex);
  };

  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        {imageSrcs.map((imageSrc, index) => (
          <>
            <div
              key={index}              
              className={
                selectedIndex === index
                  ? "carousel-item active" 
                  : "carousel-item"
              }
            >
              <img               
                key={index}
                src={imageSrc}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
        onClick={handlePrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
        onClick={handleNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
