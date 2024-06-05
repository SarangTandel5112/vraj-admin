import ManageDrivers from "../components/ManageDrivers";

function FleedManagement() {
    return (
        <div>
            <div className="pb-3 flex justify-between">
                <h3 className="text-3xl font-bold">Fleet Management</h3>
            </div>
            <div>
                <button
                    className="text-white px-6 py-1 rounded-xl"
                    style={{
                        background:
                            "linear-gradient(256.6deg, #8F00FF 65.7%, #550099 77.48%)",
                    }}
                >
                    Drivers
                </button>
                <ManageDrivers />
            </div>
        </div>
    );
}

export default FleedManagement;
