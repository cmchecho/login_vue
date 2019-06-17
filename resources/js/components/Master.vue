<template>
<div class="container">
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
	  <router-link class="navbar-brand" to="/">Gestor</router-link>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>
	  <div class="collapse navbar-collapse" id="navbarNav">
	    <ul class="navbar-nav">
	      <li v-if="!loggedIn" class="nav-item active">
	        <router-link class="nav-link" to="/login">Login<span class="sr-only">(current)</span></router-link>
	      </li>
	      <li v-if="loggedIn" class="nav-item">
	        <router-link class="nav-link" to="/logout">Logout</router-link>
	      </li>
	      <li class="nav-item">
	        <router-link class="nav-link" to="/aplication">Api</router-link>
	      </li>		      
	    </ul>
	  </div>
	</nav>

	<router-view></router-view>

</div>

</template>

<script>
	export default {
		computed: {
			loggedIn() {
				return this.$store.getters.loggedIn
			}
		}
	}
</script>