import sqlite3
from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    # return render_template('playlist.html')
    return render_template('song_01_01.html')
@app.route('/playlist.html')
def  index2():
    return render_template('playlist.html')
@app.route('/endpoint', methods=['POST'])
def add_song_to_playlist():
    # Get the data from the request body as a JSON object
    data = request.get_json()
    # print(data)

    # Extract the data from the JSON object
    title = data['title']
    duration = data['duration']
    song_id = data['id']

    # Connect to the database and create the songs table if it doesn't exist
    conn = sqlite3.connect('playlist.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS songs
                 (song_id TEXT PRIMARY KEY, title TEXT, duration TEXT)''')
    conn.commit()

    # Check if the song already exists in the database
    c.execute("SELECT * FROM songs WHERE song_id=?", (song_id,))
    result = c.fetchone()
    if result:
        # Song already exists, return a message indicating this
        message = f"Song with ID {song_id} already exists in the playlist."
    else:
        # Song doesn't exist, insert it into the database
        c.execute("INSERT INTO songs (song_id, title, duration) VALUES (?, ?, ?)", (song_id, title, duration))
        conn.commit()
        message = f"Song with ID {song_id} added to the playlist."

    # Close the database connection
    conn.close()

    # Return a JSON response with the message
    return jsonify({'message': message})

@app.route('/playlist')
def playlist():
    # Connect to the database
    # render_template('playlist.html')
    conn = sqlite3.connect('playlist.db')
    cursor = conn.cursor()

    # Retrieve all the song data from the database
    cursor.execute('SELECT * FROM songs')
    songs = cursor.fetchall()

    # Create a list of dictionaries with the song data
    song_list = []
    for song in songs:
        song_dict = {
            'id': song[0],
            'title': song[1],
            'duration': song[2]
        }
        song_list.append(song_dict)

    # Close the database connection
    conn.close()

    # Send the song data as JSON to the frontend
    return jsonify({'songs': song_list})


# Endpoint to remove a song from the playlist
@app.route('/songs/<string:song_id>', methods=['DELETE'])
def remove_song(song_id):
    # Connect to the database
    conn = sqlite3.connect('playlist.db')

    # Get a cursor object
    cur = conn.cursor()

    # Execute a DELETE query to remove the song with the specified id from the database
    cur.execute("DELETE FROM songs WHERE song_id=?", (song_id,))

    # Commit the changes to the database
    conn.commit()
    message = f"Song with ID {song_id} deleted from the playlist."
    # Close the database connection
    conn.close()

    return jsonify({'message': message})
    # Return a success response

if __name__ == '__main__':
    app.run(debug=True)
