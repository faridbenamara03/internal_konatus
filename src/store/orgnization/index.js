import Vue from "vue"
import dateFormat from "dateformat"
// import moment from "moment"

export default {
  namespaced: true,
  state: {
    teams: ['team a', 'team b', 'team c', 'team d', 'team e'],
    fields: ['programs', 'gate', 'next_gate'],
    total_data: [24, 45, 101, 117, 12],
    data: [
      {
        title: 'consumer robots',
        projects: [
          {
            title: 'Quadruped robot',
            gate: '3',
            next_gate: '02/03/2022',
            data: ['21', '37', '88', '114', '9'],
            phases: [
              {
                title: 'New format',
                gate: '2',
                next_gate: '01/01/2021',
                data: ['15', '31', '81', '104', '0'],
              },
              {
                title: 'Enhanced motricity',
                gate: '1',
                next_gate: '01/01/2021',
                data: ['2', '0', '4', '5', '5'],
              },
              {
                title: 'Enhanced Autonomy',
                gate: '0',
                next_gate: '02/02/2021',
                data: ['2', '2', '0', '0', '2'],
              },
              {
                title: 'Dual sourcing for Q',
                gate: '0',
                next_gate: '01/01/2021',
                data: ['2', '2', '0', '2', '0'],
              },
              {
                title: 'Precise movement & control',
                gate: '0',
                next_gate: '02/01/2021',
                data: ['0', '2', '3', '3', '2'],
              },
            ]
          },
          {
            title: 'handling robot',
            gate: '54',
            next_gate: '04/01/2021',
            data: ['0', '0', '0', '0', '0'],
            phases: [
              {
                title: 'update_interface',
                gate: '2',
                next_gate: '01/01/2021',
                data: ['15', '31', '81', '104', '0'],
              },
              {
                title: 'Backend_optimize',
                gate: '1',
                next_gate: '01/01/2021',
                data: ['2', '0', '4', '5', '5'],
              },
              {
                title: 'Anatomy Calculus',
                gate: '0',
                next_gate: '02/02/2021',
                data: ['2', '2', '0', '0', '2'],
              },
              {
                title: 'Denny Soon',
                gate: '0',
                next_gate: '01/01/2021',
                data: ['2', '2', '0', '2', '0'],
              },
            ]
          },
          {
            title: 'power & programming satellite',
            gate: '1',
            next_gate: '01/01/2021',
            data: ['3', '8', '13', '3', '3'],
            phases: [
              {
                title: 'launch perfection',
                gate: '2',
                next_gate: '01/01/2021',
                data: ['15', '31', '81', '104', '0'],
              },
              {
                title: 'calculate orbit',
                gate: '1',
                next_gate: '01/01/2021',
                data: ['2', '0', '4', '5', '5'],
              },
              {
                title: 'communication testing',
                gate: '0',
                next_gate: '02/02/2021',
                data: ['2', '2', '0', '0', '2'],
              },
            ]
          },
        ]
      }
    ],
    reportingData: [
      {
        title: 'Program 29',
        children: [
          {
            child_title: 'Next gen platform',
            progress: 60,
            start_date: '2023.1.4',
            end_date: '2023.2.12',
            start_date1: '2023.1.2',
            end_date1: '2023.2.22',
            start_date2: '2023.1.1',
            end_date2: '2023.2.7',
            start_date3: '2023.1.3',
            end_date3: '2023.2.12',
            id: '2.29.18.1',
            sub_project: [
              {
                id: '2.29.18.1.10',
                progress: 0,
                start_date: '2023.1.2',
                end_date: '2023.1.30',
                start_date1: '2023.1.3',
                end_date1: '2023.1.28',
              },
              {
                id: '2.29.18.1.11',
                progress: 0,
                start_date: '2023.1.4',
                end_date: '2023.1.31',
                start_date1: '2023.1.5',
                end_date1: '2023.1.28',
                start_date2: '2023.1.2',
                end_date2: '2023.1.31',
                start_date3: '2023.1.3',
                end_date3: '2023.1.31',
              },
              {
                id: '2.29.18.1.110',
                progress: 100,
                start_date: '2023.1.1',
                end_date: '2023.2.12',
                start_date1: '2023.1.2',
                end_date1: '2023.2.15',
                start_date2: '2023.1.4',
                end_date2: '2023.2.11',
                start_date3: '2023.1.2',
                end_date3: '2023.2.12',
              },
              {
                id: '2.29.18.1.111',
                progress: 100,
                start_date: '2023.1.4',
                end_date: '2023.2.10',
                start_date1: '2023.1.3',
                end_date1: '2023.2.11',
                start_date2: '2023.1.2',
                end_date2: '2023.2.9',
                start_date3: '2023.1.4',
                end_date3: '2023.2.5',
              },
              {
                id: '2.29.18.1.112',
                progress: 100,
                start_date: '2023.1.13',
                end_date: '2023.2.16',
                start_date1: '2023.1.13',
                end_date1: '2023.2.16',
                start_date2: '2023.1.13',
                end_date2: '2023.2.16',
                start_date3: '2023.1.13',
                end_date3: '2023.2.16',
              },
              {
                id: '2.29.18.1.12',
                progress: 0,
                start_date: '2023.1.15',
                end_date: '2023.1.30',
                start_date1: '2023.1.15',
                end_date1: '2023.1.28',
                start_date2: '2023.1.5',
                end_date2: '2023.1.30',
                start_date3: '2023.1.5',
                end_date3: '2023.1.30',
              },
              {
                id: '2.29.18.1.13',
                progress: 0,
                start_date: '2023.1.15',
                end_date: '2023.1.31',
                start_date1: '2023.1.4',
                end_date1: '2023.1.28',
                start_date2: '2023.1.2',
                end_date2: '2023.1.31',
                start_date3: '2023.1.17',
                end_date3: '2023.1.31',
              },
              {
                id: '2.29.18.1.14',
                progress: 0,
                start_date: '2023.1.15',
                end_date: '2023.1.30',
                start_date1: '2023.1.2',
                end_date1: '2023.1.28',
                start_date2: '2023.1.31',
                end_date2: '2023.2.30',
                start_date3: '2023.1.4',
                end_date3: '2023.1.30',
              },
              {
                id: '2.29.18.1.15',
                progress: 0,
                start_date: '2023.1.15',
                end_date: '2023.1.25',
                start_date1: '2023.1.15',
                end_date1: '2023.1.25',
                start_date2: '2023.1.15',
                end_date2: '2023.1.25',
                start_date3: '2023.1.15',
                end_date3: '2023.1.25',
              },
              {
                id: '2.29.18.1.16',
              },
              {
                id: '2.29.18.1.17',
              },
            ]
          }
        ]
      }
    ]
  },
  mutations: {
    UPDATE_DATA(state) {
      Vue.$toast.success('Updated Successfully.')
      const v11 = [Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50)]
      const v12 = [Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50)]
      const v13 = [Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50)]
      const v14 = [Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50)]
      const v15 = [Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50)]
      const v21 = [Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50)]
      const v22 = [Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50)]
      const v23 = [Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50)]
      const v24 = [Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50)]
      const v31 = [Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50)]
      const v32 = [Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50)]
      const v33 = [Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50)]
      const v1 = v11.map((num, idx) => num + v12[idx] + v13[idx] + v14[idx] + v15[idx])
      const v2 = v21.map((num, idx) => num + v22[idx] + v23[idx] + v24[idx])
      const v3 = v31.map((num, idx) => num + v32[idx] + v33[idx])
      const g11 = Vue.faker().random.number(10)
      const g12 = Vue.faker().random.number(10)
      const g13 = Vue.faker().random.number(10)
      const g14 = Vue.faker().random.number(10)
      const g15 = Vue.faker().random.number(10)
      const g21 = Vue.faker().random.number(10)
      const g22 = Vue.faker().random.number(10)
      const g23 = Vue.faker().random.number(10)
      const g24 = Vue.faker().random.number(10)
      const g31 = Vue.faker().random.number(10)
      const g32 = Vue.faker().random.number(10)
      const g33 = Vue.faker().random.number(10)
      const g1 = g11 + g12 + g13 + g14 + g15
      const g2 = g21 + g22 + g23 + g24
      const g3 = g31 + g32 + g33
      const vt = v1.map((t, i) => t + v2[i] + v3[i])
      const data = [
        {
          title: Vue.faker().lorem.words(2),
          projects: [
            {
              title: Vue.faker().lorem.words(2),
              gate: g1,
              next_gate: dateFormat(Vue.faker().date.future(), 'mm/dd/yyyy'),
              data: v1,
              phases: [
                {
                  title: Vue.faker().lorem.words(2),
                  gate: g11,
                  next_gate: dateFormat(Vue.faker().date.future(), 'mm/dd/yyyy'),
                  data: v11
                },
                {
                  title: Vue.faker().lorem.words(2),
                  gate: g12,
                  next_gate: dateFormat(Vue.faker().date.past(), 'mm/dd/yyyy'),
                  data: v12
                },
                {
                  title: Vue.faker().lorem.words(2),
                  gate: g13,
                  next_gate: dateFormat(Vue.faker().date.past(), 'mm/dd/yyyy'),
                  data: v13
                },
                {
                  title: Vue.faker().lorem.words(2),
                  gate: g14,
                  next_gate: dateFormat(Vue.faker().date.past(), 'mm/dd/yyyy'),
                  data: v14
                },
                {
                  title: Vue.faker().lorem.words(2),
                  gate: g15,
                  next_gate: dateFormat(Vue.faker().date.past(), 'mm/dd/yyyy'),
                  data: v15
                },
              ]
            },
            {
              title: Vue.faker().lorem.words(2),
              gate: g2,
              next_gate: dateFormat(Vue.faker().date.past(), 'mm/dd/yyyy'),
              data: v2,
              phases: [
                {
                  title: Vue.faker().lorem.words(2),
                  gate: g21,
                  next_gate: dateFormat(Vue.faker().date.past(), 'mm/dd/yyyy'),
                  data: v21
                },
                {
                  title: Vue.faker().lorem.words(2),
                  gate: g22,
                  next_gate: dateFormat(Vue.faker().date.past(), 'mm/dd/yyyy'),
                  data: v22
                },
                {
                  title: Vue.faker().lorem.words(2),
                  gate: g23,
                  next_gate: dateFormat(Vue.faker().date.past(), 'mm/dd/yyyy'),
                  data: v23
                },
                {
                  title: Vue.faker().lorem.words(2),
                  gate: g24,
                  next_gate: dateFormat(Vue.faker().date.past(), 'mm/dd/yyyy'),
                  data: v24
                },
              ]
            },
            {
              title: Vue.faker().lorem.words(2),
              gate: g3,
              next_gate: dateFormat(Vue.faker().date.past(), 'mm/dd/yyyy'),
              data: v3,
              phases: [
                {
                  title: Vue.faker().lorem.words(2),
                  gate: g31,
                  next_gate: dateFormat(Vue.faker().date.past(), 'mm/dd/yyyy'),
                  data: v31
                },
                {
                  title: Vue.faker().lorem.words(2),
                  gate: g32,
                  next_gate: dateFormat(Vue.faker().date.past(), 'mm/dd/yyyy'),
                  data: v32
                },
                {
                  title: Vue.faker().lorem.words(2),
                  gate: g33,
                  next_gate: dateFormat(Vue.faker().date.past(), 'mm/dd/yyyy'),
                  data: v33
                },
              ]
            },
          ]
        }
      ]
      state.data = data
      state.total_data = vt
    },
    UPDATE_REPORTING_DATA(state) {
      const st = parseInt(Math.random() * 10 + 4, 10)
      const st1 = parseInt(Math.random() * 10 + 5, 10)
      const st20 = parseInt(Math.random() * 10 + 5, 10)
      const st21 = parseInt(Math.random() * 10 + 5, 10)
      const st30 = parseInt(Math.random() * 10 + 5, 10)
      const st31 = parseInt(Math.random() * 10 + 5, 10)
      const st40 = parseInt(Math.random() * 10 + 5, 10)
      const st41 = parseInt(Math.random() * 10 + 5, 10)
      const st50 = parseInt(Math.random() * 10 + 5, 10)
      const st51 = parseInt(Math.random() * 10 + 5, 10)
      const st52 = parseInt(Math.random() * 10 + 5, 10)
      const st60 = parseInt(Math.random() * 10 + 5, 10)
      const st61 = parseInt(Math.random() * 10 + 5, 10)
      const st62 = parseInt(Math.random() * 10 + 5, 10)
      const st70 = parseInt(Math.random() * 10 + 5, 10)
      const st71 = parseInt(Math.random() * 10 + 5, 10)
      const st72 = parseInt(Math.random() * 10 + 5, 10)
      const reportingData2Update = [
        {
          title: 'Program 29',
          children: [
            {
              child_title: 'Next gen platform',
              progress: 60,
              start_date: `2023.1.${st}`,
              end_date: `2023.2.${st1}`,
              start_date1: `2023.1.${st}`,
              end_date1: `2023.2.${st1}`,
              start_date2: `2023.1.${st}`,
              end_date2: `2023.2.${st1}`,
              start_date3: `2023.1.${st}`,
              end_date3: `2023.2.${st1}`,
              id: '2.29.18.1',
              sub_project: [
                {
                  id: '2.29.18.1.10',
                  progress: 0,
                  start_date: `2023.1.${st20}`,
                  end_date: `2023.2.${st21}`,
                  start_date1: `2023.1.${st20}`,
                  end_date1: `2023.2.${st21}`,
                },
                {
                  id: '2.29.18.1.11',
                  progress: 0,
                  start_date: `2023.1.${st30}`,
                  end_date: `2023.2.${st31}`,
                  start_date1: `2023.1.${st30}`,
                  end_date1: `2023.2.${st31}`,
                  start_date2: `2023.1.${st30}`,
                  end_date2: `2023.2.${st31}`,
                  start_date3: `2023.1.${st30}`,
                  end_date3: `2023.2.${st31}`,
                },
                {
                  id: '2.29.18.1.110',
                  progress: 100,
                  start_date: `2023.1.${st20}`,
                  end_date: `2023.2.${st21}`,
                  start_date1: `2023.1.${st20}`,
                  end_date1: `2023.2.${st21}`,
                  start_date2: `2023.1.${st20}`,
                  end_date2: `2023.2.${st21}`,
                  start_date3: `2023.1.${st20}`,
                  end_date3: `2023.2.${st21}`,
                },
                {
                  id: '2.29.18.1.111',
                  progress: 100,
                  start_date: `2023.1.${st30}`,
                  end_date: `2023.2.${st31}`,
                  start_date1: `2023.1.${st30}`,
                  end_date1: `2023.2.${st31}`,
                  start_date2: `2023.1.${st30}`,
                  end_date2: `2023.2.${st31}`,
                  start_date3: `2023.1.${st30}`,
                  end_date3: `2023.2.${st31}`,
                },
                {
                  id: '2.29.18.1.112',
                  progress: 100,
                  start_date: `2023.1.${st40}`,
                  end_date: `2023.2.${st41}`,
                  start_date1: `2023.1.${st40}`,
                  end_date1: `2023.2.${st41}`,
                  start_date2: `2023.1.${st40}`,
                  end_date2: `2023.2.${st41}`,
                  start_date3: `2023.1.${st40}`,
                  end_date3: `2023.2.${st41}`,
                },
                {
                  id: '2.29.18.1.12',
                  progress: 0,
                  start_date: `2023.1.${st50}`,
                  end_date: `2023.2.${st51}`,
                  start_date1: `2023.1.${st50}`,
                  end_date1: `2023.2.${st51}`,
                  start_date2: `2023.1.${st52}`,
                  end_date2: `2023.2.${st51}`,
                  start_date3: `2023.1.${st52}`,
                  end_date3: `2023.2.${st51}`,
                },
                {
                  id: '2.29.18.1.13',
                  progress: 0,
                  start_date: `2023.1.${st60}`,
                  end_date: `2023.2.${st61}`,
                  start_date1: `2023.1.${st60}`,
                  end_date1: `2023.2.${st61}`,
                  start_date2: `2023.1.${st62}`,
                  end_date2: `2023.2.${st61}`,
                  start_date3: `2023.1.${st62}`,
                  end_date3: `2023.2.${st61}`,
                },
                {
                  id: '2.29.18.1.14',
                  progress: 0,
                  start_date: `2023.1.${st70}`,
                  end_date: `2023.2.${st72}`,
                  start_date1: `2023.1.${st70}`,
                  end_date1: `2023.2.${st72}`,
                  start_date2: `2023.1.${st71}`,
                  end_date2: `2023.2.${st72}`,
                  start_date3: `2023.1.${st71}`,
                  end_date3: `2023.2.${st72}`,
                },
                {
                  id: '2.29.18.1.15',
                  progress: 0,
                  start_date: '2023.1.5',
                  end_date: '2023.2.15',
                  start_date1: '2023.1.2',
                  end_date1: '2023.2.9',
                  start_date2: '2023.1.4',
                  end_date2: '2023.2.11',
                  start_date3: '2023.1.7',
                  end_date3: '2023.2.15',
                },
                {
                  id: '2.29.18.1.16',
                },
                {
                  id: '2.29.18.1.17',
                },
              ]
            }
          ]
        }
      ]
      state.reportingData = reportingData2Update
      Vue.$toast.success('Updated Successfully.')
    }
  },
}
