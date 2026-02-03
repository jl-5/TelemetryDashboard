export type MetricPoint = {
  timestamp: number;
  value: number;
};

export type MetricSeries = {
  id: string;
  label: string;
  points: MetricPoint[];
};