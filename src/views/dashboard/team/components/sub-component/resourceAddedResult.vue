<template>
  <div class="m-2">
    <div
      class="mb-3"
      style="position: relative"
    >
      <div style="position:absolute;top:35px;left:720px;width:-webkit-fill-available;border-bottom:3px #D92163 solid;">
        <progress-circle-inner-icon style="position:absolute;top:-19px;left:-36px" />
        <b-icon
          icon="diamond-fill"
          style="position:absolute;top:-5px;right:-7px;color:#D92163;"
        />
      </div>
      <div class="containerSelf mb-2">
        <div
          class="rounded-left pl-1 pr-1"
          style="background-color: #252D43; border-left-width: 6px; border-left-color: #FF900C; border-left-style: solid; width: 350px"
        >
          <div style="padding-top:5px; padding-bottom: 5px;">
            <span style="font-size: 18px; color: white;">Team B</span>
          </div>
          <div
            v-for="(item, index) in data_source.series"
            :key="index"
          >
            <div
              class="d-flex"
              style="justify-content:space-between;padding:8px;height:45px"
            >
              <div class="d-flex">
                <div style="margin-top:auto;margin-bottom:auto;">
                  <feather-icon
                    icon="MenuIcon"
                    class="mr-1"
                  />
                  {{ item.name }}
                </div>
              </div>
              <div
                class="rounded-pill"
                style="background-color:#353963;border:#7367F0 1px solid;padding:3px;width:80px;text-align:center;"
              >
                8 H/D
                <feather-icon icon="MoreHorizontalIcon" />
              </div>
            </div>
          </div>
        </div>
        <div style="width:calc(100% - 350px)">
          <div class="d-flex">
            <template v-for="(item, index) in data_source.xAxisData">
              <div
                v-if="index === 3"
                :key="index"
                class="sub-main"
                style="padding-top:5px; padding-bottom: 5px;"
              >
                <div style="border-radius: 5px; background-color: crimson">
                  <span style="font-size: 18px; color: white;">{{ data_source.dayData[index] }} {{ item }}</span>
                </div>
              </div>
              <div
                v-else
                :key="index"
                class="sub-main"
                style="border-radius: 5px; padding-top:5px; padding-bottom: 5px;"
              >
                <span style="font-size: 18px; color: white;">
                  <span style="color:#283046">{{ data_source.dayData[index] }}</span> {{ item }}
                </span>
              </div>
            </template>
          </div>
          <template v-for="(item, index) in data_source.series">
            <div
              :key="index"
              class="d-flex"
              style="height:45px"
            >
              <template v-for="(item1, jndex) in item.data">
                <div
                  :key="jndex"
                  class="sub-main d-flex"
                  :style="'margin-right:0.5px;margin-left:0.5px;background:' + item1.bg"
                >
                  <div style="margin:auto;">
                    <span style="font-size: 18px; color: white;">
                      {{ item1.data }}
                    </span>
                  </div>
                </div>
              </template>
            </div>
          </template>
        </div>
      </div>
      <div class="containerSelf mb-2">
        <div
          class="rounded-left pl-1 pr-1"
          style="width: 350px;color:aquamarine"
        >
          TOTAL TEAM CAPACITY
        </div>
        <div
          style="width:calc(100% - 350px);font-weight:bold;"
          class="d-flex"
        >
          <template v-for="(item, index) in data_source.teamCapacity">
            <div
              v-if="item === '100'"
              :key="index"
              class="sub-main"
              style="color:greenyellow"
            >
              {{ item }}%
            </div>
            <div
              v-if="item === '75'"
              :key="index"
              class="sub-main"
              style="color:aquamarine"
            >
              {{ item }}%
            </div>
            <div
              v-if="item === '0'"
              :key="index"
              class="sub-main"
              style="color:grey"
            >
              {{ item }}%
            </div>
          </template>
        </div>
      </div>
    </div>

    <div style="position: relative">
      <div style="position:absolute;top:35px;left:720px;width:-webkit-fill-available;border-bottom:3px #D92163 solid;">
        <progress-circle-inner-icon style="position:absolute;top:-19px;left:-36px" />
        <b-icon
          icon="diamond-fill"
          style="position:absolute;top:-5px;right:-7px;color:#D92163;"
        />
      </div>
      <div class="containerSelf mb-2">
        <div
          class="rounded-left pl-1 pr-1"
          style="background-color: #252D43; border-left-width: 6px; border-left-color: #FF900C; border-left-style: solid; width: 350px"
        >
          <div style="padding-top:5px; padding-bottom: 5px;">
            <span style="font-size: 18px; color: white;">Team F</span>
          </div>
          <div
            v-for="(item, index) in data_source.series"
            :key="index"
          >
            <div
              class="d-flex"
              style="justify-content:space-between;padding:8px;height:45px"
            >
              <div class="d-flex">
                <div style="margin-top:auto;margin-bottom:auto;">
                  <feather-icon
                    icon="MenuIcon"
                    class="mr-1"
                  />
                  {{ item.name }}
                </div>
              </div>
              <div
                class="rounded-pill"
                style="background-color:#353963;border:#7367F0 1px solid;padding:3px;width:80px;text-align:center;"
              >
                8 H/D
                <feather-icon icon="MoreHorizontalIcon" />
              </div>
            </div>
          </div>
        </div>
        <div style="width:calc(100% - 350px)">
          <div class="d-flex">
            <template v-for="(item, index) in data_source.xAxisData">
              <div
                v-if="index === 3"
                :key="index"
                class="sub-main"
                style="padding-top:5px; padding-bottom: 5px;"
              >
                <div style="border-radius: 5px; background-color: crimson">
                  <span style="font-size: 18px; color: white;">{{ data_source.dayData[index] }} {{ item }}</span>
                </div>
              </div>
              <div
                v-else
                :key="index"
                class="sub-main"
                style="border-radius: 5px; padding-top:5px; padding-bottom: 5px;"
              >
                <span style="font-size: 18px; color: white;">
                  <span style="color:#283046">{{ data_source.dayData[index] }}</span> {{ item }}
                </span>
              </div>
            </template>
          </div>
          <template v-for="(item, index) in data_source.series">
            <div
              :key="index"
              class="d-flex"
              style="height:45px"
            >
              <template v-for="(item1, jndex) in item.data">
                <div
                  :key="jndex"
                  class="sub-main d-flex"
                  :style="'margin-right:0.5px;margin-left:0.5px;background:' + item1.bg"
                >
                  <div style="margin:auto;">
                    <span style="font-size: 18px; color: white;">
                      {{ item1.data }}
                    </span>
                  </div>
                </div>
              </template>
            </div>
          </template>
        </div>
      </div>
      <div class="containerSelf mb-2">
        <div
          class="rounded-left pl-1 pr-1"
          style="width: 350px;color:aquamarine"
        >
          TOTAL TEAM CAPACITY
        </div>
        <div
          style="width:calc(100% - 350px);font-weight:bold;"
          class="d-flex"
        >
          <template v-for="(item, index) in data_source.teamCapacity">
            <div
              v-if="item === '100'"
              :key="index"
              class="sub-main"
              style="color:greenyellow"
            >
              {{ item }}%
            </div>
            <div
              v-if="item === '75'"
              :key="index"
              class="sub-main"
              style="color:aquamarine"
            >
              {{ item }}%
            </div>
            <div
              v-if="item === '0'"
              :key="index"
              class="sub-main"
              style="color:grey"
            >
              {{ item }}%
            </div>
          </template>
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
import { BIcon } from 'bootstrap-vue'
import ProgressCircleInnerIcon from './progressCircleInnerIcon.vue'

