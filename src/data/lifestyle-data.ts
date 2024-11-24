import type { BaseDataPoint, ChartConfig } from "@/data/data-utils";
import { generateDates, generateTrendedRandom, createBaseDataPoint } from "@/data/data-utils";

interface LifestyleDataPoint extends BaseDataPoint {
  productivityScore: number;
  taskTime: number;
  leisureTime: number;
}

// Generate dates for the last 24 weeks
const dates: string[] = generateDates(24);

// Generate lifestyle data
export const lifestyleData: LifestyleDataPoint[] = dates.map((timestamp: string, index: number) => ({
  ...createBaseDataPoint(timestamp, index),
  productivityScore: generateTrendedRandom(1, 5, index, 24),
  taskTime: generateTrendedRandom(4, 10, index, 24),
  leisureTime: generateTrendedRandom(1, 4, index, 24),
}));

// Chart configurations for each metric
export const productivityConfig: ChartConfig = {
  data: lifestyleData,
  series: [{ key: "productivityScore", name: "Productivity", color: "#3B82F6" }],
  title: "Productivity Score",
  yAxisLabel: "Score"
};

export const taskTimeConfig: ChartConfig = {
  data: lifestyleData,
  series: [{ key: "taskTime", name: "Task Time", color: "#10B981" }],
  title: "Daily Task Time",
  yAxisLabel: "Hours"
};

export const leisureTimeConfig: ChartConfig = {
  data: lifestyleData,
  series: [{ key: "leisureTime", name: "Leisure Time", color: "#8B5CF6" }],
  title: "Daily Leisure Time",
  yAxisLabel: "Hours"
};
