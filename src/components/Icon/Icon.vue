<template>
  <span class="icon" :class="[newType, size]">
    <i
      v-if="!useIconComponent"
      :class="[newPack, newIcon, newCustomSize, customClass]"
    />
    <component
      v-else
      :is="useIconComponent"
      :icon="[newPack, newIcon]"
      :size="newCustomSize"
      :class="[customClass]"
    />
  </span>
</template>

<script lang="ts">
import { ref, computed, watchEffect } from "vue";
import config from "@/utils/config";
import getIcons from "@/utils/icons";

export default {
  name: "BIcon",
  props: {
    type: [String, Object],
    component: String,
    pack: String,
    icon: String,
    size: String,
    customSize: String,
    customClass: String,
    both: Boolean,
  },
  setup(props) {
    const newPack = ref<string>(config.defaultIconPack);
    const newIcon = ref<string>("");
    const allIcons = computed(() => getIcons()[newPack.value]);
    const iconPrefix = computed(() => allIcons.value?.iconPrefix ?? "");

    const newType = computed(() => {
      if (!props.type) return;

      let splitType: string[] = [];
      if (typeof props.type === "string") {
        splitType = props.type.split("-");
      } else {
        for (const key in props.type) {
          if (props.type[key]) {
            splitType = key.split("-");
            break;
          }
        }
      }
      if (splitType.length <= 1) return;

      const [, ...type] = splitType;
      return `has-text-${type.join("-")}`;
    });
    const customSizeByPack = computed(() => {
      if (allIcons.value?.sizes) {
        if (props.size && allIcons.value.sizes[props.size] !== undefined) {
          return allIcons.value.sizes[props.size];
        } else if (allIcons.value.sizes.default) {
          return allIcons.value.sizes.default;
        }
      }
      return null;
    });
    const newCustomSize = computed(
      () => props.customSize || customSizeByPack.value
    );
    const useIconComponent = computed(
      () => props.component ?? config.defaultIconComponent
    );

    function getEquivalentIconOf(value: string) {
      if (!props.both) {
        return value;
      }

      if (allIcons.value?.internalIcons?.[value]) {
        return allIcons.value.internalIcons[value];
      }
      return value;
    }

    watchEffect(() => {
      if (props.pack) {
        newPack.value = props.pack;
      }
    });

    watchEffect(() => {
      if (props.icon) {
        newIcon.value = `${iconPrefix.value}${getEquivalentIconOf(props.icon)}`;
      }
    });

    return {
      newPack,
      allIcons,
      iconPrefix,
      newIcon,
      newType,
      customSizeByPack,
      newCustomSize,
      useIconComponent,
      getEquivalentIconOf,
    };
  },
};
</script>
