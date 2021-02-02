
export function generateRandomArray(len: number, min: number, max: number) {

    return Array.from(Array(len)).map(x => Math.floor(Math.random() * (max - min) + min))
}
