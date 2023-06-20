import type { Session, User } from 'next-auth'
import type { JWT } from 'next-auth/jwt'

type UserId = string

//The declare module keywords in TypeScript are used to define the shape or structure of an external module or library that doesn't provide its own TypeScript declaration files. They are primarily used when you want to use a JavaScript library or module in your TypeScript project and need to provide type information for it.
declare module 'next-auth/jwt' {
  interface JWT {
    id: UserId
    username?: string | null
  }
}

declare module 'next-auth' {
  interface Session {
    user: User & {
      id: UserId
      username?: string | null
    }
  }
}