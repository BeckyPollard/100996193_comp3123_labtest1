const lowerCaseWords = (mixedArray) => {
  // reference used: MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

  return new Promise((res, rej) => {
    if(!mixedArray || !Array.isArray(mixedArray)) {
      rej(new Error("Error, invalid input"));
      return;
    }

    try {
      const sanitize = mixedArray.filter(item => typeof item === "string").map(item => item.toLowerCase());
      res(sanitize);
    } catch(err) {
      rej(err);
    }
  });
};

console.log(lowerCaseWords(["CRAB", 100, true, 3.99, false, "LOBSTER"]));
