from flask import Flask, jsonify
from  flask_cors import CORS
import os
import json

app = Flask(__name__)
CORS(app)

@app.route('/api/posts')
def get_posts():
    # Get the absolute path of the JSON file
    json_file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), 'data/posts.json'))
    
    # Read the posts from the JSON file
    with open(json_file_path, 'r') as f:
        posts = json.load(f)

    # Return the posts as JSON
    return jsonify(posts)

if __name__ == '__main__':
    app.run(debug=True)