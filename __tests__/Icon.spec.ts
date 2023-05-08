import { mount } from "@vue/test-utils";
// @ts-ignore
import BIcon from "../src/components/Icon/Icon.vue";

describe("BIcon", () => {
  it("render icon when icon property is passed", () => {
    const wrapper = mount(BIcon, {
      props: { icon: "eye" },
    });

    expect(wrapper.classes()).toContain("icon");
    expect(wrapper.find("i").classes()).toContain("mdi-eye");
  });

  it("render a colored icon when type is passed", () => {
    const wrapper = mount(BIcon, {
      props: {
        icon: "eye",
        type: "is-primary",
      },
    });

    expect(wrapper.classes()).toContain("has-text-primary");
  });
});
