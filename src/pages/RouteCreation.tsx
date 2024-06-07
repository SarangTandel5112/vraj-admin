import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";

function RouteCreation() {
    return (
        <>
            <BreadcrumbsItem to="/route-creation">
                Route Creation
            </BreadcrumbsItem>

            <div className="min-w-full">
                <div className="pb-3 flex justify-between">
                    <h3 className="text-3xl font-bold">Route Creation</h3>
                    <div>
                        <button className="bg-[#04C139] text-white px-6 py-1 rounded-xl">
                            ADD
                        </button>
                        <button className="bg-[#549DCD] text-white px-6 py-1 ml-4 rounded-xl">
                            VIEW
                        </button>
                        <button className="bg-[#F70000] text-white px-6 py-1 ml-4 rounded-xl">
                            DELETE
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RouteCreation;
