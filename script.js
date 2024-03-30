const KEYWORD = "key";
const URL_CATALOGO_REGALOS = "https://heyzine.com/flip-book/ad3a6bc5d6.html";
const URL_CATALOGO_BOCADITOS = "https://heyzine.com/flip-book/c81fbbfee5.html";
const URL_CATALOGO_SAN_VALENTIN =
  "https://heyzine.com/flip-book/b6888792a5.html";

const url = document.location.href;
const indexKey = url.lastIndexOf(KEYWORD);
const key = url.substring(indexKey + 4);

if (indexKey === -1) {
  throw new Error("La URL debe contener el parámetro 'key'");
}

switch (key) {
  case "regalos":
    document.location.replace(URL_CATALOGO_REGALOS);
    break;
  case "bocaditos":
    document.location.replace(URL_CATALOGO_BOCADITOS);
    break;
  case "san-valentin":
    document.location.replace(URL_CATALOGO_SAN_VALENTIN);
    break;
  default:
    console.log("La palabra clave es incorrecta");
}
