const Cars = require("./cars-model");

const checkCarId = async (req, res, next) => {
  const { id } = req.params;

  const car = await Cars.getById(id);
  if(car) next();
  else next( {
    status: 404,
    message: `car with id ${id} is not found`
  })
}

const checkCarPayload = (req, res, next) => {
  const errObj = { status: 400 };

  const requiredFields = ["vin", "make", "model", "mileage"];

  for (const field of requiredFields) {
    if(!req.body[field]) errObj.message = `${field} is missing`;
  };

  if(errObj.message) next(errObj);
  else next();
}

const checkVinNumberValid = (req, res, next) => {
  
}

const checkVinNumberUnique = (req, res, next) => {
  
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}