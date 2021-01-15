<template>
    <div class="feed-horizontal">
        <v-row
            class="ma-0"
            align="space-between"
        >
            <v-col cols="4" class="pl-0">
                <v-img :src="object.hero"></v-img>
            </v-col>
            <v-col cols="8" class="pr-0 d-flex flex-column justify-space-between">
                <a href="#/link" class="body-1 font-weight-bold">{{object.title}}</a>
                <div class="grey--text">
                    <span class="caption">{{object.date}}</span>
                    <v-chip label x-small color="primary" class="text-uppercase ml-3" v-if="object.genre">
                        {{object.genre}}
                    </v-chip>
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
    }
}
</script>

<style>
.feed-horizontal a {
    text-decoration: none;
    color: black !important;
}
.feed-horizontal a:hover {
    text-decoration: underline;
}
</style>