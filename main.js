const BuyACar = (car, money) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money >= 1e9) {
        resolve("Bạn đủ tiền mua xe " + car);
      } 
    //   else if (money > 1e20) {
    //     resolve("Cái xe " + car + " này quá rẻ");
    //   } 
      else {
        reject("Bạn quá nghèo để mua được xe " + car);
      }
    }, 2000);
  });
};

function buyCar() {
  let money = document.getElementById("input").value;
  BuyACar("Mclaren", money)
    .then((value) => {
      document.getElementById("output").innerHTML = value;
    })
    .catch((err) => {
      document.getElementById("output").innerHTML = err;
    });
}
