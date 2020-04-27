function testResults (form) {
    const bookData = {
        title : $('#titleBook').val(),
        category : $('#categoryBook').val(),
        description : $('#descriptionBook').val()
    };
    fetch('https://fullstack-book.ariefdfaltah.com/book/create?key=fritzent', {
      method: 'POST',
      body: JSON.stringify(bookData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(function (response) {
      if (response.ok) {
        location.reload();
        return response.json();
      }
      return Promise.reject(response);
    }).then(function (data) {
      console.log(data);
    }).catch(function (error) {
      console.warn('Something went wrong.', error);
    });
  }
  