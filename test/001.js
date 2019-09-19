
export const sqrt = Math.sqrt;

export function square(x) {
    return x * x;
}

export function diag(x, y) {
    return sqrt(square(x) + square(y));
}

export default function t0(x, y) {
    return sqrt(square(x) + square(y));
}
console.log('成功导入')

// export default function t1(x) {
//     return x + x + 'this t1';
// }
