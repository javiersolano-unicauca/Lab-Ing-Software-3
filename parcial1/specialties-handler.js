import { mapSpecialties, specialtiesContainer } from "./specialties.js"

const specialtiesDescription = document.getElementById('specialties-description')

specialtiesContainer.addEventListener('click', (e) => {

    const button = e.target
    specialtiesDescription.textContent = mapSpecialties.get(button.textContent)
})  
