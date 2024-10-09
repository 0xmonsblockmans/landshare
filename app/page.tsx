import Image from "next/image";
import StockChart from "./componenets/StockChart";
import SwabTokensCard from "./componenets/SwabTokensCard";
import {
  Armchair,
  BathIcon,
  MapPin,
  Pin,
  Recycle,
  Redo,
  RefreshCcw,
  Reply,
  Utensils,
} from "lucide-react";

const FinancialSummaryItems = [
  { title: "Gross Rent per Year", amount: "$13,200" },
  { title: "Gross Rent per Month", amount: "$1,100" },
  { title: "Monthly Expences", amount: "-$225.08" },
  {
    special: [
      { title: "Property Taxes", amount: "-$29.91" },
      { title: "Insurance", amount: "-$107.16" },
      { title: "Property Management", amount: "-$88.00" },
    ],
  },
  { title: "Payout Period", amount: "5th Day Monthly" },
  { title: "Rental Yieal/Token", amount: "$ 3,84/year" },
  { title: "Token", amount: "$50.00" },
  { title: "Total Tokens", amount: "2,736" },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-14">
      <section className="flex px-10 container mx-auto gap-12">
        <div className="w-2/3  flex flex-col gap-12">
          {/* <StockChart /> */}
          <section className="flex gap-6">
            <div className="bg-white p-6 w-1/3 rounded-2xl flex flex-col gap-2">
              <p className="text-content2">Cash on Cash Return</p>
              <div className="flex gap-2 items-center">
                <div className="bg-gray-100 rounded-full border-[1px] border-gray-300 size-8 flex items-center justify-center">
                  <RefreshCcw className="stroke-primary" size={20} />
                </div>
                <h4>7.76%</h4>
              </div>
            </div>
            <div className="bg-white p-6 w-1/3 rounded-2xl flex flex-col gap-2">
              <p className="text-content2">Avg. Net Rent</p>
              <div className="flex gap-2 items-center">
                <div className="bg-gray-100 rounded-full border-[1px] border-gray-300 size-8 flex items-center justify-center">
                  <RefreshCcw className="stroke-primary" size={20} />
                </div>
                <h4>$10,499</h4>
              </div>
            </div>
            <div className="bg-white p-6 w-1/3 rounded-2xl flex flex-col gap-2">
              <p className="text-content2">Gross Rent per Year</p>
              <div className="flex gap-2 items-center">
                <div className="bg-gray-100 rounded-full border-[1px] border-gray-300 size-8 flex items-center justify-center">
                  <RefreshCcw className="stroke-primary" size={20} />
                </div>
                <h4>$13,200</h4>
              </div>
            </div>
          </section>
          <section className="bg-white rounded-2xl p-6 flex flex-col gap-6">
            <h4>Financial Summary</h4>
            {FinancialSummaryItems.map((item) => (
              <div className="w-full flex justify-between">
                {item.special ? (
                  <div className="p-4 bg-gray-100 border-[1px] border-gray-300 flex flex-col    gap-6 rounded-2xl w-full">
                    {item.special.map((element) => (
                      <div className="w-full flex justify-between">
                        <p className="font-bold">{element.title}</p>
                        <p>{element.amount}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    <p className="font-bold">{item.title}</p>
                    <p>{item.amount}</p>
                  </>
                )}
              </div>
            ))}
          </section>
        </div>
        <SwabTokensCard />
      </section>
      <section className="w-full bg-white ">
        <div className="container px-10 pt-12 space-y-10 mx-auto">
          <div className="w-full text-center">
            <h2>Our Benefical Assets</h2>
          </div>
          <div className="flex justify-between">
            {/* asset card */}
            <div className="w-[373px] relative bg-white  rounded-2xl shadow-medium flex flex-col justify-between">
              {/* head section */}
              <div className="absolute -end-3 top-8 shadow-md bg-red-500 p-1 px-3  __tip_radius">
                <h6 className="text-white font-bold">Rental Property</h6>
              </div>
              <div
                className="rounded-t-2xl h-64  bg-cover bg-center bg-no-repeat "
                style={{
                  backgroundImage: "url(/images/home-pic.jpg",
                }}
              >
                <div className="bg-gradient-to-b from-black/70 p-4 rounded-t-2xl  to-black/0 w-full ">
                  <h6 className="text-white flex items-center gap-1">
                    <MapPin className="stoke-white" size={12} />
                    3406 Parkview DriveRapid City, SD 57701
                  </h6>
                </div>
              </div>
              {/* middle section */}
              <div className="p-4 space-y-5">
                <div className="flex justify-between ">
                  <div>
                    <h6>Total Investments</h6> <h5>$136.600</h5>
                  </div>
                  <div>
                    <h6>APR Equivalent</h6> <h5>$27% - 52%</h5>
                  </div>
                  <div>
                    <h6>Token Price</h6> <h5>$50.00</h5>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="bg-primary/10 px-2 py-1 w-fit rounded-full text-primary font-medium">
                      Single Family
                    </p>
                  </div>
                  <div className="flex text-sm gap-4">
                    <div className="flex items-center gap-1">
                      <Armchair className="stroke-primary" size={20} />4
                    </div>
                    <div className="flex items-center gap-1">
                      <Utensils className="stroke-primary" size={20} />1
                    </div>
                    <div className="flex items-center gap-1">
                      <BathIcon className="stroke-primary" size={20} />2
                    </div>
                    <div className="bg-primary/10 size-7 text-primary flex items-center justify-center rounded-full">
                      +6
                    </div>
                  </div>
                </div>
              </div>
              {/* footer section */}
              <div className="bg-primary px-2 py-3 w-full rounded-b-2xl text-white flex justify-between items-center">
                <h5>LSRWA Holders Earn</h5>
                <h4>$14,220</h4>
              </div>
            </div>
            {/* asset card */}
            <div className="w-[373px] relative bg-white  rounded-2xl shadow-medium flex flex-col justify-between">
              {/* head section */}
              <div className="absolute -end-3 top-8 shadow-md bg-red-500 p-1 px-3  __tip_radius">
                <h6 className="text-white font-bold">Rental Property</h6>
              </div>
              <div
                className="rounded-t-2xl h-64  bg-cover bg-center bg-no-repeat "
                style={{
                  backgroundImage: "url(/images/home-pic.jpg",
                }}
              >
                <div className="bg-gradient-to-b from-black/70 p-4 rounded-t-2xl  to-black/0 w-full ">
                  <h6 className="text-white flex items-center gap-1">
                    <MapPin className="stoke-white" size={12} />
                    3406 Parkview DriveRapid City, SD 57701
                  </h6>
                </div>
              </div>
              {/* middle section */}
              <div className="p-4 space-y-5">
                <div className="flex justify-between ">
                  <div>
                    <h6>Total Investments</h6> <h5>$136.600</h5>
                  </div>
                  <div>
                    <h6>APR Equivalent</h6> <h5>$27% - 52%</h5>
                  </div>
                  <div>
                    <h6>Token Price</h6> <h5>$50.00</h5>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="bg-primary/10 px-2 py-1 w-fit rounded-full text-primary font-medium">
                      Single Family
                    </p>
                  </div>
                  <div className="flex text-sm gap-4">
                    <div className="flex items-center gap-1">
                      <Armchair className="stroke-primary" size={20} />4
                    </div>
                    <div className="flex items-center gap-1">
                      <Utensils className="stroke-primary" size={20} />1
                    </div>
                    <div className="flex items-center gap-1">
                      <BathIcon className="stroke-primary" size={20} />2
                    </div>
                    <div className="bg-primary/10 size-7 text-primary flex items-center justify-center rounded-full">
                      +6
                    </div>
                  </div>
                </div>
              </div>
              {/* footer section */}
              <div className="bg-primary px-2 py-3 w-full rounded-b-2xl text-white flex justify-between items-center">
                <h5>LSRWA Holders Earn</h5>
                <h4>$14,220</h4>
              </div>
            </div>
            {/* asset card */}
            <div className="w-[373px] relative bg-white  rounded-2xl shadow-medium flex flex-col justify-between">
              {/* head section */}
              <div className="absolute -end-3 top-8 shadow-md bg-red-500 p-1 px-3  __tip_radius">
                <h6 className="text-white font-bold">Rental Property</h6>
              </div>
              <div
                className="rounded-t-2xl h-64  bg-cover bg-center bg-no-repeat "
                style={{
                  backgroundImage: "url(/images/home-pic.jpg",
                }}
              >
                <div className="bg-gradient-to-b from-black/70 p-4 rounded-t-2xl  to-black/0 w-full ">
                  <h6 className="text-white flex items-center gap-1">
                    <MapPin className="stoke-white" size={12} />
                    3406 Parkview DriveRapid City, SD 57701
                  </h6>
                </div>
              </div>
              {/* middle section */}
              <div className="p-4 space-y-5">
                <div className="flex justify-between ">
                  <div>
                    <h6>Total Investments</h6> <h5>$136.600</h5>
                  </div>
                  <div>
                    <h6>APR Equivalent</h6> <h5>$27% - 52%</h5>
                  </div>
                  <div>
                    <h6>Token Price</h6> <h5>$50.00</h5>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="bg-primary/10 px-2 py-1 w-fit rounded-full text-primary font-medium">
                      Single Family
                    </p>
                  </div>
                  <div className="flex text-sm gap-4">
                    <div className="flex items-center gap-1">
                      <Armchair className="stroke-primary" size={20} />4
                    </div>
                    <div className="flex items-center gap-1">
                      <Utensils className="stroke-primary" size={20} />1
                    </div>
                    <div className="flex items-center gap-1">
                      <BathIcon className="stroke-primary" size={20} />2
                    </div>
                    <div className="bg-primary/10 size-7 text-primary flex items-center justify-center rounded-full">
                      +6
                    </div>
                  </div>
                </div>
              </div>
              {/* footer section */}
              <div className="bg-primary px-2 py-3 w-full rounded-b-2xl text-white flex justify-between items-center">
                <h5>LSRWA Holders Earn</h5>
                <h4>$14,220</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
