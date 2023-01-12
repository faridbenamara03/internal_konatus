<template>
  <div class="d-flex" :style="`height:${cHeight}px`">
    <div style="font-size:16px;text-align: center;margin: auto;">
      <div style="margin-bottom:24px;display: flex;justify-content: center;">
        <div>
          <img src="/img/logo.08dfa09a.svg" alt="logo" style="width: 38px; height: 38px;margin-top: 4px;" class="mr-1" />
        </div>
        <div style="font-size:33px;font-family: Arial;font-weight: bold;">KONATUS</div>
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

export default {
  data() {
    return {
      cHeight: 0
    }
  },
  mounted() {
    console.log(document.getElementsByClassName('app-content')[0].clientHeight)
    this.cHeight = document.getElementsByClassName('app-content')[0].clientHeight
  },
}
</script>
