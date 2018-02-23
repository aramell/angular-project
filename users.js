var faker = require ('faker')

function generateUsers(){
  var users = []
  for( var id=0; id < 20; id++){
    var userName = faker.internet.email()
    var steps = faker.random.number()
    var heartRate = faker.finance.amount()

    users.push({
      "id": id,
      "user_name": userName,
      "steps": steps,
      "heartrate": heartRate
    })
  }
  return {"users": users}
}
module.exports = generateUsers