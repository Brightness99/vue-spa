<template>
<div class="app">
  <div class="header">
  <header-bar></header-bar>
  </div>
  <div class="page">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'

export default {
  components: {
    HeaderBar
  },
  name: 'app'
}
</script>

<style lang="scss">
  @import './styles/variables.scss';
  @import './styles/global.scss';

  @font-face {
    font-family: 'LatoLight';
    src: url('./fonts/Lato-Light.ttf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'LatoBold';
    src: url('./fonts/Lato-Bold.ttf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'LatoRegular';
    src: url('./fonts/Lato-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  }
  

  html {
    font-size: 10px;
    h1, .h1,
    h2, .h2,
    h3, .h3,
    h4, .h4,
    h5, .h5,
    h6, .h6,
    .text-tiny {
      color: $color-base;
      margin-bottom: 0;
      font-weight: 400;
      font-family: "LatoRegular" !important;
    }
    @media (max-width: 767px) {
      font-size: 9px;
    }
    @media (max-width: 991px) {
      font-size: 9px;
    }
    @media (min-width: 992px) {
      font-size: 10px;
    }
  }

  body {
    font-family: "LatoRegular" "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: $color-base;
  }

  .app {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .page {
    width: 100%;
    background: $color-almost-white;
    .container {
      padding: 2rem 0;
      @media (max-width: 575px) {
        padding: 2rem 1.5rem;
      }
    }
  }

  input.form-control {
    padding: 1.5rem 2.5rem;
    font-size: $font-size-medium;
    color: $color-base;
    border-radius: 6px;
    font-family: "LatoRegular";
  }

  input:focus {
    outline: none !important;
    -webkit-box-shadow: 0px 0px 10px 3px rgba(141, 191, 224, 1) !important;
    -moz-box-shadow: 0px 0px 10px 3px rgba(141, 191, 224, 1) !important;
    box-shadow: 0px 0px 10px 3px rgba(141, 191, 224, 1) !important;
    border-color: transparent !important; // rgba(18, 126, 193, 1) !important;
  }
  input.form-control:focus {
    outline: none !important;
    -webkit-box-shadow: 0px 0px 10px 2px rgba(141, 191, 224, 0.9) !important;
    -moz-box-shadow: 0px 0px 10px 2px rgba(141, 191, 224, 0.9) !important;
    box-shadow: 0px 0px 10px 2px rgba(141, 191, 224, 0.9) !important;
    border-color: transparent !important; // rgba(18, 126, 193, 1) !important;
  }

  .pagination {
    .page-item {
      font-size: $font-size-medium;
      font-family: "LatoRegular";
      &.active .page-link {
        background: $color-blue;
        border-color: $color-blue;
      }
      .page-link {
        padding: 0.75rem 1.5rem;
        color: $color-gray;
        a {
          
        }
      }
    }
  }

</style>
