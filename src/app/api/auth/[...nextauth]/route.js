import NextAuth from "next-auth/next";
import CredentialsProviders from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
export const authOptions = {
     secret: process.env.NEXT_PUBLIC_SECRET_KEY,
     session: {
          strategy: 'jwt', maxAge: 30 * 24 * 60 * 60,
     },
     providers: [
          CredentialsProviders({
               credentials: {
                    email: {
                         label: 'Email',
                         type: 'text',
                         required: true,
                         placeholder: 'you email'
                    },
                    password: {
                         label: 'Password',
                         type: 'password',
                         required: true,
                         placeholder: 'Enter your Password'
                    }
               },
               async authorize(credentials) {
                    const { email, password } = credentials;
                    if (!credentials) {
                         return null;

                    }
                    if (email) {
                         const currentUser = users.find((user) => user.email === email)
                         if (currentUser) {
                              if (currentUser.password === password) {
                                   return currentUser;
                              }
                         }
                    }
                    return null;
               },
          }),
          GoogleProvider({
               clientId: process.env.GOOGLE_CLIENT_ID,
               clientSecret: process.env.GOOGLE_CLIENT_SECRET
          }),
          GitHubProvider({
               clientId: process.env.GITHUB_ID,
               clientSecret: process.env.GITHUB_SECRET
          })
     ],
     callbacks: {
          async jwt({ token, account, user }) {
               // Persist the OAuth access_token and or the user id to the token right after signin
               if (account) {
                    token.type = user.type

               }
               return token
          },

          async session({ session, token }) {
               session.user.type = token.type
               return session;
          },
     },
}

const handler = NextAuth(authOptions)
const users = [
     {
          id: 1,
          name: 'mehedi',
          email: 'mahi@gmail.com',
          type: 'admin',
          password: '123456'
     },
     {
          id: 2,
          name: 'mehedi1',
          email: 'mahi1@gmail.com',
          type: 'user',
          password: '1234567'
     },
     {
          id: 3,
          name: 'mehedi2',
          email: 'mahi2@gmail.com',
          type: 'admin',
          password: '1234568'
     }
]
export { handler as GET, handler as POST }