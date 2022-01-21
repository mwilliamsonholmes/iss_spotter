// this will require and run our main fetch function
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');




// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned IP:', ip);
// });

//---------------
// fetchCoordsByIP("108.172.118.149", (error, coordinates) => {
//   if (error) {
//     console.log("Did not work :(", error);
//     return;
//   }
//   console.log("It worked! These are the coordinates: ", coordinates)
// });

//--------------

// fetchISSFlyOverTimes({ latitude: "49.27670", longitude: "-123.13000" }, (error, flyTimes) => {
//   if (error) {
//     console.log("It did not work :( ", error);
//     return;
//   }
//   console.log("It worked! These are the flytimes: ", flyTimes);
// });
// //--------------


const printPassTimes = function (passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It did not work :( ", error);
  }
  //If it is successful- print out the details
  printPassTimes(passTimes);
});







