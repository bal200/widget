<template>
	<div>
		<h1>Competitions</h1>
		<div class="comp-list">
			<div class="card" v-for="comp in comps" :key="comp.id">
				<img v-if="comp.image" class="card-img" :src="comp.image" alt="image">
        <div class="darken"></div>
				<div class="card-img-overlay white-text pointer" @click="openComp(comp)">
					<h4 class="card-title">{{comp.title}}</h4>
					<p class="card-text">{{comp.description}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Service, {Competition} from "../services/service"
@Component
export default class CompList extends Vue {
	// props
	@Prop() private msg!: string;
	
	// data
	comps: Competition[] =[];

	mounted() {
		Service.getCompetitions()
			.then(result => {
				this.comps = result;
			});
	}
	openComp(comp:Competition) {
		console.log("click "+comp.title);
    this.$router.push( 'comp/' + comp.id )
	}
}
</script>

<style lang="scss" scoped>

/* grid */
// @import "~bootstrap/scss/bootstrap-grid";
// /* card */
// @import "~bootstrap/scss/mixins/_border-radius";
// @import "~bootstrap/scss/mixins/_hover";
// @import "~bootstrap/scss/_card";
h1 {
	margin: 0;
}
.comp-list {
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
}
.card {
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 300px;
	word-wrap: break-word;
	background-color: #fff;
	background-clip: border-box;
	border: 1px solid rgba(0, 0, 0, 0.125);
	border-radius: 0.25rem;
  margin-bottom: 1rem;
	.card-img {
		flex-shrink: 0;
   	width: 100%;
	}
	.card-img-overlay {
		position: absolute;
		top: 0; left: 0;
		right: 0; bottom: 0;
		padding: 1.25rem;
	}
	.card-title {
		margin-bottom: 0.75rem;
	}
	.card-text {
		margin-bottom: 0;
	}
}
.darken {
  position: absolute;
  right: 0; bottom: 0;
  background: #0004;
}
.white-text {
  color: white;
}
.pointer {
	cursor: pointer;
}

</style>
