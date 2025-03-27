const imgUrlsArr = [
    "https://img.freepik.com/free-photo/beautiful-shot-white-british-shorthair-kitten_181624-57681.jpg",
    "https://t4.ftcdn.net/jpg/00/49/51/85/360_F_49518584_UPN5nTSxh8ifrAeYX2QxCSJAu48JULqo.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9h8RvqMTkYa4nCEuxNuRQcgeMIBXftINUPg5YdbI01-ksvTozuOmtkBQ&s",
    "https://img.freepik.com/free-photo/adorable-cat-relaxing-indoors_23-2150692796.jpg"
  ];
  
  const articleContainer = document.getElementById("acon");
  
  articleContainer.innerHTML = `<img src="${imgUrlsArr[0]}" class="image" />`;
  
  let imgIndex = 0;
  
  function previousImg() {
    if (imgIndex > 0 && imgIndex < imgUrlsArr.length) {
      imgIndex--;
    } else {
      imgIndex = imgUrlsArr.length - 1;
    }
    articleContainer.innerHTML = `<img src="${imgUrlsArr[imgIndex]}" class="image" />`;
  }
  
  function nextImg() {
    if (imgIndex >= 0 && imgIndex < imgUrlsArr.length - 1) {
      imgIndex++;
    } else {
      imgIndex = 0;
    }
    articleContainer.innerHTML = `<img src="${imgUrlsArr[imgIndex]}" class="image" />`;
  }