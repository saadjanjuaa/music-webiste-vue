<template>

    <article class="d-flex align-items-center">
       <img :src="getImage()" class="m-4">
       <p class="name-text">{{name}}</p>
       <p class="description-text ms-5">{{description}}</p>
    </article>

</template>


<script>
export default {
    props: {
        name: String,
        image: String,
        description: String
    },
    setup(props) {
        
        const getImage = () => {

            let image;

            try {
                image = require(`@/assets/artist-images/${props.image}`);
            } catch {
                image = require(`@/assets/no-image.jpg`);
            }

            return image;
        }

        return {getImage}
    }

}
</script>


<style scoped>

    img {
        width: 10rem;
        border-radius: 2rem;
    }

    .name-text {
        font-size: 1.5rem;
    }

</style>