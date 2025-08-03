import TextEditor from "@/components/TextEditor/TextEditor";



function AddMealPage() {
  return (
    <div className="w-4/5 flex flex-col justify-center mx-auto pt-10">
      <h2 className="text-2xl">Add New Meal</h2>
      <TextEditor />
    </div>
  )
}

export default AddMealPage;