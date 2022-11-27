let socials = {
    facebook: {
      url: 'https://ed.team/facebook',
      icon: 'icons/facebook.png'
    } ,
    instagram: { 
      url: 'https://ed.team/twitter',
      icon: 'icons/instagram.png'
    },
    linkedin: {
      url: 'https://ed.team/linkedin',
      icon: 'icons/linkedin.png'
    },
    github: {
      url: 'https://ed.team/github',
      icon: 'icons/github.png'
    } 
  }
  
  let socialIcons = '';
  for(let social in socials) {
    socialIcons += `<a href="${socials[social].url}" style="display:inline-block;margin-right:15px"><img src="${socials[social].icon}" width="20" style="display: block"></a>`
  }
  
  document.getElementById('sociales').innerHTML = socialIcons;