let car = {
  type: "Fiat",
  model: "500",
  color: "white"
};
console.log("Type of car:",typeof car);

car.type = "BMW";
console.log("Updated car:", car);

car.wheels = 4;
console.log("Car with wheels:", car);
