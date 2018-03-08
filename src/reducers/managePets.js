export let state;

// these are the actions
export function managePets(state = { pets: [] }, action) {
  switch (action.type) {
    case "ADD_PET":
      return { pets: [...state.pets, action.pet] };
    case "REMOVE_PET":
      let newPets = state.pets.filter(pet => pet.id !== action.id);
      return { pets: newPets };
    default:
      return state;
  }
}

export function dispatch(action) {
  state = managePets(state, action)
}

export function render() {
  let container = document.getElementById('container')
  state.pets.map( pet => {
    return (container.innerHTML = `<ul><li>${pet.name}</li></ul>`)
  })
}
