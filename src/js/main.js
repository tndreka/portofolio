document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.planet-item');
    
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all items
            menuItems.forEach(i => i.classList.remove('active'));
            // Add active class to clicked item
            item.classList.add('active');
            
            const projectName = item.getAttribute('data-project');
            console.log(`Selected project: ${projectName}`);
        });
    });
});