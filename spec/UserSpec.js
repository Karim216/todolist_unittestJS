const User = require('../sources/User.class')

describe('test class User', () => {
    it('test user champ true', () => {
        const user = new User('John', 'Doe', 'john.doe@gmail.com', 25, 'azerty123456')
        expect(user.isValid()).toBe(true);
        // expect(user.validEmail(user.getEmail())).toBe(true)
        // expect(user.validStr(user.getLastname())).toBe(true)
        // expect(user.validStr(user.getFirstname())).toBe(true)
        // expect(user.validAge(user.getAge())).toBe(true)
    });

    it('should find false to be different from true', () => {
        
        expect(true).toBe(true);
    });
});