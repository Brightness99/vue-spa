<template>
  <div class="d-flex flex-row filter-bar">
    <div class="d-flex">
      <div class="category d-flex">
        <filter-icon class="filter-icon"></filter-icon>
        <h6 class="">Filter by:</h6>
      </div>
      <div class="category"><drop-down :data="filterList.experience"></drop-down></div>
      <div class="category"><drop-down :data="filterList.location"></drop-down></div>
      <div class="category"><drop-down :data="filterList.type"></drop-down></div>
      <div class="category"><drop-down :data="filterList.price"></drop-down></div>
      <div class="category"><drop-down :data="filterList.language" inputElement="Search for a language" ></drop-down></div>
    </div>
    <div class="ml-auto d-flex">
      <div class="category d-flex">
        <sort-icon class="sort-icon"></sort-icon>
        <h6 class="">Sort By</h6>
      </div>
      <div class="category"><drop-down :data="filterList.sortBy" isSort="true" align="right"></drop-down></div>
    </div>
  </div>
</template>

<script>
  import DropDown from '../components/DropDown'
  import FilterIcon from '../assets/icon-filter.svg'
  import SortIcon from '../assets/icon-sort.svg'

  export default {
    props: [
      'filterList'
    ],
    components: {
      'drop-down': DropDown,
      'filter-icon': FilterIcon,
      'sort-icon': SortIcon
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
    background: #f4f4f4;
    border: solid 1px $color-light;
    border-radius: 0.6rem;
    -webkit-box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.06);
    -moz-box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.06);
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.06);

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
          svg {
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
      svg {
        object-fit: contain;
        margin-left: 2rem;
        margin-right: 1rem;
        margin-top: 2.2rem;
      }
      .filter-icon {
        width: 1.5rem;
        height: 1.5rem;
      }
      .sort-icon {
        width: 1.6rem;
        height: 1.6rem;
      }
      h6 {
        margin-top: 2.4rem;
        margin-right: 2rem;
        color: $color-dark;
        font-family: "LatoRegular" !important;
      }
    }
  }
</style>
