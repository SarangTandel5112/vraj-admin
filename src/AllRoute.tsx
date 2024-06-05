import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./pages/dashboard";
import LoadingSheet from "./pages/LoadingSheet";
import FleedManagement from "./pages/FleetManagement";

function AllRoute() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/loading-sheets" element={<LoadingSheet />} />
                    <Route
                        path="/fleet-management"
                        element={<FleedManagement />}
                    />
                </Route>
            </Routes>
        </>
    );
}

export default AllRoute;
