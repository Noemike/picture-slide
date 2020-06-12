let image1 = {
    photo: '1month.jpg',
    title: 'One month old Levi',
    description: 'This is how he slept when he was one month old',
}

let image2 = {
    photo: '3month.jpg',
    title: 'Three month old Levi',
    description: 'This is how he slept when he was three months old',
}

let image3 = {
    photo: '6month.jpg',
    title: 'Six month old Levi',
    description: 'This is how he slept when he was six months old',
}

let image4 = {
    photo: '10month.jpg',
    title: 'Ten month old Levi',
    description: 'This is how he slept when he was ten months old',
}

let image5 = {
    photo: '1yr.jpg',
    title: 'One year old Levi',
    description: 'This is how he slept when he was one year old',
}

let imagesData = [image1, image2, image3, image4, image5]


let currentPhoto = 0;


let loadPhoto = (photoNumber) => {

    $('#mainImg').attr('src', imagesData[photoNumber].photo);
    $('#currentPhotoTitle').text(imagesData[photoNumber].title);
    $('#currentPhotoDescription').text(imagesData[photoNumber].description);
}

loadPhoto(currentPhoto)

imagesData.forEach((thumbnail, index) => {
    $(".thumbnail-container").append(`<img onclick="loadPhoto(${index})" src="${thumbnail.photo}"/>`)
});




$('#right-arrow').click(() => {
    if (currentPhoto < 5) {
        currentPhoto++;
    }
    loadPhoto(currentPhoto);
});

$('#left-arrow').click(() => {
    if (currentPhoto > 0) {
        currentPhoto--;
    }
    loadPhoto(currentPhoto);
});

