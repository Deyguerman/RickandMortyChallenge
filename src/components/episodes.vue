<template>
	<v-container grid-list-md text-xs-center>
		<v-layout justify-center class="py-5 mt-4" >
		    <v-flex>
		        <v-card class="elevation-0" v-if="!loading" color="grey lighten-3">
                    <v-container
			          fluid
			          grid-list-md
			        >
			            <v-layout row wrap>
                            <v-flex>
                                <v-expansion-panel pa-5>
                                    <v-expansion-panel-content
                                        v-for="(episode,i) in episodes"
                                        :key="i"
                                    >
                                        <template v-slot:header>
                                            <div>Episode {{i + 1}}: {{episode.name}}</div>
                                        </template>
                                        <v-card>
                                            <v-layout>
                                                <v-flex xs12 sm12>
                                                <v-card>
                                                    <v-container grid-list-sm fluid>
                                                    <v-layout row wrap>
                                                        <v-flex
                                                            v-for="(character, i) in episode.characters"
                                                            :key="i"
                                                            xs2
                                                            d-flex
                                                        >
                                                            <v-card flat tile class="d-flex">
                                                                <v-img
                                                                    src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                                                                    aspect-ratio="1"
                                                                    class="grey lighten-2"
                                                                    height="150px"
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
                                                                                    <v-card-text class="body-1">Name</v-card-text>
                                                                                </v-card>   
                                                                            </v-flex>
                                                                        </v-layout>
                                                                    </v-container>
                                                                </v-img>
                                                            </v-card>
                                                        </v-flex>
                                                    </v-layout>
                                                    </v-container>
                                                </v-card>
                                                </v-flex>
                                            </v-layout>
                                        </v-card>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
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
	name: 'Episodes',
	data: () => ({
		episodes: [],
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
				this.getEpisode(obj, true)
			}
		},
		changePage(next = false) {
			this.characters = []
			if (next) this.getEpisode(this.nextPage)
			else this.getEpisode(this.previousPage)
		},
        getCharacterByEpisode() {

        },
		getEpisode(page, pageNumber = false) {
            this.loading = true
			api.getEpisode()
                .then(result => {
                    // console.log("Episodios: ", result)
                    this.lengthPages = result.info.pages
					this.nextPage = result.info.next
					this.previousPage = result.info.prev
                    this.episodes = result.results
                    this.loading = false
                })
		}
	},
	created () {
		this.getEpisode()
	},
	components: {
	},
	computed: {
    },
};
</script>
<style>
	
</style>