<template>
    <section>

        <h2 class="mt-5">Artister</h2>

        <section>
            <artist-item v-for="(artist, i) in artists" :key="i"
                :name="artist.name"
                :image="artist.image"
                :description="artist.description"
            ></artist-item>
        </section>

    </section>
</template>


<script>
import artistService from '../../services/artistService.js'
import artistItem from './ArtistItem.vue'

export default {
    setup() {

        const artists = artistService.getAll();

        return {artists}
    },
    components: {
        artistItem
    }
}
</script>