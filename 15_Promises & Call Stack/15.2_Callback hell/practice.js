function saveToDB(data, success, failure) {
  let dataSpeed = Math.floor(Math.random() * 10) + 1;
  if (dataSpeed > 4) {
    success();
  } else {
    failure();
  }
}

saveToDB(
  "Prem chand",
  () => {
    console.log(`Success: Your data was saved successfully !`);
    saveToDB(
      "Apna college",
      () => {
        console.log(`Success2 : data2 was saved!`);
        saveToDB(
          "Hello world",
          () => {
            console.log(`Success3 : data3 was saved!`);
          },
          () => {
            console.log(`Failure3: Weak connection while saving data`);
          }
        );
      },
      () => {
        console.log(`Failure2: Weak connection while saving data`);
      }
    );
  },
  () => {
    console.log(`Failure: Weak connection ! Error while saving data`);
  }
);


// Bahut ho gayi confusion, let's learn and refactor this code into promises