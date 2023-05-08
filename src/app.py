#!/bin/python3
import sqlite3
from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def start():
    return render_template('index.html')

@app.route('/index.html')
def index():
    return render_template('index.html')

@app.route('/artist.html')
def artist():
    return render_template('artist.html')

@app.route('/playlist.html')
def  playlist_direct():
    return render_template('playlist.html')

@app.route('/search.html')
def  search():
    return render_template('search.html')

@app.route('/artistspotlight.html')
def spotlight():
    return render_template('artistspotlight.html')

@app.route('/about.html')
def about():
    return render_template('about.html')

@app.route('/album_01.html')
def album01():
    return render_template('album_01.html')

@app.route('/album_02.html')
def album02():
    return render_template('album_02.html')

@app.route('/album_03.html')
def album03():
    return render_template('album_03.html')

@app.route('/album_04.html')
def album04():
    return render_template('album_04.html')

@app.route('/album_05.html')
def album05():
    return render_template('album_05.html')

@app.route('/song_01_01.html')
def song0101():
    return render_template('song_01_01.html')

@app.route('/song_01_02.html')
def song0102():
    return render_template('song_01_02.html')

@app.route('/song_01_03.html')
def song0103():
    return render_template('song_01_03.html')

@app.route('/song_01_04.html')
def song0104():
    return render_template('song_01_04.html')

@app.route('/song_01_05.html')
def song0105():
    return render_template('song_01_05.html')

@app.route('/song_02_01.html')
def song0201():
    return render_template('song_02_01.html')

@app.route('/song_02_02.html')
def song0202():
    return render_template('song_02_02.html')

@app.route('/song_02_03.html')
def song0203():
    return render_template('song_02_03.html')

@app.route('/song_02_04.html')
def song0204():
    return render_template('song_02_04.html')

@app.route('/song_02_05.html')
def song0205():
    return render_template('song_02_05.html')

@app.route('/song_03_01.html')
def song0301():
    return render_template('song_03_01.html')

@app.route('/song_03_02.html')
def song0302():
    return render_template('song_03_02.html')

@app.route('/song_03_03.html')
def song0303():
    return render_template('song_03_03.html')

@app.route('/song_03_04.html')
def song0304():
    return render_template('song_03_04.html')

@app.route('/song_03_05.html')
def song0305():
    return render_template('song_03_05.html')

@app.route('/song_04_01.html')
def song0401():
    return render_template('song_04_01.html')

@app.route('/song_04_02.html')
def song0402():
    return render_template('song_04_02.html')

@app.route('/song_04_03.html')
def song0403():
    return render_template('song_04_03.html')

@app.route('/song_04_04.html')
def song0404():
    return render_template('song_04_04.html')

@app.route('/song_04_05.html')
def song0405():
    return render_template('song_04_05.html')

@app.route('/song_05_01.html')
def song0501():
    return render_template('song_05_01.html')

@app.route('/song_05_02.html')
def song0502():
    return render_template('song_05_02.html')

@app.route('/song_05_03.html')
def song0503():
    return render_template('song_05_03.html')

@app.route('/song_05_04.html')
def song0504():
    return render_template('song_05_04.html')

@app.route('/song_05_05.html')
def song0505():
    return render_template('song_05_05.html')

@app.route('/endpoint', methods=['POST'])
def add_song_to_playlist():
    data = request.get_json()
    title = data['title']
    duration = data['duration']
    song_id = data['id']

    conn = sqlite3.connect('playlist.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS songs
                 (song_id TEXT PRIMARY KEY, title TEXT, duration TEXT)''')
    conn.commit()

    c.execute("SELECT * FROM songs WHERE song_id=? OR title=?", (song_id, title))
    result = c.fetchone()
    if result:
        message = f"Song with ID {song_id} already exists in the playlist."
    else:
        c.execute("INSERT INTO songs (song_id, title, duration) VALUES (?, ?, ?)", (song_id, title, duration))
        conn.commit()
        message = f"Song with ID {song_id} added to the playlist."

    conn.close()

    return jsonify({'message': message})

@app.route('/playlist')
def playlist():
    conn = sqlite3.connect('playlist.db')
    cursor = conn.cursor()

    cursor.execute('SELECT * FROM songs')
    songs = cursor.fetchall()

    song_list = []
    for song in songs:
        song_dict = {
            'id': song[0],
            'title': song[1],
            'duration': song[2]
        }
        song_list.append(song_dict)

    conn.close()

    return jsonify({'songs': song_list})


@app.route('/songs/<string:song_id>', methods=['DELETE'])
def remove_song(song_id):
    conn = sqlite3.connect('playlist.db')

    cur = conn.cursor()

    cur.execute("DELETE FROM songs WHERE song_id=?", (song_id,))

    conn.commit()
    message = f"Song with ID {song_id} deleted from the playlist."
    conn.close()

    return jsonify({'message': message})

if __name__ == '__main__':
    app.run(debug=True)
