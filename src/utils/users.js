const users = [];
const rooms = [];

const addUser = ({ id, username, room }) => {
  //Clean Data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  //Validate the data
  if (!username || !room) {
    return {
      error: 'Username and room are required'
    };
  }

  //check for existing user
  const existingUser = users.find(user => {
    return user.room === room && user.username === username;
  });


  // Validate username
  if (existingUser) {
    return {
      error: 'Username is in use!'
    };
  }

  // Store User
  const user = { id, username, room };
  users.push(user);
  return { user };
};

// Remove User
const removeUser = id => {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = id => {
  return users.find(user => user.id === id);
};

const getUserInRoom = room => {
  room = room.trim().toLowerCase();
  return users.filter(user => user.room === room);
};

const addRoom = (room) => {
  const value = room.room;
  const existingRoom = rooms.find(element => element.room === value)

  if (existingRoom) {
    return null
  }

  const roomData = { room }
  rooms.push(room);
  return roomData;

}

const getRooms = () => {
  return rooms;
}


module.exports = { addUser, removeUser, getUser, getUserInRoom, addRoom, getRooms };
