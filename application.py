import os

from flask import Flask, render_template, session, request, make_response, jsonify
from flask_socketio import SocketIO, emit, join_room, leave_room, send

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY")

socketio = SocketIO(app)
rooms = []
users = set()


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

    return render_template("index.html", username=username, lastChannel=lastRoom, rooms=rooms)


@app.route("/create-name", methods=["POST"])
def create_name():

    req = request.get_json()
    name = req["name"]

    if not name:
        res = make_response(jsonify({"message": "Error: Please Enter A Valid Username"}), 400)
    elif name in users:
        res = make_response(jsonify({"message": "Error: Username Is Already Taken"}), 409)
    else:
        res = make_response(jsonify({"message": "OK"}), 200)
        users.add(name)
        session["username"] = name

    return res


@socketio.on("join")
def on_join(data):
    username = data["username"]
    room = data["room"]
    join_room(room)
    send(username + " has entered the room.", room=room)


@socketio.on("leave")
def on_leave(data):
    username = data["username"]
    room = data["room"]
    leave_room(room)
    send(username + " has left the room.", room=room)


@socketio.on("changeRoom")
def change_room(arg1):
    return ("change")

if __name__ == "__main__":
    socketio.run(app)