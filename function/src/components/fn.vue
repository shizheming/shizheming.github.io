<template>
    <div class="ssss">
    	<div class="left">
    		<a v-for="(item, index) in fnName" :href="'#' + index">{{item}}</a>
    	</div>
    	<div class="content">
    		<div id="1">1</div>
    		<div id="2">2</div>
    		<div id="3">3</div>
    		<div id="4">4</div>
    		<div id="5">5</div>
    		<div id="6">6</div>
    		<div id="7">7</div>
    		<div id="8">
				<pre>_.every([true, 1, null, 'yes'], _.identity);
					=&gt; false
				</pre>
    		</div>
    	</div>
    </div>
</template>

<script>
import _ from '@/js/ecma'; 
export default {
	name: 'fn',
	data () {
		return {
			fnName : []
		}
	},
	mounted () {
		this.getName();
	},
	methods : {
		getName () {
			var that = this;
			Object.keys(_).forEach((item, index, arr) => {
				that.fnName.push(item);
			});
		}
	}
}
</script>


<style scoped>
.ssss{
	/*display:flex;*/
}
.left{
	/*flex:1;*/
	position:fixed;
	width:400px;
	overflow:auto;
	height:100%;
}
a{
	display:block;
}
.content{
	/*flex:1;*/
	margin-left:400px;
}
.content >div{
	height:500px;
}
</style>
