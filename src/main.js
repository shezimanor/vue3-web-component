import MyWebComponent from '@/components/MyWebComponent.ce.vue';
import { defineCustomElement } from 'vue';

const MyWebComponentElement = defineCustomElement(MyWebComponent);

// 注册
customElements.define('my-web-component', MyWebComponentElement);
