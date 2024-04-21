function showDetail(endpoint) {
    const content = document.getElementById('content');
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
        `
    };
    content.innerHTML = details[endpoint];
}
