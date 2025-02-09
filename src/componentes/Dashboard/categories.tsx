import { Monitor, Ticket, AlertCircle, Users } from "lucide-react";

const categories = [
  {
    icon: <Monitor className="h-5 w-5" />,
    title: "Devices",
    description: "250 in stock, 346+ sold",
  },
  {
    icon: <Ticket className="h-5 w-5" />,
    title: "Tickets",
    description: "123 closed, 15 open",
  },
  {
    icon: <AlertCircle className="h-5 w-5" />,
    title: "Error logs",
    description: "1 is active, 40 closed",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Happy users",
    description: "4,320",
  },
];

export function Categories() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <div className="space-y-4">
        {categories.map((category) => (
          <div
            key={category.title}
            className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="h-10 w-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
              {category.icon}
            </div>
            <div>
              <h3 className="font-medium">{category.title}</h3>
              <p className="text-sm text-gray-500">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
