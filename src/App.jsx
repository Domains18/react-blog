import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Posts from "./components/Posts/Posts";
import Popular from "./components/PopularPosts/Popular";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Nav/>
      <Header/>      
      <Posts/>
      <Popular/>
      <Footer/>
    </>
  );
}

export default App;
