<template>
    <v-navigation-drawer
        app
        dark
        temporary
        stateless
        touchless
        v-model="drawer"
    >
        <v-row class="ma-2 mb-0">
            <v-spacer></v-spacer>

            <v-btn icon @click="toggleDrawer()">
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-row>

        <v-list>
            <v-list-item
            v-for="link in links"
            :key="link.text"
            link
            :to="link.to"
            >
                {{link.text}}
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import {
    mapGetters,
    mapState,
    mapMutations
} from 'vuex';

export default {
    name: "CoreDrawer",
    computed: {
        ...mapGetters(['links']),
        ...mapState(['drawer']),
    },
    methods: {
        ...mapMutations(['toggleDrawer'])
    }
}
</script>

<style>

</style>