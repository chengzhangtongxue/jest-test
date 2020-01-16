import { shallowMount, mount } from '@vue/test-utils';
import Header from '@/components/Header.vue';

describe('Header.vue ', () => {
    it('header.vue 快照', () => {
        const wrapper = shallowMount(Header);
        const _input = wrapper.find('[test-data="input"]');
        expect(wrapper).toMatchSnapshot();
    })
    it('header.vue 页面有一个input 输入框', () => {
        const wrapper = shallowMount(Header);
        const _input = wrapper.find('[test-data="input"]');
        expect(_input.exists()).toBe(true);
    })

    it('header.vue 页面有一个input 默认值为空', () => {
        const wrapper = mount(Header);
        const _input = wrapper.findAll('input').at(0);
        expect(_input.element.value).toBe('');
    })

    it('header.vue data里面的input值改变，input标签值也会改变，且相等 ', () => {
        const wrapper = shallowMount(Header);
        const msg = 'msg';
        wrapper.setData({ input: msg});
        const _input = wrapper.findAll('input').at(0);
        expect(_input.element.value).toBe(msg);
    })

    it('header.vue input标签绑定了enter 时间', () => {
        const wrapper = shallowMount(Header);
        const _input = wrapper.findAll('input').at(0);
        wrapper.setData({ input: 'msg'});
        _input.trigger('keyup.enter');
        expect(_input.element.value).toBe('');
    });

})
