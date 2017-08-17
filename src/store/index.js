import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		loadedMetups: [
			{
				imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
				id: 'adfargfqfmqarvqaer323',
				title: 'Meetup in New York',
				date: new Date(),
				location: 'New York',
				description: 'New York, New York'
			},
			{
				imageUrl: 'https://c1.staticflickr.com/3/2463/3598596311_84211f2566_b.jpg',
				id: 'adfargfqfmqarvqfgzjhsr124',
				title: 'Meetup in Paris',
				date: new Date(),
				location: 'Paris',
				description: 'It\'s Paris'
			}
		],
		user: null
	},
	mutations: {
		createMeetup (state, payload) {
			state.loadedMetups.push(payload)
		},
		setUser (state, payload) {
			state.user = payload
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
		},
		signUserUp ({commit}, payload) {
			firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
				.then(
					user => {
						const newUser = {
							id: user.uid,
							registeredMeetups: []
						}
						commit('setUser', newUser)
					}
				)
				.catch(
					error => {
						console.log(error)
					}
				)
		},
		signUserIn ({commit}, payload) {
			firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
				.then(
					user => {
						const newUser = {
							id: user.uid,
							registeredMeetups: []
						}
						commit('setUser', newUser)
					}
				)
				.catch(
					error => {
						console.log(error)
					}
				)
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
		},
		user (state) {
			return state.user
		}
	}
})
