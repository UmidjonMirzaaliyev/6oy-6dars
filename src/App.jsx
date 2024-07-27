import "./App.css";
import RegistrationForm from "./components/OnlineRegister/RegistrationForm";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import SignUpForm from "./components/SignUpForm/SignUpForm";

function App() {
  return <div>
    <SignUpForm/>
    <RegistrationForm/>
    <PhotoGallery/>
  </div>;
}

export default App;
