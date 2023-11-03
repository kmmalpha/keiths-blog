from flask import request, jsonify
from werkzeug.security import generate_password_hash, check_passsword_hash
from userAuth import *
from user_db import *

@app.route('../src/components/features/auth/SignUp.jsx', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    # Check if username or email is already taken
    if User.query.filter_by(username=username).first() or User.query.filter_by(email=email).first():
        return jsonify({'message': 'Username or email already exists'}), 400
    
    # Create a new user
    new_user = User(username=username, email=email, password_hash=generate_password_hash(password))
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User registered successfully'}), 201

@app.route('../src/components/features/auth/Login.jsx', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()

    if not user or not check_passsword_hash(user.password_hash, password):
        return jsonify({'message': 'Invalid credentials'}), 401
    
    # Implement user session management - Flask-login or JWT auth

# Additional routes for user management (e.g., profile, password change, logout, etc.)



