import { ReactComponent as AddAccountIcon } from "../assets/icons/add-account.svg";
import { ReactComponent as ChartIcon } from "../assets/icons/chart.svg";
import { ReactComponent as AccountIcon } from "../assets/icons/user-account.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";
import Navbar from "../components/navbar";

const Dashboard = () => {
  return (
    <div className="h-full flex">
      <Navbar />
      <section className="flex flex-col grow">
        <header className="p-8 pb-4">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div className="flex flex-col grow w-full p-8 pt-4">
          <div className="pb-3">
            <h3 className="text-4xl font-bold">Dashboard</h3>
          </div>
          <div className="text-xl pb-4">
            <span className="font-bold">Welcome, User</span>
          </div>
          {/* Start: Body */}
          <div className="grow pt-2 -my-6">
            {/* End: cards */}
            <div className="flex text-[#344767] py-6 -mx-6">
              <div className="w-1/3 px-6">
                <div className="pt-2">
                  <div className="relative bg-[#fff] rounded-xl shadow-[0px_2px_6px_0px_#00000040]">
                    <div
                      className="flex items-center justify-center w-[64px] h-[64px] absolute left-[16px] -translate-y-1/4 rounded-xl"
                      style={{
                        background:
                          "linear-gradient(225.58deg, #549DCD 7.84%, #2A4F67 85.19%)",
                      }}
                    >
                      <AccountIcon fill="#fff" />
                    </div>
                    <div className="flex flex-col items-end p-4">
                      <span className="text-sm font-light">Total Orders</span>
                      <span className="py-1 text-2xl font-bold">256</span>
                    </div>
                    <div className="border-t" />
                    <div className="font-light p-4">
                      <span className="text-[#4CAF50] font-bold pe-1">
                        +55%
                      </span>
                      than last week
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/3 px-6">
                <div className="pt-2">
                  <div className="relative bg-[#fff] rounded-xl shadow-[0px_2px_6px_0px_#00000040]">
                    <div
                      className="flex items-center justify-center w-[64px] h-[64px] absolute left-[16px] -translate-y-1/4 rounded-xl"
                      style={{
                        background:
                          "linear-gradient(221.89deg, #279D4F 25.2%, #0E371C 100%)",
                      }}
                    >
                      <ChartIcon fill="#fff" />
                    </div>
                    <div className="flex flex-col items-end p-4">
                      <span className="text-sm font-light">
                        Orders Delivered
                      </span>
                      <span className="py-1 text-2xl font-bold">700</span>
                    </div>
                    <div className="border-t" />
                    <div className="font-light p-4">
                      <span className="text-[#4CAF50] font-bold pe-1">+3%</span>
                      than last week
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/3 px-6">
                <div className="pt-2">
                  <div className="relative bg-[#fff] rounded-xl shadow-[0px_2px_6px_0px_#00000040]">
                    <div
                      className="flex items-center justify-center w-[64px] h-[64px] absolute left-[16px] -translate-y-1/4 rounded-xl"
                      style={{
                        background:
                          "linear-gradient(225.51deg, #FF6262 19.69%, #993B3B 87.51%)",
                      }}
                    >
                      <AddAccountIcon fill="#fff" />
                    </div>
                    <div className="flex flex-col items-end p-4">
                      <span className="text-sm font-light">Orders Pending</span>
                      <span className="py-1 text-2xl font-bold">+124</span>
                    </div>
                    <div className="border-t" />
                    <div className="font-light p-4">Just updated</div>
                  </div>
                </div>
              </div>
            </div>
            {/* End: cards */}

            {/*  */}
            <div className="flex py-6 -mx-6 -my-6 text-[#2A4F67]">
              <div className="w-2/3 px-6 py-6 -my-6 flex flex-col">
                <div className="flex py-6 -mx-6 -my-6">
                  <div className="w-1/2 px-6 py-6">
                    <div
                      className="relative rounded-xl p-4 pt-2"
                      style={{
                        background:
                          "linear-gradient(241.54deg, rgba(138, 187, 221, 0.2) 0%, rgba(74, 101, 119, 0.2) 100%)",
                      }}
                    >
                      <span className="absolute top-[8px] right-[8px]">
                      <CloseIcon fill="#000000" />
                      </span>
                      <div className="text-xl text-center font-bold">
                        <span className="inline-flex flex-col items-center justify-center text-center">
                          Loading Sheet
                          <span className="w-[70%] h-[2px] rounded bg-[#B3B5BF]"></span>
                        </span>
                      </div>
                      <div className="text-lg">Orders</div>
                      <div className="flex flex-col gap-3 text-[#fff]">
                        <div className="flex justify-center shadow-[0px_4px_4px_0px_#00000040] bg-[#549DCD75] rounded-xl p-2">
                          <div className="border-2 border-[#fff] p-2 w-[36px] h-[36px] flex items-center justify-center rounded-full">
                            1
                          </div>
                          <div className="grow text-center flex items-center justify-center">
                            ID: #12345
                          </div>
                        </div>
                        <div className="flex justify-center shadow-[0px_4px_4px_0px_#00000040] bg-[#549DCD75] rounded-xl p-2">
                          <div className="border-2 border-[#fff] p-2 w-[36px] h-[36px] flex items-center justify-center rounded-full">
                            1
                          </div>
                          <div className="grow text-center flex items-center justify-center">
                            ID: #12345
                          </div>
                        </div>
                        <div className="flex justify-center shadow-[0px_4px_4px_0px_#00000040] bg-[#549DCD75] rounded-xl p-2">
                          <div className="border-2 border-[#fff] p-2 w-[36px] h-[36px] flex items-center justify-center rounded-full">
                            1
                          </div>
                          <div className="grow text-center flex items-center justify-center">
                            ID: #12345
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 px-6 py-6"></div>
                </div>
                <div className="flex py-6 -mx-6">
                  <div className="w-1/2 px-6"></div>
                  <div className="w-1/2 px-6 -my-6 flex flex-col">
                    <div className="py-6"></div>
                    <div className="py-6"></div>
                  </div>
                </div>
              </div>
              <div className="w-1/3 px-6 py-6"></div>
            </div>
          </div>
          {/* End: Body */}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
