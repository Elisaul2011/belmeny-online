import type { MetricCardProps } from "../../types/dashboard";
import { Card, CardContent } from "@mui/material";

export function MetricCard({
  title,
  value,
  change,
  period,
  icon,
}: MetricCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:scale-105 hover:shadow-lg bg-white">
      <CardContent className="p-6">
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-500">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
            <p className="text-sm mt-2">
              <span
                className={`font-medium ${change.startsWith("+") ? "text-green-500" : "text-red-500"}`}
              >
                {change}
              </span>{" "}
              {period}
            </p>
          </div>
          <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
