app.viewWeather = Backbone.View.extend({
  el: '.control-block',

  events: {
    'click .search-city': 'loadWeather'
  },
  loadWeather: function() {
    var cityValue = $('.city-name').val(),
        dataWeather;
    this.model.set('location',cityValue);
    dataWeather = this.model.fetch();
    return console.log(dataWeather);
  }
});

var view = new app.viewWeather({
  model: weather
});
