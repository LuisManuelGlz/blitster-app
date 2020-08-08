export default {
  username: {
    required: 'Please write a username',
  },
  password1: {
    required: "Don't forget your password",
    minLength: {
      value: 8,
      message: 'Please enter a password with 8 or more characters',
    },
  },
  password2: {
    required: 'Please confirm your password',
    minLength: {
      value: 8,
      message: 'I need more characters 😜',
    },
  },
};
