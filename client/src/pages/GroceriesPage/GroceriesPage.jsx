import { useState } from "react";
import Groceries from "../../components/Groceries/Groceries";
import Infobar from "../../components/Infobar/Infobar";


function GroceriesPage() {

  const [selectedGrocery, setSelectedGrocery] = useState();

  return (
    <>
      <Groceries
        selectedGrocery={selectedGrocery}
        setSelectedGrocery={setSelectedGrocery}
      />
      <Infobar selectedGrocery={selectedGrocery} setSelectedGrocery={setSelectedGrocery} />
    </>
  )
}

export default GroceriesPage;