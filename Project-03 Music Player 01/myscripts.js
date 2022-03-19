        const music = document.querySelector("audio");
        const img = document.querySelector("img")
        const play = document.getElementById("play");
        const prev = document.getElementById("prev");
        const next = document.getElementById("next");
        const name = document.getElementById("name");
        const singer = document.getElementById("singer");

        const songs = [
        {
            name : "Music-01",
            singer : "Artist-01",
            img : "img01",
            music : "Music01",
        },
        {
            name : "Music-02",
            singer : "Artist-02",
            img : "img02",
            music : "Music02",
        },
        {
            name : "Music-03",
            singer : "Artist-03",
            img : "img03",
            music : "Music03",
        },
        {
            name : "Music-04",
            singer : "Artist-04",
            img : "img04",
            music : "Music04",
        },
        {
            name : "Music-05",
            singer : "Artist-05",
            img : "img05",
            music : "Music05",
        },
        {
            name : "Music-06",
            singer : "Artist-06",
            img : "img06",
            music : "Music06",
        },
        {
            name : "Music-07",
            singer : "Artist-07",
            img : "img07",
            music : "Music07",
        },
        {
            name : "Music-08",
            singer : "Artist-08",
            img : "img08",
            music : "Music08",
        },
        {
            name : "Music-09",
            singer : "Artist-09",
            img : "img09",
            music : "Music09",
        },
        {
            name : "Music-10",
            singer : "Artist-10",
            img : "img10",
            music : "Music10",
        },
        {
            name : "Music-11",
            singer : "Artist-11",
            img : "img11",
            music : "Music11",
        },
        {
            name : "Music-12",
            singer : "Artist-12",
            img : "img12",
            music : "Music12",
        },
        {
            name : "Music-13",
            singer : "Artist-13",
            img : "img13",
            music : "Music13",
        },
        {
            name : "Music-14",
            singer : "Artist-14",
            img : "img14",
            music : "Music14",
        },
       
        ]

        let Isplaying = false;
        const playMusic = () => {
            Isplaying = true;
            music.play();
            play.classList.replace("fa-play", "fa-pause");
            img.classList.add("anime");
        };

        const pauseMusic = () => {
            Isplaying = false;
            music.pause();
            play.classList.replace("fa-pause", "fa-play");
            img.classList.remove("anime");
        };


        play.addEventListener("click", () => {
            // if (Isplaying == false) {
            //     playMusic();
            // } else {
            //     pauseMusic();
            // }

            Isplaying ? pauseMusic() : playMusic();
        });

        const songsdata = (songs) => {
            name.textContent = songs.name;
            singer.textContent = songs.singer;
            img.src = songs.img + ".jpg";
            music.src = songs.music + ".mp3";
        }

        songnumber = 0;
        // songsdata(songs[songnumber]);

        const nextsong = () =>{
            songnumber = (songnumber+1) % songs.length;
            songsdata(songs[songnumber]);
            playMusic();
        };
        const prevsong = () =>{
            songnumber = (songnumber-1+songs.length) % songs.length;
            songsdata(songs[songnumber]);
            playMusic();
        };

        next.addEventListener("click",nextsong);
        prev.addEventListener("click",prevsong); 