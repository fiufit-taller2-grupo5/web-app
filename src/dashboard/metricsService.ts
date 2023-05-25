import { Config } from "./dashboard";
import { httpGet } from "./http";

const basePath = "https://system-metrics-service-nodeport-prod2-szwtomas.cloud.okteto.net";
const localHostBasePath = "http://localhost:8006";

function subtractTimePeriod(interval: 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years', amount: number): Date {
  const currentDate = new Date();
  let subtractor = 0;

  switch (interval) {
    case 'minutes':
      subtractor = amount * 60000; // 1 minute = 60,000 milliseconds
      break;
    case 'hours':
      subtractor = amount * 3600000; // 1 hour = 3,600,000 milliseconds
      break;
    case 'days':
      subtractor = amount * 86400000; // 1 day = 86,400,000 milliseconds
      break;
    case 'weeks':
      subtractor = amount * 604800000; // 1 week = 604,800,000 milliseconds
      break;
    case 'months':
      currentDate.setMonth(currentDate.getMonth() - amount);
      return currentDate;
    case 'years':
      currentDate.setFullYear(currentDate.getFullYear() - amount);
      return currentDate;
    default:
      throw new Error('Invalid interval specified.');
  }

  return new Date(currentDate.getTime() - subtractor);
}

function transformDateFormat(dateString: string): string {
  const dateObject = new Date(dateString);

  const year = String(dateObject.getFullYear()).slice(-2);
  const month = String(dateObject.getMonth() + 1).padStart(2, '0');
  const day = String(dateObject.getDate()).padStart(2, '0');
  const hours = String(dateObject.getHours()).padStart(2, '0');
  const minutes = String(dateObject.getMinutes()).padStart(2, '0');

  const transformedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
  return transformedDate;
}


export interface DataPointsApiResponse {
    count: number,
    start: string,
    end: string,
    position: number
}

export interface DataPoint {
    date: Date,
    count: number
}

export const fetchChartData = async (config: Config, metric: string): Promise<any[]> => {
    if (!metric) {
        metric = "users_created";
    }

    const start = subtractTimePeriod(config.timeFrameInterval, config.timeFrameCount).toISOString();
    const end = (new Date()).toISOString();
    const queryParams = {
        metric,
        from: start,
        to: end,
        interval: config.groupBy ?? "minutes"
    }

    const apiResponse = await httpGet(`${basePath}/api/metrics`, queryParams);
    return apiResponse.map((point: DataPointsApiResponse) => {  
        return { date: new Date(point.start), count: point.count}
    });
}

    