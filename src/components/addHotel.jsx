import { useState } from "react";
import { useEffect } from "react";

const AddHotel = () => {
    const [hotel, setHotel] = useState({
        roomId: "",
        hotelName: "",
        hotelAddress: "",
        hotelPhone: "",
        hotelEmail: "",
        hotelDescription: "",


    });
    const [room, setRoom] = useState([]);

    useEffect(() => {
        const rooms = JSON.parse(localStorage.getItem("room")) || [];
        setRoom(rooms);
    }, []);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setHotel({
            ...hotel,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const existingHotel = JSON.parse(localStorage.getItem("hotel")) || [];
        const newHotel = { ...hotel, id: Date.now() };
        existingHotel.push(newHotel);
        localStorage.setItem("hotel", JSON.stringify(existingHotel));
        alert("Hotel added successfully");
        console.log(hotel);
    };

    return (
        <div>
            <h1>Add Hotel</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Hotel Name : </label>
                    <input type="text" name="hotelName" value={hotel.hotelName} onChange={handleChange} />
                </div>
                <div>
                    <label> Room Number : </label>
                    <select name="roomId" value={hotel.roomId} onChange={handleChange}>
                        {room.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.roomNumber}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label> Hotel Address : </label>
                    <input type="text" name="hotelAddress" value={hotel.hotelAddress} onChange={handleChange} />
                </div>
                <div>
                    <label> Hotel Phone : </label>
                    <input type="text" name="hotelPhone" value={hotel.hotelPhone} onChange={handleChange} />
                </div>
                <div>
                    <label> Hotel Email : </label>
                    <input type="text" name="hotelEmail" value={hotel.hotelEmail} onChange={handleChange} />
                </div>
                <div>
                    <label> Hotel Description : </label>
                    <input type="text" name="hotelDescription" value={hotel.hotelDescription} onChange={handleChange} />
                </div>
                <button type="submit">Add Hotel</button>
            </form>
        </div>
    );
};

export default AddHotel;