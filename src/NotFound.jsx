import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notFound">
      <div className="notFound-text">404 Page Not Found</div>
      <div className="notFound-homepage">
        <div>please return to</div>
        <div>
          <Link to={"/"}>Homepage</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
