import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home vh-100">
        <img
          src="/images/profile.png"
          class="img-thumbnail rounded-circle"
          alt="profile"
        />
        <h1>Lillian Hoang</h1>
        <p>Digital Artist and Software Engineer</p>
        <p>
          With a curious mind, a passion for learning, and a dedication to
          craftsmanship, I am poised to make meaningful contributions at the
          intersection of technology and art, shaping the digital landscape with
          creativity and ingenuity.
        </p>
        <div className="home-link-container">
          <div className="home-link-item">
            <Link to="/projects" style={{ textDecoration: "none" }}>
              View My Projects
            </Link>
          </div>
          <div className="home-link-item">
            <Link to="/contacts" style={{ textDecoration: "none" }}>
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
