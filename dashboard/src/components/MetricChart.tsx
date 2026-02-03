import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import type { MetricSeries } from "../types/metric";

type Props = {
  series: MetricSeries;
};

export function MetricChart({ series }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    chartRef.current = echarts.init(containerRef.current);

    return () => {
      chartRef.current?.dispose();
    };
  }, []);

  useEffect(() => {
    if (!chartRef.current) return;

    chartRef.current.setOption({
      title: {
        text: series.label,
      },

      xAxis: {
        type: "time",
      },

      yAxis: {
        type: "value",
      },

      series: [
        {
          type: "line",
          smooth: true,
          showSymbol: false,
          data: series.points.map((p) => [p.timestamp, p.value]),
        },
      ],
    });
  }, [series]);

  return <div ref={containerRef} style={{ width: "600px", height: "250px" }} />;
}