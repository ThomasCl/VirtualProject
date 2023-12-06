import { withAuth } from "next-auth/middleware";
import { Roles } from "./types/role.type";
import { Pages } from "./types/pages.type";

const isAuthorisedForPages: Record<string, string[]> = {
  [Roles.EMPLOYEE]: [
    Pages.SUGGESTIONS_OVERVIEW,
    Pages.SUGGESTIONS_VOTE,
    Pages.SUGGESTIONS,
  ],
  [Roles.ADMIN]: [
    Pages.ADMIN,
    Pages.SUGGESTIONS_REVIEW,
    Pages.SUGGESTIONS_OVERVIEW,
    Pages.SUGGESTIONS_VOTE,
    Pages.SUGGESTIONS,
  ],
};
export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {},
  {
    callbacks: {
      authorized: ({ token, req }) => {
        if (!token) {
          return req.nextUrl.pathname === Pages.LOGIN;
        } else {
          return (
            req.nextUrl.pathname === Pages.LOGIN ||
            isAuthorisedForPages[token?.role as string]?.some((item) =>
              req.nextUrl.pathname.startsWith(item),
            )
          );
        }
      },
    },
  },
);
