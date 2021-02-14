package me.baruffi.demo.helper;

import java.util.Date;

import org.springframework.stereotype.Component;

import me.baruffi.demo.interfaces.DateTime;

@Component
public class DateTimeHelper implements DateTime {

	@Override
	public Date getDate() {
		return new Date();
	}
}
