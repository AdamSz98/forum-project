import axios from 'axios';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import jwt_decode from 'jwt-decode';

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const res = await axios({
          method: 'post',
          url: `${process.env.NEXT_PUBLIC_API_URL}/users/login`,
          data: credentials,
          headers: {
            "Content-Type": "application/json",
          }
        });

        const token = res.data
        const tokenData = jwt_decode(token);
        const user = {
          id: tokenData.Id,
          name: tokenData.Username,
          email: tokenData.email
        };

        console.log(user);

        if (res.status == 200 && user) {
          return {user, token};
        }

        return null;
      },
      credentials: {}
    })
  ],
  callbacks: {
    async jwt({token, user}) {
      return { ...token, ...user};
    },
    async session({session, token}) {
      session.user = token.user;
      session.token = token.token;
      return session
    }
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_SECRET,
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}