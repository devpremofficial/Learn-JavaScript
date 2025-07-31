function saveToDB(data) {
  return new Promise((resolve, reject) => {
    let dataSpeed = Math.floor(Math.random() * 10) + 1;
    if (dataSpeed > 4) {
      resolve("Success: data saved");
    } else {
      reject("Failure: weak connection");
    }
  });
}

saveToDB("Apna college")
  .then(() => {
    console.log(`Promise was resolved :)`);
  })
  .catch(() => {
    console.log(`Promise was rejected :(`);
  });