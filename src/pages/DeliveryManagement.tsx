import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";

function DeliveryManagement() {
    return (
        <>
            <BreadcrumbsItem to="/delivery">Delivery</BreadcrumbsItem>

            <div>
                <div className="pb-3 flex justify-between">
                    <h3 className="text-3xl font-bold">Delivery Management</h3>
                    <div>
                        <button className="bg-[#04C139] text-white px-6 py-1 rounded-xl">
                            ADD DELIVERY
                        </button>
                        <button className="bg-[#549DCD] text-white px-6 py-1 ml-4 rounded-xl">
                            EDIT DELIVERY
                        </button>
                        <button className="bg-[#F70000] text-white px-6 py-1 ml-4 rounded-xl">
                            DELETE
                        </button>
                    </div>
                </div>

                <div>
                    <table className="min-w-full bg-white mt-4">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="w-1/12 px-4 py-2 text-start">
                                    ID
                                </th>
                                <th className="w-2/12 px-4 py-2 text-start">
                                    Customer Name
                                </th>
                                <th className="w-3/12 px-4 py-2 text-start">
                                    Delivery Address
                                </th>
                                <th className="w-1/12 px-4 py-2 text-start">
                                    Quantity
                                </th>
                                <th className="w-1/12 px-4 py-2 text-start">
                                    Priority
                                </th>
                                <th className="w-2/12 px-4 py-2 text-start">
                                    Delivery Date
                                </th>
                                <th className="w-2/12 px-4 py-2 text-start">
                                    Instructions
                                </th>
                                <th className="w-1/12 px-4 py-2 text-start">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-gray-100 border-b">
                                <td className="px-4 py-2">12345</td>
                                <td className="px-4 py-2">Jaynen Reibling</td>
                                <td className="px-4 py-2">
                                    123 King St, Toronto, ON
                                </td>
                                <td className="px-4 py-2">3</td>
                                <td className="px-4 py-2">High</td>
                                <td className="px-4 py-2">2024-06-05</td>
                                <td className="px-4 py-2">Handle with care</td>
                                <td className="px-4 py-2 text-yellow-500 font-semibold">
                                    Pending
                                </td>
                            </tr>
                            <tr className="bg-white border-b">
                                <td className="px-4 py-2">67890</td>
                                <td className="px-4 py-2">Jane Smith</td>
                                <td className="px-4 py-2">
                                    456 Queen St, Vancouver, BC
                                </td>
                                <td className="px-4 py-2">10</td>
                                <td className="px-4 py-2">Medium</td>
                                <td className="px-4 py-2">2024-06-06</td>
                                <td className="px-4 py-2">
                                    Leave at front door
                                </td>
                                <td className="px-4 py-2 text-blue-500 font-semibold">
                                    Scheduled
                                </td>
                            </tr>
                            <tr className="bg-gray-100 border-b">
                                <td className="px-4 py-2">89067</td>
                                <td className="px-4 py-2">Sachin Shah</td>
                                <td className="px-4 py-2">
                                    789 Bloor St, Ottawa, ON
                                </td>
                                <td className="px-4 py-2">1</td>
                                <td className="px-4 py-2">High</td>
                                <td className="px-4 py-2">2024-06-07</td>
                                <td className="px-4 py-2">
                                    Assemble on delivery
                                </td>
                                <td className="px-4 py-2 text-orange-500 font-semibold">
                                    In Progress
                                </td>
                            </tr>
                            <tr className="bg-white">
                                <td className="px-4 py-2">81256</td>
                                <td className="px-4 py-2">Shiva Shankar</td>
                                <td className="px-4 py-2">
                                    101 Main St, Calgary, AB
                                </td>
                                <td className="px-4 py-2">20</td>
                                <td className="px-4 py-2">Low</td>
                                <td className="px-4 py-2">2024-06-08</td>
                                <td className="px-4 py-2">Ring bell once</td>
                                <td className="px-4 py-2 text-green-500 font-semibold">
                                    Delivered
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="my-8 flex justify-center items-center">
                    <div className="grid grid-cols-2 gap-8">
                        {/* Update Delivery Status Form */}
                        <div className="w-full bg-white shadow-md rounded-lg overflow-hidden p-6">
                            <h2 className="text-lg font-semibold mb-4">
                                Update Delivery Status
                            </h2>
                            <table className="min-w-full divide-y divide-gray-200 text-center">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Field
                                        </th>
                                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Description
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            Order ID
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            89067
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            Status
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            In Transit
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            Priority
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            High
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            Comments
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button className="bg-green-500 text-white px-4 py-2 rounded">
                                                SAVE
                                            </button>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button className="bg-red-500 text-white px-4 py-2 rounded">
                                                CANCEL
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Reschedule Delivery Form */}
                        <div className="w-full bg-white shadow-md rounded-lg overflow-hidden p-6">
                            <h2 className="text-lg font-semibold mb-4">
                                Reschedule Delivery
                            </h2>
                            <table className="min-w-full divide-y divide-gray-200 text-center">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Field
                                        </th>
                                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Description
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            Order ID
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            99881
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            New Delivery Date
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            YYYY/MM/DD
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            New Delivery Time
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            2:00 PM - 3:00 PM
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            Comments
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap"></td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button className="bg-green-500 text-white px-4 py-2 rounded">
                                                SAVE
                                            </button>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button className="bg-red-500 text-white px-4 py-2 rounded">
                                                CANCEL
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DeliveryManagement;
