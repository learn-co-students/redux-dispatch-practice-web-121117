export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case "ADD_PET":
      return {pets: [...state.pets, action.pet]}
    case "REMOVE_PET":
      return {pets: [...state.pets.filter(p => p.id !== action.id)]}
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let container = document.getElementById('container')
  let ul = document.createElement("ul")
  state.pets.forEach((p) => {
    let li = document.createElement("li")
    li.append(p.name)
    ul.append(li)
  })


  container.append(ul)
}
