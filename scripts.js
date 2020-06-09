let data = {
    photo: '1monthsleep.jpg',
    title: 'One month old Levi',
    description: 'This is how he slept at one month old'
};

$('#photo').attr('src', data.photo);
$('#photo-title').attr('src', data.title);
$('#photo-description').attr('src', data.description);


/*<img id="photo" src="1monthsleep.jpg">
    <div class="gray-container">
      <h1 id="photo-title">One month old Levi</h1>
      <p id="photo-description">This is how he slept at one month old</p>
    </div>*/