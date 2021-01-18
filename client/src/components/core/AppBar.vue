<!-- src/components/core/AppBar -->
<template>
    <div>
        <section class="grey darken-4 white--text">
            <v-container class="py-0">
                <v-row class="ma-0" align="center">
                    <v-btn
                        tile
                        class="elevation-0 body-2 font-weight-bold mr-3"
                        color="primary"
                    >
                        Top news
                    </v-btn>

                    <div>
                        <v-btn icon x-small dark>
                            <v-icon small>mdi-chevron-left</v-icon>
                        </v-btn>
                        <v-btn icon x-small dark>
                            <v-icon small>mdi-chevron-right</v-icon>
                        </v-btn>

                        <span class="caption ml-1">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </span>
                    </div>

                    <v-spacer></v-spacer>

                    <v-btn
                        small icon
                        dark
                        v-for="link in socialMedia"
                        :key="link.icon"
                        :to="link.to"
                        class="ml-1"
                    >
                        <v-icon small>mdi-{{link.icon}}</v-icon>
                    </v-btn>
                </v-row>
            </v-container>
        </section>

        <header class="my-10">
            <v-container class="py-0">
                <v-row class="ma-0" justify="space-between" align="center">
                    <h1>Logo</h1>

                    <img class="d-block" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAABKCAMAAABQOdpXAAAAeFBMVEXf39/j4+P8/PwAAADd3d3k5OTZ2dnn5+e+vr6NjY3Q0NChoaHMzMzDw8MeHh4YGBiWlpaenp5NTU2srKxJSUlhYWG0tLR7e3uCgoJqamolJSVZWVmHh4c5OTlVVVUtLS0LCwtycnJDQ0NpaWkhISE2NjYREREwMDA5Yw48AAAEa0lEQVR4nO3dWXObShCGYdrNOsOOEBJoQUvk//8P04P2xD5X6ZNU8T03MhaUbdVbzYBUZe8DQIH3QQB/nvfhewB/HsICFQgLVCAsUIGwQAXCAhUIC1QgLFCBsEAFwgIVCAtUICxQgbBABcICFQgLVCAsUIGwQAXCAhUIC1QgLFCBsEAFwgIVCAtUICxQgbBABcICFQgLVMw7LAru6LFNjydli+ibw55PfLvXvM07rGVyt5Q2AtOUSdn4t8iyKkms+b0Z8mU3mwXXDdMkSZWirF/NOiy/47uVdNIMe/lqvw6nJ6uFbOT18teDKD30zMWxidxG1srGpbbB//27/+tmHZa37FaTcSwDL9xx3XVDwTuphJZcdI2t+Ry+H0KZ7FbZgfcy5Cg9cm1lL84ws97NOyw/dLyKF3LK821lwtAkBTfkRUfe+ERxzZIc3RZR7sFf8TElCgduQ4863mVE2cADwno377Am5A+8cl2EbnVFZuHOixH3jRtcGz5EpqmmgWQqWXKlW7ZuPbbkH0sKmSt3TFX0GFnvEJYXNH3+svqOBj64sC5WFlHhQSaWaXlwT3Rcp5TdTnsBFzZqeBtPMf5wgw1eICwXz+mlirDmjYR14jqLAjsWct5b9lxGktSlkiUWF1NY0Vm+t+HdlGRUT6t/eEJY1Fz45aYCNT1LLCRj6tK2vHD3ISiRpbq/4M6XsEaehhSNEtaJD9ORUcvr6K/9Bf8khBV2fHhukTlxO8Vi95xzvjHua3/Hh814dNPJDG5KkdmwhFVzN/WEsH4z+7Aoy8f4ZeFdcu82o3K778p1fjm52w0U5/l0sShkog1l0vaX0cpyDGF9Y/ZhBR2vn7eqIitLJ8+VNJ7L0Hf3HpJp8SQDariuosKqZuZtJZeN0eE27K4Lfngx97DI8Ll5DKygGcfEZRatufVlpSXnyb0bRXIu5MK77uenjW0yyzsTJTxMy7No4Rb88GLuYcnAap8Dyxa88m+lHFxQUcksj4Fc/i14fdvLvTtttjLK5BJxPy3u4/7S4D7Wm5mHRem+sPckfLsfu3D6vwpybmun26Ub3kYSjoy1prjvKTtkLdduVvWceNe9zF/7G/5Ncw9rw/VjYNlPPsSp4weyhEpMRHbLZUByJbgO/fX1ppUfpnG1u42qhD+tHCh7YWC9m3dYlB0ft8zlyo/5WC/EKaXwxMWubXtuDUk+54woZd7Iq2VWi23BdTMdZE7ct4NcJ4b/8VNmad5heWXxeX8BqOI8zwtxOUpGpqzPl3xRGo+W26m+wHK/lJNne9me7P3MZ5JtUSySLz62NXMzD8vEzzePTXyXuRfFT7M4S91CK8ziaSD5sXv00zg13v0okhNjnM77RfzSzMPyXj9V/PJP0R6bbztdH+n9k8hE+GTyF+YeFihBWKACYYEKhAUqEBaoQFigAmGBCoQFKhAWqEBYoAJhgQqEBSoQFqhAWKACYYEKhAUqEBaoQFigAmGBCoQFKhAWqEBYoAJhgQqEBSoQFmj4CWcPOE6Q+/4hAAAAAElFTkSuQmCC" width="728" height="90"/>
                </v-row>
            </v-container>
        </header>

        <v-divider></v-divider>
        <v-app-bar flat class="transparent">
            <v-container>
                <v-row align="center">
                    <v-btn
                        tile text 
                        small 
                        class="body-2 hidden-sm-and-down"
                        v-for="link in links"
                        :key="link.text"
                        :to="link.to"
                    >
                        {{link.text}}
                    </v-btn>

                    <v-app-bar-nav-icon
                        class="hidden-md-and-up"
                        @click="toggleDrawer()"
                    />

                    <v-spacer></v-spacer>

                    <v-menu tile :close-on-content-click="false" offset-y left nudge-bottom="6">
                        <template v-slot:activator="{on}">
                            <v-btn icon v-on="on">
                                <v-icon>mdi-magnify</v-icon>
                            </v-btn>
                        </template>
                        <base-card>
                            <v-text-field
                                dense
                                autofocus
                                tile
                                outlined
                                hide-details
                                label="Search..."
                                clearable
                                v-model="search"
                                @keyup.enter="searchNow()"
                            />
                        </base-card>
                    </v-menu>
                </v-row>
            </v-container>
        </v-app-bar>
        <v-divider></v-divider>
    </div>
</template>

<script>
import {
    mapState,
    mapGetters,
    mapMutations
} from 'vuex';

export default {
    name: "CoreAppBar",
    data() {
        return {
            search: "",
        }
    },
    computed: {
        ...mapGetters(['links']),
        ...mapState(['socialMedia']),
    },
    methods: {
        ...mapMutations(['toggleDrawer']),
        searchNow() {
            console.log(this.search);
        }
    }
}
</script>

<style>

</style>