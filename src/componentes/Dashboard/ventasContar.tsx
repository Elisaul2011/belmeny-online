import type { CountryData } from "../../types/dashboard";

const countryData: CountryData[] = [
  {
    country: "United States",
    flag: "🇺🇸",
    sales: 2500,
    value: 230900,
    bounce: 29.9,
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    sales: 3900,
    value: 440000,
    bounce: 40.22,
  },
  {
    country: "Great Britain",
    flag: "🇬🇧",
    sales: 1400,
    value: 190700,
    bounce: 23.44,
  },
  {
    country: "Brasil",
    flag: "🇧🇷",
    sales: 562,
    value: 143960,
    bounce: 32.14,
  },
];

export function CountrySales() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Sales by Country</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4">Country</th>
              <th className="text-right py-3 px-4">Sales</th>
              <th className="text-right py-3 px-4">Value</th>
              <th className="text-right py-3 px-4">Bounce</th>
            </tr>
          </thead>
          <tbody>
            {countryData.map((item) => (
              <tr
                key={item.country}
                className="border-b last:border-0 hover:bg-gray-50"
              >
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{item.flag}</span>
                    {item.country}
                  </div>
                </td>
                <td className="text-right py-3 px-4">{item.sales}</td>
                <td className="text-right py-3 px-4">
                  ${item.value.toLocaleString()}
                </td>
                <td className="text-right py-3 px-4">{item.bounce}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
