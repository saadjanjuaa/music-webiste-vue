<template>
    <section class="mt-5">

        <h2>Søk</h2>

        <label class="mb-1">Angi index</label>
        <div class="d-flex">
            <input v-model="chosenIndex" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button @click="checkIndex" class="btn btn-outline-success" type="submit">Search</button>
        </div>

        <article class="mt-5" v-bind:class="hidden ? 'hidden-article' : 'show-article'">
            <div class="card" style="width: 18rem;" v-bind:class="isPlatinum ? 'is-platinum' : ''">
                <img :src="getImage()" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">{{title}}</h5>
                    <p class="card-text">{{description}}</p>
                    <ul>
                        <li>Artist: {{artist}}</li>
                        <li>ID: {{id}}</li>
                        <li v-if="isPlatinum">Albumet er Platinum</li>
                        <li v-else>Albumet er ikke Platinum</li>
                    </ul>
                </div>
            </div>
        </article>

    </section>
</template>


<script>
import { ref } from '@vue/reactivity';
import albumService from '../../services/albumService.js'

export default {
    setup() {

        let hidden = ref(true);
        let albumFound = false;
        
        let chosenIndex = ref("");
        let image = ref("");
        let title = ref("");
        let artist = ref("");
        let description = ref("");
        let id = ref("");
        let isPlatinum = ref(true);

        const albums = albumService.getAll();

        const checkIndex = () => {

            albums.forEach(album => {
                if (album.id == chosenIndex.value) {

                    image.value = album.image;
                    title.value = album.title;
                    description.value = album.description;
                    id.value = album.id;
                    artist.value = album.artist;
                    isPlatinum.value = album.isPlatinum;

                    albumFound = true;
        
                }
            })

            console.log(albumFound)
            if (!albumFound) {
                alert("Skriv inn gyldig index")
            } else {
                hidden.value = false;
                albumFound = false;
            }
           
            chosenIndex.value = "";
        }



        const getImage = () => {

            let img;

            try {
                img = require(`@/assets/album-images/${image.value}`);
            } catch {
                img = require(`@/assets/no-image.jpg`);
            }

            return img;
        }
        

        return {
            albums,
            chosenIndex,
            checkIndex,
            image,
            title,
            description,
            id,
            hidden,
            artist,
            isPlatinum,
            getImage
        }
    }
}
</script>


<style scoped>

    .hidden-article {
        display: none;
    }

    .show-article {
        display: block;
    }    

    .is-platinum {
        background-color: #dcf9ff;
    }

    input {
        width: 13rem;
    }

</style>
