<template>
    <v-card>
        <v-card-text class="display-1">{{`Characters (${episode.name})`}}</v-card-text>
        <v-container grid-list-sm fluid aling-center>
            <v-layout row wrap>
                <v-flex
                    v-for="(character, i) in episode.characters"
                    :key="i"
                    xs2
                    d-flex
                >
                    <v-card flat tile class="d-flex">
                        <v-img
                            :src="character.image"
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
                                            <v-card-text class="body-1">{{character.name}}</v-card-text>
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
                                    
</template>
<script>
export default {
	name: 'showCharacterByEpisode',
	methods: {
        nameEpisode: item => `Episode ${item.id}: ${item.name}`
	},
    props: [
        'episode'
    ]
};
</script>
<style>
	
</style>