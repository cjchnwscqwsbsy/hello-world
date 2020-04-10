var rootData = {
    value:'+',
    children:[{
        value:'*',
        children:[{
            value:'express1',
            children:null,
        },{
            value:'+',
            children:[{
                value:'express2_1',
                children:null,
            },{
                value:'express2_2',
                children:null,
            }],
        }]
    },{
        value:'*',
        children:[{
            value:'express3',
            children:null,
        },{
            value:'express4',
            children:null,
        }]
    }]
};
var opts = ['+','-','/','*'];
var expressItem = '( ( _express1_ * ( _express21_ + _express22_ ) ) + ( _express3_ * _express4_ ) )';
var expressItem_origin = [ '(','(','_express1_','*','(','_express21_','+','_express22_',')',')','+','(','_express3_','*','_express4_',')',')' ];

// console.log('split expression: ', expressItem.replace(/\s*/g,"").split(/[+,-,*,/,(,)]/))

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


var resultSuffix = getTreeD(expressItem_origin);

console.log('resultSuffix: ', resultSuffix);


function isGreat(op1, op2){
    if(getPriority(op1) > getPriority(op2)){
        return true;
    }
    return false;
}

function getPriority(opt){
    if(opt === '+' || opt === '-'){
        return 1;
    }else if(opt === '*' || opt === '/'){
        return 2;
    }
    return new Error('Unsupported operator!');
}

function isOperator(opt){
    if(opt === '+' || opt === '-' || opt === '*' || opt === '/' || opt === '(' || opt === ')'){
       return true; 
    }
    return false;
}

var expressArr = [];

function getExpression(root){
    if(root !== null){
        if(isOperator(root.value)){
            expressArr.push('(');
        }
        root.children && getExpression(root.children[0]);
        expressArr.push(root.value);
        root.children && getExpression(root.children[1]);
        if(isOperator(root.value)){
            expressArr.push(')');
        }
    }
}

// getExpression(rootData);
// console.log('origin_result: ', expressArr);
// console.log('result: ', expressArr.join(' '));




function getExpress(treeD){
    let item = treeD;
    var ret = [], temp = [];
    while(item || temp.length > 0){
        item && temp.push(item);
        while(item && item.children){
            temp.push(item.children[0]);
            item = item.children[0];
        }
        item = temp.pop();
        ret.push(item.value);
        item = item.children ? item.children[1] : null;
    }
    return ret;
}

// var res = getExpress(rootData);
// console.log('result: ', res);



// var w = 500;
// var h = 50;

// var dataset = [5,10,15,20,25];

// var svg = d3.select("body")
//     .append("svg")
//     .attr("width", 500)
//     .attr("height", 50);

// var circles = svg.selectAll('circle')
//     .data(dataset)
//     .enter()
//     .append('circle');

// circles.attr('cx', function(d,i){
//         return (i * 50) + 25;
//     })
//     .attr('cy', h/2)
//     .attr('r', function(d){
//         return d;
//     })

const expressions = '(Math.abs(#{a.b.c} - #{d.e.f}) * #{g.u.p})'
const exptarr = ['(','Math.abs(','#{a.b.c}', '-', '#{d.e.f}',')', '*', '#{g.u.p}',')']
const finalarr = ['(','(','#{a.b.c}', '-绝对值', '#{d.e.f}',')', '*', '#{g.u.p}',')']