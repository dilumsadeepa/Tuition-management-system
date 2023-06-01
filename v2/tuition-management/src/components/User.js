class User {
    static data = null;
  
    static setUser(userData) {
      User.data = userData;
    }
  
    static getUser() {
      return User.data;
    }
}

export default User;