import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Features from "./components/Features";
import LandingPage from "./components/LandingPage";
import Pricing from "./components/Pricing";
import Form from "./components/Form";

function App() {
  return (
    <>
      <LandingPage />
      <Features />
      <Pricing />
      <Form/>
    </>
  );
}

export default App;
