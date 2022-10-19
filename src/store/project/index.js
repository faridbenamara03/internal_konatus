import Vue from "vue"

export default {
  namespaced: true,
  state: {
    projectData: [
      {
        title: 'Quardruped Robot',
        children: [
          {
            child_title: 'New Format',
            progress: 0,
            start_date: '2022.10.16',
            end_date: '2022.11.26',
            id: '1.28.11',
            sub_project: [
              {
                id: '1.28.11.1.1',
                data: {}
              },
              {
                id: '1.28.11.1.2',
                data: {
                  progress: 0,
                  start_date: '2022.10.20',
                  end_date: '2022.11.21',
                }
              },
              {
                id: '1.28.11.1.3',
                data: {
                  progress: 0,
                  start_date: '2022.10.16',
                  end_date: '2022.11.21',
                }
              },
              {
                id: '1.28.11.1.4',
                data: {}
              },
              {
                id: '1.28.11.1.5',
                data: {
                  progress: 0,
                  start_date: '2022.10.16',
                  end_date: '2022.11.1',
                }
              },
              {
                id: '1.28.11.1.6',
                data: {
                  progress: 0,
                  start_date: '2022.10.16',
                  end_date: '2022.11.1',
                }
              },
              {
                id: '1.28.11.1.7',
                data: {
                  progress: 0,
                  start_date: '2022.11.1',
                  end_date: '2022.11.21',
                }
              },
              {
                id: '1.28.11.1.8',
                data: {
                  progress: 0,
                  start_date: '2022.11.21',
                  end_date: '2022.12.13',
                }
              },
              {
                id: '1.28.11.1.9',
                data: {
                  progress: 0,
                  start_date: '2022.11.21',
                  end_date: '2022.12.13',
                }
              },
              {
                id: '1.28.11.1.10',
                data: {
                  progress: 0,
                  start_date: '2022.11.21',
                  end_date: '2022.12.13',
                }
              },
            ]
          }
        ]
      }
    ]
  },
  mutations: {
    UPDATE_PROJECT_DATA(state) {
      const projectData2Update = [
        {
          title: 'Quardruped Robot',
          children: [
            {
              child_title: 'New Format',
              progress: 0,
              start_date: '2022.10.'.concat(parseInt(Math.random() * 3 + 13, 10)),
              end_date: '2022.11.26',
              id: '1.28.11',
              sub_project: [
                {
                  id: '1.28.11.1.1',
                  data: {
                    progress: 0,
                    start_date: '2022.10.'.concat(parseInt(Math.random() * 8 + 16, 10)),
                    end_date: '2022.11.'.concat(parseInt(Math.random() * 20 + 1, 10)),
                  }
                },
                {
                  id: '1.28.11.1.2',
                  data: {
                    progress: 0,
                    start_date: '2022.10.'.concat(parseInt(Math.random() * 10 + 16, 10)),
                    end_date: '2022.11.'.concat(parseInt(Math.random() * 20 + 1, 10)),
                  }
                },
                {
                  id: '1.28.11.1.3',
                  data: {
                    progress: 0,
                    start_date: '2022.10.'.concat(parseInt(Math.random() * 12 + 16, 10)),
                    end_date: '2022.11.'.concat(parseInt(Math.random() * 25 + 4, 10)),
                  }
                },
                {
                  id: '1.28.11.1.4',
                  data: {}
                },
                {
                  id: '1.28.11.1.5',
                  data: {
                    progress: 0,
                    start_date: '2022.10.'.concat(parseInt(Math.random() * 10 + 16, 10)),
                    end_date: '2022.11.'.concat(parseInt(Math.random() * 29 + 1, 10)),
                  }
                },
                {
                  id: '1.28.11.1.6',
                  data: {
                    progress: 0,
                    start_date: '2022.11.'.concat(parseInt(Math.random() * 4 + 1, 10)),
                    end_date: '2022.11.'.concat(parseInt(Math.random() * 20 + 6, 10)),
                  }
                },
                {
                  id: '1.28.11.1.7',
                  data: {
                    progress: 0,
                    start_date: '2022.10.'.concat(parseInt(Math.random() * 10 + 16, 10)),
                    end_date: '2022.11.'.concat(parseInt(Math.random() * 20 + 10, 10)),
                  }
                },
                {
                  id: '1.28.11.1.8',
                  data: {
                    progress: 0,
                    start_date: '2022.10.'.concat(parseInt(Math.random() * 10 + 16, 10)),
                    end_date: '2022.12.'.concat(parseInt(Math.random() * 10 + 4, 10)),
                  }
                },
                {
                  id: '1.28.11.1.9',
                  data: {
                    progress: 0,
                    start_date: '2022.11.'.concat(parseInt(Math.random() * 20 + 4, 10)),
                    end_date: '2022.12.'.concat(parseInt(Math.random() * 20 + 4, 10)),
                  }
                },
                {
                  id: '1.28.11.1.10',
                  data: {
                    progress: 0,
                    start_date: '2022.11.'.concat(parseInt(Math.random() * 20 + 4, 10)),
                    end_date: '2022.12.'.concat(parseInt(Math.random() * 20 + 4, 10)),
                  }
                },
              ]
            }
          ]
        }
      ]
      state.projectData = projectData2Update
      Vue.$toast.success('Updated Successfully.')
    }
  },
  actions: {},
}
