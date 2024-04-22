function toggleCategory(categoryId) {
    var element = document.getElementById(categoryId);
    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
        element.classList.add('show');
    } else {
        element.classList.remove('show');
        element.classList.add('hidden');
    }
}

function showDetail(endpoint) {
    const content = document.getElementById('api-details');
    fetch(`apis/${endpoint}.html`)
        .then(response => {
            if (response.ok) return response.text();
            throw new Error('Failed to load the API description.');
        })
        .then(html => {
            content.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading the API detail:', error);
            content.innerHTML = `<p>Error loading details: ${error.message}</p>`;
        });
}