export default {
  components: {
    ProgressCircleInnerIcon,
    BIcon
  },
  data() {
    return {
      data_source: {
        dayData: ['T', 'W', 'T', 'F', 'S', 'S', 'M'],
        xAxisData: ['12', '13', '14', '15', '16', '17', '18'],
        teamCapacity: ['100', '100', '100', '100', '0', '0', '75'],
        series: [
          {
            name: 'Travis Roach',
            data: [
              { bg: '#66C85660', data: '8' },
              { bg: '#66C85660', data: '8' },
              { bg: '#66C85660', data: '8' },
              { bg: '#66C85660', data: '8' },
              { bg: '#0F849E33', data: '' },
              { bg: '#0F849E33', data: '' },
              { bg: '#66C85660', data: '8' },
            ],
          },
          {
            name: 'Ciaran Bradford',
            data: [
              { bg: '#66C85660', data: '8' },
              { bg: '#66C85660', data: '8' },
              { bg: '#66C85660', data: '8' },
              { bg: '#66C85660', data: '8' },
              { bg: '#0F849E33', data: '' },
              { bg: '#0F849E33', data: '' },
              { bg: '#66C85660', data: '8' },
            ],
          },
          {
            name: 'George Logan',
            data: [
              { bg: '#66C85660', data: '8' },
              { bg: '#66C85660', data: '8' },
              { bg: '#66C85660', data: '8' },
              { bg: '#66C85660', data: '8' },
              { bg: '#0F849E33', data: '' },
              { bg: '#0F849E33', data: '' },
              { bg: '#0F849E70', data: '4' },
            ],
          },
          {
            name: 'Angelica Russo',
            data: [
              { bg: '#0a5666', data: '8' },
              { bg: '#8b3b4e', data: '8' },
              { bg: '#0a5666', data: '8' },
              { bg: '#448739', data: '8' },
              { bg: '#0F849E33', data: '' },
              { bg: '#0F849E33', data: '' },
              { bg: '#0F849E70', data: '4' },
            ],
          },
          {
            name: 'Paul Michel',
            data: [
              { bg: '#0F849E33', data: '' },
              { bg: '#0F849E33', data: '' },
              { bg: '#0F849E33', data: '' },
              { bg: '#0F849E33', data: '' },
              { bg: '#0F849E33', data: '' },
              { bg: '#0F849E33', data: '' },
              { bg: '#0F849E33', data: '' },
            ],
          },
        ],
      },
    }
  }
}
</script>
