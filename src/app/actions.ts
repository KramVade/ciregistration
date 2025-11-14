"use server";

import { z } from "zod";

const registrationSchema = z.object({
  pangalan: z.string().min(2, "Kinakailangan ang buong pangalan."),
  palayaw: z.string().min(2, "Kinakailangan ang palayaw."),
  edad: z.string().min(1, "Kinakailangan ang edad."),
  kasarian: z.enum(["Lalaki", "Babae"]),
  contactNumber: z.string().min(10, "Kinakailangan ang contact number."),
  localChurch: z.string().min(2, "Kinakailangan ang lokal na simbahan."),
  kasapian: z.enum(["Bawtisado", "Nagpapahayag"]),
  ilangBeses: z
    .string()
    .min(1, "Kinakailangan ang sagot kung ilang beses nang nakadalo."),
  mgaInaasahan: z.string().min(5, "Kinakailangan ang iyong mga inaasahan."),
});


type State = {
  errors?: {
    [key: string]: string[] | undefined;
    pangalan?: string[];
    palayaw?: string[];
    edad?: string[];
    kasarian?: string[];
    contactNumber?: string[];
    localChurch?: string[];
    kasapian?: string[];
    ilangBeses?: string[];
    mgaInaasahan?: string[];
  };
  message?: string | null;
};

export async function registerForInstitute(
  prevState: State | null,
  formData: FormData
): Promise<State> {
  const validatedFields = registrationSchema.safeParse({
    pangalan: formData.get("pangalan"),
    palayaw: formData.get("palayaw"),
    edad: formData.get("edad"),
    kasarian: formData.get("kasarian"),
    contactNumber: formData.get("contactNumber"),
    localChurch: formData.get("localChurch"),
    kasapian: formData.get("kasapian"),
    ilangBeses: formData.get("ilangBeses"),
    mgaInaasahan: formData.get("mgaInaasahan"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Error: Pakisuri ang iyong input at subukang muli.",
    };
  }

  // Simulate saving to a database
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Registered:", validatedFields.data);

  // In a real application, you would save the data to a database like Firestore.

  return {
    message: `Tagumpay! Maligayang pagdating, ${validatedFields.data.palayaw}!`,
  };
}
