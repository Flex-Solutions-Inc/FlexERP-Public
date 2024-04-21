function showDetail(endpoint) {
    const details = {
        'getAllProducts': `
            <h1>Get All Products</h1>
            <h2>GET /company/{company_id}/v1/api/products</h2>
            <h3>Description</h3>
            <p>Returns a list of Products. Optional filter parameters can be passed in.</p>
            <h3>Request URL</h3>
            <code>https://www.getflex.solutions/company/{company_id}/v1/api/products</code>
            <h3>Response</h3>
            <pre>{
  "data": [
    {
      "name": "Test Product",
      "type": "physical",
      "sku": "SM-13",
      "description": "<p><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel metus ac est egestas porta sed quis erat. Integer id nulla massa. Proin vitae enim nisi. Praesent non dignissim nulla. Nulla mattis id massa ac pharetra. Mauris et nisi in dolor aliquam sodales. Aliquam dui nisl, dictum quis leo sit amet, rutrum volutpat metus. Curabitur libero nunc, interdum ac libero non, tristique porttitor metus. Ut non dignissim lorem, in vestibulum leo. Vivamus sodales quis turpis eget.</span></p>",
      "weight": 9999999999,
      "width": 9999999999,
      "depth": 9999999999,
      "height": 9999999999,
      "price": 0.1,
      "cost_price": 0.1,
      "retail_price": 0.1,
      "sale_price": 0.1,
      "map_price": 0,
      "tax_class_id": 255,
      "product_tax_code": "string",
      "categories": [
        0
      ],
      "channels": [],
      "brand_id": 1000000000,
      "brand_name": "Common Good",
      "inventory_level": 2147483647,
      "inventory_warning_level": 2147483647,
      "inventory_tracking": "none",
      "fixed_cost_shipping_price": 0.1,
      "is_free_shipping": true,
      "is_visible": true,
      "is_featured": true,
      "related_products": [
        0
      ],
      "warranty": "string",
      "bin_picking_number": "string",
      "layout_file": "string",
      "upc": "string",
      "search_keywords": "string",
      "availability_description": "string",
      "availability": "available",
      "gift_wrapping_options_type": "any",
      "gift_wrapping_options_list": [
        0
      ],
      "sort_order": -2147483648,
      "condition": "New",
      "is_condition_shown": true,
      "order_quantity_minimum": 1000000000,
      "order_quantity_maximum": 1000000000,
      "page_title": "string",
      "meta_keywords": [
        "string"
      ],
      "meta_description": "string",
      "view_count": 1000000000,
      "preorder_release_date": "2019-08-24T14:15:22Z",
      "preorder_message": "string",
      "is_preorder_only": true,
      "is_price_hidden": true,
      "price_hidden_label": "string",
      "custom_url": {
        "url": "string",
        "is_customized": true,
        "create_redirect": true
      },
      "open_graph_type": "product",
      "open_graph_title": "string",
      "open_graph_description": "string",
      "open_graph_use_meta_description": true,
      "open_graph_use_product_name": true,
      "open_graph_use_image": true,
      "gtin": "string",
      "mpn": "string",
      "date_last_imported": "string",
      "reviews_rating_sum": 3,
      "reviews_count": 4,
      "total_sold": 80,
      "custom_fields": [
        {
          "id": 6,
          "name": "ISBN",
          "value": "1234567890123"
        }
      ],
      "bulk_pricing_rules": [
        {
          "quantity_min": 10,
          "quantity_max": 50,
          "type": "price",
          "amount": 10
        }
      ],
      "images": [
        {
          "image_file": "string",
          "is_thumbnail": true,
          "sort_order": -2147483648,
          "description": "string",
          "image_url": "string",
          "id": 0,
          "product_id": 0,
          "date_modified": "2019-08-24T14:15:22Z"
        }
      ],
      "videos": [
        {
          "title": "Writing Great Documentation",
          "description": "A video about documenation",
          "sort_order": 1,
          "type": "youtube",
          "video_id": "z3fRu9pkuXE",
          "id": 0,
          "product_id": 0,
          "length": "string"
        }
      ],
      "variants": [
        {
          "cost_price": 0.1,
          "price": 0.1,
          "sale_price": 0.1,
          "retail_price": 0.1,
          "weight": 0.1,
          "width": 0.1,
          "height": 0.1,
          "depth": 0.1,
          "is_free_shipping": true,
          "fixed_cost_shipping_price": 0.1,
          "purchasing_disabled": true,
          "purchasing_disabled_message": "string",
          "upc": "string",
          "inventory_level": 2147483647,
          "inventory_warning_level": 2147483647,
          "bin_picking_number": "string",
          "mpn": "string",
          "gtin": "012345678905",
          "product_id": 0,
          "id": 0,
          "sku": "string",
          "option_values": [
            {
              "option_display_name": "Color",
              "label": "Beige"
            }
          ],
          "calculated_price": 0.1,
          "calculated_weight": 0
        }
      ],
      "date_created": "2018-08-15T14:49:05+00:00",
      "date_modified": "2018-08-24T14:41:00+00:00",
      "base_variant_id": 0,
      "calculated_price": 0.1,
      "options": [
        {
          "id": 55,
          "product_id": 4,
          "display_name": "Add-a-$5-Donation1535042499-187",
          "type": "radio_buttons",
          "config": {
            "default_value": "string",
            "checked_by_default": true,
            "checkbox_label": "string",
            "date_limited": true,
            "date_limit_mode": "range",
            "date_earliest_value": "2019-08-24",
            "date_latest_value": "2019-08-24",
            "file_types_mode": "specific",
            "file_types_supported": [
              "images, documents, other"
            ],
            "file_types_other": [
              "pdf"
            ],
            "file_max_size": 5,
            "text_characters_limited": true,
            "text_min_length": 1,
            "text_max_length": 55,
            "text_lines_limited": true,
            "text_max_lines": 4,
            "number_limited": true,
            "number_limit_mode": "lowest",
            "number_lowest_value": 100,
            "number_highest_value": 0,
            "number_integers_only": false,
            "product_list_adjusts_inventory": true,
            "product_list_adjusts_pricing": true,
            "product_list_shipping_calc": "weight"
          },
          "sort_order": 1,
          "option_values": [
            {
              "is_default": false,
              "label": "Green",
              "sort_order": 0,
              "value_data": {},
              "id": 0
            }
          ]
        }
      ],
      "modifiers": [
        {
          "type": "date",
          "required": true,
          "sort_order": 0,
          "config": {
            "default_value": "string",
            "checked_by_default": true,
            "checkbox_label": "string",
            "date_limited": true,
            "date_limit_mode": "range",
            "date_earliest_value": "2019-08-24",
            "date_latest_value": "2019-08-24",
            "file_types_mode": "specific",
            "file_types_supported": [
              "images, documents, other"
            ],
            "file_types_other": [
              "pdf"
            ],
            "file_max_size": 5,
            "text_characters_limited": true,
            "text_min_length": 1,
            "text_max_length": 55,
            "text_lines_limited": true,
            "text_max_lines": 4,
            "number_limited": true,
            "number_limit_mode": "lowest",
            "number_lowest_value": 100,
            "number_highest_value": 0,
            "number_integers_only": false,
            "product_list_adjusts_inventory": true,
            "product_list_adjusts_pricing": true,
            "product_list_shipping_calc": "weight"
          },
          "display_name": "string",
          "id": 12,
          "product_id": 77,
          "name": "Add-a-$5-Donation1535039590-191",
          "option_values": [
            {
              "is_default": false,
              "label": "Green",
              "sort_order": 0,
              "value_data": {},
              "adjusters": {
                "price": {
                  "adjuster": "relative",
                  "adjuster_value": 5
                },
                "weight": {
                  "adjuster": "relative",
                  "adjuster_value": 5
                },
                "image_url": "",
                "purchasing_disabled": {
                  "status": true,
                  "message": "string"
                }
              },
              "id": 0,
              "option_id": 0
            }
          ]
        }
      ],
      "option_set_id": 0,
      "option_set_display": "string"
    }
  ],
  "meta": {
    "pagination": {
      "total": 36,
      "count": 36,
      "per_page": 50,
      "current_page": 1,
      "total_pages": 1,
      "links": {
        "previous": "string",
        "current": "?page=1&limit=50",
        "next": "string"
      }
    }
  }
}</pre>
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
