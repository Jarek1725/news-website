<template>
    <v-card
        flat
        tile
        v-bind="$attrs"
        v-on="$listeners"
    >
        <div
            class="pa-3 grey darken-4 white--text text-uppercase body-2 font-weight-bold"
            v-if="hasHeaderSlot"
        >
            <slot name="header"/>
        </div>

        <div class="pa-5">
            <slot/>
        </div>
    </v-card>
</template>

<script>
export default {
    name: "BaseCard",
    computed: {
        hasHeaderSlot() {
            return !!this.$slots['header'];
        }
    }
}
</script>

<style>

</style>