function toWord(input) {

    MathJax.texReset();
    MathJax.texReset();
    MathJax.texReset();
    MathJax.tex2mmlPromise(input).then(function (mml) {
        // 转换结果
        copyText(mml);
        return "已经复制到剪贴板,请到Word中粘贴";
    }).catch(function (err) {
        // 发生错误时
        return err.message;
    });
}

function copyText(value) {
    // 创建元素用于复制
    const aux = document.createElement('input')
    // 获取复制内容
    const content = value
    // 设置元素内容
    aux.setAttribute('value', content)
    // 将元素插入页面进行调用
    document.body.appendChild(aux)
    // 复制内容
    aux.select()
    // 将内容复制到剪贴板
    document.execCommand('Copy')
    // 删除创建元素
    document.body.removeChild(aux)
}