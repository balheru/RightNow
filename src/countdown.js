module.exports = function countdown(tick) {
  let count = 10

  let timer = setInterval(() => {
    tick(count--)
    console.log("count", count);
      if (count === 0) {
        clearInterval(timer)
      }

  }, 1000)

  setInterval(function () {

  }, 10);

};
