let socials = {
  facebook: {
    url: 'https://www.facebook.com/hellaryjesus.colomacardoza',
    icon: 'https://raw.githubusercontent.com/Jesus-ColomaCardoza/firmaCorreo/master/Dev/icons/facebook.png'
  },
  instagram: {
    url: 'https://www.instagram.com/jesuscolomac/',
    icon: 'https://raw.githubusercontent.com/Jesus-ColomaCardoza/firmaCorreo/master/Dev/icons/instagram.png'
  },
  linkedin: {
    url: 'https://www.linkedin.com/in/jesuscolomacardoza/',
    icon: 'https://raw.githubusercontent.com/Jesus-ColomaCardoza/firmaCorreo/master/Dev/icons/linkedin.png'
  },
  github: {
    url: 'https://github.com/Jesus-ColomaCardoza',
    icon: 'https://raw.githubusercontent.com/Jesus-ColomaCardoza/firmaCorreo/master/Dev/icons/github.png'
  }
}

let socialIcons = '';
for (let social in socials) {
  socialIcons += `<a href="${socials[social].url}" style="display:inline-block;margin-right:15px"><img src="${socials[social].icon}" width="20" style="display: block"></a>`
}

document.getElementById('sociales').innerHTML = socialIcons;