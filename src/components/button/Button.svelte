<script>
  import './button.css';
  import { createEventDispatcher } from 'svelte';

  // 按钮名称
  export let label = '确定';
  // 按钮样式 : primary| success| warning ...
  export let type = 'info';
  // 是否带轮廓线: true| false
  export let outline = false;
  // 按钮大小 : lg|sm
  export let size = 'md';
  // 活动状态 配合.active和aria-pressed="true"实现
  export let active = true;
  // 禁用
  export let disabled = false;

  let _btnPrefix = outline?'btn-outline':'btn';
  // 自定义样式
  let _style = '';
  // 扩展属性
  let _props = {style:_style};
  disabled && (_props.disabled = 'disabled');

  const dispatch = createEventDispatcher();

  /**
   * Optional click handler
   */
  function onClick(event) {
    dispatch('click', event);
  }
</script>

<button 
  type="button" 
  class={['btn', `${_btnPrefix}-${type}`, `btn-${size}`].join(' ')}
  aria-pressed={active}
  {..._props}
  on:click={onClick}>
  {label}
</button>

<style lang="scss">
  $font-weight-bold: 700;

  .btn{
    font-weight: $font-weight-bold;
  }
</style>