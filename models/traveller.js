const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
const locations = this.journeys.map((journey) => {
    return journey.startLocation;
  });
  return locations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  // return this.journeys.map((journey) => {
  //   return journey.transport;
  // }).filter((transport, index, array) => {
  //   return array.indexOf(transport) === index;
  // });

  const allTransports = this.journeys.map((journey) => {
    return journey.transport;
  })
  // allTransports = ['train', 'train', 'aeroplane', 'car', 'ferry']
  const filteredTransport = allTransports.filter((transport, index, array) => {
    console.log('transport:', transport);
    console.log('index:', index);
    console.log('indexOf() result:', allTransports.indexOf(transport));
    return allTransports.indexOf(transport) === index;
  });
  return filteredTransport;
};

//return array(what we are returning from the first method).indexOf(transport) 
// then we are asking for the index position of the first transport, it gives us: 0, 0, 2 and 4 ['train', 'train', 'aeroplane', 'car', 'ferry']
// comparing the array of non unique things, if it's unique I will put that in the array, if not, I won't

module.exports = Traveller;
