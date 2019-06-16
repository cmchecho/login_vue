<template>
	<div class="jumbotron">
	  <h1 class="display-4">Bienvenido</h1>
	  <p class="lead">Gestión en base de datos MySQL.</p>
	  <hr class="my-4">
	  <p>Inicie sesión para comenzar.</p>  
	  <router-link to="/login" class="btn btn-primary btn-lg" role="button">Comenzar</router-link>
	</div>
</template>

<script>
	export default {
		mounted(){
			console.log('Componente Montado');
		}
	}
</script>