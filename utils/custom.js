// 创建自定义元素类
export class MyElement extends HTMLElement {
  constructor() {
    super(); // 调用父类的构造函数

    // 创建一个 Shadow DOM
    const shadow = this.attachShadow({ mode: 'open' });

    // 创建元素内容
    const wrapper = document.createElement('div');
    wrapper.textContent = "This is a custom element!";

    // 为元素添加样式
    const style = document.createElement('style');
    style.textContent = `
      div {
        color: #007BFF;
        font-size: 20px;
        text-align: center;
      }
    `;

    // 将样式和内容添加到 Shadow DOM 中
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }

  // 自定义行为：当元素被插入到 DOM 时触发
  connectedCallback() {
    console.log('Custom element added to page.');
  }

  // 自定义行为：当元素从 DOM 中移除时触发
  disconnectedCallback() {
    console.log('Custom element removed from page.');
  }
}

export function customInit() {
  console.log("jjjj");
}