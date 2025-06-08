import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GameMode from "./components/GameMode.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom';



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter basename="whatsthesp" >
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/amphibians" element={<GameMode dataJSON={'https://raw.githubusercontent.com/libertadcc/identifySpecies/main/docs/amphibians.json'}/>} />
        <Route path="/arthropods" element={<GameMode dataJSON={'https://raw.githubusercontent.com/libertadcc/identifySpecies/main/docs/arthropods.json'}/>} />
        <Route path="/birds" element={<GameMode dataJSON={'https://raw.githubusercontent.com/libertadcc/identifySpecies/main/docs/birds.json'}/>} />
        <Route path="/fishes" element={<GameMode dataJSON={'https://raw.githubusercontent.com/libertadcc/identifySpecies/main/docs/fishes.json'}/>} />
        <Route path="/fossils" element={<GameMode dataJSON={'https://raw.githubusercontent.com/libertadcc/identifySpecies/main/docs/fossils.json'}/>} />
        <Route path="/invertebrates" element={<GameMode dataJSON={'https://raw.githubusercontent.com/libertadcc/identifySpecies/main/docs/invert.json'}/>} />
        <Route path="/mammals" element={<GameMode dataJSON={'https://raw.githubusercontent.com/libertadcc/identifySpecies/main/docs/mammals.json'}/>} />
        <Route path="/plants" element={<GameMode dataJSON={'https://raw.githubusercontent.com/libertadcc/identifySpecies/main/docs/plants.json'}/>} />
        <Route path="/reptiles" element={<GameMode dataJSON={'https://raw.githubusercontent.com/libertadcc/identifySpecies/main/docs/reptiles.json'}/>} />
        <Route path="/rocks" element={<GameMode dataJSON={'https://raw.githubusercontent.com/libertadcc/identifySpecies/main/docs/rocks.json'}/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
