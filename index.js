
// can create a Driver with a name
// adds the driver to the store
// adds a numerical id to each driver
// adds a unique id to each driver
// can store drivers

let store = {drivers: [], passengers: [], trips: []}
let driverId = 0

class Driver {
  constructor (name){
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }

  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.driverId === this.id;
      }.bind(this)
    );
  }
  passengers() {
    return store.passengers.filter(
      function(passenger) {
        return passenger.driverId === this.passengerId
      }.bind(this)
    );
  }
}


// can create a Passenger with a name
// adds the passenger to the store
// adds a numerical id to each passenger
// adds a unique id to each passenger
// can store passengers

let passengerId = 0

class Passenger {
  constructor (name, driver){
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }

  drivers() {
    return store.drivers.find(
      function(driver) {
        return driver.passengerId === this.driverId
      }.bind(this)
    );
  }

  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.passengerId === this.id;
      }.bind(this)
    );
  }
}

// adds the trip to the store
// adds a numerical id to each trip
// adds a unique id to each trip
// can store trips

let tripId = 0

class Trip {
  constructor (driver, passenger){
    this.id = ++tripId
    store.trips.push(this)

      if(driver) {
        this.setDriver(driver)
      }
      if(passenger){
        this.setPassenger(passenger)
      }

    }
      setDriver(driver){
       this.driverId = driver.id
      }

      setPassenger(passenger){
        this.passengerId = passenger.id
      }
      passenger() {
        return store.passengers.find(
          function(passenger) {
            return passenger.id === this.passengerId
          }.bind(this)
        );
      }

      driver() {
        return store.drivers.find(
          function(driver) {
            return driver.id === this.driverId
          }.bind(this)
        );
      }
}
