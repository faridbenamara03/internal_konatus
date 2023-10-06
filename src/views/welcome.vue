<template>
  <div class="d-flex" :style="`height:${cHeight}px`">
    <div style="font-size:16px;text-align: center;margin: auto;">
      <div style="margin-bottom:24px;display: flex;justify-content: center;">
        <div>
          <b-img
            :src="appLogoImage"
            alt="logo"
            style="width: 38px;height: 38px;margin-top: 4px;margin-right: 10px;"
          />
        </div>
        <div style="font-size:33px;font-family: Arial;font-weight: bold;text-transform: uppercase;">{{ appName }}</div>
      </div>
      <div style="margin-bottom:14px">
        Welcome to Konatus!
      </div>
      To begin, please select an item from the <br />
      navigation on your left
    </div>
  </div>
</template>

<script>
import { $themeConfig } from '@themeConfig'
import { BImg } from 'bootstrap-vue'

export default {
  components: {
    BImg
  },
  data() {
    return {
      cHeight: 0
    }
  },
  setup() {
    const { appName, appLogoImage } = $themeConfig.app
    return {
      appName,
      appLogoImage,
    }
  },
  mounted() {
    this.cHeight = document.getElementsByClassName('app-content')[0].clientHeight
  },
}
</script>
