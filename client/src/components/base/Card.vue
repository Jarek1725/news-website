<template>
    <v-card
        flat
        tile
        v-bind="$attrs"
        v-on="$listeners"
        :to="to ? to : undefined"
    >
        <div
            class="pa-3 grey darken-4 white--text text-uppercase body-2 font-weight-bold"
            v-if="hasHeaderSlot"
        >
            <slot name="header"/>
        </div>

        <div
            :class="padding ? 'pa-5' : 'pa-0'"
            style="height: 100%"
        >
            <slot/>
        </div>
    </v-card>
</template>

<script>
export default {
    name: "BaseCard",
    props: {
        padding: {
            type: Boolean,
            default: true,
        },
        to: String,
    },
    computed: {
        hasHeaderSlot() {
            return !!this.$slots['header'];
        }
    }
}
</script>

<style>

</style>