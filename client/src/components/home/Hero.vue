<template>
    <v-row class="ma-0" align="center">
        <v-col cols="12" class="pl-md-0" :md="8">
            <feed-contain size="524"/>
        </v-col>

        <v-col cols="12" :md="4" class="pr-md-0 pl-md-0">
            <feed-contain size="256"/>
            <feed-contain class="mt-3" size="256"/>
        </v-col>
    </v-row>
</template>

<script>
import FeedContain from '@/components/feed/Contain';

export default {
    name: 'HomeHero',
    components: {
        FeedContain,
    }
}
</script>

<style>

</style>