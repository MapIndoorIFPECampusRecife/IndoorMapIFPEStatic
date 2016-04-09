function TodaysHours() {
	"use strict";
	//get first event of today
	var today, cal, events, todays_hours, tomorrow, events2, tomorrows_hours;

	today = new Date();
	cal = CalendarApp.getCalendarById('1jpvofsk3f8o0fv8idbkb2opc0@group.calendar.google.com');
	events = cal.getEventsForDay(today);

	todays_hours = events[0].getDescription();

	//get first event of tomorrow
	tomorrow = new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);
	events2 = cal.getEventsForDay(tomorrow);

	tomorrows_hours = events2[0].getDescription();

	document.write(todays_hours);
	document.write(tomorrows_hours);
}