const arr = [0, 10 - 1]

const arr2: number[] = [0, 1, -1]

const arr3: string[] = ['foo', 'bar']

const arr4: Array<number> = [0, 1, -1]

type ArrayType = {
    foo: string,
    bar: number
}

const arrType: ArrayType[] = [{ foo: 'is foo', bar: 100 }, { foo: 'is foo2', bar: 200 }]

const arr5: readonly number[] = [0, 1, 2]
// arr5.push(3) 'push' does not exist readpnly