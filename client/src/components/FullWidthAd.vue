<template>
    <a href="/#?ad" class="d-block">
        <v-img alt="ad here" class="d-block" width="100%" contain :src="img"/>
    </a>
</template>

<script>
export default {
    name: "FullWidthAd",
    props: {
        img: String,
    }
}
</script>

<style>

</style>