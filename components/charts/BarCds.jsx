"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A donut chart with text"



const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
}

export function BarCds({corperData, corperError, corperIsLoading}) {

    const chartData = [
        { browser: "Anti-Corruption", visitors: corperData && corperData.filter(data => data.cds == 'anti-corruption').length, fill: "red" },
        { browser: "FRSC", visitors: corperData && corperData.filter(data => data.cds == 'frsc').length, fill: "yellow" },
        { browser: "SDGs", visitors: corperData && corperData.filter(data => data.cds == 'sdgs').length, fill: "blue" },
        { browser: "Agro Allied", visitors: corperData && corperData.filter(data => data.cds == 'agro').length, fill: "#13c55a" },
      ]

  const totalVisitors =corperData ? (corperData.filter(data => data.cds == 'anti-corruption').length + corperData.filter(data => data.cds == 'frsc').length + corperData.filter(data => data.cds == 'sdgs').length + corperData.filter(data => data.cds == 'agro').length) : 'loading'

  if(corperIsLoading) {
    return (
        <div>Loading...</div>
    )
  }

  if(corperError) {
    return (
        <div>Error</div>
    )
  }
  return (
    corperData && <Card className="flex flex-col w-2/3 bg-gray-50 dark:bg-darkGray rounded-lg">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-4xl dark:text-white">CDS Distribution</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[400px]"
        >
          <PieChart>
            <ChartTooltip
                className="bg-white p-2"
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={90}
              strokeWidth={8}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-5xl font-bold"
                        >
                          {corperData && totalVisitors}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-[muted-foreground] text-2xl"
                        >
                          Corpers
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
