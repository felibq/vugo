// Test tools
export const getRenderedText = (Component, propsData) => {
  const Ctor = Vue.extend(Component);
  const vm = new Ctor({ propsData }).$mount();
  return vm.$el;
};
