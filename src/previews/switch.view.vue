<template lang="html">
  <div class="">
    <h1>Switch</h1>
    <input type="checkbox" class="v-switch">
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less">
	.v-switch{
		outline: none;
		width: 52px;
		height: 32px;
		position: relative;
		border-radius: 20px;
		border: 1px solid #dfdfdf;
		-webkit-appearance:none;
		&:before{
			content: '';
			width:29px;
			height: 29px;
			position: absolute;
			top:0;
			left: 0;
			border-radius: 20px;
			background-color: #fff;
			border:1px solid #dfdfdf;
		}
		&:checked{
			background-color: #64bd63;
			&:before{
				left:21px;
			}
		}	
	}
</style>
