<template>
    <v-row class="ma-0" align="center">
        <v-col cols="12" class="pl-md-0" :md="8">
            <feed-contain size="524" :object="items[0]"/>
        </v-col>

        <v-col cols="12" :md="4" class="pr-md-0 pl-md-0">
            <feed-contain to="#link2" size="256" :object="items[1]"/>
            <feed-contain to="#link3" class="mt-3" size="256" :object="items[2]"/>
        </v-col>
    </v-row>
</template>

<script>
import FeedContain from '@/components/feed/Contain';

export default {
    name: 'HomeHero',
    components: {
        FeedContain,
    },
    data() {
        return {
            items: [
                {to: '#linkk', hero: 'https://cdn.pixabay.com/photo/2020/12/10/08/44/mountains-5819652_1280.jpg', title: 'Example hero contain feeed is now avaible!', genre: 'travel', date: '11 Janurary, 2021', author: 'admin'},
                {to: '#linkk', hero: 'https://cdn.pixabay.com/photo/2020/12/17/14/07/leaves-5839550_1280.jpg', title: 'This is example hero contain feed!', genre: 'technology', date: '10 Janurary, 2021', author: 'moderator'},
                {to: '#linkk', hero: 'https://cdn.pixabay.com/photo/2020/10/03/08/53/lighthouse-5622924_1280.jpg', title: 'Lorem ipsum doler sit amet', genre: 'other', date: '10 Janurary, 2021', author: 'admin'},
            ]
        }
    }
}
</script>

<style>

</style>