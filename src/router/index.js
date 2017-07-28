import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: require('@/components/Home') },
    { path: '/meetups', name: 'Meetups', component: require('@/components/Meetup/Meetups') },
    { path: '/meetup/new', name: 'CreateMeetup', component: require('@/components/Meetup/CreateMeetup') },
    { path: '/meetups/:id', name: 'Meetup', props: true, component: require('@/components/Meetup/Meetup') },
    { path: '/profile', name: 'Profile', component: require('@/components/User/Profile') },
    { path: '/signup', name: 'Signup', component: require('@/components/User/Signup') },
    { path: '/signin', name: 'Signin', component: require('@/components/User/Signin') }
  ],
  mode: 'history'
})
