const Intern = require('../lib/Intern');

test('creates the intern', () => {
    const intern = new Intern('Intern', 'id#', 'email@email.com', 'CWRU Coding Bootcamp');

    expect(intern.getName()).toBe('Intern');
    expect(intern.getId()).toBe('id#');
    expect(intern.getEmail()).toBe('email@email.com');
    expect(intern.getSchool()).toBe('CWRU Coding Bootcamp');
    expect(intern.getRole()).toBe('Intern');
});