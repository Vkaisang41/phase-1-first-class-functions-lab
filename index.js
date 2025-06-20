// 1. Return first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. Return last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. Array of the above two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Function that returns another function (multiplier)
function createFareMultiplier(multiplier) {
  return function(value) {
    return value * multiplier;
  };
}

// 5. Doubler and Tripler using createFareMultiplier
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

// 6. selectDifferentDrivers accepts an array and a function
function selectDifferentDrivers(drivers, fn) {
  return fn(drivers);
}

// Export all functions so tests can see them
module.exports = {
  returnFirstTwoDrivers,
  returnLastTwoDrivers,
  selectingDrivers,
  createFareMultiplier,
  fareDoubler,
  fareTripler,
  selectDifferentDrivers
};
