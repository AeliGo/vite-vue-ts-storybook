import { Story } from "@storybook/vue3";
import BIcon from "./Icon.vue";

export default {
  title: "Components/Icon",
  component: BIcon,
  argTypes: {
    type: {
      control: { type: "select" },
      options: [
        "is-white",
        "is-black",
        "is-light",
        "is-dark",
        "is-primary",
        "is-info",
        "is-success",
        "is-warning",
        "is-danger",
      ],
    },
    pack: {
      control: { type: "select" },
      options: ["mdi", "fa", "fas", "far", "fad", "fal"],
    },
    size: {
      control: { type: "select" },
      options: ["is-small", "is-medium", "is-large"],
    },
  },
};

const Template: Story = (args) => ({
  components: { BIcon },
  setup() {
    return { args };
  },
  template: '<b-icon v-bind="args" />',
});

export const MDITemplateSmall = Template.bind({
  name: "Material Design Icons",
});
MDITemplateSmall.args = {
  icon: "view-dashboard",
  size: "is-small",
  type: "is-primary",
};

export const MDITemplateMedium = Template.bind({
  name: "Material Design Icons",
});
MDITemplateMedium.args = {
  icon: "view-dashboard",
  size: "is-medium",
  type: "is-primary",
};

export const MDITemplateLarge = Template.bind({
  name: "Material Design Icons",
});
MDITemplateLarge.args = {
  icon: "view-dashboard",
  size: "is-large",
  type: "is-primary",
};
