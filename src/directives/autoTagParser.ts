import Vue from 'vue';

// element의 model 데이터가 바뀌면 element의 높이를 리사이즈한다
const autoTagParser = () => {
    Vue.directive('auto-tag-parser', {
        update: function (el: HTMLElement, binding, vnode) {
            const parseTag: Function = (vnode.context as any).parseTag;
            if (parseTag) {
                parseTag();
            }
        }
    });
};
export default autoTagParser;