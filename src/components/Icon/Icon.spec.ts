import { shallowMount } from "@vue/test-utils";
import BIcon from "../../components/Icon/Icon.vue";

describe("BIcon", () => {
  it("is vue instance", () => {
    const wrapper = shallowMount(BIcon);

    expect(wrapper.vm.$options.name).toBe("BIcon");
    expect(wrapper.vm).toBeTruthy();
  });

  it("render icon when icon property is passed", () => {
    const wrapper = shallowMount(BIcon, {
      props: { icon: "eye" },
    });

    expect(wrapper.classes()).toContain("icon");
    expect(wrapper.find("i").classes()).toContain("mdi");
    expect(wrapper.find("i").classes()).toContain("mdi-eye");
    expect(wrapper.find("i").classes()).toContain("mdi-24px");
  });

  it("render a colored icon when type is passed", () => {
    const wrapper = shallowMount(BIcon, {
      props: {
        icon: "eye",
        type: "is-primary",
      },
    });

    expect(wrapper.classes()).toContain("has-text-primary");
  });

  it("returns correct color for newType when type is passed as an object", () => {
    const wrapper = shallowMount(BIcon, {
      props: {
        icon: "eye",
        type: { "is-primary": true },
      },
    });

    expect(wrapper.vm.newType).toEqual("has-text-primary");
  });

  it("render icon package correctly when the pack property is is passed.", () => {
    const wrapper = shallowMount(BIcon, {
      props: {
        icon: "eye",
        pack: "fa",
      },
    });

    expect(wrapper.find("i").classes()).toContain("fa-eye");
  });

  it("use both packages when the both property is passed", async () => {
    const equivalentIcons: Record<string, string> = {
      check: "check",
      information: "info-circle",
      "check-circle": "check-circle",
      alert: "exclamation-triangle",
      "alert-circle": "exclamation-circle",
      "arrow-up": "arrow-up",
      "chevron-right": "angle-right",
      "chevron-left": "angle-left",
      "chevron-down": "angle-down",
      eye: "eye",
      "eye-off": "eye-slash",
      "menu-down": "caret-down",
      "menu-up": "caret-up",
      other: "other",
    };

    const wrapper = shallowMount(BIcon, {
      props: {
        icon: "eye",
        both: true,
      },
    });
    wrapper.setProps({ pack: "fa" });

    for (const icon of Object.keys(equivalentIcons)) {
      await wrapper.setProps({ icon });
      await wrapper.vm.$nextTick();
      expect(wrapper.find("i").classes()).toContain(
        `fa-${equivalentIcons[icon]}`
      );
    }
  });

  it("display size when size property is passed", async () => {
    const wrapper = shallowMount(BIcon, {
      props: {
        icon: "eye",
      },
    });

    expect(wrapper.find("i").classes()).toContain("mdi-24px");

    await wrapper.setProps({ size: "is-small" });
    await wrapper.vm.$nextTick();
    expect(wrapper.find("i").classes()).toContain("mdi");
    expect(wrapper.find("i").classes()).toContain("mdi-eye");

    await wrapper.setProps({ size: "is-medium" });
    await wrapper.vm.$nextTick();
    expect(wrapper.find("i").classes()).toContain("mdi-36px");

    await wrapper.setProps({ size: "is-large" });
    await wrapper.vm.$nextTick();
    expect(wrapper.find("i").classes()).toContain("mdi-48px");
  });

  it("overrides icon font size when customSize property is passed", () => {
    const wrapper = shallowMount(BIcon, {
      props: {
        icon: "eye",
        pack: "fa",
        customSize: "fa-2x",
      },
    });

    expect(wrapper.find("i").classes()).toContain("fa");
    expect(wrapper.find("i").classes()).toContain("fa-2x");
  });

  it("render custom classes when customClass property is passed", () => {
    const wrapper = shallowMount(BIcon, {
      props: {
        icon: "eye",
        customClass: "foo-bar",
      },
    });

    expect(wrapper.find("i").classes()).toContain("foo-bar");
  });
});
