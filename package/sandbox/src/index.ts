import ts from "typescript";
import { SignInRequest, Account } from "@sdd-team/team";
import { Map, map } from "@sdd-team/ts-transformers"; //TODO:

const alice: Account = {
    firstName: "Alice",
    login: "alice",
    password: "!qa2Ws3eD"
}

const signIn1 = alice as Map<SignInRequest>;

const rootFile = "./package/sandbox/src/index.ts";

// TODO: Make transformation utils reusable.
function transformer(program: ts.Program): ts.TransformerFactory<ts.SourceFile> {
    const typeChecker =  program.getTypeChecker();

    function transformFile(program: ts.Program, context: ts.TransformationContext, file: ts.SourceFile): ts.SourceFile {
        function visit(node: ts.Node, context: ts.TransformationContext): ts.Node {
            const result = map(node, typeChecker);
            if (result) {
                return result;
            }

            return ts.visitEachChild(node, child => visit(child, context), context);
        }
        return ts.visitEachChild(file, child => visit(child, context), context);
    }
    return (context: ts.TransformationContext) => (file: ts.SourceFile) => transformFile(program, context, file);
}

const cmd = ts.parseCommandLine([ rootFile ]);
const program = ts.createProgram(cmd.fileNames, cmd.options);
const result = program.emit(undefined, undefined, undefined, undefined, {
    before: [
        transformer(program)
    ]
});
