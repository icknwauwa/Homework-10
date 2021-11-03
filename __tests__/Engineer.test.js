const Engineer = require('../lib/Engineer');

test('creates Engineer object', () => {
    const engineer = new Engineer('Engineer', 'id#', 'email@email.com', 'githubusername');

    expect(engineer.getName()).toBe('Engineer');
    expect(engineer.getId()).toBe('id#');
    expect(engineer.getEmail()).toBe('email@email.com');
    expect(engineer.getGithub()).toBe('githubusername');
    expect(engineer.getRole()).toBe('Engineer');
});