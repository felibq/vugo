import Vue from 'vue';
import Alert from 'packages/alert/alert';

function getRenderedText(Component, propsData) {
  const Ctor = Vue.extend(Component);
  const vm = new Ctor({ propsData }).$mount();
  return vm.$el;
}

describe('Alert component', () => {
  it('render correctly', () => {
    const el = getRenderedText(Alert);
    expect(el.textContent).to.equal('alert');
  });

});
