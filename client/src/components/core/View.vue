<template>
    <v-main>
        <v-container>
            <router-view></router-view>

            <v-row class="ma-0">
                <v-col cols="12" class="pl-md-0" :md="9">
                    <router-view name="feeds"></router-view>
                </v-col>

                <v-col cols="12" class="pr-md-0 pl-md-0" :md="3">
                    <core-widgets/>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
import CoreWidgets from '@/components/core/Widgets';

export default {
    name: 'CoreView',
    components: {
        CoreWidgets,
    }
}
</script>

<style>

</style>