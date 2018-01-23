exports.handler = (event, context, callback) => {
    var sum = parseInt(event.key1) + parseInt(event.key2);
    callback(null, 'sum =' + sum);
};