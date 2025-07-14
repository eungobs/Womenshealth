from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # Enable CORS for all routes (important for local development)

@app.route('/submit-booking', methods=['POST'])
def submit_booking():
    if request.is_json:
        data = request.get_json()
        doctor = data.get('doctor')
        date = data.get('date')
        patient_name = data.get('patientName')
        patient_contact = data.get('patientContact')
        reason = data.get('reason')

        
        print(f"Received new booking:")
        print(f"  Doctor: {doctor}")
        print(f"  Date: {date}")
        print(f"  Patient Name: {patient_name}")
        print(f"  Patient Contact: {patient_contact}")
        print(f"  Reason: {reason}")

        # Simulate a successful response
        return jsonify({
            "message": "Booking received successfully!",
            "data": data
        }), 200
    else:
        return jsonify({"error": "Request must be JSON"}), 400

if __name__ == '__main__':
    # This runs the Flask development server locally.
    # Vercel will handle running it as a serverless function in production.
    app.run(debug=True)
