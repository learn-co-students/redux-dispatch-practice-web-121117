export let state;


export function managePets(state={pets:[]},action){
  switch(action.type){
    case 'ADD_PET':
      return {pets: [...state.pets, action.pet]}
    case 'REMOVE_PET':
      let filteredPets = state.pets.filter(thisPet =>{
        return thisPet.id !== action.id
      })
      return {pets: filteredPets}
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state,action)
  render()
}

export function render(){
   let container = document.getElementById('container');
    let petName = state.pets.map(pet =>{
      return `<ul><li>${pet.name}</li></ul>`
    })
    container.innerHTML = petName
  }
