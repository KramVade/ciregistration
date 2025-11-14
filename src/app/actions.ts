"use server";

import { z } from "zod";

const registrationSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters."),
  lastName: z.string().min(2, "Last name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
});

type State = {
  errors?: {
    firstName?: string[];
    lastName?: string[];
    email?: string[];
  };
  message?: string | null;
};

export async function registerForInstitute(
  prevState: State | null,
  formData: FormData
): Promise<State> {
  const validatedFields = registrationSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Error: Please check your input and try again.",
    };
  }

  // Simulate saving to a database
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Registered:", validatedFields.data);

  // In a real application, you would save the data to a database like Firestore.

  return {
    message: `Success! Welcome, ${validatedFields.data.firstName}! We've sent a confirmation to ${validatedFields.data.email}.`,
  };
}
