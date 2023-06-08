<template>
    <section>

        <h2 class="mt-5">Alle album</h2>

        <section class="row">
            <album-item v-for="(album, i) in albums" :key="i"
                :title="album.title"
                :artist="album.artist"
                :image="album.image"
                :description="album.description"
                :id="album.id"
                :isPlatinum="album.isPlatinum"
                :userAddedImage="album.userAddedImage"
            ></album-item>
        </section>

    </section>
</template>


<script>
import albumService from '../../services/albumService.js'
import AlbumItem from './AlbumItem.vue'

export default {
    setup() {

        const albums = albumService.getAll();

        return {albums}
    },
    components: {
        AlbumItem
    }
}
</script>
