import Header from "../../components/layout/Header";
import Sidebar from "./Sidebar";

export default function Dashboard() {

    return (
        <>
            <Header />
            <div className="user-panel">
                <Sidebar />
                <div className="user-panel-body">
                    <div className="user-panel-header">
                        <div className="user-panel-header-title">Dashbaord</div>
                    </div>
                    <div className="user-panel-content">
                        Welcome 🦋
                    </div>
                </div>
            </div>
        </>
    );
}
