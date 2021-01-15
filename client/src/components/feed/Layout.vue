<template>
    <v-row class="ma-0">
        <v-col cols="12" :sm="6" class="pl-sm-0">
            <base-card :padding="false">
                <feed-vertical :object="items[0]"/>
            </base-card>
        </v-col>

        <v-col cols="12" :sm="6" class="px-sm-0">
            <feed-horizontal :object="items[1]"/>
            <feed-horizontal :object="items[1]"/>
            <feed-horizontal :object="items[1]"/>
        </v-col>
    </v-row>
</template>

<script>
import FeedHorizontal from '@/components/feed/Horizontal';
import FeedVertical from '@/components/feed/Vertical';

export default {
    name: "FeedsLayout",
    components: {
        FeedHorizontal,
        FeedVertical,
    },
    props: {
        items: Array,
    }
}
</script>

<style>

</style>