
clearOutput();

let render = document.getElementById('render');
render.addEventListener("click", toWord);

// 转为Word公式
function toWord() {
    // 获取输入的Latex
    let input = document.getElementById("input").value.trim();
    // 输出框
    let output = clearOutput();
    // 重置
    MathJax.texReset();
    mml = MathJax.tex2mml(input);
    if(mml.includes("merror")){
        let message = mml.split("<mtext>")[1].split("</mtext>")[0]
        alert( "错误:{" + message +"}, 请检查输入的Tex公式");
    }else{
        output.value = mml;
        copyText(mml);
    }
}


// 清空输出框
function clearOutput() {
    // 输出框
    let output = document.getElementById('output');
    // 清空输出框
    output.value = '';
    // 返回输出框
    return output;
}

//复制内容到剪切板
function copyText() {
    // 输出框
    let output = document.getElementById('output');
    // 选择对象
    output.select();
    // 执行浏览器复制命令
    document.execCommand("Copy")
}

let newpage = document.getElementById("newpage");
newpage.addEventListener("click", function(){
    chrome.tabs.create({url: 'http://web.xiaoyv.top/web/LatexToMathML/'});
});
