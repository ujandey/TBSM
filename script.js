document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const startBtn = document.getElementById('startBtn');
    const introContainer = document.querySelector('.intro-container');
    const playerWrapper = document.getElementById('playerWrapper');
    const logo = document.getElementById('logo');
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const volumeIcon = document.getElementById('volumeIcon');
    const progressBar = document.getElementById('progressBar');
    const progress = document.getElementById('progress');
    const currentTimeEl = document.getElementById('currentTime');
    const totalTimeEl = document.getElementById('totalTime');
    const trackTitle = document.getElementById('trackTitle');
    const albumName = document.getElementById('albumName');
    const albumArt = document.getElementById('albumArt');
    const playlistEl = document.getElementById('playlist');
    const albumListEl = document.getElementById('albumList');
    const currentAlbumTitle = document.getElementById('currentAlbumTitle');
    const listenerCountEl = document.getElementById('listenerCount');
    const socialListenerCountEl = document.getElementById('socialListenerCount');

    // State
    let isPlaying = false;
    let currentTrackIndex = 0;
    let currentAlbum = 'All'; // Default to show all songs
    let filteredPlaylist = [];

    // Playlist
    const playlist = [
        { title: "Nanchaku", artist: "Seedhe Maut ft. MC Stan", album: "N", url: "audio/nanchaku.mp3", art: "images/n.png" },
        { title: "Hola Amigo", artist: "Kr$na ft. Seedhe Maut & Umair", album: "Single", url: "audio/hola-amigo.mp3", art: "images/hola-amigo-art.png" },
        { title: "Kodak", artist: "King ft. Seedhe Maut", album: "Monopoly Moves", url: "audio/kodak.mp3", art: "images/kodak-art.png" },
        { title: "Maina", artist: "Seedhe Maut", album: "Nayaab", url: "audio/maina.mp3", art: "images/maina-art.png" },
        { title: "Tour Shit", artist: "Seedhe Maut", album: "Single", url: "audio/tour_shit.mp3", art: "images/tour_shit-art.png" },
        { title: "TT", artist: "Seedhe Maut", album: "Single", url: "audio/tt.mp3", art: "images/tt-art.png" },
        { title: "Shutdown", artist: "Seedhe Maut", album: "Single", url: "audio/shutdown.mp3", art: "images/shutdown-art.png" },
        { title: "Kaanch Ke Ghar", artist: "Seedhe Maut", album: "Single", url: "audio/kaanch_ke_ghar.mp3", art: "images/kaanch_ke_ghar-art.png" },
        { title: "Bure Din", artist: "Seedhe Maut ft. Mick Jenkins", album: "Single", url: "audio/bure_din.mp3", art: "images/bure_din-art.png" },
        { title: "Nalla Freestyle", artist: "Seedhe Maut & DJ SA", album: "Single", url: "audio/nfs.mp3", art: "images/nfs-art.png" },
        { title: "Bajenge", artist: "Seedhe Maut ft. Baadshah", album: "Single", url: "audio/bajenge.mp3", art: "images/bajenge-art.png" },
        { title: "Akatsuki", artist: "Seedhe Maut ft. Raga", album: "Lunch Break", url: "audio/akatsuki.mp3", art: "images/lunch-break.png" },
        { title: "Asal G", artist: "Seedhe Maut ft. Faris Shafi & Talal Qureshi", album: "Lunch Break", url: "audio/asal-g.mp3", art: "images/lunch-break.png" },
        { title: "Focus Sedated", artist: "Seedhe Maut", album: "Lunch Break", url: "audio/focus-sedated.mp3", art: "images/lunch-break.png" },
        { title: "I don't miss that life", artist: "Seedhe Maut", album: "Lunch Break", url: "audio/idmtl.mp3", art: "images/lunch-break.png" },
        { title: "Joint in the booth", artist: "Seedhe Maut", album: "Lunch Break", url: "audio/jitb.mp3", art: "images/lunch-break.png" },
        { title: "Khatta flow", artist: "Seedhe Maut ft. KR$NA", album: "Lunch Break", url: "audio/khatta-flow.mp3", art: "images/lunch-break.png" },
        { title: "Kavi", artist: "Seedhe Maut", album: "Lunch Break", url: "audio/kavi.mp3", art: "images/lunch-break.png" },
        { title: "Kavi kehna chahte hain...", artist: "Seedhe Maut", album: "Lunch Break", url: "audio/kkch.mp3", art: "images/lunch-break.png" },
        { title: "Lunch break", artist: "Seedhe Maut", album: "Lunch Break", url: "audio/lunchbreak.mp3", art: "images/lunch-break.png" },
        { title: "Naam Kaam Seher", artist: "Seedhe Maut ft.Qaab & Rebel", album: "Lunch Break", url: "audio/namkamseher.mp3", art: "images/lunch-break.png" },
        { title: "Pain", artist: "Seedhe Maut", album: "Lunch Break", url: "audio/pain.mp3", art: "images/lunch-break.png" },
        { title: "Swah!", artist: "Seedhe Maut ft.Baadshah", album: "Lunch Break", url: "audio/swah.mp3", art: "images/lunch-break.png" },
        { title: "W", artist: "Seedhe Maut", album: "Lunch Break", url: "audio/w.mp3", art: "images/lunch-break.png" },
        { title: "Khush Nahi", artist: "Seedhe Maut", album: "Shakti", url: "audio/khushnahi.mp3", art: "images/shakti-art.webp" },
        { title: "Soyi Nahi", artist: "Seedhe Maut", album: "Shakti", url: "audio/soyinahi.mp3", art: "images/shakti-art.webp" },
        { title: "Naksha", artist: "Seedhe Maut", album: "Shakti", url: "audio/naksha.mp3", art: "images/shakti-art.webp" },
        { title: "Raat ki rani", artist: "Seedhe Maut", album: "Shakti", url: "audio/rkr.mp3", art: "images/shakti-art.webp" },
        { title: "101", artist: "Seedhe Maut", album: "Single", url: "audio/101.mp3", art: "images/101.png" },
        { title: "Teen dost", artist: "Seedhe Maut & Sez on the beat", album: "Nayaab", url: "audio/3dost.mp3", art: "images/nayaab.png" },
        { title: "Chidiya udd", artist: "Seedhe Maut & Sez on the beat", album: "Nayaab", url: "audio/chidiya.mp3", art: "images/nayaab.png" },
        { title: "Do guna", artist: "Seedhe Maut", album: "Single", url: "audio/doguna.mp3", art: "images/doguna.png" },
        { title: "11k", artist: "Seedhe Maut", album: "Lunch Break", url: "audio/11k.mp3", art: "images/lunch-break.png" },
        { title: "Gandi Aulaad", artist: "Seedhe Maut & Sez on the beat", album: "Nayaab", url: "audio/ga.mp3", art: "images/nayaab.png" },
        { title: "Roshni", artist: "Sickflip, Ritviz, Seedhe maut", album: "Nayaab", url: "audio/roshni.mp3", art: "images/roshni.png" },
        { title: "Shayaar", artist: "Bharat chauhan & Seedhe maut", album: "Single", url: "audio/shaayar.mp3", art: "images/shayaar.png" },
        { title: "Namastute", artist: "Seedhe Maut", album: "N", url: "audio/namastute.mp3", art: "images/n.png" },

    ];

    // Intro animation and player reveal
    startBtn.addEventListener('click', () => {
        logo.classList.add('moved');
        introContainer.classList.add('hidden');
        playerWrapper.classList.add('active');
        loadAndPlay(0);
    });

    // Get unique albums
    const albums = ['All', ...new Set(playlist.map(track => track.album))];

    // Render album list
    function renderAlbumList() {
        albumListEl.innerHTML = '';
        albums.forEach(album => {
            const li = document.createElement('li');
            li.textContent = album;
            li.className = album === currentAlbum ? 'active' : '';
            li.addEventListener('click', () => {
                currentAlbum = album;
                filterAndRenderPlaylist();
                document.querySelectorAll('.album-list li').forEach(item => {
                    item.className = item.textContent === currentAlbum ? 'active' : '';
                });
            });
            albumListEl.appendChild(li);
        });
    }

    // Filter and render playlist
    function filterAndRenderPlaylist() {
        filteredPlaylist = currentAlbum === 'All' ? playlist : playlist.filter(track => track.album === currentAlbum);
        currentAlbumTitle.textContent = currentAlbum === 'All' ? 'All Tracks' : currentAlbum;
        playlistEl.innerHTML = '';
        filteredPlaylist.forEach((track, index) => {
            const li = document.createElement('li');
            li.className = index === currentTrackIndex && track.album === playlist[currentTrackIndex].album ? 'active' : '';
            li.innerHTML = `
                <div class="song-info">
                    <span class="song-title">${track.title}</span>
                    <span class="song-artist">${track.artist}</span>
                </div>
                <span class="song-duration">--:--</span>
            `;
            li.addEventListener('click', () => loadAndPlay(index));
            playlistEl.appendChild(li);
        });
    }

    // Load track
    function loadTrack(index) {
        currentTrackIndex = (index < 0) ? filteredPlaylist.length - 1 : (index >= filteredPlaylist.length) ? 0 : index;
        const track = filteredPlaylist[currentTrackIndex];
        audioPlayer.src = track.url;
        trackTitle.textContent = 'Loading...';
        albumName.textContent = `${track.artist} - ${track.album}`;
        albumArt.src = track.art;
        document.querySelectorAll('.playlist li').forEach((item, i) => {
            item.className = i === currentTrackIndex ? 'active' : '';
        });
        progress.style.width = '0%';
        currentTimeEl.textContent = '0:00';
    }

    // Play track
    function playTrack() {
        audioPlayer.play().then(() => {
            isPlaying = true;
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            document.querySelector('.music-card').classList.add('is-playing');
        }).catch(err => console.error('Play error:', err));
    }

    // Pause track
    function pauseTrack() {
        audioPlayer.pause();
        isPlaying = false;
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        document.querySelector('.music-card').classList.remove('is-playing');
    }

    // Load and play
    function loadAndPlay(index) {
        loadTrack(index);
        playTrack();
    }

    // Format time
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Simulate listener count
    let fakeListeners = 42;
    function updateListenerCount() {
        fakeListeners += Math.floor(Math.random() * 3) - 1;
        fakeListeners = Math.max(10, Math.min(100, fakeListeners));
        listenerCountEl.textContent = fakeListeners;
        socialListenerCountEl.textContent = fakeListeners;
    }
    setInterval(updateListenerCount, 5000);

    // Event Listeners
    playPauseBtn.addEventListener('click', () => isPlaying ? pauseTrack() : playTrack());
    prevBtn.addEventListener('click', () => loadAndPlay(currentTrackIndex - 1));
    nextBtn.addEventListener('click', () => loadAndPlay(currentTrackIndex + 1));

    volumeSlider.addEventListener('input', () => {
        const volume = volumeSlider.value / 100;
        audioPlayer.volume = volume;
        volumeIcon.className = `fas ${volume > 0.5 ? 'fa-volume-up' : volume > 0 ? 'fa-volume-down' : 'fa-volume-mute'}`;
    });

    progressBar.addEventListener('click', (e) => {
        const width = progressBar.clientWidth;
        const clickX = e.offsetX;
        audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
    });

    audioPlayer.addEventListener('timeupdate', () => {
        const { currentTime, duration } = audioPlayer;
        if (!isNaN(duration)) {
            progress.style.width = `${(currentTime / duration) * 100}%`;
            currentTimeEl.textContent = formatTime(currentTime);
            totalTimeEl.textContent = formatTime(duration);
        }
    });

    audioPlayer.addEventListener('loadedmetadata', () => {
        trackTitle.textContent = filteredPlaylist[currentTrackIndex].title;
        totalTimeEl.textContent = formatTime(audioPlayer.duration);
    });

    audioPlayer.addEventListener('ended', () => loadAndPlay(currentTrackIndex + 1));
    audioPlayer.addEventListener('error', () => {
        console.error('Audio error:', audioPlayer.error.message);
        trackTitle.textContent = 'Error loading track';
    });

    // Initialize
    renderAlbumList();
    filterAndRenderPlaylist();
});
