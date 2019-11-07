import Vue from 'vue';

const autoTagParser = (): void => {
    Vue.directive('auto-tag-parser', {
        update: (el: HTMLElement, binding, vnode): void => {
            const parseTag: Function = (vnode.context as any).parseTag;
            if (parseTag) {
                parseTag();
            }
        }
    });
};
export default autoTagParser;