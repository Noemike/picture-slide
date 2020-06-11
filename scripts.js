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

/*for(let i = 1; i <= imagesData.photo.length; i++) {
    let numberIndex = parseInt(currentPhoto+1);

    $('.thumbnail-container').append('<div class="thumbnail"><img src="'+i+'.jpg" class="thumbnailImg"><div class="hiddenThumbnailTitle"></div></div>');  
    $('.thumbnail[src="'+numberIndex+'.jpg"]').css('border', 'solid 2px white');
    $('.thumbnail[src="'+numberIndex+'.jpg"]').css('box-shadow', '0 0 50px #fff');
}
    
  let data = ['first', 'second', 'third', 'fourth', 'fifth'] ;

  data.forEach ((item, index) => {
      $('.thumbnail-container').append(`<div class="box" data-index="${index}">${item} (data-index="${index}")</div>`);
      $('.box').click((event) => {
        let indexClicked = $(event.target).attr('data-index');
    }
  
  );*/
