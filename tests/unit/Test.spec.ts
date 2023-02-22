import { mount } from '@vue/test-utils';

import Test from '@/components/Test.vue';

describe('Test', (): void => {
    it('check', (): void => {
        const wrapper = mount(Test);

        console.log(wrapper.html())
        const h = wrapper.findAll('h2')

        console.log(h)
        expect(h.at(0)).toBeDefined();
    });
});
