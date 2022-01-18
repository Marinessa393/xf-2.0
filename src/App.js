import './app.scss';
import MainPage from './views/MainPage';
import SingleCountryPage from './views/SingleCountryPage';
import { Route, Router, Routes } from 'react-router';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<MainPage />} />
      <Route path=":countryId" element={<SingleCountryPage />}/>
    </Routes>
  )
}
export default App;
