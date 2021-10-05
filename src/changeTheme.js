const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');
const themeSwitch = document.getElementById('theme-switch-toggle');

function setTheme() {
  const theme = localStorage.getItem('theme');
  if (theme === Theme.DARK) {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    themeSwitch.checked = true;
    return;
  };
  if (theme === Theme.LIGHT) {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    return;
  };
  localStorage.setItem('theme', Theme.LIGHT);
};

function changeTheme() {
  const check = themeSwitch.checked;
  if (check) {
      localStorage.setItem('theme', Theme.DARK);
    } else {
      localStorage.setItem('theme', Theme.LIGHT);
  };
  setTheme();
};

setTheme();
changeTheme();
themeSwitch.addEventListener('change', changeTheme);


// function changeTheme(e) {
//   const check = themeSwitch.checked;
//   if (check) {
//       body.classList.remove(Theme.LIGHT);
//       body.classList.add(Theme.DARK);
//     } else {
//       body.classList.remove(Theme.DARK);
//       body.classList.add(Theme.LIGHT);
//     };
// };



