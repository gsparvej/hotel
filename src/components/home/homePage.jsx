import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <table>
                <tbody>
                    <tr>
                        {/* Column 1 */}
                        <td>
                            <div> Add New Hotel </div>
                            <Link to="/addHotel">Click here</Link>
                            <hr />
                            <div> View Hotel </div>
                            <Link to="/viewHotel">Click here</Link>
                            <div> Add New Room </div>
                            <Link to="/addRoom">Click here</Link>
                            <div> Booking Hotel </div>
                            <Link to="/bookingHotel">Click here</Link>
                            <div> Booking List </div>
                            <Link to="/bookingList">Click here</Link>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default HomePage;