export default {
  fullName: {
    required: 'Please write your name',
  },
  email: {
    required: "Please write your email, I won't spam you, I promise",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Please write a valid email address',
    },
  },
};
