import { ref } from "vue";

const albumService = ( function(){ 

    const albums = ref([

        {
            title: "Omar Sheriff",
            artist: "Karpe",
            image: "omar-sheriff.webp",
            description: "Omar Sheriff er en EP av den norske duoen Karpe, utgitt 28. januar 2022 på duoens eget plateselskap.",
            id: 1000,
            isPlatinum: false
        },
        {
            title: "Free X",
            artist: "XXXTentacion",
            image: "free-x.jpeg",
            description: "Free X er ett album av den kontroveriselle rapperen XXXTentacion, albumet ble utgitt i 2017.",
            id: 1001,
            isPlatinum: false
        },
        {
            title: "Wow 2",
            artist: "Ant Wan",
            image: "wow-2.jpeg",
            description: "Wow 2 er det nyeste albumet til den svenske rapperen Ant Wan. Albuet ble gitt ut i 2022.",
            id: 1002,
            isPlatinum: false
        },
        {
            title: "The Warm up",
            artist: "J.Cole",
            image: "the-warm-up.jpg",
            description: "The Warm up er J.Cole sin andre mixtape, den var gitt ut 15 juni, 2009.",
            id: 1003,
            isPlatinum: true
        },
        {
            title: "Before The Party",
            artist: "Chris Brown",
            image: "before-the-party.jpg",
            description: "Before the Party er den sjette mixtapen av den Chris Brown. Den ble utgitt 27. november 2015.",
            id: 1004,
            isPlatinum: true
        },
        {
            title: "No Happy Songs",
            artist: "Beamon",
            image: "no-happy-songs.jpeg",
            description: "No Happy Songs er ett album av soundcloud rapperen Beamon. Det ble gitt ut i 2018.",
            id: 1005,
            isPlatinum: false
        },
        {
            title: "Eternal Atake (Deluxe) - LUV Vs. The World 2",
            artist: "Lil Uzi Vert",
            image: "eternal-atake-deluxe.gif",
            description: "Dette Lil Uzi Vert albumet ble gitt ut som deluxe-utgaven av hans andre studioalbum Eternal Atake.",
            id: 1006,
            isPlatinum: true
        },
        {
            title: "Shoot for the Stars Aim for the Moon",
            artist: "Pop Smoke",
            image: "shoot-for-the-stars.gif",
            description: "Shoot for the Stars, Aim for the Moon er det posthume debutalbumet til rapperen Pop Smoke.",
            id: 1007,
            isPlatinum: true
        },


    ]);


    const addAlbum = (newAlbumObj, newAlbumIsPlatinum) => {
        
        let currentAlbumId = 0;

        albums.value.forEach(album => {
            currentAlbumId = album.id;
        });

        albums.value.push(
            {
                title: newAlbumObj.title,
                artist: newAlbumObj.artist,
                image: newAlbumObj.image,
                description: newAlbumObj.description,
                id: currentAlbumId + 1, 
                isPlatinum: newAlbumIsPlatinum,
                userAddedImage: true
            }
        )
        
    }

    const getAll = () => albums.value;

    return {getAll, addAlbum}

} () );

export default albumService;