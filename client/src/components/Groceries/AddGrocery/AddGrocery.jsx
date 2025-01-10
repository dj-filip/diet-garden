import { BACKEND_URL } from "../../../config/serverConfig";

function AddGrocery() {

  const formSubmitHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission
    // Access form data
    const formData = new FormData(e.target);

    // Simple validation checks
    // if (!name || !fdcid || !category || !image) {
    //   alert("All fields are required!");
    //   return;
    // }
    
    // if (isNaN(fdcid)) {
    //   alert("FDCID must be a number");
    //   return;
    // }

    try {
      const response = await fetch(`${BACKEND_URL}/groceries/addGrocery`, {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      console.log('Form submitted successfully:', result);
    } catch (err) {
      console.error('Error submitting the form:', err);
    }
  };

  const inputHandler = (e) => {
    console.log(e.target.value);
  }

  return (
    <form onSubmit={formSubmitHandler} className="flex flex-column add-grocery-form">
      <input type="text" name="name" placeholder="Grocery Name" onChange={inputHandler} />
      <input type="text" name="fdcid" placeholder="FDCID" onChange={inputHandler} />
      <select required name="category">
        <option value="" selected disabled hidden>Select Category</option>
        <option value="Protein">Protein</option>
        <option value="Carbs">Carbs</option>
        <option value="Veggies">Veggies</option>
        <option value="Fats">Fats</option>
        <option value="Fruits">Fruits</option>
        <option value="Nuts, Seeds & Dried Fruits">Nuts, Seeds & Dried Fruits</option>
        <option value="Teas">Teas</option>
        <option value="Herbs & Spices">Herbs & Spices</option>
        <option value="Other">Other</option>
        <option value="Supplements">Supplements</option>
      </select>
      <input type="file" name="image" onChange={inputHandler} />
      <input type="submit" value="Add Grocery" />
    </form>
  )
}

export default AddGrocery;