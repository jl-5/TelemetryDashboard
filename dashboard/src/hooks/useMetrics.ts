import { useEffect, useState } from "react";
import { fetchMetrics } from "../api/mockChangingMetrics";
import type { MetricSeries} from "../types/metric";

// represents how many ms between updating the metrics
const DELAY: number = 500

// the maximum number of points we're retrieving (slice off the rest)
const MAX_POINTS = 50;

// this is a custom hook for using metrics
export function useMetrics() {
    const [series, setSeries] = useState<Record<string, MetricSeries>>({});

    // every time this hook gets mounted,
    useEffect(() => {
        const update = () => {
        fetchMetrics().then((metrics) => {
            const timestamp = Date.now();

            setSeries((prev) => {
            const next = { ...prev };

            metrics.forEach((m) => {
                if (!next[m.id]) {
                next[m.id] = {
                    id: m.id,
                    label: m.label,
                    points: [],
                };
                }

                const points = [
                ...next[m.id].points,
                { timestamp, value: m.value },
                ].slice(-MAX_POINTS);

                next[m.id] = { ...next[m.id], points };
            });

            return next;
            });
        });
        };

        update();

        // establish an interval ID (like a token) to schedule an updated retrieval of metrics
        const intervalId = setInterval(update, DELAY);
        // clear it when the interval is up to maintain control
        return () => clearInterval(intervalId);
    }, []);

    return { series }

    
}