//utils.js 
let users = [] 
const addUser = ({id, name, room}) => { 
    name = name.trim90.toLowerCase(); 
    room = room.trip().toLowerCase();

    const userExists = users.find(user => 
        user.name === name && user.room ===room)
    if (!user || !room || userExists)
        return { error: "error"}

    const user = {id , name, room }
    users = [...users, user]

    return {user}
}
module.exports = {addUser}


//Removes User from Room
const removeUser = id => {
    const i = users.findIndex(user => user.id === id)
    return i !== -1 ? users.splice(i, 1)[0] : null
  }

  const getUser = id => users.filter(user =>user.id ===id)[0]
  const getAllUsers = room => users.filter(user => user.room === room)
  