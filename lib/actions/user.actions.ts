"use server";

import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";

export const signIn = async () => {
  try {
    const { account } = await createAdminClient();

    await account.create(ID.unique(), email, password, name);
    const session = await account.createEmailPasswordSession(email, password);
  
    cookies().set("my-custom-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
  
    redirect("/account");
  } catch (error) {
    console.error(error);
  }
};
export const signup = async (userData: SignUpParams) => {
  try {
    //   create a user account
  } catch (error) {
    console.error(error);
  }
};


export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
}

