<template>
  <div class="d-flex flex-row filter-bar">
    <div class="d-flex">
      <div class="category d-flex">
        <img src="../assets/icon-filter.png" /><h6 class="">Filter by:</h6></div>
      <div class="category"><drop-down :data="filterList.experience"></drop-down></div>
      <div class="category"><drop-down :data="filterList.location"></drop-down></div>
      <div class="category"><drop-down :data="filterList.type"></drop-down></div>
      <div class="category"><drop-down :data="filterList.price"></drop-down></div>
      <div class="category"><drop-down :data="filterList.language"></drop-down></div>
    </div>
    <div class="ml-auto d-flex">
      <div class="category d-flex"><img src="../assets/icon-sort.png" /><h6 class="">Sort by</h6></div>
      <div class="category"><drop-down :data="filterList.sortBy"></drop-down></div>
    </div>
  </div>
</template>

<script>
  import DropDown from '../components/DropDown'

  export default {
    props: [
      'filterList'
    ],
    components: {
      'drop-down': DropDown
    },
    data: () => ({
    }),
    computed: {
    }
  }
</script>

<style lang="scss" scoped>
  @import '../styles/variables.scss';
  @import '../styles/global.scss';

  .filter-bar {
    border: solid 1px $color-light;
    border-radius: 0.6rem;
    -webkit-box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);

    @media (max-width: 991px) {
      padding: 2rem 0;
      > .d-flex {
        display: block !important;
        width: 50%;
        margin: 0;
        .category {
          h6 {
            margin-top: 0;
          }
        }
      }
    }

    .ml-auto .category:last-child {
      border-right: none;
    }
    .category {
      border-right: solid 1px $color-light;
      img {
        object-fit: contain;
        margin-left: 2rem;
        margin-right: 1rem;
      }
      h6 {
        margin-top: 2.4rem;
        margin-right: 2rem;
        color: $color-dark;
      }
    }
  }
</style>
