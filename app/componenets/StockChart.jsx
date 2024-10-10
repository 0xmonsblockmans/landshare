"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/componenets/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/componenets/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const description = "An area chart with gradient fill";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  price: {
    label: "Price",
    color: "hsl(var(--chart-1))",
  },
};

function Component() {
  return (
    <Card className="bg-white border-none shadow-none rounded-2xl">
      <CardHeader className="w-full">
        <div className="flex items-center gap-1">
          <img src="/images/Logo.png" className="size-6" alt="" />
          <h5>RWA/USDC</h5>
        </div>
        <div className="w-full flex  justify-between">
          <h4>$300.00</h4>
          <Tabs defaultValue="year" className="w-[400px] flex justify-end">
            <TabsList>
              <TabsTrigger value="hours">24H</TabsTrigger>
              <TabsTrigger value="week">1W</TabsTrigger>
              <TabsTrigger value="month">1M</TabsTrigger>
              <TabsTrigger value="year">1Y</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <h6>Apr 27, 2023, 1:00 (UTC) </h6>
      </CardHeader>
      <CardContent>
        <ChartContainer className="h-[200px] w-full" config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#61CD81" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#61CD81" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              dataKey="desktop"
              type="linear"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stroke="#61CD81"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
export default Component;
