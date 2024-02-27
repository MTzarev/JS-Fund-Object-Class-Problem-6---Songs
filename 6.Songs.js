function songs(input) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let newSongs = [];
    let numOfSongs = input.shift();
    let typeOfSong = input.pop();
    for (let i = 0; i < numOfSongs; i++) {
        let [type, name, time] = input[i].split(`_`);
        let song = new Song(type, name, time);
        newSongs.push(song);
    }
    if (typeOfSong === `all`) {
        newSongs.forEach((i) => console.log(i.name));
    } else {
        let filtered = newSongs.filter((i) => i.type === typeOfSong);
        filtered.forEach((i) => console.log((i.name)));
    }
    console.log();
}
// songs([3,'favourite_DownTown_3:14',
//     'favourite_Kiss_4:16',
//     'favourite_Smooth Criminal_4:01',
//     'favourite']);
// songs([4,'favourite_DownTown_3:14',
//     'listenLater_Andalouse_3:24',
//     'favourite_In To The Night_3:58',
//     'favourite_Live It Up_3:48',
//     'listenLater']);
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);