from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/data', methods=['GET', 'POST'])
def handle_data():
    if request.method == 'POST':
        data = request.json
        return jsonify({"message": "Data received", "data": data}), 200
    else:
        sample_data = {"key": "value"}
        return jsonify(sample_data), 200

if __name__ == '__main__':
    app.run(debug=True)
