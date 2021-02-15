export default class Votos {
	private eleitores = 1000;
	private votosValidos = 800;
	private votosBrancos = 150;
	private votosNulos = 50;

	public calcularPercentualValidos() {
		return (this.votosValidos / this.eleitores) * 100;
	}

	public calcularPercentualBrancos() {
		return (this.votosBrancos / this.eleitores) * 100;
	}

	public calcularPercentualNulos() {
		return (this.votosNulos / this.eleitores) * 100;
	}
}
