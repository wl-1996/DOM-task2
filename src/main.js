const div = dom.find("#test>.red")[0]; //获取对应的元素
console.log(div);
dom.style(div, "color", "red"); //设置div.style.color
console.log(dom.style(div, "color"));
dom.style(div, { border: "3px solid red", fontSize: "20px" });

// const divList = dom.find(".red"); // 获取多个 div.red 元素
// dom.each(divList, n => console.log(n));
//下边这一行代码和上边两行代码实现的效果一样，上边两行是对应方方的DOM封装，下边是对应我的DOM封装
dom.each(".red", n => console.log(n)); // 遍历 divList 里的所有元素
