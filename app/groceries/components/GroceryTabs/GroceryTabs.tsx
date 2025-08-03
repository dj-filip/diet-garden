import { Button } from "@/components/ui/button";


const tabs: readonly string[] = [
  'Protein', 'Carbs', 'Veggies', 'Fats', 'Fruits', 'Nuts, Seeds & Dried Fruits', 'Teas', 'Herbs & Spices', 'Other', 'Supplements'
];

interface GroceriesTabsNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}


function GroceriesTabsNav({ activeTab, setActiveTab }: GroceriesTabsNavProps) {

  console.log(activeTab);

  return (
    <nav className="groceries-tabs">
      <ul className="flex justify-center gap-x-8 py-4">
        {tabs.map(tab => (
          <li key={tab}>
            <Button
              onClick={activeTab === tab ? () => setActiveTab('') : () => setActiveTab(tab)}
              className={`relative justify-start p-0 rounded-none bg-no text-black uppercase text-center shadow-none cursor-pointer border-transparent hover:bg-no after:content-[''] after:absolute after:bottom-0 after:w-0 after:block after:h-0.5 after:bg-lime-400 after:transition-all after:duration-300 [&.active]:after:w-full ${activeTab === tab ? 'active' : undefined}`}>{tab}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default GroceriesTabsNav;