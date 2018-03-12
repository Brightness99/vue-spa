<template>
  <!-- <div class="menu-links">
    
    
  </div> -->
  <b-navbar toggleable="md">
    <b-navbar-brand href="#">
      <menu-icon></menu-icon>
    </b-navbar-brand>
    <!-- <b-nav>
      <b-nav-item active><router-link to="/">Home</router-link></b-nav-item>
      <b-nav-item><router-link to="/cart">Cart ({{ cartCount }})</router-link></b-nav-item>
    </b-nav> -->
  </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'
import MenuIcon from '../assets/icon-menu.svg'

export default {
  components: {
    'menu-icon': MenuIcon
  },
  computed: {
    // mix the getters into the computed object
    ...mapGetters([
      'cartCount'

    ])
  }
}
</script>

<style lang="scss" scoped>
  @import '../styles/variables.scss';
  @import '../styles/global.scss';


  .navbar {
    height: 80px;
    background-color: $color-dark;
    @media (min-width: 992px)  {
      .navbar-brand svg {
        display: none;
      }
    }

  }
  

</style>
