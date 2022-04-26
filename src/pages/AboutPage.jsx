import { Link } from "react-router-dom";
import Card from "../componenets/shared/Card";
const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This a React App for Feeedback about a product or a service</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to="/">Back to home</Link>
        </p>
      </div>
    </Card>
  );
};

export default AboutPage;
