"use client";
import React from "react";
import { Button } from "./Button";
import { ArrowUpDownIcon } from "lucide-react";
function SwabTokensCard() {
  return (
    <div className="p-6 flex shadow-2xl flex-col gap-4 w-96">
      <section className="flex flex-col gap-2">
        <div>
          <h4>Swap Token</h4>
          <p>Trade tokens in an instant</p>
        </div>
        <div className="flex gap-3">
          <Button
            className="bg-[#0A1339]  w-full rounded-full text-white"
            size="sm"
          >
            Buy
          </Button>
          <Button
            className="bg-[#F6F8F9] text-[#535457] rounded-full w-full"
            size="sm"
          >
            Sell
          </Button>
        </div>
        <h6>RWA Token Amount</h6>
        <input
          type="text"
          className="py-3 px-5 bg-[#F6F8F9] outline-1 outline-gray-200  "
          placeholder="00.00 USD"
        />
        <div className="flex justify-between items-center">
          <div>
            {/* <Select
              className="max-w-xs"
              defaultSelectedKeys={["1"]}
              label="Favorite Animal"
              placeholder="Select an animal"
              startContent={<>as</>}
            >
              <SelectItem key="1">dafal</SelectItem>
            </Select> */}
          </div>
          <div>
            <ArrowUpDownIcon color="#61CD81" size={16} />
          </div>
          <div className="flex text-xs gap-1 font-bold">
            <h6>price:</h6>
            $1.52
          </div>
        </div>
        <input
          type="text"
          className="py-3 px-5 bg-[#F6F8F9] outline-1 outline-gray-200  "
          placeholder="00.00 Land"
        />
        <p className="flex justify-end">00.00 USD</p>
        <div className="flex justify-between items-center">
          <p>1 Land</p>
          <p className="font-bold">LAND Fee (0.5)</p>
        </div>
      </section>
      <section className="flex flex-col gap-2">
        <Button
          className="bg-[#D9DCE7] font-bold text-white  rounded-full w-full"
          size="lg"
        >
          Enter amount
        </Button>
        <div className="bg-[#F6F8F9] p-4 ">
          <div className="">
            <p className="text-red-600 font-bold">KYC not verified</p>
          </div>
          <p className="w-3/5 text-[#535457]">
            Please continue to verify your identity for the security of your
            account
          </p>
        </div>
        <h6>Steps to verify KYC</h6>
        <div className="flex justify-start gap-1">
          <div className="flex flex-col items-center">
            <div className="rounded-full text-[10px] bg-[#61CD81] text-white text-xs size-6 flex justify-center items-center">
              1
            </div>
            <div className="h-4 bg-[#61CD81] w-[1px]" />
            <div className="rounded-full text-[10px] bg-white border-[1px] border-[#61CD81] text-xs size-6 flex justify-center items-center">
              2
            </div>
            <div className="h-4 bg-[#61CD81] w-[1px]" />
            <div className="rounded-full text-[10px] bg-white border-[1px] border-[#61CD81] text-xs size-6 flex justify-center items-center">
              3
            </div>
          </div>
          <div className="flex flex-col justify-between py-[2px]">
            <h6 className="text-[#61CD81] font-bold">Complete KYC</h6>
            <h6>Get USDC and LAND</h6>
            <h6>Buy RWA Tokens</h6>
          </div>
        </div>
        <Button
          className="bg-[#61CD81] font-bold text-white  rounded-full w-full"
          size="lg"
        >
          Verify Now
        </Button>
      </section>
    </div>
  );
}

export default SwabTokensCard;
