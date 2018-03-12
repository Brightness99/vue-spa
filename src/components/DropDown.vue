<template>
  <b-dropdown id="ddown1" v-bind:right="align==='right'" :class="'m-md-2' + (isSort ? ' sort-dorpdown' : '')" no-caret>
    <template slot="button-content">
      <button id="ddown1__BV_toggle_" aria-haspopup="true" aria-expanded="false" type="button" class="btn dropdown-toggle">{{data.title}}</button>
      <down-icon class="down-icon"></down-icon>
      <up-icon class="up-icon"></up-icon>
    </template>
    <input v-if="inputElement && inputElement!==''" class="dropdown-input" type="text" :placeholder="inputElement" />
    <b-dropdown-item v-for="(item, index) in dataList" :key="index" @click="onSelected(item)">
      <b-form-checkbox v-model="item.status" value="checked" unchecked-value="unchecked" >
        {{item.name}}
      </b-form-checkbox>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import DownIcon from '../assets/icon-down.svg'
import UpIcon from '../assets/icon-up.svg'

export default {
  props: [
    'data', 'isSort', 'inputElement', 'align'
  ],
  components: {
    'down-icon': DownIcon,
    'up-icon': UpIcon
  },
  mounted () {
    this.initDataList()
  },
  methods: {
    onSelected (item, index) {
      for (let i = 0; i < this.dataList.length; i++) {
        if (i !== index) {
          this.dataList[i].status = 'undefined'
        }
      }
      item.status = (item.status === 'checked') ? 'unchecked' : 'checked'
      // if (item.status === 'checked') {
      //   item.status = 'unchecked'
      //   this.prevIndex = -1
      // } else {
      //   item.status = 'checked'
      //   this.prevIndex = index
      // }
      // item.status = (item.status === 'checked') ? 'unchecked' : 'checked'
      // if (this.prevIndex > 0 && this.prevIndex !== index) {
      //   this.dataList[this.prevIndex].status = 'unchecked'
      //   this.prevIndex = index
      // }
    },
    initDataList () {
      for (let item of this.data.list) {
        const newItem = {name: item, status: 'unchecked'}
        this.dataList.push(newItem)
      }
    }
  },
  data: () => ({
    dataList: [],
    prevIndex: -1
  }),
  computed: {
  }
}
</script>

<style lang="scss" scoped>
  .category .dropdown {
    &.show {
      .down-icon {
        display: none;
      }
      .up-icon {
        display: block;
      }
    }
    .down-icon {
      position: absolute;
      display: block;
    }
    .up-icon {
      position: absolute;
      display: none;
    }
  }
  .sort-dorpdown {
    svg {
      display: none !important; 
    }
    .dropdown-toggle:after {
      visibility: visible !important;
    }
  }
</style>
<style lang="scss" >
  @import '../styles/variables.scss';
  @import '../styles/global.scss';

  .category .dropdown {
    margin: 0 !important;
    position: relative;
    width: 100%;

    svg {
      width: 9px;
      height: 5px;
      top: 3rem;
      right: 2rem;
    }
    .down-icon {
      position: absolute;
    }
    .up-icon {
      position: absolute;
    }
    .dropdown-input {
      padding: 1rem 1.6rem;
      margin: 1.3rem 1rem;
      width: calc(100% - 2rem);
      border-radius: 0.4rem;
      border: solid 1px $color-silver;
      font-size: $font-size-small;
      font-family: "LatoRegular";
    }
    .btn.btn-secondary {
      padding: 0;
      border: none;
      background: transparent;
    }
    .btn-secondary,
    .btn-secondary:not(:disabled):not(.disabled):active  {
      background: transparent;
      color: $color-dark;
    }
    .dropdown-toggle {
      width: 100%;
      text-align: left;
      padding: 2rem 2rem;
      background: transparent;
      font-size: $font-size-small;
      font-family: "LatoRegular";
      color: $color-dark;
      border: none;
      &:focus {
        box-shadow: none;
      }
      &:after {
        margin-left: 0.8em;
        vertical-align: 0.1em;
        visibility: hidden;
      }
    }
    .dropdown-menu {
      min-width: 20rem;
      .dropdown-item {
        padding: 0.8rem 1.8rem;
        font-size: $font-size-small;
        font-family: "LatoRegular";
        color: $color-base;
        &:focus {
          outline: none;
        }
        .custom-checkbox .custom-control-input:checked ~ .custom-control-label::before,
        .custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
          background-image: none;;
          background-color: $color-dark-light;
        }
        .custom-control-label {
          margin-top: 0;
          margin-left: 0.8rem;
          &:before, &:after {
            top: 0.6rem;
            border: solid 1px $color-light;
            background: white;
          }
        }
      }
    }
  }
</style>
