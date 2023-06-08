<template>
    
    <section class="pt-5">

        <h2>Legg til Album</h2>
        

        <div class="row">
            <div class="col col-12 col-md-6 col-lg-4 col-xl-2">
                <label>Tittel</label>
                <input v-model="newAlbumTitle" class="form-control me-2" placeholder="Tittel">
            </div>
            <div class="col col-12 col-md-6 col-lg-4 col-xl-2">
                <label>Artist</label>
                <input v-model="newAlbumArtist" class="form-control me-2" placeholder="Artist">
            </div>
            <div class="col col-12 col-md-6 col-lg-4 col-xl-2">
                <label>Beskrivelse</label>
                <input v-model="newAlbumDescription" class="form-control me-2" placeholder="Beskrivelse">
            </div>
            <div class="col col-12 col-md-6 col-lg-4 col-xl-2">
                <label>Bildeadresse</label>
                <input v-model="newAlbumImage" class="form-control me-2" placeholder="Bildeadresse">
            </div>
            <div class="col col-12 col-md-6 col-lg-4 col-xl-2">
                <label>Platinum ja/nei</label> 
                <input v-model="newAlbumIsPlatinum" class="form-control me-2" placeholder="Platinum ja/nei">
            </div>
        </div>

        <button @click="addNewAlbum" class="btn btn-outline-success mt-3">Legg til</button>

    </section>

</template>


<script>
import { ref } from '@vue/reactivity'
import albumService from '../../services/albumService.js'

export default {
    setup() {
        
        let newAlbumTitle = ref("");
        let newAlbumArtist = ref("");
        let newAlbumDescription = ref("");
        let newAlbumImage = ref("");
        let newAlbumIsPlatinum = ref(""); 
        let newAlbumIsPlatinumBoolean = null;


        const addNewAlbum = () => {

            const newAlbumObj = {
                title: newAlbumTitle.value,
                artist: newAlbumArtist.value,
                image: newAlbumImage.value,
                description: newAlbumDescription.value,
                isPlatinum: newAlbumIsPlatinum.value,
            }


            if (newAlbumObj.isPlatinum.toUpperCase() == "JA") {
                newAlbumIsPlatinumBoolean = true;
            } else if (newAlbumObj.isPlatinum.toUpperCase() == "NEI") {
                newAlbumIsPlatinumBoolean = false;
            } else {
                alert("Du må skrive ja eller nei i platinum feltet")
                return -1
            }


            if (newAlbumObj.title == "" || newAlbumObj.artist == "" || newAlbumObj.description == "" || newAlbumObj.image == "" || newAlbumObj.isPlatinum == "") {
                alert("Du må fylle alle feltene");
            } else {
                albumService.addAlbum(newAlbumObj, newAlbumIsPlatinumBoolean);
                alert("Album lagt til");
            }
           

        }

        return {
            addNewAlbum,
            newAlbumTitle,
            newAlbumArtist,
            newAlbumDescription,
            newAlbumIsPlatinum,
            newAlbumImage
        }
    }
}
</script>
