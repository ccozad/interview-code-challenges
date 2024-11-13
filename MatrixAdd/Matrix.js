exports.add = (obj) => {
    var a = obj.input[0];
    var b = obj.input[1];

    var result = {
        output: {
            rows: a.rows,
            cols: a.cols,
            data: []
        }
    }

    for (let i = 0; i < a.data.length; i++) {
        result.output.data.push(a.data[i] + b.data[i]);
    }
    
    return result;
}