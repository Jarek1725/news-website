<template>
    <div class="feed-horizontal">
        <v-row
            class="ma-0"
            align="space-between"
        >
            <v-col cols="12" class="pl-0">
                <v-img :src="object.hero"></v-img>

                <a href="#/link" class="body-1 font-weight-bold mt-3 d-block">{{object.title}}</a>
                <div class="grey--text d-flex justify-space-between align-center mt-2 caption">
                    <div>
                        <span class="text-capitalize">{{object.author}}</span>
                        <span class="mx-3">•</span>
                        <span>{{object.date}}</span>
                    </div>
                    <v-chip label x-small color="primary" class="text-uppercase ml-3" v-if="object.genre">
                        {{object.genre}}
                    </v-chip>
                </div>
                <div class="body-2 mt-3">
                    {{truncatedDescription}}
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "FeedVertical",
    props: {
        object: Object,
    },
    computed: {
        truncatedDescription() {
            if(this.object.description.length < 150)
                return this.object.description;
            
            return this.object.description.slice(0,150) + "...";
        }
    }
}
</script>

<style>
.feed-vertical a {
    text-decoration: none;
    color: black !important;
}
.feed-vertical a:hover {
    text-decoration: underline;
}
</style>