<template>

  <section>
    <search-item></search-item>
    <add-album-item></add-album-item>
    <album-list></album-list>
  </section>

</template>


<script>
import AddAlbumItem from '../components/albums/AddAlbumItem.vue'
import AlbumList from '../components/albums/AlbumList.vue'
import SearchItem from '../components/albums/SearchItem.vue'


export default {
  components: {
    SearchItem,
    AddAlbumItem,
    AlbumList,
  }
}
</script>