import GroceryForm from "../components/GroceryForm/GroceryForm"


function AddGroceryPage() {
  return (
    <div className="w-4/5 flex flex-col justify-center mx-auto pt-10">
      <h2 className="text-2xl">Add New Grocery</h2>
      <GroceryForm />
    </div>
  )
}

export default AddGroceryPage