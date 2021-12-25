export const CC2Four = (num: number) => {
	return string.pack('>I4', num)
}

export const GetSpellAbilityFour = () => {
	return CC2Four(GetSpellAbilityId())
}

export const ValueFactor = (level: number, base: number, previousFactor: number, levelFactor: number, constant: number) => {
	let value = base

	if (level > 1) {
		for (let i = 2; i < level; i++) {
			value = (value * previousFactor) + (i * levelFactor) + (constant)
		}
	}

	return value
}
