import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "./components/Explore";
import Trailer from "./components/Trailer";
import ContentTv from "./components/ContentTv";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/trailer/:trailerId" element={<Trailer />} />
        <Route path="/contentTv" element={<ContentTv ContentMovies={ContentTv}/>} />
        <Route path="/contentMovies" element={<ContentTv ContentMovies={ContentTv}/>} />
        <Route path="/contentSports" element={<ContentTv ContentMovies={ContentTv}/>} />
        <Route path="/contentCategory" element={<ContentTv ContentMovies={ContentTv}/>} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
