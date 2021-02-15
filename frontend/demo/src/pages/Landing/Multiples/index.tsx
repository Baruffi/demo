export default function somaDosMultiplosDeNAbaixoDeX(n: number, x: number) {
	const maxN = x - 1;
	const multiplosDeNAbaixoDeX = Math.floor(maxN / n);

	const soma = (n * multiplosDeNAbaixoDeX * (multiplosDeNAbaixoDeX + 1)) / 2;

	return soma;
}
