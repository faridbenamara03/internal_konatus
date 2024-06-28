<<<<<<< HEAD
<template>
  <div class="m-2">
    <div class="containerSelf mb-2">
      <div style="width: 300px" />
      <div
        class="containerSelf p-0"
        style="width: calc(100% - 300px)"
      >
        <template v-for="(item, index) in data_source.xAxisData">
          <div
            v-if="index === 1"
            :key="index"
            class="sub-main"
            style="border-radius: 5px; background-color: crimson; padding-top:5px; padding-bottom: 5px;"
          >
            <b style="font-size: 18px; color: white;">{{ item }}</b>
          </div>
          <div
            v-else
            :key="index"
            class="sub-main"
            style="border-radius: 5px; padding-top:5px; padding-bottom: 5px;"
          >
            <b style="font-size: 18px; color: white;">{{ item }}</b>
          </div>
        </template>
      </div>
    </div>
    <div
      v-for="item in data_source.series"
      :key="item.name"
      class="containerSelf mb-2"
      style="font-size: 23px; font-weight: bold;"
    >
      <div
        class="pt-1 pb-1 rounded-left pl-1 pr-1"
        style="background-color: #252D43; border-left-width: 10px; border-left-color: #FF900C; border-left-style: solid; display:flex; justify-content: space-between; width: 300px"
      >
        <div>
          {{ item.name }}
        </div>
        <div>
          <feather-icon icon="ChevronUpIcon" />
        </div>
      </div>
      <div
        class="containerSelf p-0"
        style="width: calc(100% - 300px)"
      >
        <div
          v-for="item_child in item.data"
          :key="item_child"
          class="sub-main pt-1 pb-1"
          :style="'background-color:' + item_child.bg + '; color:' + item_child.clr + ';cursor:pointer'"
        >
          {{ item_child.data }}
        </div>
      </div>
    </div>
    <div class="containerSelf m-2">
      <div style="width: 300px" />
      <div style="width: calc(100% - 300px)">
        <div
          class="d-flex"
          style="width:300px;justify-content:space-between;color:#A6E4FF"
        >
          <b>80</b>
          <b>160</b>
          <b>200</b>
        </div>
        <div
          class="d-flex"
          style="width:300px;justify-content:start;margin-bottom:2px;"
        >
          <div style="height:10px;background-color:#8b3b4e;width:200px;border-top-left-radius:2px;border-bottom-left-radius:2px;" />
          <div style="height:10px;background-color:#448739;width:100px;border-top-right-radius:2px;border-bottom-right-radius:2px;" />
        </div>
        <div
          class="d-flex"
          style="width:300px;justify-content:start"
        >
          <div style="height:10px;background-color:#0a5666;width:30px;border-top-left-radius:2px;border-bottom-left-radius:2px;" />
          <div style="height:10px;background-color:#1d97b1;width:270px;border-top-right-radius:2px;border-bottom-right-radius:2px;" />
        </div>
        <div
          class="d-flex"
          style="width:300px;justify-content:center;color:#A6E4FF"
        >
          <b>140</b>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.containerSelf {
  display: flex;
  flex-direction: row;
}

.sub-main {
  flex: 1;
  text-align: center;
}
</style>

