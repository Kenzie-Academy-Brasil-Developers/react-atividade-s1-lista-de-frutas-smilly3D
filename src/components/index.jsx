import "./style.css";
function FilterFruit({ fruits, setFruits }) {
  const newFruits = fruits.map((item, index) => (
    <div key={index}>{item.name}</div>
  ));

  const totalPrice = fruits.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
  return (
    <>
      <h1>Total Price: {totalPrice},00$</h1>
      <h1>{newFruits}</h1>
      <button
        onClick={() => {
          setFruits(fruits.filter((item) => item.color === "red"));
        }}
      >
        <span>Mostrar frutas vermelhas</span>
      </button>
    </>
  );
}

export default FilterFruit;
