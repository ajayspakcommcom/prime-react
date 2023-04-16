import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Component/UI/Layout';
import Calendars from './Pages/Calendars/Calendars';
import Chipss from './Pages/Chipss/Chipss';
import DataTables from './Pages/DataTables/DataTables';
import Flex from './Pages/Flex/Flex';
import Home from './Pages/Home/Home';
import InputTexts from './Pages/InputTexts/InputTexts';
import KeyFilters from './Pages/KeyFilters/KeyFilters';
import Knobs from './Pages/Knobs/Knobs';
import MultiSelects from './Pages/MultiSelects/MultiSelects';
import Passwords from './Pages/Passwords/Passwords';
import Ratings from './Pages/Ratings/Ratings';
import Sliders from './Pages/Sliders/Sliders';
import Terminals from './Pages/Terminals/Terminals';
import Textareas from './Pages/Textareas/Textareas';
import Toasts from './Pages/Toasts/Toasts';
import ToggleButtons from './Pages/ToggleButtons/ToggleButtons';
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
          <Route path="/chipss" element={<Chipss />} />
          <Route path="/keyfilters" element={<KeyFilters />} />
          <Route path="/terminals" element={<Terminals />} />
          <Route path="/textareas" element={<Textareas />} />
          <Route path="/inputTexts" element={<InputTexts />} />
          <Route path="/toggleButtons" element={<ToggleButtons />} />
          <Route path="/sliders" element={<Sliders />} />
          <Route path="/dataTables" element={<DataTables />} />
          <Route path="/flex" element={<Flex />} />
          <Route path="/toasts" element={<Toasts />} />
          <Route path="/calendars" element={<Calendars />} />
          
          
          
          
        </Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App;
