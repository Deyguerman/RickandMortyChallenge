<template>
	<v-container grid-list-md text-xs-center>
        <v-layout justify-center class="py-5 mt-4" >
            <v-flex>
                <v-card class="elevation-0" v-if="!loading" color="grey lighten-3">
                    <v-container
                        fluid
                        grid-list-md
                    >
                        <v-layout row wrap justify-center>
                            <v-flex>
                                <v-card min-height="60vh">
                                    <v-card-text>
                                        <v-flex v-bind="{ [`xs6 sm6 md8 lg8`]: true }">
                                            <v-autocomplete
                                                clearable
                                                v-model="episode"
                                                :items="episodes"
                                                :loading="loadingCharacters"
                                                color="black"
                                                hide-no-data
                                                hide-selected
                                                :item-text="nameEpisode"
                                                item-value="characters"
                                                label="Rick and Morty Episodes"
                                                placeholder="Start typing to Search"
                                                prepend-icon="search"
                                                return-object
                                                @change="getCharacterByEpisode($event)"
                                            ></v-autocomplete>
                                        </v-flex>
                                    </v-card-text>
                                    <v-card-text v-if="episode.characters">
                                        <showCharacterByEpisode :episode="episode"></showCharacterByEpisode>
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
                <v-progress-linear v-else :indeterminate="true"></v-progress-linear>
            </v-flex>
        </v-layout>
	</v-container>
</template>
<script>
import * as api from '@/services/apiRickandMorty'
const showCharacterByEpisode = () => import('@/components/showCharacterByEpisode')
export default {
	name: 'Episodes',
	data: () => ({
		episodes: [],
        episode: {},
		page: 1,
		lengthPages: 0,
		nextPage: null,
		previousPage: null,
		loading: false,
        loadingCharacters: false
	}),
	methods: {
        nameEpisode: item => `Episode ${item.id}: ${item.name}`,
		changePage (next = false) {
			if (next) this.getEpisode(this.nextPage)
			else this.getEpisode(this.previousPage)
		},
        getCharacterByEpisode(mapEpisode) {
            // console.log("Llego con: ", mapEpisode)
            return new Promise ((resolve) => {
                this.episode = {}
                if(!mapEpisode) resolve()
                else {
                    this.loadingCharacters = true
                    let newCharacters = []
                    async function map (mapEpisode, newCharacters) {
                        let obj = {}
                        await mapEpisode.characters.forEach(character => {
                            // console.log("Character: ", character)
                            obj = {route: character}
                            api.getCharacterByEpisode(obj)
                                .then(result => {
                                    newCharacters.push(result)
                                })
                            
                        })
                    }

                    map(mapEpisode, newCharacters)
                    mapEpisode.characters = newCharacters
                    this.episode = mapEpisode
                    this.loadingCharacters = false
                    resolve()
                }                
            })
        },
		getEpisode(page) {
            let obj = {}
            this.loading = true
            if(page) obj.page = page
			api.getEpisode(obj)
                .then(result => {
                    // console.log("Episodios: ", result)
                    if(!page){
                        this.lengthPages = result.info.pages
                        this.nextPage = result.info.next
                        this.previousPage = result.info.prev
                        this.episodes = result.results
                        this.changePage(true)
                    } else {
                        // console.log(`Episodios pagina ${page} =`, result)
                        result.results.forEach(elem => this.episodes.push(elem))
                    }
                    
                    this.loading = false
                })
		}
	},
	created () {
		this.getEpisode()
	},
	components: {
        showCharacterByEpisode
	},
	computed: {
    },
};
</script>
<style>
	
</style>