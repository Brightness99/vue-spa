<template>
  <b-dropdown id="ddown1" :text="data.title" class="m-md-2">
    <input class="dropdown-input" type="text" placeholder="Search for projects and contents" />
    <b-dropdown-item v-for="(item, index) in data.list" :key="index">
      <b-form-checkbox v-model="status" value="checked" unchecked-value="unchecked">
        {{item}}
      </b-form-checkbox>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>

export default {
  props: [
    'data'
  ],
  data: () => ({
    status: ''
  }),
  computed: {
  }
}
</script>

<style lang="scss" >
  @import '../styles/variables.scss';
  @import '../styles/global.scss';

  .category .dropdown {
    margin: 0 !important;

    .dropdown-input {
      padding: 1rem 1.6rem;
      margin: 1.3rem 1rem;
      width: calc(100% - 2rem);
      border-radius: 0.4rem;
      /* box-shadow: none; */
      /* outline: none; */
      border: solid 1px $color-silver;
      font-size: $font-size-small;
    }
    .dropdown-toggle {
      padding: 2rem 2rem;
      background: white;
      font-size: $font-size-small;
      color: $color-dark;
      border: none;

      &.btn-secondary,
      &.btn-secondary:not(:disabled):not(.disabled):active  {
        background: transparent;
        color: $color-dark;
      }
      &:focus {
        box-shadow: none;
      }

      &:after {
        margin-left: 0.8em;
        vertical-align: 0.1em;
      }
    }
    .dropdown-menu {
      min-width: 20rem;
      .dropdown-item {
        padding: 0.8rem 1.8rem;
        font-size: $font-size-small;
        color: $color-base;
        &:focus {
          outline: none;
        }
        .custom-control-label {
          margin-top: 0;
          margin-left: 0.8rem;
          &:before {
            top: 0.6rem;
          }
          &:after {
            top: 0.6rem;
          }
        }
      }
    }
  }
</style>
