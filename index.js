// Code y// Return all drivers whose names exactly match the provided string (case insensitive)
function findMatching(drivers, name) {
  return drivers.filter(
    driver => driver.toLowerCase() === name.toLowerCase()
  );
}

// Return all drivers whose names begin with the provided string
function fuzzyMatch(drivers, letters) {
  return drivers.filter(
    driver => driver.startsWith(letters)
  );
}

// Return all driver objects whose `name` property matches the provided string
function matchName(drivers, name) {
  return drivers.filter(
    driver => driver.name === name
  );
}

module.exports = {
  findMatching,
  fuzzyMatch,
  matchName,
};
