export const mapSpecialties = new Map()
mapSpecialties.set('Terapia Neural', 'Descripción de Terapia Neural')
mapSpecialties.set('Quiropraxia', 'Descripción de Quiropraxia')
mapSpecialties.set('Fisioterapia', 'Descripción de Fisioterapia')
mapSpecialties.set('Nutrición', 'Descripción de Nutrición')
mapSpecialties.set('Dietética Terapéutica', 'Descripción de Dietética Terapéutica')

export const specialtiesContainer = document.getElementById('specialties')

for(const specialty of mapSpecialties.keys())
{
    specialtiesContainer.innerHTML += `
        <button class="list-group-item list-group-item-action">${specialty}</button>
    ` 
}
