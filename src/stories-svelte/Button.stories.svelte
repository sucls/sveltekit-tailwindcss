<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Button from "../components/button/Button.svelte";
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta
  title="Svelte/Button"
  component={Button}
  argTypes={{
    label: { control: "text" },
    type: {
      control: { type: 'select' },
      options: ['primary','secondary','success','danger','warning','info','light','dark','link'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    outline: {control: 'boolean'},
    active: { control: "boolean" },
    disabled: {control: 'boolean'},
    onClick: { action: "onClick" },
  }}
/>

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
  <Button {...args} on:click={args.onClick} />
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story
  name="Primary"
  args={{
    type : 'primary',
    label: "Button",
  }}
/>

<Story
  name="Secondary"
  args={{
    type : 'secondary',
    label: "Button",
  }}
/>
<Story
  name="Large Success"
  args={{
    type : 'success',
    size: "lg",
    label: "Button",
  }}
/>

<Story
  name="Small Warning"
  args={{
    type : 'warning',
    size: "sm",
    label: "Button",
  }}
/>

<Story
  name="Disabled Danger"
  args={{
    type : 'danger',
    disabled: true,
    label: "Button",
  }}
/>