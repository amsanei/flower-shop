import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import Header from "./../../components/layout/Header";
import Sidebar from "./Sidebar";

export default function UserInformation() {
    const { loggedinUser, editUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        username: loggedinUser.username,
        fullName: loggedinUser.fullName,
        gender: loggedinUser.gender,
        email: loggedinUser.email,
        phoneNumber: loggedinUser.phoneNumber,
        state: loggedinUser.state,
        city: loggedinUser.city,
        zipCode: loggedinUser.zipCode,
        address: loggedinUser.address,
    });

    const {
        username,
        fullName,
        gender,
        email,
        phoneNumber,
        state,
        city,
        zipCode,
        address,
    } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    };

    const edit = (e) => {
        e.preventDefault();
        editUser( formData);
    };

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
                            <button onClick={edit} className="btn btn-prime">
                                submit
                            </button>
                        </div>
                    </div>
                    <div className="user-panel-content">
                        <form onSubmit={edit}>
                            <div className="user-info-container">
                                <div className="user-panel-content-user-img">
                                    <img
                                        src={loggedinUser.imageUrl}
                                        alt={loggedinUser.username}
                                    />
                                </div>
                                <div className="user-panel-content-user-info">
                                    <div className="group-col">
                                        <div className="data-label">
                                            User name
                                        </div>
                                        <div className="data">
                                            <input
                                                className="input-user-info"
                                                onChange={onChange}
                                                type="text"
                                                id="username"
                                                value={username}
                                            />
                                        </div>
                                    </div>
                                    <div className="group-col">
                                        <div className="data-label">
                                            Full name
                                        </div>
                                        <div className="data">
                                            <input
                                                className="input-user-info"
                                                onChange={onChange}
                                                type="text"
                                                id="fullName"
                                                value={fullName}
                                            />
                                        </div>
                                    </div>
                                    <div className="group-col">
                                        <div className="data-label">Gender</div>
                                        <div className="data">
                                            <select
                                                className="input-user-info"
                                                onChange={onChange}
                                                id="gender"
                                                value={gender}
                                            >
                                                <option value="male">
                                                    male
                                                </option>
                                                <option value="female">
                                                    female
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="group-col">
                                        <div className="data-label">
                                            Phone number
                                        </div>
                                        <div className="data">
                                            <input
                                                className="input-user-info"
                                                onChange={onChange}
                                                type="text"
                                                id="phoneNumber"
                                                value={phoneNumber}
                                            />
                                        </div>
                                    </div>
                                    <div className="group-col">
                                        <div className="data-label">E-mail</div>
                                        <div className="data">
                                            <input
                                                className="input-user-info"
                                                onChange={onChange}
                                                type="text"
                                                id="email"
                                                value={email}
                                            />
                                        </div>
                                    </div>
                                    <div className="group-col">
                                        <div className="data-label">State</div>
                                        <div className="data">
                                            <input
                                                className="input-user-info"
                                                onChange={onChange}
                                                type="text"
                                                id="state"
                                                value={state}
                                            />
                                        </div>
                                    </div>
                                    <div className="group-col">
                                        <div className="data-label">City</div>
                                        <div className="data">
                                            <input
                                                className="input-user-info"
                                                onChange={onChange}
                                                type="text"
                                                id="city"
                                                value={city}
                                            />
                                        </div>
                                    </div>
                                    <div className="group-col">
                                        <div className="data-label">
                                            Zip code
                                        </div>
                                        <div className="data">
                                            <input
                                                className="input-user-info"
                                                onChange={onChange}
                                                type="text"
                                                id="zipCode"
                                                value={zipCode}
                                            />
                                        </div>
                                    </div>
                                    <div className="group-col panel-user-info-address">
                                        <div className="data-label">
                                            Address
                                        </div>
                                        <div className="data">
                                            <input
                                                className="input-user-info"
                                                onChange={onChange}
                                                type="text"
                                                id="address"
                                                value={address}
                                                style={{ width: "85.5%" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
