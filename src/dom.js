window.dom = {
  find(node) {
    return document.querySelectorAll(node);
  },
  style(node, name, value) {
    //三个参数：改样式。例如：dom.style(div, "color", "red")
    if (arguments.length === 3) {
      node.style[name] = value;
    }
    //两个参数：可能改样式也可能是读样式。分情况讨论
    else if (arguments.length === 2) {
      //name参数为字符串,则读属性。例如：dom.style(div,'color')
      if (typeof name === "string") {
        return node.style[name];
      }
      //name参数为对象，则改属性。例如：dom.style(div,{border:1px solid red,font-size:40px})
      else if (name instanceof Object) {
        const Object = name;
        //遍历object，读到object里所有的key
        for (let key in Object) {
          node.style[key] = Object[key];
        }
      }
    }
  },
  //遍历，这是我自己的想法，下边是方方的写法，少许不同
  each(node, fn) {
    const nodeList = dom.find(node);
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  }
  //   下边是方老师的写法，上边是我自己的写法，少许不同
  //   each(nodeList, fn) {
  //     for (let i = 0; i < nodeList.length; i++) {
  //       fn.call(null, nodeList[i]);
  //     }
  //   }
};
