import os

from flask import Flask, render_template, session
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")
socketio = SocketIO(app)
rooms = []

@app.route("/")
def index():
    """render main page"""

    try: 
        username = session["username"]
    except KeyError:
        username = None
    try:
        lastRoom = session["lastRoom"]
    except KeyError:
        lastRoom = None

    return render_template("index.html", username=username, lastChannel=lastChannel, rooms=rooms)


if __name__ == "__main__":
    socketio.run(app)