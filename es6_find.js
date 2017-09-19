const pets = [
  { type: 'Dog', name: 'Max'},
  { type: 'Cat', name: 'Karl'},
  { type: 'Dog', name: 'Tommy'},
]

pet =pets.find(pet=>pet.type==='Dog'&&pet.name==='Max')
console.log(pet)