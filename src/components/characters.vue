<template>
	<v-layout justify-center>
	    <v-flex xs11 sm11>
	      <v-card class="elevation-0">
		        <v-container
		          fluid
		          grid-list-md
		        >
		          <v-layout row wrap>
		            <v-flex
		              v-for="character in characters"
		              :key="character.title"
		              v-bind="{ [`xs${character.flex}`]: true }"
		            >
		              <v-card>
		                <v-img
		                  :src="character.src"
		                  height="200px"
		                >
		                  <v-container
		                    fill-height
		                    fluid
		                    pa-2
		                  >
		                    <v-layout fill-height>
		                      <v-flex xs12 align-end flexbox>
		                        <span class="headline white--text" v-text="character.title"></span>
		                      </v-flex>
		                    </v-layout>
		                  </v-container>
		                </v-img>

		                <v-card-actions>
		                  <v-spacer></v-spacer>
		                  <v-btn icon>
		                    <v-icon>favorite</v-icon>
		                  </v-btn>
		                  <v-btn icon>
		                    <v-icon>bookmark</v-icon>
		                  </v-btn>
		                  <v-btn icon>
		                    <v-icon>share</v-icon>
		                  </v-btn>
		                </v-card-actions>
		              </v-card>
		            </v-flex>
		          </v-layout>
		        </v-container>
	      	</v-card>
	    </v-flex>
  	</v-layout>
</template>
<script>
	export default {
	name: 'Characters',
	data: () => ({
		characters: [
	        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4 },
	        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
	        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
	        { title: 'Best airlines 2', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
	        { title: 'Best airlines 3', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
	        { title: 'Best airlines 4', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
	        { title: 'Best airlines 5', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
	        { title: 'Best airlines 6', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
	        { title: 'Best airlines 7', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 }
	    ]
	}),
	methods: {
	},
	created () {
	},
	components: {
	},
	computed: {
    },
};
</script>
<style>
	
</style>