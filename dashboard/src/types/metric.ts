export type Metric = {
  id: string;
  label: string;
  value: number;
  unit: string;
};

export type MetricPoint = {
  timestamp: number;
  value: number;
};

export type MetricSeries = {
  id: string;
  label: string;
  unit: string
  points: MetricPoint[];
};