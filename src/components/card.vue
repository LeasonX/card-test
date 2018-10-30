<template>
  <el-card :shadow="shadow"
           :body-style="bodyStyle"
           :style="{height: cardHeight + 'px', width: cardWidth + 'px'}">
    <div class="teacher-info">
      <div :style="{height: profileHeight +'px'}" class="teacher-profile">
        <img :src="avatarSrc"
             :style="{width: avatarWidth + 'px'}">
        <div class="teacher-desc" :style="{height: profileHeight + 'px'}">
          <div>
            <span class="teacher-course">{{teacher.course}}</span>
            <span style="color:rgba(0,0,0,0.45);">|</span>
            <span class="teacher-course">{{teacher.name}}</span>
          </div>
          <div class="teacher-location">
            <i class="el-icon-location-outline"></i>
            <span>{{teacher.location}}</span>
          </div>
          <div class="teacher-location">
            <span>¥</span>
            <span class="teacher-price">{{teacher.minPrice}}-{{teacher.maxPrice}}</span>
            <span>元/小时</span>
          </div>
        </div>
      </div>
      <div class="teacher-tags">
        <el-tag class="teacher-tag"
                v-for="(tag, index) in teacher.tags"
                :key="tag"
                :style="{marginRight: !index ? '5px': 0}">{{tag}}</el-tag>
      </div>
    </div>
    <hr/>
    <div class="teacher-feedback">
      <div>
        <el-tag type="warning" class="feedback-abstract">{{teacher.feedback.abstract}}</el-tag>
      </div>
      <div class="feedback-content">
        <span>{{teacher.feedback.person}}</span>
        <span>:&nbsp;&nbsp;&nbsp;“</span>
        <span class="feedback-desc">{{teacher.feedback.desc}}</span>
        <span>”</span>
      </div>
    </div>
  </el-card>
</template>

<style scoped>
  .teacher-info{
    margin-top: 10px;
    margin-left: 10px;
  }
  .teacher-profile {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  .teacher-desc {
    width: 108px;
    margin-left: 12px;
    float: left;
    font-size: 12px;
    font-family: PingFangSC-Regular;
  }
  .teacher-course {
    color:rgba(0,0,0,0.85);
  }
  .teacher-location {
    margin-top: 4px;
    color:rgba(0,0,0,0.45);
  }
  .teacher-price {
    color: #ff8b19;
  }
  .teacher-tags {
    margin-top: 10px;
    height: 60px;
  }
  .teacher-tag {
    margin-bottom: 6px;
    height: 25px;
    color: #409eff;
    line-height: 24px;
  }
  .teacher-feedback {
    margin-left: 10px;
    margin-top: 6px;
    font-size: 12px;
  }
  .feedback-abstract {
    height: 18px;
    padding-left: 6px;
    padding-right: 9px;
    line-height: 16px;
    background-color: rgba(255,139,25,0.15);
    color: #ff8b19;
    font-family: PingFangSC-Regular;
  }
  .feedback-content {
    margin-top: 9px;
  }
  .feedback-desc {
    color:rgba(0,0,0,0.45);
  }
  hr{
    border:1px solid rgba(0,0,0,0.15);
    height: 0;
  }
</style>

<script>
export default {
  name: 'card',
  props: {
    'shadow': String,
    'body-style': {
      type: Object,
      default: function () {
        return {
          'height': '253px',
          'width': '210px',
          'text-align': 'left',
          'padding': 0
        }
      }
    },
    'card-height': {
      type: Number,
      default: 253
    },
    'card-width': {
      type: Number,
      default: 210
    },
    'avatar-src': String,
    'profile-height': {
      type: Number,
      default: 70
    },
    'avatar-width': {
      type: Number,
      default: 70
    },
    'teacher': {
      type: Object,
      default: function () {
        return {
          'course': '',
          'name': '',
          'location': '',
          'minPrice': 0,
          'maxPrice': 0,
          'tags': [],
          'feedback': {
            'abstract': '',
            'person': '',
            'desc': ''
          }
        }
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>
