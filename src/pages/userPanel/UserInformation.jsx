import Header from "./../../components/layout/Header";
import Sidebar from "./Sidebar";

export default function UserInformation() {
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
                                    src="https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                    alt=""
                                />
                            </div>
                            <div className="user-panel-content-user-info">
                            <div className="group-col">
                                    <div className="data-label">User name</div>
                                    <div className="data">amsanei</div>
                                </div>
                                <div className="group-col">
                                    <div className="data-label">Full name</div>
                                    <div className="data">Amir mohammad</div>
                                </div>
                                <div className="group-col">
                                    <div className="data-label">Gender</div>
                                    <div className="data">Male</div>
                                </div>

                                <div className="group-col">
                                    <div className="data-label">
                                        Phone number
                                    </div>
                                    <div className="data">0914563256</div>
                                </div>
                                <div className="group-col">
                                    <div className="data-label">E-mail</div>
                                    <div className="data">
                                        amir.mainpage@gmail.com
                                    </div>
                                </div>
                                <div className="group-col">
                                    <div className="data-label">State</div>
                                    <div className="data">Ardebil</div>
                                </div>
                                <div className="group-col">
                                    <div className="data-label">City</div>
                                    <div className="data">Germi</div>
                                </div>
                                <div className="group-col">
                                    <div className="data-label">Zip code</div>
                                    <div className="data">1234567891</div>
                                </div>
                                <div className="group-col panel-user-info-address">
                                    <div className="data-label">Address</div>
                                    <div className="data">
                                        First street , aa block , red door
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
