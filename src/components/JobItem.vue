<template>
  <div v-bind:class="(jobData.bidAvailable) ? 'job-item item-active': 'job-item'">
    <b-row>
      <b-col md="12" lg="6">
        <b-row>
          <b-col cols="12" sm="12" md="1">
            <img src="../assets/icon-job.png" class="job-image" alt="Job Icon" />
          </b-col>
          <b-col cols="12" sm="12" md="11" class="content-wrapper">
            <h4>{{jobData.title}}</h4>
            <h5>{{jobData.description}}</h5>
            <div class="">
              <a v-for="(item, index) in jobData.tags" :key="index">{{item}},</a>
            </div>
          </b-col>
        </b-row>
      </b-col>
      <b-col md="12" lg="6">
        <b-row class="center-row">
          <b-col cols="3" sm="3" md="4">
            <h3>{{jobData.bids}}</h3>
          </b-col>
          <b-col cols="3" sm="3" md="3">
            <div class="d-flex">
              <img class="watch-image" src="../assets/icon-watch.png" alt="Watch Icon" />
              <div>
                <h5>Today</h5>
                <div class="text-tiny">{{jobData.time}}</div>
              </div>
            </div>            
          </b-col>
          <b-col cols="3" sm="3" md="3">
            <h3>${{jobData.price}}</h3>
            <b-button v-if="jobData.bidAvailable" class="bid-btn" variant="primary">BID NOW</b-button>
          </b-col>
          <b-col cols="3" sm="3" md="2">
            <!-- <img src="../assets/icon-star-grey.png" alt="Star Icon" /> -->
            <img :src="(jobData.isLike) ? require('../assets/icon-star-yellow.png') : require('../assets/icon-star-grey.png')" alt="Star Icon" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <div class="marker-container">
      <div class="marker-wrapper" v-for="(item, index) in jobData.markers" :key="index">
        <img :src="require(`../assets/img-marker-${item}.png`)">
      </div>
      <!-- <div class="marker-wrapper">
        <img src="../assets/img-marker-blue.png">
      </div>
      <div class="marker-wrapper">
        <img src="../assets/img-marker-purple.png">
      </div> -->
    </div>
  </div>
</template>

<script>

export default {
  props: ['jobData'],
  data: () => ({
  }),
  computed: {
  }
}
</script>

<style lang="scss" scoped>
  @import '../styles/variables.scss';
  @import '../styles/global.scss';

  .job-item {
    position: relative;
    padding: 4.5rem 2.5rem 1.5rem;
    border-top: solid 1px $color-light;
    
    &.item-active {
      background-color: $color-light-blue;
      border-top: none;
    }
    .job-image {
      height: 100%;
      width: 28px;
      object-fit: contain;
    }
    .content-wrapper {
      padding-left: 2.8rem;
      @media (max-width: 991px) {
        padding-left: 1.5rem;
        margin-top: 1rem;
      }
      h4 {
        color: $color-blue;
        margin-bottom: 1rem;
      }
      h5 {
        margin-bottom: 1rem;
      }
      a {
        margin-right: 0.5rem;
        color: $color-blue;
        font-size: $font-size-xsmall;
        cursor: pointer;
      }
    }
    .center-row {
      height: 100%;
      padding: 4rem 0;
      text-align: center;
      @media (max-width: 991px) {
        padding: 1rem 0 0;
      }
    }
    .watch-image {
      height: 2rem;
      width: 2rem;
      margin-top: 0.7rem;
      margin-right: 0.5rem;
    }
    .bid-btn {
      padding: 0.5rem 1.4rem;
      margin-top: 0.2rem;
      color: white;
      background-color: $color-blue;
      border-color: $color-blue;
    }
    .marker-container {
      .marker-wrapper {
        img {
          height: 5rem;
        }
        &:nth-child(1) {
          position: absolute;
          left: -2.4rem;
          top: 0rem;
          z-index: 999
        }
        &:nth-child(2) {
          position: absolute;
          left: 9rem;
          top: 0rem;
          z-index: 998;
        }
        &:nth-child(3) {
          position: absolute;
          left: 20rem;
          top: 0rem;
          z-index: 997;
        }
      }
    }
  }


</style>

