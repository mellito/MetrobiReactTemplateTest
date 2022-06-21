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
    <div className="App flex-column">
      <Header />
      <section className="Appmidcontainer">
        <article className="flex-column grow1 ">
          <Hero />
          <SideBar />
        </article>
        <article className="flex-column grow1 ">
          <MainContent />
          <ExtraContent />
        </article>
      </section>
      <section className="relatedsection grow1">
        <RelatedImages />
        <RelatedPost />
      </section>
      <Footer />
    </div>
  );
}

export default App;
