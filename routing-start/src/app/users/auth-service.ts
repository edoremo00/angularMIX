export class AuthService {
  logged = false;

  isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.logged);
      }, 800);
    });
  }
  login() {
    this.logged = true;
  }

  logout() {
    this.logged = false;
  }
}
