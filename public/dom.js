export function createTD(html) {
  const td = document.createElement("td");
  td.append(html);
  return td;
}

export function createTDWithLink(html, href) {
  const link = document.createElement("a");
  link.href = href;
  link.target = "_blank";
  link.innerHTML = html;

  return createTD(link);
}

export function hideElement(selector) {
  const elem = document.querySelector(selector);
  elem.style.display = "none";
}
