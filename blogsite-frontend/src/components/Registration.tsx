import "./Registration.css";
import { InputText } from "primereact/inputtext";
import { InputIcon } from "primereact/inputicon";
import { IconField } from "primereact/iconfield";
import { Password } from "primereact/password";
import { Calendar } from "primereact/calendar";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

const registrationSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "E-mail is required" })
      .email({ message: "Invalid email address" }),

    username: z
      .string()
      .min(1, { message: "Username is required" })
      .max(20, "Username length must be less than 20 characters"),

    birth_date: z
      .date()
      .refine((val) => {
        if (!val) return false;
        const today = new Date();
        const ageLimit = 16;

        const checkDate = new Date(
          today.getFullYear() - ageLimit,
          today.getMonth(),
          today.getDate(),
        );

        return val <= checkDate;
      }, {message: "You must be at least 16 years old" })
      .min(1, { message: "Birth date is required" }),

    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .max(255, { message: "Password must be less than 255 characters" }),

    confirmPassword: z
      .string()
      .min(8, { message: "Please confirm your password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegistrationFormValues = z.infer<typeof registrationSchema>;

function Registration() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      email: "",
      username: "",
      birth_date: new Date(),
      password: "",
      confirmPassword: "",
    },
  });

  const onFormSubmit = (data: RegistrationFormValues) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-center">
      <Link to={"/auth/login"}>
        <div className="flex items-center gap-5 cursor-pointer font-bold mb-20 -mt-20  w-40">
          <i className="pi pi-arrow-left"></i>
          Back to login
        </div>
      </Link>

      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <h1 className="font-bold text-5xl text-center mb-20">Registration</h1>

        <div className="flex flex-col gap-4 items-center">
          <IconField iconPosition="left" className="w-full">
            <InputIcon className="pi pi-at" />

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <InputText
                  {...field}
                  placeholder="E-mail"
                  className={`w-full ${errors.email ? "border-red-500!" : ""}`}
                />
              )}
            />
          </IconField>

          <IconField iconPosition="left" className="w-full">
            <InputIcon className="pi pi-user" />
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <InputText
                  {...field}
                  placeholder="Username"
                  className={`w-full ${errors.username ? "border-red-500!" : ""}`}
                />
              )}
            />
          </IconField>

          <IconField iconPosition="left" className="w-full">
            <InputIcon className="pi pi-calendar z-10" />
            <Controller
              name="birth_date"
              control={control}
              render={({ field }) => (
                <Calendar
                  placeholder="Birth date"
                  {...field}
                  pt={{
                    input: () => ({
                      root: {
                        className: `${errors.birth_date ? "!border-red-500" : ""}`,
                      },
                    }),
                  }}
                />
              )}
            />
          </IconField>

          <IconField iconPosition="left" className="w-full">
            <InputIcon className="pi pi-lock z-10" />

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Password
                  placeholder="Password"
                  toggleMask
                  feedback={false}
                  {...field}
                  pt={{
                    input: {
                      className: `${errors.password ? "!border-red-500" : ""}`,
                    },
                  }}
                />
              )}
            />
          </IconField>

          <IconField iconPosition="left" className="w-full">
            <InputIcon className="pi pi-lock z-10" />

            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <Password
                  {...field}
                  placeholder="Confirm password"
                  toggleMask
                  feedback={false}
                  pt={{
                    input: {
                      className: `${errors.confirmPassword ? "!border-red-500" : ""}`,
                    },
                  }}
                />
              )}
            />
          </IconField>
        </div>

        <div className="flex flex-col gap-3 mt-3">
          <button
            className="py-2.5 rounded-2xl mt-3 bg-accent font-bold tracking-wide cursor-pointer"
            type={"submit"}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registration;