function getWeekDay(date) {
     date = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
      ];
      var d = new Date();
      var n = d.getDay();
      console.log(date[n]);
  }
  

  getWeekDay("rez");