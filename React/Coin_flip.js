function tossCoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}

// function fiveHeadsSync() {
//         let headsCount = 0;
//         let attempts = 0;
//         while(headsCount < 5) {
//             attempts++;
//             let result = tossCoin();
//             console.log(`${result} was flipped`);
//             if(result === "heads") {
//                 headsCount++;
//             } else {
//                 headsCount = 0;
//             }
//         }
//         return `It took ${attempts} tries to flip five "heads"`;
//     }
//     console.log( fiveHeadsSync() );
//     console.log( "This is run after the fiveHeadsSync function completes" );

function fiveHeads() {
  return new Promise((resolve, reject) => {
    let headsCount = 0;
    let attempts = 0;
    let res = [];
    while (headsCount < 5) {
      attempts++;
      let flip = tossCoin();
      res.push(flip);
      for (let i = 0; i < res.length; i++) {
        if (res[i] === "heads") {
          headsCount++;
        } else {
          headsCount = 0;
        }
      }
    }
    for (let i = 0; i < res.length; i++) {
      if (
        res[i] === "heads" &&
        res[i + 1] === "heads" &&
        res[i + 3] === "heads" &&
        res[i + 4] === "heads" &&
        res[i + 5] === "heads"
      ) {
          resolve(`It took ${attempts} tries to flip five "heads"`)
      }  
    }

    if(attempts > 100){
      reject("Reached 100 attempts!!")
    }
  });
}

fiveHeads()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

