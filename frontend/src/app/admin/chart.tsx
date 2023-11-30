"use client";
import {
  Bar,
  BarChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { suggestions } from "../suggestions-overview/data/suggestions";
import { useEffect, useState } from "react";

const Chart = () => {
  const [suggestionList, setSuggestionList] = useState<
    { name: string; count: number }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await suggestions();
        setSuggestionList(
          data.map((suggestion) => ({
            name: suggestion.name,
            count: suggestion.amount_of_votes,
          })),
        );
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={suggestionList}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip />
        <Bar dataKey="count" fill="#8BE78B" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
