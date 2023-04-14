import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Component/UI/Layout';
import Home from './Pages/Home/Home';
import Knobs from './Pages/Knobs/Knobs';
import MultiSelects from './Pages/MultiSelects/MultiSelects';
import Passwords from './Pages/Passwords/Passwords';
import Ratings from './Pages/Ratings/Ratings';
import TreeTables from './Pages/TreeTables/TreeTables';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/knobs" element={<Knobs />} />
          <Route path="/multiSelects" element={<MultiSelects />} />
          <Route path="/ratings" element={<Ratings />} />
          <Route path="/passwords" element={<Passwords />} />
          <Route path="/tree-table" element={<TreeTables />} />


        </Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App;
