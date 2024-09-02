import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { UserService } from "../services/userservice.service";

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  if (userService.getUserAuthenticated()) {
    return true;
  } else {
    router.navigate(["/"]);
    return false;
  }
};
