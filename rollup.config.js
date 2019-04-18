import typescript from "rollup-plugin-typescript2";

function component(name) {
    return {
        input: `./${name}/index.tsx`,
        output: {
            file: `./${name}/index.js`,
            format: "cjs"
        },
        plugins: [
            typescript({
                tsconfig: `${name}/tsconfig.json`
            })
        ]
    }
}

export default [
    component("sandbox")
]