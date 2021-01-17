<template>
    <v-row class="ma-0">
        <v-col
            v-for="(col, count) in layout"
            :key="col"
            cols="12"
            :md="12 / layout.length"
            :class="[colPadding(count, layout.length)]"
        >
            <div
                v-for="(type, x) in col"
                :key="type"
            >
                <feed-vertical v-if="type===0" :object="items[count][x]"/>
                <feed-horizontal v-else-if="type===1" :object="items[count][x]"/>
            </div>
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
        layout: Array,
        items: Array
    },
    methods: {
        colPadding(count, max) {
            let customClass = [];
            if(count === 0)
                customClass.push('pl-md-0');
            if(count === max-1)
                customClass.push('pr-md-0');

            return customClass;
        }
    }
}
</script>

<style>

</style>