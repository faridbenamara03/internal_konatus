<template>
  <div style="width:100%;">
    <div class="d-flex justify-content-between">
      <div />
      <div class="d-flex action-group">
        <div class="d-flex">
          <feather-icon icon="CircleIcon" size="16" style="margin-right:3px" />
          <div style="margin-top: -2px">REAL</div>
        </div>
        <div class="d-flex mx-2">
          <feather-icon icon="CalendarIcon" size="16" style="margin-right:3px" />
          <div style="margin-top: -2px">ENGAGED</div>
        </div>
        <div class="d-flex">
          <feather-icon icon="ActivityIcon" size="16" style="margin-right:3px" />
          <div style="margin-top: -2px">ESTIMATED</div>
        </div>
      </div>
    </div>
    <div class="m-2">
      <div class="containerSelf">
        <div style="width: 330px">
        </div>
        <div class="containerSelf p-0" style="width: calc(100% - 330px); font-size: 15px; color: white;">
          <div class="sub-main" style="border-radius: 5px; padding-top:5px; padding-bottom: 5px;" :style="'background-color:' + getday0().bcolor ">
            {{ getday0().sdate }}
          </div>
          <div class="sub-main" style="border-radius: 5px; padding-top:5px; padding-bottom: 5px;" :style="'background-color:' + getday1().bcolor ">
            {{ getday1().sdate }}
          </div>
          <div class="sub-main" style="border-radius: 5px; padding-top:5px; padding-bottom: 5px;" :style="'background-color:' + getday2().bcolor ">
            {{ getday2().sdate }}
          </div>
          <div class="sub-main" style="border-radius: 5px; padding-top:5px; padding-bottom: 5px;" :style="'background-color:' + getday3().bcolor ">
            {{ getday3().sdate }}
          </div>
          <div class="sub-main" style="border-radius: 5px; padding-top:5px; padding-bottom: 5px;" :style="'background-color:' + getday4().bcolor ">
            {{ getday4().sdate }}
          </div>
          <div class="sub-main" style="border-radius: 5px; padding-top:5px; padding-bottom: 5px;" :style="'background-color:' + getday5().bcolor ">
            {{ getday5().sdate }}
          </div>
          <div class="sub-main" style="border-radius: 5px; padding-top:5px; padding-bottom: 5px;" :style="'background-color:' + getday6().bcolor ">
            {{ getday6().sdate }}
          </div>
        </div>
      </div>
      <div class="containerSelf mt-20" v-for="(item, l1) in data_source.series" v-bind:key="l1"
        style="font-size: 15px; font-weight: bold;">
        <div style="width: 100%;">
          <div v-b-toggle="'accordion-1' + item.id" @click="item.isvisible = !item.isvisible" class="containerSelf" style=" margin-top:30px;">
            <div style="position:relative">
              <div v-if="l1 === 0" :style="`position:absolute;left:${dayBlockWidth + 330 + 15}px;width:${dayBlockWidth * 3 - 15}px;border-bottom:3px #D92163 solid`">
                <progress-circle-inner-icon startColor="#FFACDA" circleColor="#D92163" style="position:absolute;top:-19px;left:-36px"/>
                <b-icon icon="diamond-fill" style="position:absolute;top:-5px;right:-7px;color:#D92163;"/>
              </div>
              <div v-if="l1 === 1" :style="`position:absolute;left:${dayBlockWidth * 3 + 330 + 15}px;width:${dayBlockWidth * 3 - 15}px;border-bottom:3px #D92163 solid`">
                <progress-circle-inner-icon startColor="#FFACDA" circleColor="#D92163" style="position:absolute;top:-19px;left:-36px"/>
                <b-icon icon="diamond-fill" style="position:absolute;top:-5px;right:-7px;color:#D92163;"/>
              </div>
              <div v-if="l1 === 3" :style="`position:absolute;left:${dayBlockWidth + 330}px;width:${dayBlockWidth - 17}px;border-bottom:3px #06d39a solid`">
                <progress-circle-inner-icon startColor="#adfbe5" circleColor="#06d39a" style="position:absolute;top:-19px;right:-36px"/>
                <b-icon icon="diamond-fill" style="position:absolute;top:-5px;left:-7px;color:#06d39a;"/>
              </div>
            </div>
            <div class="pt-1 pb-1 rounded-left pl-1 pr-1"
              style="background-color: rgb(49,56,77); display:flex; justify-content: space-between; width: 330px">
              <div>
                {{ item.name }}
              </div>
              <div>
                <feather-icon v-if="item.isvisible" :id="'my-modalclose'+ item.id" style="height: 23px; width:23px; color:rgb(115,103,240)" icon="ChevronUpIcon" />
                <feather-icon v-if="!item.isvisible" :id="'my-modalopen'+ item.id" style="height: 23px; width:23px; color:rgb(115,103,240)" icon="ChevronDownIcon" />
              </div>
            </div>
            <div class="containerSelf p-0" style="width: calc(100% - 330px)">
              <div v-b-modal.modal-no-backdrop class="sub-main pt-1 pb-1" v-for="(item_child, l2) in item.data" v-bind:key="l2"
                :style="'background-color:' + item_child.bg + '; color:' + item_child.clr + ';cursor: pointer'">
                {{ item_child.data }}
              </div>
            </div>
          </div>
          <b-collapse :id="'accordion-1' + item.id" >
            <div class="containerSelf" style="width: 100%; font-weight:400;" v-for="(childitem, l3) in item.child" v-bind:key="l3">
              <div class="pt-1 pb-1 rounded-left pl-1 pr-1"
                style="font-size: 14px; background-color: rgb(37,45,67); display:flex; justify-content: space-between; width: 330px; height:50px;align-items: center;">
                <div style="font-weight:400; display:flex; align-items: center;">
                  <feather-icon style="width:23px; height: 10px;" icon="MenuIcon" />
                  {{ childitem.name }}
                </div>
                <div>
                  <b-button
                    v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                    variant="outline-primary"
                    pill
                    style="background-color:rgb(45,51,81);"
                  >
                  <span style="color: lightgray; font-weight:300; margin-right:5px;">
                    8 H/D
                  </span>
                  <feather-icon
                    icon="MoreHorizontalIcon"
                  />
                  </b-button>
                </div>
              </div>
              <div class="containerSelf p-0" style="width: calc(100% - 330px);">
                <div v-b-modal.modal-no-backdrop class="sub-main pt-1 pb-1" v-for="(item_child_data, l4) in childitem.data" v-bind:key="l4"
                  :style="'background-color:' + item_child_data.bg + '; color:' + item_child_data.clr + ';color: lightgray;cursor: pointer'">
                  {{ item_child_data.data }}
                </div>
              </div>
            </div>
          </b-collapse>
        </div>
      </div>
    </div>
    <div class="containerSelf m-2">
      <b style="font-size: 17px; color: #A6E4FF">TOTALS</b>
    </div>
    <div class="containerSelf m-1" v-for="(item, index) in filteredTotalData" :key="index">
      <div style="width: 350px">
        <b style="font-size: 16px; color: #A6E4FF">{{ item.captain }}</b>
      </div>
      <div class="containerSelf p-0" style="width: calc(100% - 300px)">
        <div class="sub-main" v-for="(item1, index) in item.data" :key="index"
          style="padding-top:5px; padding-bottom: 5px;">
          <b :style='"font-size: 16px; color:" + item1.numcolor'>{{ item1.value }}</b>
          <b :style='"font-size: 16px; color:" + item1.pctcolor'>
            (
            {{ item1.percent }}
            <span v-if="item1.percent >= 0">%</span>
            )
          </b>
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
import {
  BCollapse, BButton, VBToggle, BIcon
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import moment from 'moment'
import ProgressCircleInnerIcon from './sub-component/progressCircleInnerIcon.vue'

export default {
  components: {
    BButton,
    BCollapse,
    BIcon,
    ProgressCircleInnerIcon
  },
  directives: {
    'b-toggle': VBToggle,
    Ripple,
  },
  data() {
    return {
      dayBlockWidth: 0,
      isvisible: true,
      data_source: {
        total_data: [
          {
            captain: 'Real Est./Capacity', data: ['248/248', '118/120', '124/120', '106/120', '85/120', '85/120', '25/120']
          }
        ],
        series: [
          {
            id: 1,
            name: 'A sensor effector',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            showSymbol: false,
            color: '#9a4964',
            lineStyle: {
              width: 0,
            },
            isvisible: true,
            data: [
              { bg: 'rgb(22, 73, 97)', clr: '#FFF', data: '24/24' },
              { bg: 'rgb(99, 56, 82)', clr: '#FFF', data: '24/24' },
              { bg: 'rgb(22, 73, 97)', clr: '#FFF', data: '24/24' },
              { bg: 'rgb(56, 100, 68)', clr: '#FFF', data: '24/24' },
              { bg: 'rgb(56, 100, 68)', clr: '#FFF', data: '24/24' },
              { bg: 'rgb(99, 56, 82)', clr: '#FFF', data: '24/24' },
              { bg: 'rgb(56, 100, 68)', clr: '#FFF', data: '28/24' }
            ],
            child: [
              {
                name: 'laura Smith',
                data: [
                  { bg: 'rgb(22, 73, 97)', clr: '#FFF', data: '8' },
                  { bg: 'rgb(99, 56, 82)', clr: '#FFF', data: '12' },
                  { bg: 'rgb(22, 73, 97)', clr: '#FFF', data: '8' },
                  { bg: 'rgb(22, 73, 97)', clr: '#FFF', data: '8' },
                  { bg: 'rgb(22, 73, 97)', clr: '#FFF', data: '8' },
                  { bg: 'rgb(56, 100, 68)', clr: '#FFF', data: '7' },
                  { bg: 'rgb(35, 54, 60)', clr: '#FFF', data: '0' }
                ]
              },
              {
                name: 'Colette Mckinney',
                data: [
                  { bg: 'rgb(22, 73, 97)', clr: '#FFF', data: '8' },
                  { bg: 'rgb(99, 56, 82)', clr: '#FFF', data: '10' },
                  { bg: 'rgb(22, 73, 97)', clr: '#FFF', data: '8' },
                  { bg: 'rgb(56, 100, 68)', clr: '#FFF', data: '7' },
                  { bg: 'rgb(56, 100, 68)', clr: '#FFF', data: '3' },
                  { bg: 'rgb(22, 73, 97)', clr: '#FFF', data: '8' },
                  { bg: 'rgb(56, 100, 68)', clr: '#FFF', data: '3' }
                ]
              },
              {
                name: 'Perry Doyle',
                data: [
                  { bg: 'rgb(22, 73, 97)', clr: '#FFF', data: '8' },
                  { bg: 'rgb(22, 73, 97)', clr: '#FFF', data: '8' },
                  { bg: 'rgb(56, 100, 68)', clr: '#FFF', data: '6' },
                  { bg: 'rgb(56, 100, 68)', clr: '#FFF', data: '3' },
                  { bg: 'rgb(35, 54, 60)', clr: '#FFF', data: '0' },
                  { bg: 'rgb(99, 56, 82)', clr: '#FFF', data: '12' },
                  { bg: 'rgb(35, 54, 60)', clr: '#FFF', data: '0' }
                ]
              }
            ],
          },
          {
            id: 2,
            name: 'B HW & meca',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            showSymbol: false,
            color: '#9a4964',
            lineStyle: {
              width: 0,
            },
            isvisible: true,
            data: [
              { bg: 'rgb(22, 73, 97)', clr: '#FFF', data: '32/32' },
              { bg: 'rgb(99, 56, 82)', clr: '#FFF', data: '28/24' },
              { bg: 'rgb(99, 56, 82)', clr: '#FFF', data: '28/24' },
              { bg: 'rgb(99, 56, 82)', clr: '#FFF', data: '28/24' },
              { bg: 'rgb(99, 56, 82)', clr: '#FFF', data: '28/24' },
              { bg: 'rgb(99, 56, 82)', clr: '#FFF', data: '28/24' },
              { bg: 'rgb(99, 56, 82)', clr: '#FFF', data: '28/24' }
            ],
            child: [
              {
                name: 'laura Smith',
                data: [
                  { bg: 'rgb(22, 73, 97)', clr: '#FFF', data: '8' },
                  { bg: 'rgb(99, 56, 82)', clr: '#FFF', data: '12' },
                  { bg: 'rgb(22, 73, 97)', clr: '#FFF', data: '8' },
                  { bg: 'rgb(22, 73, 97)', clr: '#FFF', data: '8' },
                  { bg: 'rgb(22, 73, 97)', clr: '#FFF', data: '8' },
                  { bg: 'rgb(56, 100, 68)', clr: '#FFF', data: '7' },
                  { bg: 'rgb(35, 54, 60)', clr: '#FFF', data: '0' }
                ]
              },
            ]
          },
          {
            id: 3,
            name: 'C general SW',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            showSymbol: false,
            color: '#9a4964',
            lineStyle: {
              width: 0,
            },
            isvisible: true,
            data: [
              { bg: 'rgb(22, 73, 97)', clr: '#FFF', data: '56/56' },
              { bg: 'rgb(56, 100, 68)', clr: '#FFF', data: '22/24' },
              { bg: 'rgb(56, 100, 68)', clr: '#FFF', data: '22/24' },
              { bg: 'rgb(56, 100, 68)', clr: '#FFF', data: '18/24' },
              { bg: 'rgb(56, 100, 68)', clr: '#FFF', data: '11/24' },
              { bg: 'rgb(56, 100, 68)', clr: '#FFF', data: '11/24' },
              { bg: 'rgb(56, 100, 68)', clr: '#FFF', data: '3/24' }
            ],
          },
          {
            id: 4,
            name: 'D real time SW',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            showSymbol: false,
            color: '#9a4964',
            lineStyle: {
              width: 0,
            },
            isvisible: true,
            data: [
              { bg: 'rgb(22, 73, 97)', clr: '#FFF', data: '64/64' },
              { bg: 'rgb(56, 100, 68)', clr: '#FFF', data: '22/24' },
              { bg: 'rgb(56, 100, 68)', clr: '#FFF', data: '22/24' },
              { bg: 'rgb(56, 100, 68)', clr: '#FFF', data: '18/24' },
              { bg: 'rgb(56, 100, 68)', clr: '#FFF', data: '11/24' },
              { bg: 'rgb(56, 100, 68)', clr: '#FFF', data: '11/24' },
              { bg: 'rgb(56, 100, 68)', clr: '#FFF', data: '3/24' }
            ],
          },
          {
            id: 5,
            name: 'F test',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            showSymbol: false,
            isvisible: true,
            color: '#9a4964',
            lineStyle: {
              width: 0,
            },
            data: [
              { bg: 'rgb(22, 73, 97)', clr: '#FFF', data: '72/72' },
              { bg: 'rgb(56, 100, 68)', clr: '#FFF', data: '22/24' },
              { bg: 'rgb(56, 100, 68)', clr: '#FFF', data: '22/24' },
              { bg: 'rgb(56, 100, 68)', clr: '#FFF', data: '18/24' },
              { bg: 'rgb(56, 100, 68)', clr: '#FFF', data: '11/24' },
              { bg: 'rgb(56, 100, 68)', clr: '#FFF', data: '11/24' },
              { bg: 'rgb(56, 100, 68)', clr: '#FFF', data: '3/24' }
            ],
          }
        ],
      },
    }
  },
  methods: {
    hideModal() {
      this.$refs['my-modalclose'].hide()
      // this.$refs['my-modalopen'].show()
    },
    getday0() {
      const date = moment().day(0).format("ddd DD")
      let color = ''
      if (moment().format('ddd DD') === date) {
        color = 'rgb(255,0,0)'
      } else {
        color = 'rgb(26,34,57)'
      }
      return { sdate: date, bcolor: color }
    },
    getday1() {
      const date = moment().day(1).format("ddd DD")
      let color = ''
      if (moment().format('ddd DD') === date) {
        color = 'rgb(255,0,0)'
      } else {
        color = 'rgb(26,34,57)'
      }
      return { sdate: date, bcolor: color }
    },
    getday2() {
      const date = moment().day(2).format("ddd DD")
      let color = ''
      if (moment().format('ddd DD') === date) {
        color = 'rgb(255,0,0)'
      } else {
        color = 'rgb(26,34,57)'
      }
      return { sdate: date, bcolor: color }
    },
    getday3() {
      const date = moment().day(3).format("ddd DD")
      let color = ''
      if (moment().format('ddd DD') === date) {
        color = 'rgb(255,0,0)'
      } else {
        color = 'rgb(26,34,57)'
      }
      return { sdate: date, bcolor: color }
    },
    getday4() {
      const date = moment().day(4).format("ddd DD")
      let color = ''
      if (moment().format('ddd DD') === date) {
        color = 'rgb(255,0,0)'
      } else {
        color = 'rgb(26,34,57)'
      }
      return { sdate: date, bcolor: color }
    },
    getday5() {
      const date = moment().day(5).format("ddd DD")
      let color = ''
      if (moment().format('ddd DD').trim() === date.trim()) {
        color = 'rgb(255,0,0)'
      } else {
        color = 'rgb(26,34,57)'
      }
      return { sdate: date, bcolor: color }
    },
    getday6() {
      const date = moment().day(6).format("ddd DD")
      let color = ''
      if (moment().format('ddd DD') === date) {
        color = 'rgb(255,0,0)'
      } else {
        color = 'rgb(26,34,57)'
      }
      return { sdate: date, bcolor: color }
    },
    setOffset() {
      const cwidth = document.getElementsByClassName('content-wrapper')[0].clientWidth
      this.dayBlockWidth = (cwidth - 330 - 42) / 7
      // 330 + 15
    },
  },
  created() {
    window.addEventListener("resize", this.setOffset)
  },
  mounted() {
    this.setOffset()
  },
  destroyed() {
    window.removeEventListener("resize", this.setOffset)
  },
  computed: {
    filteredTotalData() {
      return this.data_source.total_data.map(t => {
        const valueArr = t.data.map(t1 => {
          let pctcolor = '#138B49'
          let numcolor = 'white'
          const vvle = t1.split('/')[0] / t1.split('/')[1]
          if (vvle > 0.5 && vvle <= 0.9) pctcolor = '#F5A623'
          else if (vvle <= 0.5) pctcolor = '#BD2020'
          const percent = parseInt(vvle * 100, 10)
          if (parseInt(t1.split('/')[0], 10) === 0) {
            pctcolor = 'gray'
            numcolor = 'gray'
          }
          return {
            value: t1, percent, pctcolor, numcolor
          }
        })
        console.log({ captain: t.captain, data: valueArr })
        return { captain: t.captain, data: valueArr }
      })
    }
  }
}
</script>
