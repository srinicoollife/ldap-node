const { authenticate } = require("ldap-authentication");
const users = ["riemann", "gauss", "euler"];

const getUser = (user) => {
  return authenticate({
    ldapOpts: { url: "ldap://ldap.forumsys.com" },
    userDn: "uid=gauss,dc=example,dc=com",
    userPassword: "password",
    userSearchBase: "dc=example,dc=com",
    usernameAttribute: "uid",
    username: user,
  });
};

const fetchUsers = () => {
  const promises = users.map((user) => getUser(user));
  Promise.all(promises).then((res) => {
    console.log("users", res);
  });
};

fetchUsers();
