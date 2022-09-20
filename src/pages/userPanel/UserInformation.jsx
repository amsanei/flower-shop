import { useContext } from "react";
import UserContext from "../../context/UserContext";
import Header from "./../../components/layout/Header";
import Sidebar from "./Sidebar";

export default function UserInformation() {
    const { loggedinUser } = useContext(UserContext);
    return (
        <>
            <Header />
            <div className="user-panel">
                <Sidebar />
                <div className="user-panel-body">
                    <div className="user-panel-header">
                        <div className="user-panel-header-title">
                            Your information
                        </div>
                        <div className="user-panel-header-buttons">
                            <button className="btn btn-second">Edit</button>
                        </div>
                    </div>
                    <div className="user-panel-content">
                        <div className="user-info-container">
                            <div className="user-panel-content-user-img">
                                <img
                                    src={loggedinUser.imageUrl}
                                    alt={loggedinUser.username}
                                />
                            </div>
                            <div className="user-panel-content-user-info">
                                <div className="group-col">
                                    <div className="data-label">User name</div>
                                    <div className="data">
                                        {loggedinUser.username}
                                    </div>
                                </div>
                                <div className="group-col">
                                    <div className="data-label">Full name</div>
                                    <div className="data">
                                        {loggedinUser.fullName}
                                    </div>
                                </div>
                                <div className="group-col">
                                    <div className="data-label">Gender</div>
                                    <div className="data">
                                        {loggedinUser.gender}
                                    </div>
                                </div>

                                <div className="group-col">
                                    <div className="data-label">
                                        Phone number
                                    </div>
                                    <div className="data">
                                        {loggedinUser.phoneNumber}
                                    </div>
                                </div>
                                <div className="group-col">
                                    <div className="data-label">E-mail</div>
                                    <div className="data">
                                        {loggedinUser.email}
                                    </div>
                                </div>
                                <div className="group-col">
                                    <div className="data-label">State</div>
                                    <div className="data">{loggedinUser.state}</div>
                                </div>
                                <div className="group-col">
                                    <div className="data-label">City</div>
                                    <div className="data">{loggedinUser.city}</div>
                                </div>
                                <div className="group-col">
                                    <div className="data-label">Zip code</div>
                                    <div className="data">{loggedinUser.zipCode}</div>
                                </div>
                                <div className="group-col panel-user-info-address">
                                    <div className="data-label">Address</div>
                                    <div className="data">
                                    {loggedinUser.address}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
