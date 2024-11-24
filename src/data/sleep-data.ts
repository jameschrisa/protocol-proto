import type { BaseDataPoint, ChartConfig } from "@/data/data-utils";
import { generateDates, generateTrendedRandom, createBaseDataPoint } from "@/data/data-utils";

interface SleepDataPoint extends BaseDataPoint {
  sleepDuration: number;
  recoveryTime: number;
  sleepQualityScore: number;
}

// Generate dates for the last 24 weeks
const dates: string[] = generateDates(24);

// Generate sleep data
export const sleepData: SleepDataPoint[] = dates.map((timestamp: string, index: number) => ({
  ...createBaseDataPoint(timestamp, index),
  sleepDuration: generateTrendedRandom(6, 9, index, 24),
  recoveryTime: generateTrendedRandom(15, 60, index, 24),
  sleepQualityScore: generateTrendedRandom(1, 5, index, 24),
}));

// Chart configurations for each metric
export const sleepDurationConfig: ChartConfig = {
  data: sleepData,
  series: [{ key: "sleepDuration", name: "Sleep Duration", color: "#3B82F6" }],
  title: "Sleep Duration",
  yAxisLabel: "Hours"
};

export const recoveryTimeConfig: ChartConfig = {
  data: sleepData,
  series: [{ key: "recoveryTime", name: "Recovery Time", color: "#10B981" }],
  title: "Recovery Time",
  yAxisLabel: "Minutes"
};

export const sleepQualityConfig: ChartConfig = {
  data: sleepData,
  series: [{ key: "sleepQualityScore", name: "Sleep Quality", color: "#8B5CF6" }],
  title: "Sleep Quality Score",
  yAxisLabel: "Score"
};
