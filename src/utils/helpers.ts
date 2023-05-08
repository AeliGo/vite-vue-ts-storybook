/**
 * Merge function to replace Object.assign with deep merging possibility
 */
const isObject = (item: any): boolean =>
  typeof item === "object" && !Array.isArray(item);

const mergeFn = (
  target: Record<string, any>,
  source: Record<string, any>,
  deep = false
) => {
  if (deep || !Object.assign) {
    const isDeep = (prop: string) =>
      isObject(source[prop]) &&
      target !== null &&
      Object.prototype.hasOwnProperty.call(target, prop) &&
      isObject(target[prop]);
    const replaced: Record<string, any> = Object.getOwnPropertyNames(source)
      .map((prop: string) => ({
        [prop]: isDeep(prop)
          ? mergeFn(target[prop], source[prop], deep)
          : source[prop],
      }))
      .reduce((a, b) => ({ ...a, ...b }), {});

    return {
      ...target,
      ...replaced,
    };
  } else {
    return Object.assign(target, source);
  }
};
export const merge = mergeFn;
