export function CC2Four(num: number): string {
    return string.pack(">I4", num)
}

export function ValueFactor(level: number, base: number, previousFactor: number, levelFactor: number, constant: number): number {

    let value = base

    if (level > 1) {
        for (let i = 2; i < level; i++) {
            value = (value * previousFactor) + (i * levelFactor) + (constant)
        }
    }

    return value
}

