const Dashboard = () => {
  return (
    <div className="flex flex-col grow w-full p-8 pt-4">
      <div className="pb-3">
        <h3 className="text-3xl font-bold">Dashboard</h3>
      </div>
      <div className="pb-4">
        <span className="font-bold">Welcome, User</span>
      </div>
      {/* Start: Body */}
      <div className="grow pt-2">
        <div className="flex gap-10">
          <div className="w-1/3 pt-2">
            <div className="relative bg-[#fff] rounded-xl">
              <div
                className="w-[64px] h-[64px] absolute left-[16px] -translate-y-1/2 rounded-xl"
                style={{
                  background:
                    "linear-gradient(225.58deg, #549DCD 7.84%, #2A4F67 85.19%)",
                }}
              >
                bgic
              </div>
              Card123
            </div>
          </div>
          <div className="w-1/3 pt-2">
            <div className="relative bg-[#fff] rounded-xl">
              <div className="w-[64px] h-[64px] absolute -translate-y-1/2">
                bgic
              </div>
              Card123
            </div>
          </div>
          <div className="w-1/3 pt-2">
            <div className="relative bg-[#fff] rounded-xl">
              <div className="w-[64px] h-[64px] absolute -translate-y-1/2">
                bgic
              </div>
              Card123
            </div>
          </div>
        </div>
      </div>
      {/* Start: Body */}
    </div>
  );
};

export default Dashboard;
