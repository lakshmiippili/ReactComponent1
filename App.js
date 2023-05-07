import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      title: "food",
      price: 220,
      location: "restaurant",
      date: new Date(2022,12,30)
    },
    {
      title: "petrol",
      price: 300,
      location: "HP petrol bunk",
      date: new Date(2023,2,13)
    },
    {
      title: "movies",
      price: 250,
      location: "multiplex",
      date:new Date(2023,1,1)
    },
  ];

  

  return (
        <div>
          <h2>Lets Get Started</h2>
          <Expenses items={expenses}>  </Expenses>
        </div>
      );
}

export default App;
