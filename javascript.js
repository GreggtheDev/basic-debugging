// Each store owner is an object with properties: name, stores, and location.
const storeOwners = [
    {
      name: 'Danny Shavez',
      stores: 1,
      location: "AZ",
    },
    // More store owners...
  ];
  
  // Calculates the total number of stores all owners have.
  const listNumberOfStores = function () {
    // Total of 0 stores.
    let totalLocations = 0;
    
    // Each store owner...
    for (let i = 0; i < storeOwners.length; i++) {
      // Adding the number of stores this owner has to our total.
      totalLocations = totalLocations + storeOwners[i].stores;
    }
    
    // Return the total number of stores.
    return totalLocations;
  };
  
  // Call function to get the total number of stores and store the result in a variable.
  let locations = listNumberOfStores();
  
  // This function logs the total number of stores to the console.
  function tellMeMyStores() {
    console.log('Hey, can you tell me how many stores you have?');
    if (locations > 0) {
      console.log('Of course, we have ' + locations + ' stores');
    }
  }
  
  // This function logs each store owner's name and location to the console.
  function hasStore() {
    // Go through each store owner...
    for (let i = 0; i < storeOwners.length; i++) {
      // ...and get their name and location.
      let person = storeOwners[i].name;
      let location = storeOwners[i].location;
      
      // Log a message to the console using these details.
      console.log('Yes, ' + person + ' has one in ' + location);
    }
  }
  
  // Call the two functions.
  tellMeMyStores();
  hasStore();
  