import { mount } from "@vue/test-utils";
// @ts-ignore
import Header from "../src/components/Header.vue";

describe("Header", () => {
  it("renders with title prop", () => {
    const wrapper = mount(Header, {
      props: {
        type: "My App",
      },
    });
    expect(wrapper.text()).toContain("My App");
  });
});
