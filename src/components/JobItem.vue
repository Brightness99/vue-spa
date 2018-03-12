<template>
  <div class="job-item">
    <b-row>
      <b-col md="12" lg="5" xl="6">
        <b-row>
          <b-col cols="12" sm="12" md="1">
            <job-icon class="icon job-image" ></job-icon>
          </b-col>
          <b-col cols="12" sm="12" md="11" class="content-wrapper">
            <a href="#">{{jobData.title}}</a>
            <h5>{{jobData.description}}</h5>
            <div class="">
              <a v-for="(item, index) in jobData.tags" :key="index">{{item}},</a>
            </div>
          </b-col>
        </b-row>
      </b-col>
      <b-col md="12" lg="7" xl="6" class="responsive-row">
        <b-row class="center-row">
          <b-col cols="3" sm="3" md="4">
            <h3>{{jobData.bids}}</h3>
          </b-col>
          <b-col cols="3" sm="3" md="3">
            <div class="d-flex">
              <watch-icon class="watch-image"></watch-icon>
              <div>
                <h5>Today</h5>
                <div class="text-tiny">{{jobData.time}}</div>
              </div>
            </div>            
          </b-col>
          <b-col cols="3" sm="3" md="3" class="third-col">
            <h3>${{jobData.price}}</h3>
            <b-button class="bid-btn bid-desktop" variant="primary">BID NOW</b-button>
          </b-col>
          <b-col cols="3" sm="3" md="2" class="fourth-col">
            <a class="star-desktop" @click="jobData.isLike=!jobData.isLike">
              <star-yellow-icon v-if="jobData.isLike" class="star-icon"></star-yellow-icon>
              <star-grey-icon v-if="!jobData.isLike" class="star-icon"></star-grey-icon>
            </a>
            <b-button class="bid-btn bid-mobile" variant="primary">BID NOW</b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <div class="marker-container">
      <div class="marker-wrapper" v-for="(item, index) in jobData.markers" :key="index">
        <recruiter-marker v-if="item==='recruiter'"></recruiter-marker>
        <urgent-marker v-if="item==='urgent'"></urgent-marker>
        <featured-marker v-if="item==='featured'"></featured-marker>
      </div>
      <a class="star-mobile" @click="jobData.isLike=!jobData.isLike">
        <star-yellow-icon v-if="jobData.isLike" class="star-icon"></star-yellow-icon>
        <star-grey-icon v-if="!jobData.isLike" class="star-icon"></star-grey-icon>
      </a>
    </div>
  </div>
</template>

<script>
  import JobIcon from '../assets/icon-job.svg'
  import StarYellowIcon from '../assets/icon-star-yellow.svg'
  import StarGreyIcon from '../assets/icon-star-grey.svg'
  import WatchIcon from '../assets/icon-watch.svg'
  import RecruiterMarker from '../assets/img-marker-recruiter.svg'
  import UrgentMarker from '../assets/img-marker-urgent.svg'
  import FeaturedMarker from '../assets/img-marker-featured.svg'

  export default {
    props: ['jobData'],
    components: {
      'job-icon': JobIcon,
      'star-yellow-icon': StarYellowIcon,
      'star-grey-icon': StarGreyIcon,
      'watch-icon': WatchIcon,
      'recruiter-marker': RecruiterMarker,
      'urgent-marker': UrgentMarker,
      'featured-marker': FeaturedMarker
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

  .job-item {
    position: relative;
    padding: 4.5rem 2.5rem 1.5rem;
    border-top: solid 1px $color-light;
  
    &:hover {
      background-color: $color-light-blue;
      border-top: none;
      @media (max-width: 991px) {
        .star-desktop {
          display: none;
        }
        .bid-desktop {
          visibility: hidden;
        }
        .bid-mobile {
          visibility: visible;
        }
        .star-mobile {
          display: block;
        }
        .star-mobile {
          position: absolute;
          right: 2rem;
          top: 2rem;
        }
      }
      @media (min-width: 992px) {
        .bid-desktop {
          visibility: visible;
        }
      }
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
      > a {
        font-size: $font-size-medium !important;
        margin-bottom: 0;
        font-weight: 400;
        color: $color-blue;
        margin-bottom: 1.4rem;
      }
      h5 {
        margin-bottom: 1rem;
      }
      a {
        margin-right: 0.5rem;
        color: $color-blue;
        font-size: $font-size-xsmall;
        font-family: "LatoRegular";
        cursor: pointer;
      }
    }
    .center-row {
      height: 100%;
      padding: 3rem 0;
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
    .star-icon {
      width: 2.3rem;
    }
    .bid-btn {
      padding: 0.5rem 1.4rem;
      margin-top: 0.2rem;
      color: white;
      background-color: $color-blue;
      border-color: $color-blue;
      visibility: hidden;
    }
   .star-desktop {
      display: block;
    }
    .star-mobile {
      display: none;
    }
    .bid-desktop, .bid-mobile {
      visibility: hidden;
    }
    .bid-desktop {
      margin: 0.2rem auto 0;
    }
    @media (max-width: 991px) {
      padding: 4.5rem 2.5rem 0;
     .star-desktop {
        display: none;
      }
      .bid-desktop, .bid-mobile {
        visibility: hidden;
      }
      .star-mobile {
        display: block;
      }
      .star-mobile {
        position: absolute;
        right: 2rem;
        top: 2rem;
      }
    }
    .marker-container {
      .marker-wrapper {
        img {
          height: 5rem;
        }
        svg {
          height: 2.4rem;
          text {
            font-family: "LatoRegular" !important;
          }
        }
        &:nth-child(1) {
          position: absolute;
          left: -0.8rem;
          top: 1rem;
          z-index: 999
        }
        &:nth-child(2) {
          position: absolute;
          left: 10rem;
          top: 1rem;
          z-index: 998;
        }
        &:nth-child(3) {
          position: absolute;
          left: 21rem;
          top: 1rem;
          z-index: 997;
        }
      }
    }
  }


</style>

