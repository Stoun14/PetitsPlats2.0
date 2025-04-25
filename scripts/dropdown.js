function dropdown() {
    document.getElementById('searchInput').addEventListener('keyup', function() {
        var input = this.value.toLowerCase();
        var items = document.querySelectorAll('.dropdown-item');

        items.forEach(function(item) {
            var text = item.textContent.toLowerCase();
            item.style.display = text.includes(input) ? '' : 'none';
        });
    });

    // Gérer la sélection d'un élément dans le menu déroulant
    document.querySelectorAll('.dropdown-item').forEach(function(item) {
        item.addEventListener('click', function() {
            document.getElementById('dropdownMenuButton').textContent = this.textContent;
        });
    });    
}
