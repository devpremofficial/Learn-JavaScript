function saveToDB(data) {
  return new Promise((resolve, reject) => {
    let dataSpeed = Math.floor(Math.random() * 10) + 1;
    if (dataSpeed > 4) {
      resolve("Success: Data saved");
    } else {
      reject("Failed: Data was not saved");
    }
  });
}

// saveToDB("Apna Vidyalaya")
//   .then(() => {
//     console.log(`Data 1 was saved`);
//     saveToDB("hello world").then(() => {
//       console.log(`Data 2 was saved`);
//       saveToDB("namaste").then(() => {
//         console.log(`Data 3 was saved`);
//       });
//     });
//   })
//   .catch(() => {
//     console.log(`Failure: Data was not saved!`);
//   });



saveToDB("Apna Vidyalaya")
    .then((result) => {
        console.log(`Data 1 was saved. Result: ${result}`);
        return saveToDB("Hello world");
    })
    .then((result) => {
        console.log(`Data 2 was saved. Result: ${result}`);
        return saveToDB("Black tea");
    })
    .then((result) => {
        console.log(`Data 3 was saved. Result: ${result}`);
    })
    .catch((error) => {
        console.log(`Failure: Data was not saved!`);
        console.log(`Promise res: ${error}`);
});