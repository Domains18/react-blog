import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
// import Posts from "./components/Posts/Posts";
import Popular from "./components/PopularPosts/Popular";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contacts";
import About from "./components/About/About";
import Posts from "./components/Posts/Posts";
import Styled from "styled-components";



function App() {
  return (
    <>
      <Nav />
      <Container>
        <Header />
        <Popular />
        <About />
        <Posts />
        <Contact />
      </Container>
      <Footer />
    </>
  );
}

const Container = Styled.div`
  max-width:1200px;
  margin:auto;
`;

export default App;
