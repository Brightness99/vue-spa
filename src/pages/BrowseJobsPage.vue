<template>
  <div class='product-container'>
    <div class="section">
      <h1>Browse Jobs</h1>
    </div>
    <b-row class="section">
      <b-col sm="2"><label for="input-default"><h3>Search</h3></label></b-col>
      <b-col sm="10">
        <div class="search-input">
          <input
            id="input-default"
            class="form-control"
            type="text"
            placeholder="Search for projects and contents"
            @focus="isSearchBarActive=true"
            @blur="isSearchBarActive=false"
          />
          <search-icon v-if="!isSearchBarActive"></search-icon>
          <search-icon-blue v-if="isSearchBarActive"></search-icon-blue>
        </div>
      </b-col>
    </b-row>

    <b-row class="section">
      <label for="inputPassword" class="col-sm-2 col-form-label"><h3>Skills</h3></label>
      <div class="col-sm-10">
        <tags-input element-id="tags"
          v-model="selectedTags"
          :existing-tags="mySkills"
          :typeahead="true"
          placeholder="Type to filter projects and contests by skills..."></tags-input>
      </div>
    </b-row>

    <div class="section filter-bar-section">
      <filter-bar :filterList="filterList"></filter-bar>
    </div>

    <div>
      <b-card no-body>
        <b-card-header>
          <b-row>
            <b-col md="12" lg="5" xl="6">
              <h4>PROJECT/CONTENT</h4>
            </b-col>
            <b-col md="12" lg="7" xl="6">
              <b-row class="center-row">
                <b-col md="4">
                  <h4>BID/ENTERIES</h4>
                </b-col>
                <b-col md="3">
                  <h4>START</h4>
                </b-col>
                <b-col md="3">
                  <h4>PRICE(USD)</h4>
                </b-col>
                <b-col md="2">
                  <star-yellow-icon></star-yellow-icon>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-card-header>
        <b-card-body>
          <job-item v-for="(item, index) in jobDataList" :key="index" :jobData="item"></job-item>
          <job-item></job-item>
        </b-card-body>
      </b-card>
    </div>
    <b-row class="section footer-section">
      <b-col cols="12" sm="12" md="6">
        <h4>Showing 1 to 50 of 271,516 entries</h4>
      </b-col>
      <b-col cols="12" sm="12" md="6">
        <b-pagination align="right" :total-rows="100" v-model="currentPage" :per-page="10" class="pagination">
        </b-pagination>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import FilterBar from '../components/FilterBar'
  import JobItem from '../components/JobItem'
  import TagsInput from '../components/TagsInput'
  import SearchIcon from '../assets/icon-search.svg'
  import SearchIconBlue from '../assets/icon-search-blue.svg'
  import StarYellowIcon from '../assets/icon-star-yellow.svg'

  export default {
    name: 'app',
    components: {
      'job-item': JobItem,
      'tags-input': TagsInput,
      'filter-bar': FilterBar,
      'search-icon': SearchIcon,
      'search-icon-blue': SearchIconBlue,
      'star-yellow-icon': StarYellowIcon
    },
    data: () => ({
      mySkills: {
        'pdf': 'PDF',
        'jdf': 'JDF',
        'graphic-design': 'Graphic Design',
        'logo-design': 'Logo Design'
      },
      filterList: {
        experience: {
          list: ['Entry', 'Intermediate', 'Expert'],
          title: 'Experience'
        },
        location: {
          list: ['Unite State', 'Italy', 'Russia'],
          title: 'Location'
        },
        type: {
          list: ['Web Development', 'Mobile Development', 'Translation'],
          title: 'Job Type'
        },
        price: {
          list: ['High', 'Medium', 'Low'],
          title: 'Price'
        },
        language: {
          list: ['Spanish', 'English', 'Turkey', 'German', 'Italian'],
          title: 'Language'
        },
        sortBy: {
          list: ['Newest', 'Relevance', 'Latest'],
          title: 'Latest'
        }
      },
      jobDataList: [
        {
          title: 'Create A Website Like Craigslist/Kijiji',
          description: 'In simple words, I need a website that works like Craigslist. If you don\'t know what the website is please go to craigslist.org or kijiji.com and do some research on weather or not i...',
          tags: ['Website Design', 'Graphic Design', 'Design', 'Photoshop', 'HTML', 'Web Development'],
          time: '2d 23h',
          bids: 3,
          price: 739,
          isLike: false,
          bidAvailable: false,
          markers: []
        },
        {
          title: 'Create A Website Like Craigslist/Kijiji',
          description: 'In simple words, I need a website that works like Craigslist. If you don\'t know what the website is please go to craigslist.org or kijiji.com and do some research on weather or not i...',
          tags: ['Website Design', 'Graphic Design', 'Design', 'Photoshop', 'HTML', 'Web Development'],
          time: '2d 23h',
          bids: 3,
          price: 739,
          isLike: true,
          bidAvailable: false,
          markers: ['recruiter']
        },
        {
          title: 'Create A Website Like Craigslist/Kijiji',
          description: 'In simple words, I need a website that works like Craigslist. If you don\'t know what the website is please go to craigslist.org or kijiji.com and do some research on weather or not i...',
          tags: ['Website Design', 'Graphic Design', 'Design', 'Photoshop', 'HTML', 'Web Development'],
          time: '2d 23h',
          bids: 3,
          price: 739,
          isLike: false,
          bidAvailable: true,
          markers: ['urgent', 'featured']
        },
        {
          title: 'Create A Website Like Craigslist/Kijiji',
          description: 'In simple words, I need a website that works like Craigslist. If you don\'t know what the website is please go to craigslist.org or kijiji.com and do some research on weather or not i...',
          tags: ['Website Design', 'Graphic Design', 'Design', 'Photoshop', 'HTML', 'Web Development'],
          time: '2d 23h',
          bids: 3,
          price: 739,
          isLike: true,
          bidAvailable: false,
          markers: ['urgent']
        }
      ],
      selectedTags: '',
      currentPage: 1,
      isSearchBarActive: false
    }),
    mounted () {
    },
    computed: {
    },
    methods: {
    }
  }
</script>

<style lang="scss" >
  @import '../styles/variables.scss';
  @import '../styles/global.scss';

  .section {
    padding: 2rem 0;
    label {
      margin-top: 1.6rem;
    }
    h1, h3 {
      color: $color-dark;
    }
    @media (max-width: 991px) {
      &.filter-bar-section {
        display: none;
      }
    }
  }

  .search-input {
    position: relative;
    svg {
      position: absolute;
      left: 2rem;
      top: 1.5rem;
      width: 2.5rem;
      height: 2.5rem;
    }
    input {
      padding: 1.5rem 2.5rem 1.5rem 5.5rem;
    }
  }

  .card {
    margin-top: 1.5rem;
    border-radius: 0.6rem;
    -webkit-box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.1);
    
    .card-header {
      padding: 2.4rem 3.5rem 1.4rem;
      background: $color-dark-light;
      border-top-left-radius: 0.6rem;
      border-top-right-radius: 0.6rem;
      h4 {
        color: white;
      }
      svg { 
        width: 23px;
      }
      .center-row {
        text-align: center;
        @media (max-width: 991px) {
          display: none;
        }
      }
    }
    .card-body {
      padding: 0;
    }
  }

  .footer-section {
    margin-top: 1.5rem;
    h4 {
      margin-top: 1rem;
    }
    .col-sm-12 .pagination,
    .col-md-6 .pagination {
      right: 0;
      float: left;
      margin-top: 1.5rem;
    }
  }

</style>