<script>
export default {
  data() {
    return {
      data_source: {
        xAxisData: ['Mon 01', 'Tue 02', 'Wed 03', 'Thu 04', 'Fri 05', 'Sat 06', 'Sun 07'],
        series: [
          {
            name: 'Team A',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            showSymbol: false,
            color: '#9a4964',
            lineStyle: {
              width: 0,
            },
            data: [
              { bg: '#0a5666', data: '24/24' },
              { bg: '#8b3b4e', data: '28/24' },
              { bg: '#0a5666', data: '22/24' },
              { bg: '#448739', data: '18/24' },
              { bg: '#448739', data: '11/16' },
              { bg: '#8b3b4e', data: '27/24' },
              { bg: '#448739', data: '3/8' },
            ],
          },
          {
            name: 'Team B',
            type: 'line',
            stack: 'Total',
            color: '#4f964d',
            showSymbol: false,
            areaStyle: {},
            lineStyle: {
              width: 0,
            },
            color_type: 1,
            data: [
              { bg: '#0a5666', data: '24/24' },
              { bg: '#8b3b4e', data: '28/24' },
              { bg: '#8b3b4e', data: '28/24' },
              { bg: '#8b3b4e', data: '28/24' },
              { bg: '#8b3b4e', data: '28/24' },
              { bg: '#8b3b4e', data: '28/24' },
              { bg: '#8b3b4e', data: '28/24' },
            ],
          },
          {
            name: 'Back-end devs',
            type: 'line',
            stack: 'Total',
            color: '#186b83',
            showSymbol: false,
            areaStyle: {},
            lineStyle: {
              width: 0,
            },
            data: [
              { bg: '#0a5666', data: '80 + 0/160' },
              { bg: '#448739', data: '80 + 0/160' },
              { bg: '#448739', data: '120 + 8/160' },
              { bg: '#448739', data: '20 + 60/160' },
              { bg: '#448739', data: '0 + 80/160' },
              { bg: '#448739', data: '0 + 40/160' },
              { bg: '#448739', data: '0 + 0/160' },
            ],
          },
        ],
      },
    }
  }
}
</script>
=======
<template>
  <div class="m-2">
    <div class="containerSelf mb-2">
      <div style="width: 300px" />
      <div
        class="containerSelf p-0"
        style="width: calc(100% - 300px)"
      >
        <template v-for="(item, index) in data_source.xAxisData">
          <div
            v-if="index === 1"
            :key="index"
            class="sub-main"
            style="border-radius: 5px; background-color: crimson; padding-top:5px; padding-bottom: 5px;"
          >
            <b style="font-size: 18px; color: white;">{{ item }}</b>
          </div>
          <div
            v-else
            :key="index"
            class="sub-main"
            style="border-radius: 5px; padding-top:5px; padding-bottom: 5px;"
          >
            <b style="font-size: 18px; color: white;">{{ item }}</b>
          </div>
        </template>
      </div>
    </div>
    <div
      v-for="item in data_source.series"
      :key="item.name"
      class="containerSelf mb-2"
      style="font-size: 23px; font-weight: bold;"
    >
      <div
        class="pt-1 pb-1 rounded-left pl-1 pr-1"
        style="background-color: #252D43; border-left-width: 10px; border-left-color: #FF900C; border-left-style: solid; display:flex; justify-content: space-between; width: 300px"
      >
        <div>
          {{ item.name }}
        </div>
        <div>
          <feather-icon icon="ChevronUpIcon" />
        </div>
      </div>
      <div
        class="containerSelf p-0"
        style="width: calc(100% - 300px)"
      >
        <div
          v-for="item_child in item.data"
          :key="item_child"
          class="sub-main pt-1 pb-1"
          :style="'background-color:' + item_child.bg + '; color:' + item_child.clr + ';cursor:pointer'"
        >
          {{ item_child.data }}
        </div>
      </div>
    </div>
    <div class="containerSelf m-2">
      <div style="width: 300px" />
      <div style="width: calc(100% - 300px)">
        <div
          class="d-flex"
          style="width:300px;justify-content:space-between;color:#A6E4FF"
        >
          <b>80</b>
          <b>160</b>
          <b>200</b>
        </div>
        <div
          class="d-flex"
          style="width:300px;justify-content:start;margin-bottom:2px;"
        >
          <div style="height:10px;background-color:#8b3b4e;width:200px;border-top-left-radius:2px;border-bottom-left-radius:2px;" />
          <div style="height:10px;background-color:#448739;width:100px;border-top-right-radius:2px;border-bottom-right-radius:2px;" />
        </div>
        <div
          class="d-flex"
          style="width:300px;justify-content:start"
        >
          <div style="height:10px;background-color:#0a5666;width:30px;border-top-left-radius:2px;border-bottom-left-radius:2px;" />
          <div style="height:10px;background-color:#1d97b1;width:270px;border-top-right-radius:2px;border-bottom-right-radius:2px;" />
        </div>
        <div
          class="d-flex"
          style="width:300px;justify-content:center;color:#A6E4FF"
        >
          <b>140</b>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.containerSelf {
  display: flex;
  flex-direction: row;
}

.sub-main {
  flex: 1;
  text-align: center;
}
</style>

<script>
export default {
  data() {
    return {
      data_source: {
        xAxisData: ['Mon 01', 'Tue 02', 'Wed 03', 'Thu 04', 'Fri 05', 'Sat 06', 'Sun 07'],
        series: [
          {
            name: 'Team A',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            showSymbol: false,
            color: '#9a4964',
            lineStyle: {
              width: 0,
            },
            data: [
              { bg: '#0a5666', data: '24/24' },
              { bg: '#8b3b4e', data: '28/24' },
              { bg: '#0a5666', data: '22/24' },
              { bg: '#448739', data: '18/24' },
              { bg: '#448739', data: '11/16' },
              { bg: '#8b3b4e', data: '27/24' },
              { bg: '#448739', data: '3/8' },
            ],
          },
          {
            name: 'Team B',
            type: 'line',
            stack: 'Total',
            color: '#4f964d',
            showSymbol: false,
            areaStyle: {},
            lineStyle: {
              width: 0,
            },
            color_type: 1,
            data: [
              { bg: '#0a5666', data: '24/24' },
              { bg: '#8b3b4e', data: '28/24' },
              { bg: '#8b3b4e', data: '28/24' },
              { bg: '#8b3b4e', data: '28/24' },
              { bg: '#8b3b4e', data: '28/24' },
              { bg: '#8b3b4e', data: '28/24' },
              { bg: '#8b3b4e', data: '28/24' },
            ],
          },
          {
            name: 'Back-end devs',
            type: 'line',
            stack: 'Total',
            color: '#186b83',
            showSymbol: false,
            areaStyle: {},
            lineStyle: {
              width: 0,
            },
            data: [
              { bg: '#0a5666', data: '80 + 0/160' },
              { bg: '#448739', data: '80 + 0/160' },
              { bg: '#448739', data: '120 + 8/160' },
              { bg: '#448739', data: '20 + 60/160' },
              { bg: '#448739', data: '0 + 80/160' },
              { bg: '#448739', data: '0 + 40/160' },
              { bg: '#448739', data: '0 + 0/160' },
            ],
          },
        ],
      },
    }
  }
}
</script>
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
