$(function () {
  const images = [
    'full_tower_2',
    'full_grand_hall',
  ];
  const main = $('#photos');
  let count = 0;

  function changeImage() {
    if (count === images.length) {
      count = 0;
    }

    const image = images[count];

    $('#photo_1').css({
      background: 'url("/assets/images/slider/' + image + '.jpg")',
      'background-size': 'cover',
      'background-position': 'center center',
    });

    count += 1;

    setTimeout(changeImage, 10000);
  }

  changeImage();
});
