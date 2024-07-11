document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('input');
    const categorySelect = document.getElementById('category');
    const videoContainers = document.querySelectorAll('.video-container');
  
    function filterVideos() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categorySelect.value;
    
        videoContainers.forEach(container => {
            const title = container.querySelector('.video-title').textContent.toLowerCase();
            const videoCategory = container.dataset.category; // Assuming you have added a data-category attribute to each video container

            if ((title.includes(searchTerm) || searchTerm === '') && 
                (selectedCategory === '' || selectedCategory === videoCategory)) {
                container.style.display = 'block';
            } else {
                container.style.display = 'none';
            }
        });
    }
  
    searchInput.addEventListener('input', filterVideos);
    categorySelect.addEventListener('change', filterVideos);
  
    // Initialize filtering on page load
    filterVideos();
});