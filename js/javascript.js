$("input")
  .keyup(function () {
      var value = $(this).val();

      var DriftLevel1 = 10000;
      var DriftLevel2 = 25000;
      var DriftLevel3 = 50000;
      var DriftLevel4 = 100000;
      var DriftLevel5 = 200000;

      var endDate = new Date('September 25, 2018');
      var currentDate = Date.now();
      var timeLeft = endDate - currentDate;

      timeLeft = timeLeft / 1000;
      timeLeft = timeLeft / 60;
      timeLeft = timeLeft / 60;
      timeLeft = timeLeft / 24;

      if (value > DriftLevel1) {
          DriftLevel1 = 0;
      } else {
          DriftLevel1 = DriftLevel1 - value;
      }

      if (value > DriftLevel2) {
          DriftLevel2 = 0;
      } else {
          DriftLevel2 = DriftLevel2 - value;
      }

      if (value > DriftLevel3) {
          DriftLevel3 = 0;
      } else {
          DriftLevel3 = DriftLevel3 - value;
      }

      if (value > DriftLevel4) {
          DriftLevel4 = 0;
      } else {
          DriftLevel4 = DriftLevel4 - value;
      }

      if (value > DriftLevel5) {
          DriftLevel5 = 0;
      } else {
      DriftLevel5 = DriftLevel5 - value;
  }

      $("#Drlvl1").text(DriftLevel1);
      $("#Drlvl2").text(DriftLevel2);
      $("#Drlvl3").text(DriftLevel3);
      $("#Drlvl4").text(DriftLevel4);
      $("#Drlvl5").text(DriftLevel5);

      $("#Davg1").text(Math.ceil(DriftLevel1 / timeLeft));
      $("#Davg2").text(Math.ceil(DriftLevel2 / timeLeft));
      $("#Davg3").text(Math.ceil(DriftLevel3 / timeLeft));
      $("#Davg4").text(Math.ceil(DriftLevel4 / timeLeft));
      $("#Davg5").text(Math.ceil(DriftLevel5 / timeLeft));

      var RkLevel1 = 35000;
      var RkLevel2 = 75000 ;
      var RkLevel3 = 125000;
      var RkLevel4 = 250000;
      var RkLevel5 = 500000;

      if (value > RkLevel1) {
          RkLevel1 = 0;
      } else {
          RkLevel1 = RkLevel1 - value;
      }

      if (value > RkLevel2) {
          RkLevel2 = 0;
      } else {
          RkLevel2 = RkLevel2 - value;
      }

      if (value > RkLevel3) {
          RkLevel3 = 0;
      } else {
          RkLevel3 = RkLevel3 - value;
      }

      if (value > RkLevel4) {
          RkLevel4 = 0;
      } else {
          RkLevel4 = RkLevel4 - value;
      }

      if (value > RkLevel5) {
          RkLevel5 = 0
      } else {
          RkLevel5 = RkLevel5 - value;
      }

      $("#Rlvl1").text(RkLevel1);
      $("#Rlvl2").text(RkLevel2);
      $("#Rlvl3").text(RkLevel3);
      $("#Rlvl4").text(RkLevel4);
      $("#Rlvl5").text(RkLevel5);


      $("#Ravg1").text(Math.ceil(RkLevel1 / timeLeft));
      $("#Ravg2").text(Math.ceil(RkLevel2 / timeLeft));
      $("#Ravg3").text(Math.ceil(RkLevel3 / timeLeft));
      $("#Ravg4").text(Math.ceil(RkLevel4 / timeLeft));
      $("#Ravg5").text(Math.ceil(RkLevel5 / timeLeft));

  })
  .keyup();


