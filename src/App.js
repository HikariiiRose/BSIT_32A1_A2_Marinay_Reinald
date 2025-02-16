import "./styles.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>My Home Page</h1>

      <div id="home" class="content active">
        <h2>Home</h2>
        <p>Welcome!</p>
        <p>Name: Reinald P. Marinay</p>
        <p>Section: BSIT 32A1</p>
        <p>
          Academic Interests: My interest is trying to do everything one by one
          with the best of my capabilities
        </p>
      </div>

      <div id="about" class="content">
        <h2>About Myself</h2>
        <p>
          Education: Currently in 3rd Year College, but the only award I have is
          the loyalty award in high school.
        </p>
        <p>School Activities: Basketball, Video Games</p>
        <p>Skills: Honestly, nothing.</p>
      </div>

      <div id="contact" class="content">
        <h2>Contact Info</h2>
        <p>Name: Reinald P. Marinay</p>
        <p>Email: marinayreinald@gmail.com</p>
        <p>Subject: IT ELECTIVE 3</p>
        <p>Message: Hello! Nice to Meet You!</p>
      </div>
      <button type="button">Click Me</button>
      <Footer />
    </div>
  );
}
