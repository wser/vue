<template>
	<v-parallax src="/static/material.jpg" height="800">
		<v-container>		

			<v-layout row wrap class="mb-2">
				<v-flex xs12 sm6 class="text-xs-center text-sm-right">
					<v-btn large to="/meetups" class="info">Explore Meetups</v-btn>				
				</v-flex>
				<v-flex xs12 sm6 class="text-xs-center text-sm-left">
					<v-btn large to="/meetup/new" class="info">Organize Meetups</v-btn>				
				</v-flex>
			</v-layout>

			<v-layout row wrap class="mt-2">
				<v-flex xs12>
					<v-carousel :interval=8000 style="cursor: pointer;">
						<v-carousel-item
							v-for="item in meetups"
							:src="item.imageUrl"
							:key="item.id"
							@click="onLoadMeetup(item.id)"
						>
							<div class="title">
								{{ item.title }}
							</div>
						</v-carousel-item>
					</v-carousel>
				</v-flex>
			</v-layout>	

			<v-layout row wrap class="mt-2">
				<v-flex xs12 class="text-xs-center">
					<p>
						Join our awesome meetups!
					</p>
				</v-flex>
			</v-layout>

		</v-container>
	</v-parallax>
</template>


<script>
  export default {
    data () {
      return {
        meetups: [
          {
            imageUrl: 'https://cdn.pixabay.com/photo/2015/03/26/10/04/new-york-690868_960_720.jpg',
            id: 'adfargfqfmqarvqaer123',
            title: 'Meetup in New York'
          },
          { imageUrl: 'https://c1.staticflickr.com/3/2463/3598596311_84211f2566_b.jpg', id: 'adfargfqfmqarvqfgzjhsr123', title: 'Meetup in Paris' }
        ]
      }
		},
		methods: {
			onLoadMeetup (id) {
				this.$router.push('/meetups/' + id)
			}
		}
  }
</script>

<style scoped>
	.title {
		position: absolute;
		bottom: 50px;
		background-color: rgba(0,0,0,0.5);
		color: white;
		font-size: 2em;
		padding: 20px;
	}
</style>
