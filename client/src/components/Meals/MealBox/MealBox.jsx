

function MealBox({ meal }) {

  const { name, image } = meal;

  const imageUrl = `http://localhost:4000/uploads/images/meals/${image}`;

  return (
    <div className="meal-box-wrap">
      <img className="meal-box-img-th" src={imageUrl} alt={name} />
      <div className="meal-box-heading-wrap">
        <h4 className="meal-box-heading">{name}</h4>
      </div>
    </div>
  )
}

export default MealBox;