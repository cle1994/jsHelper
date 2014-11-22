#### https://cle-jshelper.herokuapp.com/
#### Christian Le


## Frameworks and Tools used
-------------------------
Node.js,
Angular.js,
Express.js,
ui-router.js,
ui-ace.js,
ace.js,
Esprima.js,
Underscore.js

**and their dependencies

# Usage
-------------------------
### Whitelisting

The function whitelist inside of whitelist.js takes in a
AST produced by Esprima and an array of whitelisted functionality.

To test with the live editor, start typing and the little
computer will tell you how it's going! You can use the links for the functionality
I already selected or change the ending url path to:
/whitelist[-{ASTType}]

example: /whitelist-VariableDeclaration-ForStatement-ArrayExpression


### Blacklisting

The function blacklist inside of blacklist.js takes in a
AST produced by Esprima and an array of blacklisted functionality.

It's also the same as whitelisting for using except the url will have blacklist
in place of whitelist

example: /blacklist-VariableDeclaration-ForStatement-ArrayExpression


### Structure

Structure was difficult for me to implement. My implementation is very brute force
and requires the structure AST to match to.

structure inside of structure.js takes in the AST of the typed code and the name
of the structure to match. I'm then removing every property except type and
body from both the code and the structure and seeing if they're equal.

To get the structure, I'm storing all the trees in an object with properties as
the name.

To display instructions, I have another object that as the overall structure of
each test and pulling from the object.
