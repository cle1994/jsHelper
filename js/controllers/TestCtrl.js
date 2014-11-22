app.controller('TestController', ['$scope', '$timeout', '$location', function($scope, $timeout, $location) {
    var validate;
    var params = $location.path().split('/').pop().split('-');
    var cases = params.slice(1, params.length);

    $scope.emotion = 'sad';
    $scope.testKind = params[0];
    $scope.isArray = false;
    $scope.isResponse = false;
    $scope.sadMsg = '';
    $scope.happyMsg = '';

    $scope.aceLoaded = function(_editor){
        $scope.test = 'Write javascript to get feedback!';
    };

    $scope.aceChanged = function(e) {
        if (validate) {
            $timeout.cancel();
        }

        validate = $timeout(function () {
            var syntax, err;
            try {
                syntax = esprima.parse($scope.editor, { tolerant: true });
                err = syntax.errors;
                if (err.length > 0) {
                    $scope.isArray = true;
                    $scope.isResponse = false;
                    $scope.test = err;
                    $scope.emotion = 'sad';
                } else {
                    if (!$scope.editor.replace(/\s/g, '').length) {
                        $scope.isArray = false;
                        $scope.isResponse = false;
                        $scope.test = 'Write javascript to get feedback!';
                        $scope.emotion = 'sad';
                    } else {
                        $scope.isResponse = true;
                        if ($scope.testKind === "whitelist") {
                            $scope.isArray = true;
                            $scope.sadMsg = 'Your program should have:';
                            $scope.happyMsg = 'Yay! Your program has all the right parts';
                            $scope.test = whitelist(syntax.body, cases);
                            if ($scope.test.length > 0) {
                                $scope.emotion = 'sad';
                            } else {
                                $scope.emotion = 'happy';
                            }
                        } else if ($scope.testKind === "blacklist") {
                            $scope.isArray = true;
                            $scope.sadMsg = "Your program shouldn't have:";
                            $scope.happyMsg = 'Yay! Your program has all the right parts. =]';
                            $scope.test = blacklist(syntax.body, cases);
                            if ($scope.test.length > 0) {
                                $scope.emotion = 'sad';
                            } else {
                                $scope.emotion = 'happy';
                            }
                        } else if ($scope.testKind === "structure") {
                            $scope.isArray = false;
                            $scope.test = structure(syntax, cases[0]);
                            if ($scope.test[0] == 'Y') {
                                $scope.emotion = 'happy';
                            } else {
                                $scope.emotion = 'sad';
                            }
                        }
                    }
                }
            } catch (e) {
                $scope.emotion = 'sad';
                $scope.isArray = false;
                $scope.isResponse = false;
                $scope.test = e.description + ' in line ' + e.lineNumber;
            }

            validateId = undefined;
        }, 2000);
    };
}]);