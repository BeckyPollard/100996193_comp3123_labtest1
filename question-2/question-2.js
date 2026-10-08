const resolvedPromise = () => {
  return new Promise((res) => {
    setTimeout(() => {
      let success = {"message": "Delayed! Successful! Yay!"};
      res(success);
    }, 500);
  });
};
const rejectedPromise = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej(new Error("Error: Delayed! Exception! No!"));
    }, 500);
  });
};

resolvedPromise().then((res) => {
  console.log(res);
}).catch((err) => {
  console.error(err);
});
rejectedPromise().then((res) => {
  console.log(res);
}).catch((err) => {
  // Captures the rejection and logs the error message
  console.err({"Error": err.message});
});
