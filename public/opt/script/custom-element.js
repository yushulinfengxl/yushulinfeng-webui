 // 创建自定义元素类
export class CustomButton extends HTMLElement {
  constructor() {
    super(); // 调用父类构造器

    // 附加一个 Shadow DOM 并设置模式为 'open'
    const shadow = this.attachShadow({ mode: 'open' });

    // 创建按钮元素
    const button = document.createElement('button');
    button.textContent = 'Click Me';

    // 添加样式
    const style = document.createElement('style');
    style.textContent = `
      button {
        background-color: blue;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
      }
      button:hover {
        background-color: darkblue;
      }
    `;

    // 将样式和按钮添加到 Shadow DOM
    shadow.appendChild(style);
    shadow.appendChild(button);
  }
}

// 注册自定义元素
customElements.define('custom-button', CustomButton);