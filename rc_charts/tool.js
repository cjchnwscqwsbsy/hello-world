const expressions = '(Math.abs(#{a.b.c} - #{d.e.f}) * #{g.u.p})'
const exptarr = ['(','Math.abs(','#{a.b.c}', '-', '#{d.e.f}',')', '*', '#{g.u.p}',')']
const finalarr = ['(','(','#{a.b.c}', '-绝对值', '#{d.e.f}',')', '*', '#{g.u.p}',')']

function getTreeD(expression){
    var temp1 = [], temp2 = [];
    expression.forEach(ele => {
        if(ele.match(/^_(.*)_$/)){
            temp2.push(ele);
        } else if(isOperator(ele)) {
            if('(' === ele){
                temp1.push(ele);
            } else if(')' === ele){
                while(temp1.length){
                    let op = temp1[temp1.length - 1];
                    if(op === '('){
                        temp1.pop();
                        break;
                    } else {
                        temp2.push(temp1.pop());
                    }
                }
            } else {
                while(temp1.length){
                    if(temp1[temp1.length - 1] === '('){
                        temp1.push(ele);
                        break;
                    } else if(isGreat(temp1[temp1.length - 1], ele)){
                        temp2.push(temp1.pop());
                    } else if(isGreat(ele, temp1[temp1.length - 1])){
                        temp1.push(ele);
                        break;
                    }
                }
                if(!temp1.length){
                    temp1.push(ele);
                }
            }
        }
    });
    //将剩余的操作符入栈
    while(temp1.length){
        temp2.push(temp1.pop());
    }
    console.log('temp2: ', temp2);
    //将逆波兰式转化为二叉树
    var root = [];
    while(temp2.length){
        var item = temp2.shift();
        var node = {value:'',children:[]};
        node.value = item;
        if(isOperator(item)){
            node.children.push(root.pop());
            node.children.push(root.pop());
            root.push(node);
        } else {
            root.push(node);
        }
    }
    return root.pop();
}


var resultSuffix = getTreeD(finalarr);

console.log('resultSuffix: ', resultSuffix);