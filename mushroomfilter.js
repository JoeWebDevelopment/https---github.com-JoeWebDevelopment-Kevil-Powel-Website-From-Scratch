const cards = document.querySelectorAll('.mushroom-guide .card');

const seasonalFilter = document.querySelector('#season');
const edibleFilter = document.querySelector('#edible');


const currentFilters ={
    season: 'all',
    edible: 'edible'
}

seasonalFilter.addEventListener('change', updateFilter );
edibleFilter.addEventListener('change', updateFilter );



function updateFilter(e){
    const filterType = e.target.name
    currentFilters[filterType] = e.target.value;
    filterCards();
    console.log(currentFilters)
}

function filterCards(){
    cards.forEach((card)  => {
        const season = card.querySelector("[data-season]").dataset.season;
        const edible = card.querySelector("[data-edible]").dataset.edible;
        console.log(season, edible);

        const seasonMatch = currentFilters.season === season
        const edibleMatch = currentFilters.edible === edible

        if(
            (seasonMatch || currentFilters.season === "all") && 
            (edibleMatch || currentFilters.edible === "all")
        )
            {
            card.hidden = false;
        }else{
            card.hidden = true;
        }

});

}