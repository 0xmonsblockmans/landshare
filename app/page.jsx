import StockChart from "./componenets/StockChart";
import SwabTokensCard from "./componenets/SwabTokensCard";

import {
  Armchair,
  ArrowRight,
  BathIcon,
  Mail,
  MapPin,
  RefreshCcw,
  Utensils,
} from "lucide-react";
import { Button } from "./componenets/Button";
import CustomSlider from "./componenets/CustomSlider";

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

const steps = [
  {
    stepNumber: 1,
    title: "Sign up",
    imgSrc: "/images/stepsImg2.png",
    description: "Sign up on the Landshare Dashboard and complete KYC",
  },
  {
    stepNumber: 2,
    title: "Purchase Tokens",
    imgSrc: "/images/stepsImg4.png",
    description: "Purchase RWA Tokens with LAND and USDC",
  },
  {
    stepNumber: 3,
    title: "Hold & Earn",
    imgSrc: "/images/stepsImg3.png",
    description: "Hold your tokens and see them grow over time",
  },
  {
    stepNumber: 4,
    title: "Buy Landshare NFTs",
    imgSrc: "/images/stepsImg.png",
    description: "Enhance your investment with Landshare NFTs",
  },
];
export default function Home() {
  return (
    <div className="flex flex-col ">
      <div className="flex gap-1 items-baseline px-10 mb-10 container mx-auto ">
        <p className="font-bold text-primary">Home /</p>
        <p className="text-content2">Real World Assets</p>
      </div>
      <section className="flex px-10 mb-20 container mx-auto gap-12">
        <div className="w-2/3  flex flex-col gap-12">
          <StockChart />
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
                  <div className="p-4 bg-lightGray border-[1px] border-gray-300 flex flex-col    gap-6 rounded-2xl w-full">
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
      <section className="w-full  bg-white ">
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
      <section className="w-full pt-40 bg-white ">
        <div className="container px-10 pt-12 space-y-10 mx-auto">
          <div className="border-2 flex border-primary rounded-3xl h-80">
            <div className="w-2/3 h-full flex flex-col justify-between px-14 py-12">
              <h5>
                Calculate returns effortlessly and make informed financial
                decisions for a brighter future.
              </h5>

              <div className="w-full">
                <div className="w-full grid grid-cols-3 justify-between">
                  <p>Initial Investment</p>
                  <div className="flex justify-end">
                    <CustomSlider />
                  </div>
                  <h5 className="text-primary flex justify-end">$2,700</h5>
                </div>
                <div className="w-full grid grid-cols-3 justify-between">
                  <p>Monthly recurring investment</p>
                  <div className="flex justify-end">
                    <CustomSlider />
                  </div>
                  <h5 className="text-primary flex justify-end">$500</h5>
                </div>
              </div>
              <div className="w-1/2 flex  justify-between">
                <div>
                  <h6>Annual rent return</h6>
                  <h5>14.4%</h5>
                </div>
                <div>
                  <h6>Annual rent return</h6>
                  <h5>14.4%</h5>
                </div>
                <div>
                  <h6>Annual rent return</h6>
                  <h5>14.4%</h5>
                </div>
              </div>
            </div>
            <div className="bg-primary p-5 flex-grow h-full w-1/3 flex flex-col justify-between items-center text-white rounded-e-2xl">
              <div></div>
              <div className="flex flex-col items-center">
                <h5>Projected returns in 5 years</h5>
                <h2>$5.500</h2>
              </div>
              <div className="w-full">
                <Button className="w-full h-14 bg-white text-black text-md rounded-full font-bold">
                  Invest Now <ArrowRight />
                </Button>
              </div>
              <div>
                <p className="text-white/80">
                  *Estimated annual returns, using yield statistics from all
                  properties on the platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full pt-40 bg-white">
        <div className="container px-10 pt-12 space-y-10 mx-auto">
          <h2 className="text-center w-4/5 mx-auto">
            Effortless Property Investment in 4 Steps: Landshare and RWA Tokens
            Make It Easy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 w-full">
            {steps.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-primary text-white h-80 rounded-2xl px-6 py-5 flex flex-col justify-between"
              >
                <div className="w-full flex justify-center">
                  <h5 className="flex items-center gap-1">
                    <div className="border-[2px] border-white aspect-square rounded-full flex text-sm items-center justify-center size-7">
                      {step.stepNumber}
                    </div>
                    {step.title}
                  </h5>
                </div>
                <div className="h-[60%] flex items-center justify-center">
                  <img
                    className="h-[65%] w-auto lg:h-auto"
                    src={step.imgSrc}
                    alt={step.title}
                  />
                </div>
                <div>
                  <p className="text-white">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full pt-40 pb-20 bg-white">
        <div className="container px-10 pt-12 space-y-10 mx-auto">
          <footer className="flex justify-between">
            <div className="w-1/4 ">
              <div className="flex">
                <img className="h-16" src="/images/Logo.png" alt="logo" />
                <p className="text-content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            {/* middle footer section  */}
            <div className="capitalize flex w-1/2 justify-between">
              <div className="flex flex-col gap-4">
                <h6>Company</h6>
                <p>about us</p>
                <p>FAQ</p>
                <p>blog</p>
              </div>
              <div className="flex flex-col gap-4">
                <h6>Useful links</h6>
                <p>BSC Scan</p>
                <p>Github</p>
                <p>Inherity</p>
              </div>
              <div className="flex flex-col gap-4">
                <h6>Token Trackers</h6>
                <p>Coin Gecko</p>
                <p>PooCoin</p>
                <p>DaapRadar</p>
              </div>
              <div className="flex flex-col gap-4">
                <h6>Exchanges</h6>
                <p>Apeswap</p>
                <p>Pancake Swap</p>
                <p>Gate.io</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="flex gap-1 items-center">
                <Mail className="stroke-primary" /> Our News Letter
              </h5>
              <h6>Get the latest info and enjoy the benefits</h6>
              <Button className="bg-lightGray rounded-full w-fit text-black px-1 gap-3">
                Subscribe Now
                <div className="size-6 bg-primary rounded-full flex  items-center justify-center">
                  <ArrowRight size={12} className="stroke-white" />
                </div>
              </Button>
            </div>
          </footer>
        </div>
      </section>
      <p className="text-content2 mx-auto pt-10">
        © 2023 Landshare LLC. All rights reserved.
      </p>
    </div>
  );
}
