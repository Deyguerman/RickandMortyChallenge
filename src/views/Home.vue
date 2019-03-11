<template>
	<v-app id="inspire" py-3>

	    <v-navigation-drawer
	      v-model="drawer"
	      app
	      temporary
	      dark
	    >
	      	<v-list dense>
		      	<v-list-tile
		      		avatar
		      		flat
		        	v-for="(link, i) in links"
		        	:key="i"
		        	:to="link.to"
		        	
		      	>
		      		<v-list-tile-avatar>
								<v-icon>{{link.avatar}}</v-icon>
							</v-list-tile-avatar>
		        	<v-list-tile-content>
								<v-list-tile-title>{{link.text}}</v-list-tile-title>
							</v-list-tile-content>
		      	</v-list-tile>
		    </v-list>
	    </v-navigation-drawer>

	    <v-toolbar
	    	fixed 
	    	app
	    	class="elevation-0"
    	>
	      	<v-toolbar-side-icon
	        	class="hidden-md-and-up"
	        	@click.stop="drawer = !drawer" />

	        <v-img
	          :src="require('@/assets/logo.png')"
	          contain
	          height="48"
	          width="48"
	          max-width="48"
	          @click="routerHome"
	        />

	      	<v-toolbar-title>
	      		<v-img
		          :src="require('@/assets/title.png')"
		          contain
		          height="150"
		          width="150"
		          max-width="150"
		          @click="routerHome"
		        />
	    	</v-toolbar-title>
	      	
	      	<v-spacer />
	      	<v-btn
          		v-for="(link, i) in links"
	          	:key="i"
	          	:to="link.to"
	          	color="primary"
	          	class="ml-0 hidden-sm-and-down"
	        >
	          	{{ link.text }}
	        </v-btn>
    	</v-toolbar>

		<router-view app></router-view>
	   
	    <v-footer 
	    	dark 
	    	app
		>
	      <span class="white--text">&copy; Deyguerman Guzmán 2019</span>
	    </v-footer>
  </v-app>
</template>

<script>
export default {
	name: 'home',
  	data: () => ({
    	drawer: false,
    	links: [
    		{text: 'Characters', to: {name: 'characters'}, avatar: 'group'},
    		{text: 'Episode', to: {name: 'episodes'}, avatar: 'photo_library'},
    		// {text: 'About', to: '/', avatar: 'error'}
    	]
  	}),
  	methods: {
  		routerHome () {
  			this.$router.push({
  				name: 'home'
  			})
  		}
  	},
  	components: {
  	}
}
</script>
