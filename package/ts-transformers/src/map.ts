import ts from "typescript";
import { Visitor } from "./Visitor";

// TODO: Tree can be organized using tree of abstract processor. For example,
//  ConversionTransformer that will accept ts.Node, check if it is AsExpression,
//  extract type information, instance, assignment details and dispatch this to
//  specific transformers.
// TODO: Tests (e.g. import { Map as TestMap } from "....")
// TODO: Consider other possible options for conversion DSL. May be support
// several ones:
//      const signIn1 = alice as Map<SignInRequest>;
//      const signIn2 = <Map<SignInRequest>>alice;
//      const signIn3 = alice.As<SignInRequest>();
//      const signIn4 = map<SignInRequest>(alice);

export function map(root: ts.Node, checker: ts.TypeChecker): ts.Node | undefined {
    // TODO: Consider looking into the parent expressions if there is an
    // assigment or smth else were we can determine target type and use it also
    // to determine properties intersection.
    // TODO: Extract transformation from type into Node with literal object creation.
    const typeReference = Visitor
        .ofType(root, ts.isAsExpression)
        .is(node => node.type, ts.isTypeReferenceNode)
    ;

    const typeDeclaration = typeReference
        .is(node => node.typeName, ts.isIdentifier)
        // TODO: Import check should be reusable.
        .is(node => {
                const symbol = checker.getSymbolAtLocation(node);

                // TODO: Reusable Single() method?
                if (symbol && symbol.declarations) {
                    const [declaration] = symbol.declarations;
                    return declaration;
                }
            },
            ts.isImportSpecifier
        )
        .when(node => !!node.propertyName&& node.propertyName.text === Map.name)
        .is(node => node.parent, ts.isNamedImports)
        .is(node => node.parent, ts.isImportClause)
        .is(node => node.parent, ts.isImportDeclaration)
        // TODO: Is this a good check? Both "string" value and require(...) support.
        .when(node => node.moduleSpecifier.getText() === "\"@sdd-team/ts-transformers\"")
        .do(node => {
            typeReference
                .is(node => {
                        if (node.typeArguments && node.typeArguments.length) {
                            return node.typeArguments[0];
                        }
                    },
                    ts.isTypeReferenceNode
                )
                .do(node => {
                    const type = checker.getTypeFromTypeNode(node);
                    const symbol = checker.getSymbolAtLocation(node);
                    console.log("References", node);
                })
            ;
            return ts.createObjectLiteral(
            );
        })
    ;

    return;
}
