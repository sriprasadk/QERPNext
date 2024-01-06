---
slug: QuickBook API
title: Quick Book API
authors: Sri
tags: [QuickBook API Connector]
---

QuickBook API

:::tip

Install Python Flask, requests, Flask-OAuthlib
```js
pip install Flask requests Flask-OAuthlib
``` 
```js
from flask import Flask, request, jsonify, redirect, url_for
from flask_oauthlib.client import OAuth
import requests

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Replace with your secret key

# QuickBooks OAuth configuration
oauth = OAuth(app)
quickbooks = oauth.remote_app(
    'quickbooks',
    consumer_key='your_consumer_key',  # Replace with your QuickBooks app's consumer key
    consumer_secret='your_consumer_secret',  # Replace with your QuickBooks app's consumer secret
    request_token_params={'scope': 'com.intuit.quickbooks.accounting'},
    base_url='https://sandbox-quickbooks.api.intuit.com/v3/',
    request_token_url=None,
    access_token_method='POST',
    access_token_url='https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer',
    authorize_url='https://appcenter.intuit.com/connect/oauth2'
)

@app.route('/login')
def login():
    return quickbooks.authorize(callback=url_for('authorized', _external=True))

@app.route('/logout')
def logout():
    # Clear session for logout
    return 'Logged out'

@app.route('/login/authorized')
@quickbooks.authorized_handler
def authorized(resp):
    if resp is None or resp.get('access_token') is None:
        return 'Access denied: reason={} error={}'.format(
            request.args['error_reason'],
            request.args['error_description']
        )

    # Store the access token securely, for example, in a database
    # You would typically associate the access token with a user in your application

    return 'Logged in successfully'

@quickbooks.tokengetter
def get_quickbooks_oauth_token():
    return session.get('quickbooks_token')

@app.route('/sync_data', methods=['POST'])
def sync_data():
    try:
        # Extract data from the incoming request
        incoming_data = request.get_json()

        # Use the stored access token to make requests to QuickBooks API
        access_token = get_quickbooks_oauth_token()
        if access_token is None:
            return jsonify({"status": "error", "message": "Not authenticated with QuickBooks"})

        # Make a request to the QuickBooks API (modify based on your requirements)
        response = requests.post(
            'https://sandbox-quickbooks.api.intuit.com/v3/company/<your_company_id>/invoice',
            json=incoming_data,
            headers={'Authorization': f'Bearer {access_token}'}
        )

        if response.status_code == 200:
            return jsonify({"status": "success", "message": "Data synced successfully"})
        else:
            return jsonify({"status": "error", "message": f"Failed to sync data to QuickBooks. {response.text}"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
``` 

:::tip

Install Python Flask, requests 
```js
python quickbooks_connector_api.py
```
Test the API
Visit http://localhost:5000/login to initiate the OAuth 2.0 authorization process.
After authorizing, you'll be redirected back to the application.
Use a tool like curl or Postman to test the /sync_data endpoint by sending a POST request with data to http://localhost:5000/sync_data.

```js
curl -X POST -H "Content-Type: application/json" -d '{"key1": "value1", "key2": "value2"}' http://localhost:5000/sync_data
```

