export interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  period: string;
  icon: React.ReactNode;
}

export interface SalesDataPoint {
  date: string;
  sales: number;
  customers: number;
  revenue: number;
}

export interface CountryData {
  country: string;
  sales: number;
  value: number;
  bounce: number;
  flag: string;
}
