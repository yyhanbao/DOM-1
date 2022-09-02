const t = dom.find("#test")[0];
console.log(dom.find(".red", t)); // 这里为什么没有段落标签4
const t1 = dom.find("#test1")[0];
console.log(dom.find(".red", t1)[0]);
const t2 = dom.find("#test2")[0];
console.log(dom.find(".blue", t2)[0]);

dom.style(test1, { border: "1px solid red", color: "blue" });
console.log(dom.style(test1, "border"));
dom.style(t2, "color", "red");

const t3 = dom.find("#test3")[0];
dom.each(dom.children(t3), (n) => dom.style(n, "color", "red"));
// 为什么无法实现
