<template>
    <section class="feeds">
        <base-card>
            <template v-slot:header>
                latest articles
            </template>
            here will be latest posts
        </base-card>

        <base-card class="mt-6">
            <template v-slot:header>
                technology
            </template>
            here will be posts with <kbd>technology</kbd> category
        </base-card>
    </section>
</template>

<script>
export default {
    name: 'CoreFeeds',
}
</script>

<style>

</style>