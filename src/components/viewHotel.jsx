import { useEffect, useState } from "react";

const ViewHotel = () => {
    const [hotel, setHotel] = useState([]);
    const [room, setRoom] = useState([]);

    useEffect(() => {
        const rooms = JSON.parse(localStorage.getItem("room")) || [];
        setRoom(rooms);
        const hotel = JSON.parse(localStorage.getItem("hotel")) || [];
        setHotel(hotel);
    }, []);
    const getRoom = (roomId) => {
        return room.find((item) => item.id === Number(roomId));
    };
    return (
        <div>
            <h1>View Hotel</h1>
            <table>
                <thead>
                    <tr>
                        <th>Hotel Name</th>
                        <th>Hotel Address</th>
                        <th>Hotel Phone</th>
                        <th>Hotel Email</th>
                        <th>Hotel Description</th>
                        <th>Room Number</th>
                    </tr>
                </thead>
                <tbody>
                    {hotel.map((item) => (
                        <tr key={item.id}>
                            <td>{item.hotelName}</td>
                            <td>{item.hotelAddress}</td>
                            <td>{item.hotelPhone}</td>
                            <td>{item.hotelEmail}</td>
                            <td>{item.hotelDescription}</td>
                            <td>{getRoom(item.roomId)?.roomNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default ViewHotel;