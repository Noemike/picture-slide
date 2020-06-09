let data = {
    photo: '1month.jpg',
    title: 'One month old Levi',
    description: 'This is how he slept at one month old',
};




/*let data = {
    photo: ['1month.jpg', '3month.jpg', '6month.jpg', '10month.jpg', '1yr.jpg'],
    title: ['One month old Levi', 'Three months old Levi', 'Six months old Levi', 'Ten months old Levi'],
    description: ['This is how he slept at one month old',
                'This is how he slept at three months old',
                'This is how he slept at six months old',
                'This is how he slept at ten months old']
};*/

let currentPhoto = 0;
var currentPhotoTitle = 0;
var currentPhotoDescription = 0;

$('#photo').attr('src', data.photo);
$('#photo-title').text(data.title);
$('#photo-description').text(data.description);

/*let loadPhoto = (photoNumber) => {

    $('#photo').attr('src', data.photo[currentPhoto]);
    $('#photo').css('border', 'solid 2px white');
    $('#photo').css('box-shadow', '0 0 50px #fff');
    $('#currentPhotoTitle').text(data.title[currentPhotoTitle]);
    $('#currentPhotoDescription').text(data.description[currentPhotoDescription]);

}*/