var rootData = {
    value:'+',
    children:[{
        value:'*',
        children:[{
            value:'express1',
            children:null,
        },{
            value:'express2',
            children:null,
        }]
    },{
        value:'-',
        children:[{
            value:'express3',
            children:null,
        },{
            value:'express4',
            children:null,
        }]
    }]
};

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

var res = getExpress(rootData);
console.log('result: ', res)



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

