import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		loadedMetups: [
			{
				imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
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
	mutations: {
		createMeetup (state, payload) {
			state.loadedMetups.push(payload)
		}
	},
	actions: {
		createMeetup ({commit}, payload) {
			const meetup = {
				title: payload.title,
				location: payload.location,
				imageUrl: payload.imageUrl,
				description: payload.description,
				date: payload.date,
				id: 'adfsgaebtergw'
			}
			// Reach out to firebase and store it
			commit('createMeetup', meetup)
		}
	},
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
