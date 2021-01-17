<template>
    <base-card 
        class="ma-0 pa-0" 
        :height="size" 
        :padding="false"
        :to="object.to ? object.to : undefined"
        v-bind="$attrs"
        v-on="$listeners"
    >
        <v-row class="ma-0 pa-4 white--text" align="end" :style="style">
            <v-col cols="12">
                <v-row class="ma-0">
                    <v-chip
                        label x-small
                        class="text-uppercase"
                        color="primary"
                    >
                        {{object.genre}}
                    </v-chip>
                </v-row>
                <div :class="['mt-3', 'mb-1', 'text-truncate', getTitleSize]">{{object.title}}</div>
                <div class="caption">
                    <span class="text-capitalize">{{object.author}}</span>
                    <span class="mx-4">•</span>
                    <span>{{object.date}}</span>
                </div>
            </v-col>
        </v-row>
    </base-card>
</template>

<script>
export default {
    name: "FeedContain",
    props: {
        size: Number,
        object: Object
    },
    computed: {
        style() {
            return {
                'height': '100%',
                'overflow': 'hidden',
                'background': `url(${this.object.hero})`,
                'background-size': 'cover',
            }
        },
        getTitleSize() {
            if(this.size > 300)
                return 'text-h4';
            else
                return 'text-h6';
        }
    }
}
</script>

<style>

</style>