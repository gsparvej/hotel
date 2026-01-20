import { useState } from "react";

const AddRoom = () => {
    const [room, setRoom] = useState({
        roomNumber: "",
        roomType: "",
        roomPrice: "",
        roomDescription: "",
    });
    const handleChange = (e) => {
        setRoom({
            ...room,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const existingRoom = JSON.parse(localStorage.getItem("room")) || [];
        const newRoom = { ...room, id: Date.now() };
        existingRoom.push(newRoom);
        localStorage.setItem("room", JSON.stringify(existingRoom));
        alert("Room added successfully");
        setRoom({
            roomNumber: "",
            roomType: "",
            roomPrice: "",
            roomDescription: "",
        });
        console.log(room);
    };
    return (
        <div>
            <h1>Add Room</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Room Number:</label>
                    <input type="text" name="roomNumber" value={room.roomNumber} onChange={handleChange} />
                </div>
                <div>
                    <label>Room Type:</label>
                    <input type="text" name="roomType" value={room.roomType} onChange={handleChange} />
                </div>
                <div>
                    <label>Room Price:</label>
                    <input type="text" name="roomPrice" value={room.roomPrice} onChange={handleChange} />
                </div>
                <div>
                    <label>Room Description:</label>
                    <input type="text" name="roomDescription" value={room.roomDescription} onChange={handleChange} />
                </div>
                <button type="submit">Add Room</button>
            </form>
        </div>
    );
};
export default AddRoom;