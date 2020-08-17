const dataTransfer = new DataTransfer;

describe('End to End Test', () => {
	it('Visit the App with Weekly calendar view', () => {
		cy.visit('/')
			.wait(2000)
			.get('.calendar-actions--date .MuiInputBase-root')
			.click(0,0, {multiple: true, force: true})
			.wait(1000)
			.get('.MuiPickersCalendarHeader-switchHeader > .MuiPickersCalendarHeader-iconButton:first-child')
			.click(0,0, {force: true})
			.get('.WeekPicker-day-4')
			.contains('13')
			.click(0, 0, {force: true})
			.wait(1000)
			.get('#order3284')
			.trigger('dragstart', { dataTransfer })
			.wait(1000)
			.get('.day--shift[data-date="14-07-2020"]').eq(1)
			.trigger('drop', { dataTransfer })
			.get('.orders-container').eq(0).children().should('have.length', 2)
			.wait(1000)
			.get('#order9826')
			.trigger('dragstart', { dataTransfer })
			.wait(1000)
			.get('.day--shift[data-date="15-07-2020"]').eq(1)
			.trigger('drop', { dataTransfer })
			.get('.orders-container').eq(7).children().should('have.length', 3)
			.wait(1000)
	});

	it('Visit the App with daily calendar view', () => {
		cy.visit('/')
			.get('#calendarViewDropdown .MuiSelect-root')
			.click(0, 0, {force: true})
			.wait(1000)
			.get('li[data-value="Daily"]')
			.click()
			.wait(2000)
			.get('.calendar-actions--date .MuiInputBase-root')
			.click(0,0, {multiple: true, force: true})
			.wait(1000)
			.get('.MuiPickersCalendarHeader-switchHeader > .MuiPickersCalendarHeader-iconButton:first-child')
			.click(0,0, {force: true})
			.get('.MuiPickersCalendar-week')
			.contains('13')
			.click(0, 0, {force: true})
			.wait(1000)
	});

	it('No machine available for Work Station 1', () => {
		cy.visit('/');
		cy.wait(2000);
		cy
			.get('#workStationDropdown .MuiSelect-root')
			.click(0, 0, {force: true})
			.wait(1000)
			.get('li[data-value="Work Station 1"]')
			.click();
		cy.contains('No Machines Available for this Work Station');
	});
});
