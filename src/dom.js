window.dom = {
  find(selector, scope) {
    // 用于获取标签或标签们
    return (scope || document).querySelectorAll(selector);
  },
  style(node, name, value) {
    // 用于修改 style
    if (arguments.length === 3) {
      // dom.style(div,'color','red')
      node.style[name] = value;
    } else if (arguments.length === 2) {
      if (typeof name === "string") {
        // dom.style(div,'color')
        return node.style[name];
      } else if (name instanceof Object) {
        // dom.style(div,{color:'red'})
        const object = name;
        for (let key in object) {
          node.style[key] = object[key];
        }
      }
    }
  },
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  },
};

const div = dom.find("#test >.red")[0];
console.log("div", div);
dom.style(div, "color", "red");

const divList = dom.find(".red");
dom.each(divList, (n) => console.log(n));
