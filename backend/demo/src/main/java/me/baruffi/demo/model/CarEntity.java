package me.baruffi.demo.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "CARS")
public class CarEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private String veiculo;

	private String marca;

	private Integer ano;

	@Column(columnDefinition = "TEXT")
	private String description;

	private Boolean vendido;

	private Date created;

	private Date updated;

	public CarEntity() {
	}

	public CarEntity(String veiculo, String marca, Integer ano, String description, Boolean vendido, Date created,
			Date updated) {
		this.veiculo = veiculo;
		this.marca = marca;
		this.ano = ano;
		this.description = description;
		this.vendido = vendido;
		this.created = created;
		this.updated = updated;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getVeiculo() {
		return veiculo;
	}

	public void setVeiculo(String veiculo) {
		this.veiculo = veiculo;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public Integer getAno() {
		return ano;
	}

	public void setAno(Integer ano) {
		this.ano = ano;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Boolean getVendido() {
		return vendido;
	}

	public void setVendido(Boolean vendido) {
		this.vendido = vendido;
	}

	public Date getCreated() {
		return created;
	}

	public void setCreated(Date created) {
		this.created = created;
	}

	public Date getUpdated() {
		return updated;
	}

	public void setUpdated(Date updated) {
		this.updated = updated;
	}

	@Override
	public String toString() {
		return "CarEntity [ano=" + ano + ", created=" + created + ", description=" + description + ", id=" + id
				+ ", marca=" + marca + ", updated=" + updated + ", veiculo=" + veiculo + ", vendido=" + vendido + "]";
	}
}
