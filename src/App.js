
import './App.css';
import AddHotel from './components/addHotel';
import ViewHotel from './components/viewHotel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/home/homePage';
import AddRoom from './components/addRoom';
import BookingHotel from './components/bookingHotel';
import BookingList from './components/bookingList';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addHotel" element={<AddHotel />} />
          <Route path="/viewHotel" element={<ViewHotel />} />
          <Route path="/addRoom" element={<AddRoom />} />
          <Route path="/bookingHotel" element={<BookingHotel />} />
          <Route path="/bookingList" element={<BookingList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
