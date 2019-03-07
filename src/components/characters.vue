<template>
	<v-container grid-list-md text-xs-center>
		<v-layout justify-center class="py-5 mt-4">
		    <v-flex>
		      <v-card class="elevation-0">
			        <v-container
			          fluid
			          grid-list-md
			        >
			          <v-layout row wrap>
			            <v-flex
			              v-for="character in characters"
			              :key="character.title"
			              v-bind="{ [`xs12 sm4 md4 lg4 xl3`]: true }"
			            >
			              	<v-card>
				                <v-img
				                	contain
				                	:src="character.image"
				                >
				                </v-img>

				                <v-container
				                    fill-height
				                    fluid
				                    pa-2
				                  >
			                    	<span class="headline black--text" v-text="character.name"></span>
			                  	</v-container>
			                  	<v-container
			                  		fill-height
				                    fluid
				                    pa-0
				                    justify-end
			                    >
					                <v-card-actions>
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
				                </v-container>
			              </v-card>
			            </v-flex>
			          </v-layout>
			        </v-container>
		      	</v-card>
		    </v-flex>
	  	</v-layout>
	</v-container>
</template>
<script>
import * as api from '@/services/apiRickandMorty'
export default {
	name: 'Characters',
	data: () => ({
		characters: [
	        // { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4 },
	        // { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
	        // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
	        // { title: 'Best airlines 2', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
	        // { title: 'Best airlines 3', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
	        // { title: 'Best airlines 4', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
	        // { title: 'Best airlines 5', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
	        // { title: 'Best airlines 6', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
	        // { title: 'Best airlines 7', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 }
	    ]
	}),
	methods: {
	},
	created () {
		api.getCharacter({page: 'page=2'})
			.then(result => {
				console.log("resultado: ", result)
				this.characters = result
			})
			.catch(err => {
				console.log("error: ", result)
			})
	},
	components: {
	},
	computed: {
    },
};
</script>
<style>
	
</style>