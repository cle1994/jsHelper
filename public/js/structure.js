var bank = {
    whileInFor: {
        "type": "Program",
        "body": [
            {
                "type": "ForInStatement",
                "left": {
                    "type": "Identifier",
                    "name": "_"
                },
                "right": {
                    "type": "Identifier",
                    "name": "_"
                },
                "body": {
                    "type": "BlockStatement",
                    "body": [
                        {
                            "type": "WhileStatement",
                            "test": {
                                "type": "Identifier",
                                "name": "_"
                            },
                            "body": {
                                "type": "BlockStatement",
                                "body": [
                                    {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                            "type": "Identifier",
                                            "name": "_"
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                },
                "each": false
            }
        ]
    },
    ifInForLoop: {
        "type": "Program",
        "body": [
            {
                "type": "ForStatement",
                "init": {
                    "type": "Identifier",
                    "name": "_"
                },
                "test": {
                    "type": "Identifier",
                    "name": "_"
                },
                "update": {
                    "type": "Identifier",
                    "name": "_"
                },
                "body": {
                    "type": "BlockStatement",
                    "body": [
                        {
                            "type": "IfStatement",
                            "test": {
                                "type": "Identifier",
                                "name": "_"
                            },
                            "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                    {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                            "type": "Identifier",
                                            "name": "_"
                                        }
                                    }
                                ]
                            },
                            "alternate": null
                        }
                    ]
                }
            }
        ]
    },
    whileInIfInForLoop: {
        "type": "Program",
        "body": [
            {
                "type": "ForStatement",
                "init": {
                    "type": "Identifier",
                    "name": "_"
                },
                "test": {
                    "type": "Identifier",
                    "name": "_"
                },
                "update": {
                    "type": "Identifier",
                    "name": "_"
                },
                "body": {
                    "type": "BlockStatement",
                    "body": [
                        {
                            "type": "IfStatement",
                            "test": {
                                "type": "Identifier",
                                "name": "_"
                            },
                            "consequent": {
                                "type": "BlockStatement",
                                "body": [
                                    {
                                        "type": "WhileStatement",
                                        "test": {
                                            "type": "Identifier",
                                            "name": "_"
                                        },
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": [
                                                {
                                                    "type": "ExpressionStatement",
                                                    "expression": {
                                                        "type": "Identifier",
                                                        "name": "_"
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            },
                            "alternate": null
                        }
                    ]
                }
            }
        ]
    }
};

var response = {
    whileInFor: 'Ohh nooooooesss try again.\nYou need to have a "while" loop inside of a "for in" loop',
    ifInForLoop: 'Ohh nooooooesss try again.\nYou need to have a "if" statement inside of a "for" loop',
    whileInIfInForLoop: 'Ohh nooooooesss try again.\nYou need to have a "while" loop inside of an "if" statement inside of a "for" loop'
}

var ast = function (code) {
    if (_.isArray(code)) {
        for (var i = 0; i < code.length; i += 1) {
            code[i] = ast(code[i]);
        }
        return code;
    } else {
        code = _.pick(code, "body", "type");
        if (code.body) {
            code.body = ast(code.body);
        }
        return code;
    }
}

var structure = function(code, compare) {
    var user = {};
    var structure = {};

    user = ast(code);
    structure = ast(bank[compare]);

    if (_.isEqual(user, structure)) {
        return 'Yay! You got your structure right. =]'
    } else {
        return response[compare];
    }
};
