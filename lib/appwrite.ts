import { CreateUserParams, SignInParams } from "@/type";
import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";

export const appwriteConfig = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!,
    platform: 'com.dd.foodorderingapp',
    projectid: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!,
    databaseId: '68767752002117e4058a',
    userCollectionId: '68767819003ded9bbbfc'
}

export const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectid)
    .setPlatform(appwriteConfig.platform)

export const account = new Account(client);
export const databases = new Databases(client);

const avatars = new Avatars(client);

export const createUser = async ({ email, password, name }: CreateUserParams) => {
    try {
        const newAccount: any = await account.create(ID.unique(), email, password, name);

        if (!newAccount) throw Error;

        await SignIn({ email, password });

        const avatarUrl = avatars.getInitialsURL(name);

        return await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            { email, name, accountId: newAccount.$id, avatar: avatarUrl }
        );
    } catch (error) {
        throw new Error(error as string);
    }
}

export const SignIn = async ({ email, password }: SignInParams) => {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        
    } catch (error) {
        throw new Error(error as string)
    }
}

