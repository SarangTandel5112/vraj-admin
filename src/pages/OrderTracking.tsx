import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";

function OrderTracking() {
    return (
        <>
            <BreadcrumbsItem to="/order-tracking">
                Order Tracking
            </BreadcrumbsItem>

            <div>
                <div className="pb-3 flex justify-between">
                    <h3 className="text-3xl font-bold">Order Tracking</h3>
                </div>

                <div className="p-8 flex flex-col items-center">
                    <h1 className="text-xl font-semibold mb-4">
                        Enter your Order ID to track your order
                    </h1>
                    <div className="flex items-center mb-8">
                        <input
                            type="text"
                            placeholder="Search here"
                            className="p-2 border border-gray-300 rounded-l-lg"
                        />
                        <button className="bg-green-500 text-white px-4 py-2 rounded-r-lg">
                            TRACK
                        </button>
                    </div>
                    <div className="w-full max-w-4xl">
                        <h2 className="text-lg font-semibold mb-2">
                            Order Details
                        </h2>
                        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                            <thead className="bg-gray-100 text-center">
                                <tr>
                                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Order ID
                                    </th>
                                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Customer Name
                                    </th>
                                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Delivery Address
                                    </th>
                                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Quantity
                                    </th>
                                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Delivery Date/Time
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 text-center">
                                <tr className="bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        123456
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        Jaynen Reibling
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        123 King St, Toronto, ON
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        3
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-yellow-500">
                                        In Transit
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        June 4, 2024, 2:00 PM
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        67890
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        Jane Smith
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        456 Queen St, Vancouver, BC
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        10
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                                        Scheduled
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        June 6, 2024, 2:00 PM
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        89067
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        Sachin Shah
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        789 Bloor St, Ottawa, ON
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        1
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-orange-500">
                                        Out for delivery
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        June 3, 2024, 2:00 PM
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        81256
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        Shiva Shankar
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        101 Main St, Calgary, AB
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        1
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-green-500">
                                        Delivered
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        June 1, 2024, 2:00 PM
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderTracking;
