<template>
    <nav class="navbar navbar-dark bg-dark ">

        <router-link class="navbar-brand ms-4" to="/">
            <img src="../../assets/logo.png" width="60" height="60" alt="logo bilde. En lilla musikknote">
            Albumiii
        </router-link>

        <ul class="nav ms-auto me-4 ">
            <li class="nav-item"><router-link class="nav-link" to="/">Hjem</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/artists">Artister</router-link></li>
        </ul>

    </nav>
</template>


<style scoped>

    .nav-link {
        color: white;
    }
    
    .nav-link:hover {
        color: gray;
    }

</style>