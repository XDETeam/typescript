import typescript from "rollup-plugin-typescript2";

function packages(name) {
    return {
        input: `./package/${name}/src/index.ts`,
        output: {
            file: `./package/${name}/dist/index.js`,
            format: "cjs"
        },
        plugins: [
            typescript({
                tsconfig: `./package/${name}/tsconfig.json`
            })
        ]
    }
}

export default [
    packages("team"),
    packages("sandbox")
]