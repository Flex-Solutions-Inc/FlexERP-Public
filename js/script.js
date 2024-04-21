function showDetail(endpoint) {
    const details = {
        'getApiResource': `
            <h2>GET /api/resource</h2>
            <h3>Description</h3>
            <p>Retrieve an array of resources.</p>
            <h3>Request URL</h3>
            <code>https://example.com/api/resource</code>
            <h3>Response</h3>
            <pre>[
    {
        "id": 1,
        "name": "Resource Name",
        "description": "Description"
    }
]</pre>
        `,
        'postApiResource': `
            <h2>POST /api/resource</h2>
            <h3>Description</h3>
            <p>Create a new resource.</p>
            <h3>Request URL</h3>
            <code>https://example.com/api/resource</code>
            <h3>Body Parameters</h3>
            <pre>{
    "name": "New Resource",
    "description": "Description of the new resource"
}</pre>
        `,
        'updateApiResource': `
            <h2>PUT /api/resource/{id}</h2>
            <h3>Description</h3>
            <p>Update an existing resource. You must specify the resource ID in the URL path.</p>
            <h3>Request URL</h3>
            <code>https://example.com/api/resource/123</code>
            <h3>Body Parameters</h3>
            <pre>{
    "name": "Updated Resource Name",
    "description": "Updated description of the resource"
}</pre>
        `,
        'deleteApiResource': `
            <h2>DELETE /api/resource/{id}</h2>
            <h3>Description</h3>
            <p>Delete an existing resource. You must specify the resource ID in the URL path.</p>
            <h3>Request URL</h3>
            <code>https://example.com/api/resource/123</code>
            <pre>Response: Resource with ID 123 has been deleted.</pre>
        `
    };
    const content = document.getElementById('api-details');
    content.innerHTML = details[endpoint] || '<p>No details available for this endpoint.</p>';
}
