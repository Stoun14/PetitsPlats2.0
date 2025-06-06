function searchTag(indexList) {    
    ingredientsSelect.innerHTML = '';
    applianceSelect.innerHTML = '';
    utensilsSelect.innerHTML = '';

    indexList.forEach(function(item) {
        if (item >= 0 && item < recipes.length) {
            const { appliance, ingredients, ustensils } = recipes[item];

            const applianceLst = new Set([appliance]);
            const ingredientLst = new Set(ingredients.map(entry => entry.ingredient));
            const utensilLst = new Set(ustensils);

            

            const selectList = [ingredientsSelect, applianceSelect, utensilsSelect];
            const tagList = [ingredientLst, applianceLst, utensilLst];
            
            for (let index = 0; index < 3; index++) {
                tagList[index].forEach(entry => {
                    const name = entry.toLowerCase();
                    const option = document.createElement('option');
                    
                    option.value = name;
                    option.textContent = entry; 
                    selectList[index].appendChild(option);
                });
            }
        }
        /* tagList.forEach((list, index) => {
            
        }) */
    });

    // Écouteur d'événements pour le changement de sélection
    /* select.addEventListener('change', function() {
        const selectedItem = this.value;
        const itemList = document.getElementById('itemList');
        itemList.innerHTML = '';
        
        // Ajouter l'élément sélectionné à la liste
        if (selectedItem) {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = selectedItem.charAt(0).toUpperCase() + selectedItem.slice(1);
            itemList.appendChild(li);
        }
    });

    function tagListing(select) {
        
    }; */

    let result = indexList
        .map((index) => recipes[index])
    recipesList.innerHTML = '';
    result.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        recipesList.appendChild(li);
    });
}

/* function dropdown() {
    console.log("test");
    
    document.getElementById('searchInput').addEventListener('keyup', function() {
        let input = this.value.toLowerCase();
        let items = document.querySelectorAll('.dropdown-item');

        items.forEach(function(item) {
            var text = item.textContent.toLowerCase();
            item.style.display = text.includes(input) ? '' : 'none';
        });
    });

    document.querySelectorAll('.dropdown-item').forEach(function(item) {
        item.style.display = 'block';
        item.addEventListener('click', function() {
            document.getElementById('dropdownMenuButton').textContent = this.textContent;
        });
    });    
} */