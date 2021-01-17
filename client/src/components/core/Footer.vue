<template>
    <v-footer
        dark
        class="d-flex flex-column pa-0"
    >
        <div class="pa-5 grey darken-4 py-8" style="width: 100%;">
            <v-container>
                <v-row class="ma-0">
                    <v-col cols="12" :md="4">
                        <div class="text-uppercase font-weight-bold body-1">
                            about us
                        </div>
                        <v-divider class="my-5"></v-divider>

                        <h1>LOGO</h1>
                        <p class="body-2 my-3 grey--text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus autem suscipit dolor voluptas sit porro cumque voluptate sunt debitis quibusdam omnis fugit aliquid, explicabo ratione quasi, laudantium eos excepturi sint?</p>
                    
                        <v-btn
                            v-for="link in socialMedia"
                            :key="link.text"
                            :to="link.to"
                            icon
                            :color="link.color"
                        >
                            <v-icon small color="white">mdi-{{link.icon}}</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col cols="12" :md="4">
                        <div class="text-uppercase font-weight-bold body-1">
                            popular posts
                        </div>
                        <v-divider class="my-5"></v-divider>

                        <feed-horizontal
                            v-for="post in popularPosts"
                            :key="post.title"
                            :object="post"
                            class="dark"
                        />
                    </v-col>
                    <v-col cols="12" :md="4">
                        <div class="text-uppercase font-weight-bold body-1">
                            categories
                        </div>
                        <v-divider class="my-5"></v-divider>

                        <v-list dense class="pa-0">
                            <v-list-item
                                link
                                v-for="category in categories"
                                :key="category"
                            >
                                <v-icon small>mdi-chevron-right</v-icon>
                                <span class="caption text-capitalize ml-2">{{category}}</span>
                            </v-list-item>
                        </v-list>
                    </v-col>
                </v-row>
            </v-container>
        </div>

        <container style="width: 100%" class="black text-center body-2 grey--text font-weight-bold py-5">
            Copyright &copy; 2021 - <a href="https://github.com/novvac" target="_blank">Novvac</a>
        </container>
    </v-footer>
</template>

<script>
import FeedHorizontal from '@/components/feed/Horizontal';
import {
    mapState,
} from 'vuex';

export default {
    name: "CoreFooter",
    computed: {
        ...mapState(['socialMedia']),
    },
    data() {
        return {
            popularPosts: [
                {hero: 'https://cdn.pixabay.com/photo/2020/12/10/08/44/mountains-5819652_1280.jpg', title: 'Example hero contain feeed is now avaible!', date: '11 Janurary, 2021', author: 'admin'},
                {hero: 'https://cdn.pixabay.com/photo/2020/12/10/08/44/mountains-5819652_1280.jpg', title: 'Example hero contain feeed is now avaible!', date: '11 Janurary, 2021', author: 'admin'},
                {hero: 'https://cdn.pixabay.com/photo/2020/12/10/08/44/mountains-5819652_1280.jpg', title: 'Example hero contain feeed is now avaible!', date: '11 Janurary, 2021', author: 'admin'},
            ],
            categories: ['travel', 'technology', 'politics', 'food', 'applications', 'other']
        }
    },
    components: {
        FeedHorizontal,
    }
}
</script>

<style>

</style>