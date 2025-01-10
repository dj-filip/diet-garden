

const tabs = ['Protein', 'Carbs', 'Veggies', 'Fats', 'Fruits', 'Nuts, Seeds & Dried Fruits', 'Teas', 'Herbs & Spices', 'Other', 'Supplements'];

function GroceriesTabsNav({ activeTab, setActiveTab }) {
  return (
    <nav className="groceries-tabs">
      <ul className="flex just-center">
        {tabs.map(tab => (
          <li>
            <button 
              onClick={activeTab === tab ? () => setActiveTab('') : () => setActiveTab(tab)}
              className={`tab-btn ${activeTab === tab ? 'active-tab-btn' : undefined}`}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default GroceriesTabsNav;