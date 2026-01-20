
import { useState, useEffect } from "react";

const BookingHotel = () => {
    const [bookingHotel, setBookingHotel] = useState({
        hotelId: "",
        personName: "",
        personPhone: "",
        personEmail: "",
        checkInDate: "",
        checkOutDate: "",
        address: ""
    });
    const [hotel, setHotel] = useState([]);
    useEffect(() => {
        const hotels = JSON.parse(localStorage.getItem("hotel")) || [];
        setHotel(hotels);
    }, []);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingHotel({
            ...bookingHotel,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const existingBookingHotel = JSON.parse(localStorage.getItem("bookingHotel")) || [];
        const newBookingHotel = { ...bookingHotel, id: Date.now() };
        existingBookingHotel.push(newBookingHotel);
        localStorage.setItem("bookingHotel", JSON.stringify(existingBookingHotel));
        alert("Hotel Booked successfully");
        setBookingHotel({
            hotelId: "",
            personName: "",
            personPhone: "",
            personEmail: "",
            checkInDate: "",
            checkOutDate: "",
            address: ""
        });
        console.log(bookingHotel);
    };
    return (
        <div>
            <h1>Booking Hotel</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Hotel Name:</label>
                    <select name="hotelId" value={bookingHotel.hotelId} onChange={handleChange}>
                        {hotel.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.hotelName}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Person Name:</label>
                    <input type="text" name="personName" value={bookingHotel.personName} onChange={handleChange} />
                </div>
                <div>
                    <label>Person Phone:</label>
                    <input type="text" name="personPhone" value={bookingHotel.personPhone} onChange={handleChange} />
                </div>
                <div>
                    <label>Person Email:</label>
                    <input type="text" name="personEmail" value={bookingHotel.personEmail} onChange={handleChange} />
                </div>
                <div>
                    <label>Check In Date:</label>
                    <input type="date" name="checkInDate" value={bookingHotel.checkInDate} onChange={handleChange} />
                </div>
                <div>
                    <label>Check Out Date:</label>
                    <input type="date" name="checkOutDate" value={bookingHotel.checkOutDate} onChange={handleChange} />
                </div>
                <div>
                    <label>Address:</label>
                    <input type="text" name="address" value={bookingHotel.address} onChange={handleChange} />
                </div>
                <button type="submit">Book Hotel</button>
            </form>
        </div>
    );
};
export default BookingHotel;