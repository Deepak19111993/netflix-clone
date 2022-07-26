import logo from "./logo.svg";
import "./App.css";
import Row from "./Components/Row/Row";
import requests from "./requests";
import GlobalStyle from "./Global.styles";
import Banner from "./Components/Banner/Banner";
import Nav from "./Components/Nav/Nav";
import ScrollContainer from "react-indiana-drag-scroll";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="app">
        {/* <Nav /> */}
        <Banner />
        <Row
          isLargeRow={true}
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horrors Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />
      </div>
    </>
  );
}

export default App;
