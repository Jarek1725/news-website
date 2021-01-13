<template>
    <v-card
        flat
        tile
        v-bind="$attrs"
        v-on="$listeners"
    >
        <div
            class="py-2 px-3 mb-4 grey darken-4 white--text body-2 font-weight-bold"
            v-if="hasHeaderSlot"
        >
            <slot name="header"/>
        </div>

        <slot/>
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