import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";
import ExtraContent from "./components/ExtraContent";
import RelatedImages from "./components/RelatedImages";
import RelatedPost from "./components/RelatedPost";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <section className="Appmidcontainer">
        <article className="flex-column ">
          <Hero />
          <SideBar />
        </article>
        <article className="flex-column">
          <MainContent />
          <ExtraContent />
        </article>
      </section>
      <section className="relatedsection">
        <RelatedImages />
        <RelatedPost />
      </section>
      <Footer />
    </div>
  );
}

export default App;
