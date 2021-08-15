

export class UnitType {
    public readonly four!: string

    constructor(four: string) {
        this.four = four
    }

    public get id(): number {
        return FourCC(this.four)
    }
}