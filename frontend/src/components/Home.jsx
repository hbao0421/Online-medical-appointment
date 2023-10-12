import React from 'react';
import {Routes,Route} from "react-router-dom";

import Header from "./Header";

import Welcome from "./Welcome";

const Home = () => {
  return (
    <div>
        <header>
            <Header />
        </header>
        <main>
            <Routes>
                <Route path="/" element={<Welcome />} ></Route>
            </Routes>
        </main>
    </div>
  )
}

export default Home;