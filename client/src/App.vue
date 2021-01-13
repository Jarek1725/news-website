<template>
  <v-app>
    <core-app-bar/>

    <core-drawer/>
  </v-app>
</template>

<script>
import CoreAppBar from '@/components/core/AppBar';
import CoreDrawer from '@/components/core/Drawer';

export default {
  name: 'App',
  components: {
    CoreAppBar,
    CoreDrawer,
  }
};
</script>
