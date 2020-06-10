/*let data = {
    photo: '1month.jpg',
    title: 'One month old Levi',
    description: 'This is how he slept at one month old',
};*/




let imagesData = {
    photo: ['1month.jpg', '3month.jpg', '6month.jpg', '10month.jpg', '1yr.jpg'],
    title: ['One month old Levi', 'Three months old Levi', 'Six months old Levi', 'Ten months old Levi', 'One year old Levi'],
    description: ['This is how he slept when he was one month old',
                'This is how he slept when he was three months old',
                'This is how he slept when he was six months old',
                'This is how he slept when he was ten months old',
                'This is how he slept when he was one year old']
};

let currentPhoto = 0;
let currentPhotoTitle = 0;
let currentPhotoDescription = 0;

/*$('#photo').attr('src', data.photo);
$('#photo-title').text(data.title);
$('#photo-description').text(data.description);*/

let loadPhoto = (photoNumber) => {

    $('#mainImg').attr('src', imagesData.photo[currentPhoto]);
   // $('#mainImg').css('border', 'solid 2px grey');
   // $('#mainImg').css('box-shadow', '5 5 50px #fff');
    $('#currentPhotoTitle').text(imagesData.title[currentPhotoTitle]);
    $('#currentPhotoDescription').text(imagesData.description[currentPhotoDescription]);
}

loadPhoto(currentPhoto)

$('#right-arrow').click(() => {
    if(currentPhoto < 5) {
        currentPhoto++; 
        currentPhotoTitle++;
        currentPhotoDescription++;
    }
    loadPhoto(currentPhoto);
});

$('#left-arrow').click(() => {
    if(currentPhoto > 0) {
        currentPhoto--; 
        currentPhotoTitle--;
        currentPhotoDescription--;
    }
    loadPhoto(currentPhoto);
});
