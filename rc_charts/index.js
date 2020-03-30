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
const opts = ['+','-','/','*'];
const expressItem = '( ( express1 * ( express2_1 + express2_2 ) ) + ( express3 * express4 ) )';

function getTreeD(expression){
    const temp1 = [], temp2 = [];
    
}

function isOperator(opt){
    if(opt === '+' || opt === '-' || opt === '*' || opt === '/'){
       return true; 
    }
    return false;
}

const expressArr = [];

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
// console.log('result: ', expressArr.join(' '));


function getExpress(treeD){
    let item = treeD;
    const ret = [], temp = [];
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



// const w = 500;
// const h = 50;

// const dataset = [5,10,15,20,25];

// const svg = d3.select("body")
//     .append("svg")
//     .attr("width", 500)
//     .attr("height", 50);

// const circles = svg.selectAll('circle')
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

