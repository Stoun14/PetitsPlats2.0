function dropdown() {
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
}
