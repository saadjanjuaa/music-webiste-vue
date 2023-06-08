<template>

    <article class="col col-sm-12 col-md-6 col-lg-4 col-xl-3">
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

</template>


<script>
export default {
    props: {
        title: String,
        artist: String,
        image: String,
        description: String,
        id: Number,
        isPlatinum: Boolean,
        userAddedImage: Boolean
    },
    setup(props) {
        
        const getImage = () => {

            let image;

            try {
                image = require(`@/assets/album-images/${props.image}`);
            } catch {
                image = require(`@/assets/no-image.jpg`);
            }

            if (props.userAddedImage) {
                image = props.image;
            }

            return image;
        }

        return {getImage}
    }

}
</script>


<style scoped>

    .is-platinum {
        background-color: #dcf9ff;
    }

</style>