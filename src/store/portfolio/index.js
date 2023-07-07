// import Vue from "vue"
// import dateFormat from "dateformat"
// import moment from "moment"

export default {
  namespaced: true,
  state: {
    demandTableEditable: false,
    optimizeStatus: 'origin',
    reportingData: [
      {
        id: '63d3d79802e5f6e2220b516e',
        title: 'Consumer Robots',
        type: 'portfolio',
        priority: 'Highest',
        budget: '210000',
        deadline: '06/02/2023',
        engaged: '215800',
        quote: '210000',
        demand: '319200',
        realEstimated: '210100',
        authorised: '124500',
        spent: '21600',
        value: '331',
        next_gate: '03/01/2022',
        children: [
          {
            id: '63d3d79802e5f6e2220b5170',
            title: 'Quadruped robot',
            parent: '63d3d79802e5f6e2220b516e',
            type: 'program',
            priority: 'Highest',
            budget: '91001',
            deadline: '06/01/2023',
            engaged: '21800',
            quote: '89000',
            demand: '19200',
            realEstimated: '10100',
            authorised: '14500',
            spent: '11600',
            value: '331',
            next_gate: '03/01/2022',
            gate: 3,
            children: [
              '63d3d79802e5f6e2220b5175',
              '63d3d79802e5f6e2220b5176',
              '63d3d79802e5f6e2220b5177',
              '63d3d79802e5f6e2220b5178'
            ]
          },
          {
            id: '63d3d79802e5f6e2220b5171',
            title: 'Micro robot observation NBC',
            parent: '63d3d79802e5f6e2220b516e',
            type: 'program',
            priority: 'lowest',
            budget: '150',
            deadline: '05/20/2018',
            engaged: '450',
            quote: '292.5',
            demand: '300',
            realEstimated: '320',
            authorised: '1000',
            spent: '100',
            value: '100',
            next_gate: '06/02/2022',
          },
          {
            id: '63d3d79802e5f6e2220b5172',
            title: 'Handling robot',
            parent: '63d3d79802e5f6e2220b516e',
            type: 'program',
            priority: 'lowest',
            budget: '150',
            deadline: '05/20/2018',
            engaged: '450',
            quote: '292.5',
            demand: '300',
            realEstimated: '320',
            authorised: '1000',
            spent: '100',
            value: '100',
            next_gate: '06/02/2022',
          },
          {
            id: '63d3d79802e5f6e2220b5173',
            title: 'Power & programming station',
            parent: '63d3d79802e5f6e2220b516e',
            type: 'program',
            priority: 'Low',
            budget: '1200',
            deadline: '03/24/2018',
            engaged: '450',
            quote: '550',
            demand: '1500',
            realEstimated: '1800',
            authorised: '900',
            spent: '100',
            value: '10',
            next_gate: '06/02/2022',
          },
        ]
      },
    ]
  },
  mutations: {
    UPDATE_DEMAND_TABLE_EDITABLE(state) {
      state.demandTableEditable = !state.demandTableEditable
    },
    UPDATE_OPTIMIZE_STATUES(state, value) {
      state.optimizeStatus = value
    },
  },
}
