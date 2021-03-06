package com.controller.user.model;

public class User {
	private int id;

	private String name;
	private String email;
	private String phone;
	private String username;
	private String password;

	// login
	public User(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}

	// register
	public User(String name, String email, String phone, String username, String password) {
		super();
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.username = username;
		this.password = password;
	}

	public User(int id, String name, String email, String phone, String username, String password) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.username = username;
		this.password = password;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}