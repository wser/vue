import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		loadedMetups: [
			{
				imageUrl: 'https://cdn.pixabay.com/photo/2015/03/26/10/04/new-york-690868_960_720.jpg',
				id: 'adfargfqfmqarvqaer323',
				title: 'Meetup in New York',
				date: '2017-07-17'
			},
			{
				imageUrl: 'https://c1.staticflickr.com/3/2463/3598596311_84211f2566_b.jpg',
				id: 'adfargfqfmqarvqfgzjhsr124',
				title: 'Meetup in Paris',
				date: '2017-07-19'
			}
		],
		user: {
			id: 'gwaergaefgvaerfa',
			registeredMeetups: ['adfargfqfmqarvqfgzjhsr124']
		}
	},
	mutations: {},
	actions: {},
	getters: {
		loadedMeetups (state) {
			return state.loadedMetups.sort((meetupA, meetupB) => {
				return meetupA.date > meetupB.date
			})
		},
		featuredMeetups (state, getters) {
			return getters.loadedMeetups.slice(0, 5)
		},
		loadedMeetup (state) {
			return (meetupId) => {
				return state.loadedMetups.find((meetup) => {
					return meetup.id === meetupId
				})
			}
		}
	}
})
