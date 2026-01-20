import { useEffect, useState } from "react";
const BookingList = () => {
    const [bookingList, setBookingList] = useState([]);
    const [hotel, setHotel] = useState([]);
    const [room, setRoom] = useState([]);
    const [viewDetails, setViewDetails] = useState(null);

    useEffect(() => {
        const bookingList = JSON.parse(localStorage.getItem("bookingHotel")) || [];
        setBookingList(bookingList);
        const hotel = JSON.parse(localStorage.getItem("hotel")) || [];
        setHotel(hotel);
        const room = JSON.parse(localStorage.getItem("room")) || [];
        setRoom(room);
    }, []);

    const getHotelName = (hotelId) => {
        return hotel.find((item) => item.id === Number(hotelId));
    };
    const getRoomByHotelId = (hotelId) => {
        if (!hotelId) return null;

        const selectedHotel = hotel.find(
            (h) => Number(h.id) === Number(hotelId)
        );
        if (!selectedHotel) return null;

        const selectedRoom = room.find(
            (r) => Number(r.id) === Number(selectedHotel.roomId)
        );

        return selectedRoom || null;
    };


    const handleViewDetails = (item) => {
        const hotel = getHotelName(item.hotelId);
        const room = getRoomByHotelId(item.hotelId);

        setViewDetails({ ...item, hotel, room });
    };


    return (
        <div>
            <h1>Booking List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Hotel Name</th>
                        <th>Person Name</th>
                        <th>Person Phone</th>
                        <th>Person Email</th>
                        <th>Check In Date</th>
                        <th>Check Out Date</th>
                        <th>Address</th>
                        <th> Room Number</th>
                        <th> Action</th>

                    </tr>
                </thead>
                <tbody>
                    {bookingList.map((item) => (
                        <tr key={item.id}>
                            <td>{getHotelName(item.hotelId)?.hotelName}</td>
                            <td>{item.personName}</td>
                            <td>{item.personPhone}</td>
                            <td>{item.personEmail}</td>
                            <td>{item.checkInDate}</td>
                            <td>{item.checkOutDate}</td>
                            <td>{item.address}</td>
                            <td>{getRoomByHotelId(item.hotelId)?.roomNumber}</td>
                            <td>
                                <button onClick={() => handleViewDetails(item)}>View Details</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {viewDetails && (
                <div>
                    <h2>Booking Details</h2>
                    <p>Hotel Name: {viewDetails.hotel.hotelName}</p>
                    <p>Room Number: {viewDetails.room?.roomNumber}</p>
                    <p>Room Price: {viewDetails.room?.roomPrice}</p>
                    <p>Person Name: {viewDetails.personName}</p>
                    <p>Person Phone: {viewDetails.personPhone}</p>
                    <p>Person Email: {viewDetails.personEmail}</p>
                    <p>Check In Date: {viewDetails.checkInDate}</p>
                    <p>Check Out Date: {viewDetails.checkOutDate}</p>
                    <p>Address: {viewDetails.address}</p>
                </div>
            )}
        </div>
    );

};
export default BookingList; 