// import { useSelector } from "react-redux";

import { useSelector } from "react-redux";
import CircularProgress from "./components/CircularProgress";
import LineChartComponent from "./components/LinChart";
import { useState } from "react";

const navTopLinkList = [
  { title: "Home", uel: "/", icon: "/Home.svg" },
  { title: "Documents", uel: "/", icon: "/" },
  { title: "Payments", uel: "/", icon: "/pay.svg" },
  { title: "Calendar", uel: "/", icon: "/" },
  { title: "Profile", uel: "/", icon: "/Pro.svg" },
];
const navBottomLinkList = [
  { title: "Darkmode", uel: "/", icon: "/" },
  { title: "Setting", uel: "/", icon: "/sett.svg" },
  { title: "Logout", uel: "/", icon: "/Logout.svg" },
];

export default function App() {
  const { users } = useSelector((state) => state.users);
  const [hoverTitle, sethoverTitle] = useState("Home");
  const [hoverBottomTitle, sethoverBottomTitle] = useState("Darkmode");

  return (
    <div className=" h-full w-full ">
      <div className=" w-[1465px] mx-auto bg-black p-6 flex rounded-[40px] justify-between gap-6">
        <div className=" w-[209px] flex flex-col justify-between h-[836px]  ">
          <div className=" w-full h-[603px] py-6 bg-card_bg flex flex-col justify-between rounded-[20px]">
            <div className=" flex flex-col gap-[32px]">
              {navTopLinkList?.map((link, index) => (
                <div
                  key={index}
                  className=" text-inactive_txt text-[14px] flex gap-4 cursor-pointer items-center"
                  onMouseMove={() => sethoverTitle(link.title)}
                >
                  <div
                    className={` ${
                      link?.title === hoverTitle ? "bg-purple" : " bg-none"
                    }  h-[35px] w-[8px] rounded-br-[24px] rounded-tr-[24px]`}
                  ></div>
                
                   <img
                    src={link?.icon === "/" ? "/Document.svg" : link?.icon}
                    alt=""
                    className=" h-[24px] w-[24px]"
                  />
                  <p>{link.title}</p>
                </div>
              ))}
            </div>
            <div className=" bg-inactive_txt h-[2px] w-[124px] ml-[24px]"></div>
            <div className=" flex flex-col gap-[32px]">
              {navBottomLinkList?.map((link, index) => (
                <div
                  key={index}
                  onMouseMove={() => sethoverBottomTitle(link.title)}
                  className=" text-inactive_txt text-[14px] flex gap-4 items-center"
                >
                  <div
                    className={`  ${
                      link?.title === hoverBottomTitle
                        ? "bg-purple"
                        : " bg-none"
                    } h-[35px] w-[8px] rounded-br-[24px] rounded-tr-[24px]`}
                  ></div>
                  <img
                    src={link?.icon === "/" ? "/Document.svg" : link?.icon}
                    alt=""
                    className=" h-[24px] w-[24px]"
                  />
                  <p>{link.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className=" w-full flex justify-center bg-card_bg rounded-[20px] h-[209px]">
            <img src="/Frame1.svg" alt="" className=" h-[155px] w-[137px]" />
          </div>
        </div>

        {/* middle */}
        <div className=" w-[810px] flex flex-col gap-6 ">
          {/* navbar */}
          <div className=" flex items-center gap-6">
            <div className=" w-[577px] flex items-center gap-6 h-[72px] rounded-[20px] bg-card_bg px-[30px] py-[25px]">
              <img
                src="/icon-search.svg"
                alt=""
                className=" h-[24px] w-[24px]"
              />
              <input
                type="text"
                placeholder="Search for a project"
                className=" bg-transparent text-white w-full outline-none pl-4"
              />
            </div>
            <div className=" w-[92px] h-[72px] relative rounded-[20px] bg-card_bg hover:bg-gray-600 px-[30px] py-[25px]">
              {" "}
              <div className=" absolute top-3 right-6 h-6 w-6 text-[12px] rounded-full bg-purple flex justify-center items-center text-white">
                2
              </div>
              <img src="/Message.svg" alt="" className=" h-[24px] w-[24px]" />
            </div>

            <div className=" relative w-[92px] h-[72px] rounded-[20px] hover:bg-gray-600 bg-card_bg px-[30px] py-[25px]">
              {" "}
              <div className=" absolute top-3 right-6 h-6 w-6 text-[12px] rounded-full bg-purple flex justify-center items-center text-white">
                2
              </div>
              <img
                src="/Notification.svg"
                alt=""
                className=" h-[24px] w-[24px]"
              />
            </div>
          </div>
          <div className="  w-full grid grid-cols-2 gap-6 h-[152px]">
            <div className=" bg-custom-gradient flex justify-center items-center gap-10 rounded-[20px]">
              <div className=" text-white flex flex-col gap-2">
                <p className=" text-[14px] ">Total Finance</p>
                <p className=" text-[27px] font-semibold">$145,000</p>
              </div>
              <CircularProgress value={30} size={80} color="green" />
            </div>
            <div className=" bg-custom-gradient flex justify-center items-center gap-10 rounded-[20px]">
              <div className=" text-white flex flex-col gap-2">
                <p className=" text-[14px] ">Total Finance</p>
                <p className=" text-[27px] font-semibold">$145,000</p>
              </div>
              <CircularProgress value={30} size={80} color="green" />
            </div>
          </div>
          <div className=" w-full  grid grid-cols-2 gap-6 h-[331px]">
            <div className=" w-full bg-card_bg rounded-[20px] p-[30px]">
              <div className="  text-white flex items-center justify-between">
                <div></div>
                <p className=" font-semibold text-[14px]">
                  Monday, 28 December 2021
                </p>
                <div></div>
              </div>
              <LineChartComponent />
            </div>
            <div className=" w-full flex flex-col justify-center items-center gap-10 bg-card_bg rounded-[20px] p-[30px]">
              <div className=" w-full text-white flex items-center justify-between">
                <div></div>
                <p className=" font-semibold text-[14px]">
                  Your Finance Target
                </p>
                <img
                  src="/icon-more.svg"
                  alt=""
                  className=" w-[18px] h-[4px] rotate-90"
                />
              </div>
              <CircularProgress value={30} size={124} color="green" />

              <div className=" text-white flex w-full justify-between">
                <div className="flex gap-2">
                  <div className=" w-2 h-2 mt-1 rounded-full bg-green-700"></div>
                  <div className=" flex flex-col gap-2">
                    <p className=" text-[12px]">Result Achieved</p>
                    <p className=" text-[10px] text-gray-400">
                      Achieved well and
                      <br /> smoothly
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className=" w-2 h-2 mt-1 rounded-full bg-green-700"></div>
                  <div className=" flex flex-col gap-2">
                    <p className=" text-[12px]">Result Achieved</p>
                    <p className=" text-[10px] text-gray-400">
                      Achieved well and <br /> smoothly
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full px-[30px] text-white py-[27px] rounded-[20px] h-[209px] bg-card_bg flex flex-col gap-[10px]">
            <p className=" text-[14px] font-semibold">Projects Finance</p>
            <div className="h-[200px] overflow-scroll">
              <table className="w-full border-separate border-spacing-y-[21px] text-left text-gray-400">
                <thead>
                  <tr className="w-full text-[12px]">
                    <th className="w-1/5">Name</th>
                    <th className="w-1/5">Progress</th>
                    <th className="w-1/5">Achieved</th>
                    <th className="w-1/5">Status</th>
                    <th className="w-1/5">View All</th>
                  </tr>
                </thead>
                <tbody className=" ">
                  <tr className=" text-left text-[14px] text-white">
                    <td>
                      <div className=" flex items-center gap-[20px]">
                        <img
                          src="/Frame1.svg"
                          alt=""
                          className=" h-[27px] w-[27px]"
                        />

                        <p className=" text-[14px] font-semibold">
                          Emmy Dansom
                        </p>
                      </div>
                    </td>
                    <td>Progress</td>
                    <td>Achieved</td>
                    <div className="flex items-center gap-2">
                      <div className=" w-2 h-2 rounded-full bg-green-700"></div>

                      <p className=" text-[12px]">Result Achieved</p>
                    </div>
                    <td>
                      <img
                        src="/icon-more.svg"
                        alt=""
                        className=" h-[4px] w-[18px]"
                      />
                    </td>
                  </tr>
                  <tr className=" text-left text-[14px] text-white">
                    <td>
                      <div className=" flex items-center gap-[20px]">
                        <img
                          src="/Frame1.svg"
                          alt=""
                          className=" h-[27px] w-[27px]"
                        />

                        <p className=" text-[14px] font-semibold">
                          Emmy Dansom
                        </p>
                      </div>
                    </td>
                    <td>Progress</td>
                    <td>Achieved</td>
                    <div className="flex items-center gap-2">
                      <div className=" w-2 h-2 rounded-full bg-green-700"></div>

                      <p className=" text-[12px]">Result Achieved</p>
                    </div>
                    <td>
                      <img
                        src="/icon-more.svg"
                        alt=""
                        className=" h-[4px] w-[18px]"
                      />
                    </td>
                  </tr>
                  <tr className=" text-left text-[14px] text-white">
                    <td>
                      <div className=" flex items-center gap-[20px]">
                        <img
                          src="/Frame1.svg"
                          alt=""
                          className=" h-[27px] w-[27px]"
                        />

                        <p className=" text-[14px] font-semibold">
                          Emmy Dansom
                        </p>
                      </div>
                    </td>
                    <td>Progress</td>
                    <td>Achieved</td>
                    <div className="flex items-center gap-2">
                      <div className=" w-2 h-2 rounded-full bg-green-700"></div>

                      <p className=" text-[12px]">Result Achieved</p>
                    </div>
                    <td>
                      <img
                        src="/icon-more.svg"
                        alt=""
                        className=" h-[4px] w-[18px]"
                      />
                    </td>
                  </tr>
                  {/* Add more rows here */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* right */}
        <div className=" w-[326px] flex flex-col gap-6 ">
          <div className=" rounded-[20px] px-6 py-[30px] flex flex-col gap-[41px] w-full h-[703px] bg-card_bg">
            <div className=" flex flex-col items-center gap-6">
              <div className=" text-white flex flex-col items-center gap-2">
                <div className=" h-[96px] relative w-[96px] rounded-full border-[1px] border-[#B983FF] flex justify-center items-center">
                  <img
                    src="/Frame1.svg"
                    alt=""
                    className=" h-[81px] w-[81px]"
                  />
                  <div className=" absolute bottom-4 right-3 h-[14px] w-[14px] bg-[#04C000] rounded-full"></div>
                </div>
                <div className=" flex flex-col items-center gap-[2px]">
                  <p className=" text-[16px] font-semibold">Emmy Dansom</p>
                  <p className=" text-[12px] text-gray-400">CEO</p>
                </div>
              </div>
              <div className=" w-full grid grid-cols-3 gap-6">
                <div className=" bg-[#6F4CA4] hover:bg-[#6F4CA4]/60 cursor-pointer flex justify-center items-center h-[59px] rounded-[10px] ">
                  {" "}
                  <img
                    src="/3 User.svg"
                    alt=""
                    className=" h-[24px] w-[24px]"
                  />
                </div>
                <div className=" bg-[#6F4CA4] hover:bg-[#6F4CA4]/60 cursor-pointer flex justify-center items-center h-[59px] rounded-[10px] ">
                  {" "}
                  <img
                    src="/Activity.svg"
                    alt=""
                    className=" h-[24px] w-[24px]"
                  />
                </div>{" "}
                <div className=" bg-[#6F4CA4] hover:bg-[#6F4CA4]/60 cursor-pointer flex justify-center items-center h-[59px] rounded-[10px] ">
                  {" "}
                  <img
                    src="/Document.svg"
                    alt=""
                    className=" h-[24px] w-[24px]"
                  />
                </div>
              </div>
            </div>
            <div className=" min-h-[1px] bg-gray-200 w-full"></div>
            <div className=" flex flex-col gap-[30px]">
              <div className=" flex text-white flex-col gap-[8px]">
                <p className=" text-[14px] font-semibold">About</p>
                <p className=" text-[12px] leading-6 text-gray-400">
                  Organized activities to make money and sell goods and services
                  for a profit
                </p>
              </div>

              <div className=" flex flex-col gap-6 h-[240px] overflow-scroll">
                {users?.map((item, index) => (
                  <div
                    key={index}
                    className=" flex hover:border-b-[2px] border-gray-400 cursor-pointer items-center gap-[20px]"
                  >
                    <div className=" h-[64px] relative w-[64px] rounded-full border-[1px] border-[#B983FF] flex justify-center items-center">
                      <img
                        src={item?.imgUrl}
                        alt=""
                        className=" h-[54px] w-[54px]"
                      />
                      <div className=" absolute bottom-2 right-2 h-[12px] w-[12px] bg-[#04C000] rounded-full"></div>
                    </div>
                    <div className=" text-white flex flex-col gap-[4px]">
                      <p className=" text-[14px] font-semibold">{item?.name}</p>
                      <p className=" text-[12px] text-gray-400">
                        {item?.designation}
                      </p>
                    </div>
                  </div>
                ))}

                {/* <div className=" flex items-center gap-[20px]">
                  <div className=" h-[64px] relative w-[64px] rounded-full border-[1px] border-[#B983FF] flex justify-center items-center">
                    <img
                      src="/Frame1.svg"
                      alt=""
                      className=" h-[54px] w-[54px]"
                    />
                    <div className=" absolute bottom-2 right-2 h-[12px] w-[12px] bg-[#04C000] rounded-full"></div>
                  </div>
                  <div className=" text-white flex flex-col gap-[4px]">
                    <p className=" text-[14px] font-semibold">Emmy Dansom</p>
                    <p className=" text-[12px] text-gray-400">CEO</p>
                  </div>
                </div> */}
                {/* <div className=" flex items-center gap-[20px]">
                  <div className=" h-[64px] w-[64px] rounded-full border-[1px] border-[#B983FF] flex justify-center items-center">
                    <img
                      src="/Frame1.svg"
                      alt=""
                      className=" h-[54px] w-[54px]"
                    />
                  </div>
                  <div className=" text-white flex flex-col gap-[4px]">
                    <p className=" text-[14px] font-semibold">Emmy Dansom</p>
                    <p className=" text-[12px] text-gray-400">CEO</p>
                  </div>
                </div> */}
                {/* <div className=" flex items-center gap-[20px]">
                  <div className=" h-[64px] w-[64px] rounded-full border-[1px] border-[#B983FF] flex justify-center items-center">
                    <img
                      src="/Frame1.svg"
                      alt=""
                      className=" h-[54px] w-[54px]"
                    />
                  </div>
                  <div className=" text-white flex flex-col gap-[4px]">
                    <p className=" text-[14px] font-semibold">Emmy Dansom</p>
                    <p className=" text-[12px] text-gray-400">CEO</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className=" text-white px-[30px] py-[26px] flex items-center justify-between  rounded-[20px] w-full h-[109px] bg-card_bg">
            <div className="flex flex-col gap-2">
              <p className=" text-[14px] font-semibold">Send Money</p>
              <div className=" text-[12px] flex gap-2 items-center">
                {" "}
                <div className=" rounded-full h-4 w-4 bg-[#FF98BF]"></div>Your
                Card
              </div>
            </div>
            <p className=" text-[24px]">$145,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
