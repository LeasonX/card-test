<template>
  <div class="cards">
    <card style="margin-top: 20px; margin-left: 20px" v-for="(teacher, index) in teachers"
          :key="index"
          avatar-src="http://element-cn.eleme.io/static/hamburger.50e4091.png"
          :teacher="teacher"></card>
  </div>
</template>

<script>
import card from './card'
export default {
  name: 'HelloWorld',
  components: {
    card
  },
  data () {
    return {
      teachers: [
        {
          'course': '科目',
          'name': '老师姓名',
          'location': '上海市徐汇区xx路xx街道',
          'minPrice': 100,
          'maxPrice': 200,
          'tags': ['教龄7年', '一线教育经验', '有在读学生'],
          'feedback': {
            'abstract': '15位TRA、9位TA、10位老师推荐',
            'person': 'TA某某某',
            'desc': '这个老师很好这个老师很好这个老师很好这个老师很好这个老师很好这wwwwwww'
          }
        },
        {
          'course': '科目',
          'name': '老师姓名',
          'location': '上海市徐汇区xx路xx街道',
          'minPrice': 100,
          'maxPrice': 200,
          'tags': ['教龄7年', '一线教育经验', '有在读学生'],
          'feedback': {
            'abstract': '15位TRA、9位TA、10位老师推荐',
            'person': 'TA某某某',
            'desc': '这个老师很好这个老师很好这个老师很好这个老师很好这个老师很好这wwwwwww'
          }
        },
        {
          'course': '科目',
          'name': '老师姓名',
          'location': '上海市徐汇区xx路xx街道',
          'minPrice': 100,
          'maxPrice': 200,
          'tags': ['教龄7年', '一线教育经验', '有在读学生'],
          'feedback': {
            'abstract': '15位TRA、9位TA、10位老师推荐',
            'person': 'TA某某某',
            'desc': '这个老师很好这个老师很好这个老师很好这个老师很好这个老师很好这wwwwwww'
          }
        },
        {
          'course': '科目',
          'name': '老师姓名',
          'location': '上海市徐汇区xx路xx街道',
          'minPrice': 100,
          'maxPrice': 200,
          'tags': ['教龄7年', '一线教育经验', '有在读学生'],
          'feedback': {
            'abstract': '15位TRA、9位TA、10位老师推荐',
            'person': 'TA某某某',
            'desc': '这个老师很好这个老师很好这个老师很好这个老师很好这个老师很好这wwwwwww'
          }
        },
        {
          'course': '科目',
          'name': '老师姓名',
          'location': '上海市徐汇区xx路xx街道',
          'minPrice': 100,
          'maxPrice': 200,
          'tags': ['教龄7年', '一线教育经验', '有在读学生'],
          'feedback': {
            'abstract': '15位TRA、9位TA、10位老师推荐',
            'person': 'TA某某某',
            'desc': '这个老师很好这个老师很好这个老师很好这个老师很好这个老师很好这wwwwwww'
          }
        },
        {
          'course': '科目',
          'name': '老师姓名',
          'location': '上海市徐汇区xx路xx街道',
          'minPrice': 100,
          'maxPrice': 200,
          'tags': ['教龄7年', '一线教育经验', '有在读学生'],
          'feedback': {
            'abstract': '15位TRA、9位TA、10位老师推荐',
            'person': 'TA某某某',
            'desc': '这个老师很好这个老师很好这个老师很好这个老师很好这个老师很好这wwwwwww'
          }
        },
        {
          'course': '科目',
          'name': '老师姓名',
          'location': '上海市徐汇区xx路xx街道',
          'minPrice': 100,
          'maxPrice': 200,
          'tags': ['教龄7年', '一线教育经验', '有在读学生'],
          'feedback': {
            'abstract': '15位TRA、9位TA、10位老师推荐',
            'person': 'TA某某某',
            'desc': '这个老师很好这个老师很好这个老师很好这个老师很好这个老师很好这wwwwwww'
          }
        },
        {
          'course': '科目',
          'name': '老师姓名',
          'location': '上海市徐汇区xx路xx街道',
          'minPrice': 100,
          'maxPrice': 200,
          'tags': ['教龄7年', '一线教育经验', '有在读学生'],
          'feedback': {
            'abstract': '15位TRA、9位TA、10位老师推荐',
            'person': 'TA某某某',
            'desc': '这个老师很好这个老师很好这个老师很好这个老师很好这个老师很好这wwwwwww'
          }
        },
        {
          'course': '科目',
          'name': '老师姓名',
          'location': '上海市徐汇区xx路xx街道',
          'minPrice': 100,
          'maxPrice': 200,
          'tags': ['教龄7年', '一线教育经验', '有在读学生'],
          'feedback': {
            'abstract': '15位TRA、9位TA、10位老师推荐',
            'person': 'TA某某某',
            'desc': '这个老师很好这个老师很好这个老师很好这个老师很好这个老师很好这wwwwwww'
          }
        },
        {
          'course': '科目',
          'name': '老师姓名',
          'location': '上海市徐汇区xx路xx街道',
          'minPrice': 100,
          'maxPrice': 200,
          'tags': ['教龄7年', '一线教育经验', '有在读学生'],
          'feedback': {
            'abstract': '15位TRA、9位TA、10位老师推荐',
            'person': 'TA某某某',
            'desc': '这个老师很好这个老师很好这个老师很好这个老师很好这个老师很好这wwwwwww'
          }
        },
        {
          'course': '科目',
          'name': '老师姓名',
          'location': '上海市徐汇区xx路xx街道',
          'minPrice': 100,
          'maxPrice': 200,
          'tags': ['教龄7年', '一线教育经验', '有在读学生'],
          'feedback': {
            'abstract': '15位TRA、9位TA、10位老师推荐',
            'person': 'TA某某某',
            'desc': '这个老师很好这个老师很好这个老师很好这个老师很好这个老师很好这wwwwwww'
          }
        },
        {
          'course': '科目',
          'name': '老师姓名',
          'location': '上海市徐汇区xx路xx街道',
          'minPrice': 100,
          'maxPrice': 200,
          'tags': ['教龄7年', '一线教育经验', '有在读学生'],
          'feedback': {
            'abstract': '15位TRA、9位TA、10位老师推荐',
            'person': 'TA某某某',
            'desc': '这个老师很好这个老师很好这个老师很好这个老师很好这个老师很好这wwwwwww'
          }
        },
        {
          'course': '科目',
          'name': '老师姓名',
          'location': '上海市徐汇区xx路xx街道',
          'minPrice': 100,
          'maxPrice': 200,
          'tags': ['教龄7年', '一线教育经验', '有在读学生'],
          'feedback': {
            'abstract': '15位TRA、9位TA、10位老师推荐',
            'person': 'TA某某某',
            'desc': '这个老师很好这个老师很好这个老师很好这个老师很好这个老师很好这wwwwwww'
          }
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
