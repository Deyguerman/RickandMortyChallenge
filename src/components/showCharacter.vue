<template>
    <v-menu
        class="text-xs-right"
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        offset-x
    >
        <template v-slot:activator="{ on }">
            <v-btn
                fab
                flat
                small
                v-on="on"
            >
                <v-icon>visibility</v-icon>
            </v-btn>
        </template>

        <v-card>
            <v-list>
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title><strong>Species:</strong></v-list-tile-title>
                        <v-list-tile-sub-title class="pl-3 black--text">{{infoCharacter.species}}</v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>

            <v-divider></v-divider>

            <v-list>
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title><strong>Location Name:</strong></v-list-tile-title>
                        <v-list-tile-sub-title class="pl-3 black--text">{{infoCharacter.location.name}}</v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>

            <v-divider></v-divider>

            <v-list>
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-title><strong>Creation Date:</strong></v-list-tile-title>
                        <v-list-tile-sub-title class="pl-3 black--text">{{getDate(infoCharacter.created)}}</v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list> 
        </v-card>
    </v-menu>
</template>
<script>
import moment from "moment";
export default {
	name: 'showCharacters',
	methods: {
        getDate: date => moment(date).format('L')
	},
    props: [
        'infoCharacter'
    ]
};
</script>
<style>
	
</style>