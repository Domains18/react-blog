import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Posts from "./components/Posts/Posts";
import Popular from "./components/PopularPosts/Popular";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contacts";
import About from "./components/About/About";
function App() {
  return (
    <>
      <Nav/>
      <Header/>      
      <Posts/>
      <Popular/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
