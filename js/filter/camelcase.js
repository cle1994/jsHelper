app.filter('camelCaseSplit', function() {
    return function(input) {
        var aOrAn = 'a';
        if ("aeiou".indexOf(input[0].toLowerCase()) > 0) {
            aOrAn = 'an';
        }
        return aOrAn + input.replace(/([A-Z])/g, ' $1');
    };
});