const resourcesList = document.getElementById('resources-list');

// Dummy data (for now, you can connect this to a backend later)
const resources = [
    { type: 'Food', description: 'Free food at the local community center', location: '123 Main St.', contact: '555-1234' },
    { type: 'Clothing', description: 'Clothing drive at the park', location: '456 Oak Rd.', contact: '555-5678' }
];

// Display resources on homepage
function displayResources() {
    resourcesList.innerHTML = '';  // Clear existing list
    resources.forEach(resource => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${resource.type}</strong>: ${resource.description} <br> Location: ${resource.location} <br> Contact: ${resource.contact}`;
        resourcesList.appendChild(li);
    });
}

// Handle form submission for sharing a resource
document.getElementById('resource-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newResource = {
        type: event.target.type.value,
        description: event.target.description.value,
        location: event.target.location.value,
        contact: event.target.contact.value
    };
    
    resources.push(newResource);
    displayResources();
    alert('Resource shared successfully!');
});

window.onload = displayResources;
