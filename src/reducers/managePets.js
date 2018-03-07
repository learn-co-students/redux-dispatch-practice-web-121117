export let state;

export function managePets(state = { pets: [] }, action) {
  switch (action.type) {
    case 'ADD_PET':
      return { pets: [...state.pets, action.pet] };
    case 'REMOVE_PET':
      const newPets = state.pets.filter(pet => pet.id !== action.id);
      return { pets: newPets };
    default:
      return state;
  }
}

export function dispatch(action) {
  state = managePets(state, action);
}

export function render() {
  const list = document.createElement('ul');
  state.pets.forEach(pet => {
    const li = document.createElement('li');
    li.innerHTML = pet.name;
    list.appendChild(li);
  });
  document.getElementById('main').appendChild(list);
}
