const title = document.getElementById('id_title')
const slug = document.getElementById('id_slug')

const slugify = (val) => {
   return val.toString().toLowerCase().trim()
   			.replace(/&/g, '-and-')
   			.replace(/[\s\W]+/g, '-')
};

title.addEventListener('keyup',(e) => {
   slug.setAttribute('value', slugify(title.value));
});
