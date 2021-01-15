<template>
    <section class="feeds">
        <base-card :padding="false">
            <template v-slot:header>
                latest articles
            </template>
            
            <feeds-layout :items="latestPosts"/>
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
import FeedsLayout from '@/components/feed/Layout';

export default {
    name: 'CoreFeeds',
    components: {
        FeedsLayout,
    },
    data() {
        return {
            latestPosts: [
                {to: '#linkk', hero: 'https://cdn.pixabay.com/photo/2020/12/10/08/44/mountains-5819652_1280.jpg', title: 'Example hero contain feeed is now avaible!', genre: 'travel', date: '11 Janurary, 2021', author: 'admin'},
                {to: '#linkk', hero: 'https://cdn.pixabay.com/photo/2020/12/17/14/07/leaves-5839550_1280.jpg', title: 'This is example hero contain feed!', genre: 'technology', date: '10 Janurary, 2021', author: 'moderator'},
                {to: '#linkk', hero: 'https://cdn.pixabay.com/photo/2020/10/03/08/53/lighthouse-5622924_1280.jpg', title: 'Lorem ipsum doler sit amet', genre: 'other', date: '10 Janurary, 2021', author: 'admin'},
                {to: '#linkk', hero: 'https://cdn.pixabay.com/photo/2020/12/17/14/07/leaves-5839550_1280.jpg', title: 'This is example hero contain feed!', genre: 'technology', date: '10 Janurary, 2021', author: 'moderator'},
            ]
        }
    }
}
</script>

<style>

</style>