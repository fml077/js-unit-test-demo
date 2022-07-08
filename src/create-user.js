function createUser(info, callback) {
    const user = {
        name: info.name,
        age: info.age,
    }
    try {
        Datebase.save(user, callback);
    } catch (err) {
        callback(err)
    }
}

module.exports = {
   createUser 
}