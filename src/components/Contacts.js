import { Link, useHistory, useLocation } from "react-router-dom";

const Contacts = () => {
  const history = useHistory();
  const location = useLocation();
  return (
    <>
      <p className="contacts-container vh-100">
        Email: lillianh3195@gmail.com <br />
        Phone: (714)-482-8031
        <a
          style={{ textDecoration: "none" }}
          href="https://www.linkedin.com/in/lillian-hoang-82a160253"
        >
          LinkedIn Profile
        </a>
        <a
          style={{ textDecoration: "none" }}
          href="https://github.com/Lillianh3195"
        >
          Github Profile
        </a>{" "}
        <br />
        <button
          onClick={() => {
            if (location.key) {
              history.goBack();
            }
          }}
          disabled={!location.key}
        >
          Go Back
        </button>
      </p>
    </>
  );
};

export default Contacts;
