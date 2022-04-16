function playerName(){
  var name = prompt("请问你叫什么名字?");
  alert("很高兴认识你" + name + "，快来猜谜吧!");
}
playerName()

function enterAnswer(){
  var answer = prompt("你的答案是：");
  if (answer) {
    document.getElementById("answers").innerHTML = "你输入的答案：" + answer;
  }
  if (answer === "冯"){
    alert("恭喜回答正确！")
  }
  else{
    alert("很遗憾，“" + answer + "”并不是正确答案，再想想。")
  }
}

function getAnswer(){
  alert("正确答案是：冯。");
}

function getHint(){
  var hint = ["画面中有两匹马，即“二马”。","“二”与部首“冫”形似。"];
  for(i=0;i<2;i++){
    alert(hint[i])
  }
}
