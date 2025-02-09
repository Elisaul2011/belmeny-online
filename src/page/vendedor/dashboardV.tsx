import { Header } from "../../componentes/Dashboard/headerPersonal";
import { MetricCard } from "../../componentes/Dashboard/metricCard";
import { SalesChart } from "../../componentes/Dashboard/chart";
import { CountrySales } from "../../componentes/Dashboard/ventasContar";
import { Categories } from "../../componentes/Dashboard/categories";
import { ProductComparisonChart } from "../../componentes/Dashboard/grafico";
import { DollarSign, Users, UserPlus, ShoppingCart } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <Header />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="TODAY'S MONEY"
              value="$53,000"
              change="+55%"
              period="since yesterday"
              icon={<DollarSign className="h-6 w-6" />}
            />
            <MetricCard
              title="TODAY'S USERS"
              value="2,300"
              change="+3%"
              period="since last week"
              icon={<Users className="h-6 w-6" />}
            />
            <MetricCard
              title="NEW CLIENTS"
              value="+3,462"
              change="+2%"
              period="since last quarter"
              icon={<UserPlus className="h-6 w-6" />}
            />
            <MetricCard
              title="SALES"
              value="$103,430"
              change="+5%"
              period="than last month"
              icon={<ShoppingCart className="h-6 w-6" />}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            <div className="lg:col-span-2">
              <SalesChart />
            </div>
            <div>
              <Categories />
            </div>
          </div>

          <div className="mt-8">
            <CountrySales />
          </div>

          <div className="mt-8">
            <ProductComparisonChart />
          </div>
        </div>
      </main>
    </div>
  );
}
