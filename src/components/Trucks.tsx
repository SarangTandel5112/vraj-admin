const Trucks = () => {
    return (
        <div className="w-full mt-4 flex justify-between">
            <div className="w-2/3 bg-white shadow-md rounded-lg overflow-scroll">
                <div className="px-6 py-4">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">
                        Manage Trucks
                    </h2>
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Truck ID
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    License Plate
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Model
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Capacity
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    1
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Ryan Jackson
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    ABCD1234
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    555-1234
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Active
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button className="bg-[#8E00FE] text-white px-3 py-1 rounded mr-2">
                                        EDIT
                                    </button>
                                    <button className="bg-[#FE0000] text-white px-3 py-1 rounded">
                                        DELETE
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    2
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Bob Ryan
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    EFGH5678
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    555-5678
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    On Leave
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button className="bg-[#8E00FE] text-white px-3 py-1 rounded mr-2">
                                        EDIT
                                    </button>
                                    <button className="bg-[#FE0000] text-white px-3 py-1 rounded">
                                        DELETE
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    2
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Bob Ryan
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    EFGH5678
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    555-5678
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    On Leave
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button className="bg-[#8E00FE] text-white px-3 py-1 rounded mr-2">
                                        EDIT
                                    </button>
                                    <button className="bg-[#FE0000] text-white px-3 py-1 rounded">
                                        DELETE
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    2
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    Bob Ryan
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    EFGH5678
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    555-5678
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    On Leave
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <button className="bg-[#8E00FE] text-white px-3 py-1 rounded mr-2">
                                        EDIT
                                    </button>
                                    <button className="bg-[#FE0000] text-white px-3 py-1 rounded">
                                        DELETE
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="flex justify-between items-center mt-4">
                        <span className="text-sm text-gray-600">06 of 20</span>
                        <div>
                            <button className="text-gray-600 hover:text-gray-900 mx-1">
                                &lt;
                            </button>
                            <button className="text-gray-600 hover:text-gray-900 mx-1">
                                &gt;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/3 bg-white shadow-md rounded-lg overflow-hidden p-6 ml-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                    New Truck
                </h2>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="name"
                    >
                        License Plate
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="John Jaynen"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="license"
                    >
                        Model
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="license"
                        type="text"
                        placeholder="YZAB9876"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="phone"
                    >
                        Capacity
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phone"
                        type="text"
                        placeholder="555-9848"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="status"
                    >
                        Status
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="status"
                        type="text"
                        placeholder="In Training"
                    />
                </div>
                <div className="text-center">
                    <button className="bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        ADD
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Trucks;
