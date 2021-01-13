<!-- src/components/core/AppBar -->
<template>
    <div>
        <section class="grey darken-4 white--text">
            <v-container class="pa-0">
                <v-row class="ma-0" align="center">
                    <v-btn
                        tile
                        class="elevation-0 body-2 font-weight-bold mr-3"
                        color="primary"
                    >
                        Top news
                    </v-btn>

                    <v-btn icon x-small dark>
                        <v-icon small>mdi-chevron-left</v-icon>
                    </v-btn>
                    <v-btn icon x-small dark>
                        <v-icon small>mdi-chevron-right</v-icon>
                    </v-btn>

                    <span class="caption ml-1">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </span>

                    <v-spacer></v-spacer>

                    <v-btn
                        small icon
                        dark
                        v-for="link in social"
                        :key="link.icon"
                        :to="link.to"
                        class="ml-1"
                    >
                        <v-icon small>mdi-{{link.icon}}</v-icon>
                    </v-btn>
                </v-row>
            </v-container>
        </section>
    </div>
</template>

<script>
export default {
    name: "CoreAppBar",
    data() {
        return {
            social: [
                {icon: "facebook", to: "#facebook/example-link"},
                {icon: "twitter", to: "#twitter/example-link"},
                {icon: "youtube", to: "#youtube/example-link"}
            ]
        }
    }
}
</script>

<style>

</style>