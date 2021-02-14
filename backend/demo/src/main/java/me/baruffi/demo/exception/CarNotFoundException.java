package me.baruffi.demo.exception;

public class CarNotFoundException extends RuntimeException {

	/**
	 *
	 */
	private static final long serialVersionUID = -1235534579898686718L;

	public CarNotFoundException(Long id) {
		super("Não foi possível encontrar o veículo de id: " + id);
	}
}
