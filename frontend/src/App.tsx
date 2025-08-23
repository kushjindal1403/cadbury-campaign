import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/header";
import bgImage from "./assets/UI Images/BG.jpg";
import loaderGif from "./assets/UI Images/Cadbury_s_FreeTheJoy_Advert_2017 (1).gif"

const LandingPage = lazy(() => import("./pages/LandingPage"));
const RegistrationPage = lazy(() => import("./pages/Registration"));
const DetailsPage = lazy(() => import("./pages/DetailsPage"));
const SelectionPage = lazy(() => import("./pages/selectionPage"));
const PlayPage = lazy(() => import("./pages/playPage"));

const Loader = () => (
  <div
    style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.6)",
    }}
  >
    <img src={loaderGif} alt="Loading..." style={{ width: "200px", height: "100px" }} />
  </div>
);


function LayoutWithHeader() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/selector" element={<SelectionPage />} />
          <Route path="/play" element={<PlayPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        
        zIndex: 0,
      }}
    >
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/*" element={<LayoutWithHeader />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
