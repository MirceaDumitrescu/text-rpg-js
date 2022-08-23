export const checkPasswordStrength = (password) => {
    const passwordStrength = {
        strength: 0,
        message: '',
    };
    if (password.length < 8) {
        passwordStrength.message = 'Password must be at least 8 characters long';
        return passwordStrength;
    }
    if (password.length > 20) {
        passwordStrength.message = 'Password must be less than 20 characters long';
        return passwordStrength;
    }
    if (password.search(/[a-z]/) < 0) {
        passwordStrength.message = 'Password must contain at least one lowercase letter';
        return passwordStrength;
    }
    if (password.search(/[A-Z]/) < 0) {
        passwordStrength.message = 'Password must contain at least one uppercase letter';
        return passwordStrength;
    }
    if (password.search(/[0-9]/) < 0) {
        passwordStrength.message = 'Password must contain at least one number';
        return passwordStrength;
    }
    if (password.search(/[!@#$%^&*]/) < 0) {
        passwordStrength.message = 'Password must contain at least one special character';
        return passwordStrength;
    }
    passwordStrength.strength = 5;
    passwordStrength.message = 'Password is strong';
    return passwordStrength;
}
