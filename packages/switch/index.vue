<template lang="html">
  <div class="">
    <label class="switch-label">
      <input type="checkbox" class="v-switch switch-animbg">
      <span>带背景过渡效果</span>
    </label>
    <label class="switch-label">
      <input type="checkbox" class="v-switch switch-anim">
      <span>带动画过渡效果</span>
    </label>
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
  @checkedColor:#279AFC;
  @time:0.4s;
  .switch-label{
    display: flex;
    display: -webkit-flex;
    align-items: center;
    span{
      margin-left: 10px;
      line-height: 50px;
    }
  }
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
			background-color: @checkedColor;
			&:before{
				left:21px;
			}
		}

    &.switch-animbg {
      transition: background-color ease @time;
      &:before {
        transition: left 0.3s;
      }
      &:checked {
        box-shadow: #dfdfdf 0 0 0 0 inset;
        background-color: @checkedColor;
        transition: border-color @time, background-color ease @time;
        &:before {
          transition: left 0.3s;
        }
      }
    }

    &.switch-anim {
      transition: border cubic-bezier(0, 0, 0, 1) @time, box-shadow cubic-bezier(0, 0, 0, 1) @time;
      &:before {
        transition: left 0.3s;
      }
      &:checked {
        box-shadow: @checkedColor 0 0 0 16px inset;
        background-color: @checkedColor;
        transition: border ease @time, box-shadow ease @time, background-color ease @time*3;
        &:before {
          transition: left 0.3s;
        }
      }
    }
	}
</style>
