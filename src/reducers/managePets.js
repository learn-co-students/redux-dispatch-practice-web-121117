export let state;


export function managePets(state = {pets: []}, action){
  switch(action.type){
    case 'ADD_PET':
      return {pets: [...state.pets, action.pet]}
      break;
    case 'REMOVE_PET':
      let newPets = [...state.pets]
      return {pets: newPets.filter(pet => pet.id !== action.id)}
      break;
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let div = document.getElementById('container')
  let pets = state.pets.map(pet => `<li>${pet.name}</li>`)
  div.innerHTML = `<ul>${pets}</ul>`
  return div
}
