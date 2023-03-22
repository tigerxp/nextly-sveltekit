<script>
  export let src;
  export let title = '';
  export let alt = '';
  export let width;
  export let height;
  // TODO: implement this functionality
  export let layout = 'intrinsic';
  export let loading = 'eager';
  export let placeholder = 'blur';
</script>

<img
  {src}
  {width}
  {height}
  {alt}
  {title}
  data-layout={layout}
  data-loading={loading}
  data-placeholder={placeholder}
/>
