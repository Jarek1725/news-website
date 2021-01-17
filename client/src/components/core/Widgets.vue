<template>
    <section class="widgets">
        <base-card :padding="false">
            <template v-slot:header>
                <div class="text-center">
                    keep in touch
                </div>
            </template>
            
            <v-row class="ma-0">
                <v-col cols="12" class="px-0">
                    <v-btn
                        v-for="link in socialMedia"
                        :key="link.text"
                        :to="link.to"
                        text
                        tile
                        style="width: 50%"
                        class="py-5 my-1 secondary--text"
                    >
                        <v-icon :color="link.color">mdi-{{link.icon}}</v-icon>
                        <span class="ml-2 body-2">{{link.text}}</span>
                    </v-btn>
                </v-col>
            </v-row>
        </base-card>

        <full-width-ad class="my-10" link="/#ad" img="https://www.identecsolutions.com/wp-content/uploads/2017/04/Placeholder_image.png"/>

        <base-card :padding="false">
            <template v-slot:header>
                <div class="text-center">Popular posts</div>
            </template>

            <feed-horizontal
                v-for="(post, i) in latestPosts"
                :key="i"
                :object="post"
            />
        </base-card>
    </section>
</template>

<script>
import FeedHorizontal from '@/components/feed/Horizontal';
import FullWidthAd from '@/components/FullWidthAd';
import {
    mapState,
} from 'vuex';

export default {
    name: "CoreWidgets",
    components: {
        FeedHorizontal,
        FullWidthAd,
    },
    data() {
        return {
            latestPosts: [
                {hero: "https://cdn.pixabay.com/photo/2020/12/17/14/07/leaves-5839550_1280.jpg", title: "How we can create better world?", date: "11 January, 2021", genre: 'category'},
                {hero: "https://cdn.pixabay.com/photo/2020/12/17/14/07/leaves-5839550_1280.jpg", title: "How we can create better world?", date: "11 January, 2021", genre: 'other'},
                {hero: "https://cdn.pixabay.com/photo/2020/12/17/14/07/leaves-5839550_1280.jpg", title: "How we can create better world?", date: "11 January, 2021", genre: "technology"},
            ]
        }
    },
    computed: {
        ...mapState(['socialMedia']),
    }
}
</script>

<style>
</style>