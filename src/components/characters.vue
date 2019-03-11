<template>
	<v-container grid-list-md text-xs-center>
		<v-layout justify-center class="py-5 mt-4" >
		    <v-flex>
		      <v-card class="elevation-0" v-if="!loading">
			        <v-container
			          fluid
			          grid-list-md
			        >
			          <v-layout row wrap>
			            <v-flex
			              v-for="character in characters"
			              :key="character.title"
			              v-bind="{ [`xs12 sm4 md4 lg3 xl3`]: true }"
			            >
			              	<v-card>
				                <v-img
				                	contain
				                	:src="character.image"
				                >
													<v-container
														fill-height
														pa-0
														fluid
														grid-list-md
													>
														<v-layout pa-0 fluid row align-end >
															<v-flex pa-0 style="background: rgba(0,0,0,0.8)">
																<v-card dark tile flat color="rgba(117, 117, 117, .2)">
																	<v-card-text class="title">{{character.name}}</v-card-text>
																</v-card>
																
															</v-flex>
														</v-layout>
													</v-container>
				                </v-img>
												<v-container
													fill-height
													fluid
													pa-2
												>
													<v-layout 
														pa-0 
														fluid 
														row 
													>
														<v-flex
															xs2
															align-self-center
														>
															<font-awesome-icon 
																:icon="status[character.status.toLowerCase()].icon" 
																class="fa-2x" 
																:style="{'color': status[character.status.toLowerCase()].color}"
															/>
														</v-flex>
														<v-flex
															xs2
															align-self-center
														>
															<strong>{{character.status}}</strong>
														</v-flex>
														<v-flex/>
														<v-flex
															xs3
															align-self-center
														>
															<v-card-actions>
																<showCharacter :infoCharacter="character"></showCharacter>
															</v-card-actions>
														</v-flex>
													</v-layout>
												</v-container>
			              </v-card>
			            </v-flex>
			          </v-layout>
			        </v-container>
		      	</v-card>
						<v-progress-linear v-else :indeterminate="true"></v-progress-linear>
						<v-pagination
							v-model="page"
							@input="changePageByNumber($event)"
							:length="lengthPages"
							@next="changePage(true)"
							@previous="changePage"
							:total-visible="10"
						></v-pagination>
		    </v-flex>
	  	</v-layout>
	</v-container>
</template>
<script>
import * as api from '@/services/apiRickandMorty'
const showCharacter = () => import('@/components/showCharacter')
export default {
	name: 'Characters',
	data: () => ({
		status: {
			alive: {icon: 'heartbeat', color: 'red'},
			dead: {icon: 'skull', color: 'black'},
			unknown: {icon: 'question-circle', color: 'orange'}
		},
		characters: [],
		page: 1,
		lengthPages: 0,
		nextPage: null,
		previousPage: null,
		loading: false
	}),
	methods: {
		changePageByNumber(page) {
			// console.log("page number: ", pageNumber)
			if (page) {
				this.characters = []
				let obj = {
					pageNumber: page.toString()
				}	
				this.getCharacter(obj, true)
			}
		},
		changePage(next = false) {
			this.characters = []
			if (next) this.getCharacter(this.nextPage)
			else this.getCharacter(this.previousPage)
		},
		getCharacter(page, pageNumber = false) {
			let obj = new Object()
			this.loading = true
			if (page) {
				if (pageNumber) obj = page
				else {
					obj = {
						page: page
					}
				}
			}
			api.getCharacter(obj)
				.then(result => {
					// console.log("resultado: ", result)
					this.lengthPages = result.info.pages
					this.nextPage = result.info.next
					this.previousPage = result.info.prev
					this.characters = result.results
					this.loading = false
				})
				.catch(err => {
					console.log("error: ", result)
				})
		}
	},
	created () {
		this.getCharacter()
	},
	components: {
		showCharacter
	},
	computed: {
  },
};
</script>
<style>
	
</style>