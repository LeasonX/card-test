<template>
  <div>
    <div style="height: 500px;width: 1000px;background-color: lightseagreen"
         @click="addWatermark"
         v-bind:style="withWatermark">
    </div>
    <div>
      <a href="https://github.com/LeasonX/card-test">github</a>
    </div>
  </div>
</template>

<script>
import alimask from 'alimask'
export default {
  name: 'ImageWatermark',
  methods: {
    addWatermark () {
      // debugger
      this.withWatermark = {'background-image': 'url(\'' + alimask('刘旭(9999)', { color: '#f6dcd7', alpha: 0.5 }) + '\')'}
      // console.log(alimask('刘旭(9999)', { color: '#f6dcd7', alpha: 0.5 }))
    }
  },
  data () {
    return {
      withWatermark: {
        // 'background-image': 'url(https://images.unsplash.com/photo-1463863711260-be04156bf894?ixlib=rb-0.3.5&q=99&fm=jpg&crop=entropy&cs=tinysrgb&w=2048&fit=max&s=956eac9a6e7b99601bfadfdc49d6d0f9)'
      }
    }
  }
}
</script>
