export type FormData = {
  fullName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate: string;
};

export type FormErrors = Partial<Record<keyof FormData, string>>;
