var blacklist = function(code, test) {
    var used = [];
    var dif = [];

    for (var j = 0; j < code.length; j += 1) {
        used.push(code[j].type);
    }

    dif = _.intersection(used, test)

    if (!_.isEqual(dif, [])) {
        return dif;
    } else {
        return [];
    }
};