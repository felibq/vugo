import Vue from 'vue';
import Checkbox from 'packages/checkbox/checkbox';

function getRenderedText(Component, propsData) {
  const Ctor = Vue.extend(Component);
  const vm = new Ctor({ propsData }).$mount();
  return vm.$el;
}

describe('Checkbox component', () => {
  it('render checked  correctly with different props', () => {
    const el = getRenderedText(Checkbox, { checked: true });
    expect(el.querySelector('.v-checkbox__input').checked).to.equal(true);
  });

  it('render disabled correctly with different props', () => {
    const el = getRenderedText(Checkbox, { disabled: true });
    expect(el.querySelector('.v-checkbox__input').disabled).to.equal(true);
  });

  it('render className correctly with different props', () => {
    const el = getRenderedText(Checkbox, { type: 'test' });
    expect(el.className.indexOf('v-checkbox--test') > -1).to.equal(true);
  });
});
