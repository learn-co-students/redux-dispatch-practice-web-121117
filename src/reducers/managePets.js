export let state;

export function managePets(state = { pets: [] }, action) {
  switch (action.type) {
    case "ADD_PET":
      return {
        pets: [
          ...state.pets,
          {
            name: action.pet.name,
            species: action.pet.species,
            id: action.pet.id
          }
        ]
      };
    case "REMOVE_PET":
      let newPets = state.pets.filter(p => p.id !== action.id);
      return { pets: newPets };
    default:
      return state;
  }
}

export function dispatch(action) {
  state = managePets(state, action);
  render();
}

export function render() {
  let container = document.getElementById("container");
  let ul = document.createElement("ul");
  state.pets.map(pet => {
    return (container.innerHTML = `<ul><li>${pet.name}</li></ul>`);
  });
}
