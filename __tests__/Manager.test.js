const Manager = require('../lib/Manager');

test('create the Manager', () => {
    const manager = new Manager('Manager', 'id#', 'email@email.com', 'office#');

    expect(manager.getName()).toBe('Manager');
    expect(manager.getId()).toBe('id#');
    expect(manager.getEmail()).toBe('email@email.com');
    expect(manager.getOffice()).toBe('office#');
    expect(manager.getRole()).toBe('Manager');
});