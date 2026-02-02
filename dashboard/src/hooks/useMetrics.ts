import { useEffect, useState } from "react";
import { fetchMetrics } from "../api/mockChangingMetrics";
import type { Metric} from "../types/metric";

// represents how many ms between updating the metrics
const DELAY: number = 500

// this is a custom hook for using metrics
export function useMetrics() {
    const [metrics, setMetrics] = useState<Metric[]>([]);

    // every time this hook gets mounted,
    useEffect(() => {
        // establish an interval ID (like a token)
        const intervalId = setInterval(() => {
            // get the updated metrics, set them using state
            fetchMetrics().then(setMetrics);
        }, DELAY);
        // clear it when the interval is up to maintain control
        return () => clearInterval(intervalId);
    }, []);

    return { metrics }

    
}