import { withAuth } from "next-auth/middleware";
import { Roles } from "./types/role.type";
import { Pages } from "./types/pages.type";

const isAuthorisedForPages: Record<string, string[]> = {
  [Roles.EMPLOYEE]: [],
  [Roles.ADMIN]: [],
};
export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {},
  {
    callbacks: {
      authorized: ({ token, req }) => {
        if (!token) {
          return true;
          return req.nextUrl.pathname === Pages.LOGIN;
          isAuthorisedForPages[token?.role as string]?.includes(
            req.nextUrl.pathname,
          );
        }
        return true;
      },
    },
  },
);

export const config = { matcher: Object.values(Pages) };
