from flask import Flask, request, jsonify

# Wir sagen Flask, dass unser Ordner für statische Dateien "public" heißt
app = Flask(__name__, static_folder='public', static_url_path='')

# 1. ORDNER-AUSGABE
# Liefert die index.html aus dem "public"-Ordner auf der Startseite aus
@app.route('/')
def index():
    return app.send_static_file('index.html')

# 2. PARAMETER-WEITERGABE
# Liest Query-Parameter aus (z.B. http://localhost:5000/api?name=Max&alter=18)
@app.route('/api')
def api():
    name = request.args.get('name', 'Unbekannter')
    alter = request.args.get('alter', 'unbekannt')
    
    return jsonify({
        "nachricht": f"Hallo {name}! Du bist {alter} Jahre alt.",
        "empfangeneParameter": request.args
    })

if __name__ == '__main__':
    # Server starten auf Port 5000
    app.run(port=5000, debug=True)