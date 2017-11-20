export default function manageUsers(state = {users: []}, action){
  switch (action.type) {
    case "ADD_USER":
      const newUsers = [...state.users, action.user]
      return Object.assign({}, state, {users: newUsers})
    default:
      return state
  }
}
