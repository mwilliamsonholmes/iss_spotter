const { nextISSTimesForMyLocation } = require('./iss_promised');
const { printPassTimes } = require('./index')

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  // .catch((error) => {
  //   console.log("It did not work :( ", error.message)
  // });
