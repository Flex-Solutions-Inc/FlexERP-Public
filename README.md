<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Documentation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background: #f4f4f4;
            color: #333;
        }
        .container {
            width: 85%;
            margin: 20px auto;
            background: #fff;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        h1, h2, h3 {
            color: #333;
        }
        code {
            background: #eee;
            padding: 2px 5px;
            border-radius: 3px;
            font-family: monospace;
        }
        pre {
            background: #333;
            color: #fff;
            padding: 10px;
            overflow: auto;
            border-radius: 5px;
        }
        .endpoint {
            margin: 20px 0;
            padding: 15px;
            background: #e9e9e9;
            border-left: 5px solid #333;
            cursor: pointer;
        }
        .details {
            display: none;
            padding: 10px;
            border: 1px solid #ccc;
            background: #fff;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>API Documentation</h1>
        <div class="endpoint" onclick="toggleDetails('details1')">
            <h2>GET /api/resource</h2>
        </div>
        <div id="details1" class="details">
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
        </div>
        <div class="endpoint" onclick="toggleDetails('details2')">
            <h2>POST /api/resource</h2>
        </div>
        <div id="details2" class="details">
            <h3>Description</h3>
            <p>Create a new resource.</p>
            <h3>Request URL</h3>
            <code>https://example.com/api/resource</code>
            <h3>Body Parameters</h3>
            <pre>{
    "name": "New Resource",
    "description": "Description of the new resource"
}</pre>
        </div>
    </div>
    <script>
        function toggleDetails(id) {
            var element = document.getElementById(id);
            if (element.style.display === 'block') {
                element.style.display = 'none';
            } else {
                element.style.display = 'block';
            }
        }
    </script>
</body>
</html>
