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
    font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
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
  }

  .tags-input.form-control {
    display: flex;
    padding: 0.6rem;
    .badge {
      display: block;
      font-size: $font-size-medium;
      color: $color-base;
      font-weight: 400;
      padding: 1.3rem 1.6rem;
      border-radius: 4px;
      background: transparent;
      border: solid 1px $color-light;
      .tagsinput-remove {
        width: 1rem;
        height: 1rem;
        margin-left: 0.5rem;
      }
    }
    input {
      font-size: $font-size-medium;
      color: $color-base;
      padding: 1rem 2rem;
    }
  }

  .typeahead {
    position: absolute;
    z-index: 9999;
    left: 1.5rem;
    right: 1.5rem;
    margin-top: 0.8rem;
    border-radius: 0.4rem;
    border: solid 1px $color-silver;

    .badge {
      display: block;
      font-size: $font-size-base;
      color: $color-dark;
      text-align: left;
      border-radius: 0.4;
      padding: 0.5rem 2.5rem;
      margin: 0;
      font-weight: 400;

      :hover {
        background: $color-blue !important;
      }
      &.badge-primary {
        background: $color-blue;
        color: white;
      }
      &.badge-dark {
        background: white;
      }
    }
  }

  .pagination {
    .page-item {
      font-size: $font-size-medium;
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
