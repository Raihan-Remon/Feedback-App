import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./componenets/Header";
import FeedbackList from "./componenets/FeedbackList";
import FeedbackStats from "./componenets/FeedbackStats";
import FeedbackForm from "./componenets/FeedbackForm";
import AboutIconLink from "./componenets/shared/AboutIconLink";
import AboutPage from "./pages/AboutPage";
import { FeedbackProvider } from "./context/FeedbackContext";

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <div className="container">
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </div>
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );
};

export default App;
