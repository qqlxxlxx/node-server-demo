console.log('入口文件')

let xhr = new XMLHttpRequest();
xhr.open('get', 'http://localhost:3001/user', true);
xhr.onload = function () {
  console.log(xhr.response);
}
xhr.send();