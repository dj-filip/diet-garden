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
    <nav className="groceries-tabs sticky top-0 overflow-x-hidden z-49 flex justify-center pb-8 md:px-2">
      <ul className="flex justify-center gap-x-8 bg-white overflow-x-scroll rounded-sm shadow-sm md:w-5/6 md:rounded-2xl ">
        {tabs.map(tab => (
          <li key={tab}>
            <Button
              onClick={activeTab === tab ? () => setActiveTab('') : () => setActiveTab(tab)}
              className={`relative justify-start p-0 rounded-none bg-no text-gray-500 text-center shadow-none cursor-pointer border-transparent hover:bg-no after:content-[''] after:absolute after:bottom-0 after:w-0 after:block after:h-0.5 after:bg-lime-400 after:transition-all after:duration-300 [&.active]:after:w-full ${activeTab === tab ? 'active text-black' : undefined}`}>{tab}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default GroceriesTabsNav;