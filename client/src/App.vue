<template>
  <v-app dark>
    <core-app-bar/>

    <core-drawer/>

    <core-view/>

    <core-footer/>
  </v-app>
</template>

<script>
import CoreAppBar from '@/components/core/AppBar';
import CoreDrawer from '@/components/core/Drawer';
import CoreView from '@/components/core/View';
import CoreFooter from '@/components/core/Footer';

export default {
  name: 'App',
  components: {
    CoreAppBar,
    CoreDrawer,
    CoreView,
    CoreFooter,
  }
};
</script>
