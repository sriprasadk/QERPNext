---
slug: mdx-blog-post
title: MDX Blog Post
authors: [Sri]
tags: [SalesForce Connector API]
---

SalesForce Connector API [Python Flask].

:::tip

Install Python Flask, requests 
```js
 pip install Flask requests
 ``` 
:::tip
Python Script to connect to SalesForce Instance

```js
 from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/sync_data', methods=['POST'])
def sync_data():
    try:
        # Extract data from the ERP system (modify this part based on your ERP system)
        erp_data = request.get_json()

        # Transform and map ERP data to Salesforce format (modify this part based on your mapping)
        salesforce_data = transform_data(erp_data)

        # Send data to Salesforce
        response = send_to_salesforce(salesforce_data)

        if response.status_code == 200:
            return jsonify({"status": "success", "message": "Data synced successfully"})
        else:
            return jsonify({"status": "error", "message": "Failed to sync data to Salesforce"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)})

def transform_data(erp_data):
    # Implement data transformation logic based on your mapping
    # This function should convert ERP data to Salesforce data format
    # Example: map ERP fields to Salesforce fields
    salesforce_data = {
        'Name': erp_data.get('ProductName'),
        'Description': erp_data.get('ProductDescription'),
        # Add more fields as needed
    }
    return salesforce_data

def send_to_salesforce(data):
    # Implement Salesforce API request logic
    # Make a POST request to Salesforce API endpoint
    # Example: Use Salesforce REST API
    salesforce_endpoint = 'https://your-salesforce-instance/services/data/v52.0/sobjects/Product__c'
    access_token = 'your_salesforce_access_token'
    headers = {
        'Authorization': f'Bearer {access_token}',
        'Content-Type': 'application/json',
    }
    response = requests.post(salesforce_endpoint, json=data, headers=headers)
    return response

if __name__ == '__main__':
    app.run(debug=True)

 ``` 

:::tip

Run the API
```js
python salesforce_connector_api.py
 ``` 
:::tip

Test the API.  Use a tool like curl or Postman to test the API by sending a POST request with ERP data to http://localhost:5000/sync_data
```js
curl -X POST -H "Content-Type: application/json" -d '{"ProductName": "Product123", "ProductDescription": "Description123"}' http://localhost:5000/sync_data
 ``` 
:::tip