const delay = (data, tick) => new Promise((resolve) => {
  setTimeout(() => {
    console.log(data);
    resolve(data)
  }, tick);
})

module.exports = app => ( {
  getName() {
    // return delay('randy', 1000)
    return app.$model.user.findAll()
  },
  getAge() {
    return 20
  }
})