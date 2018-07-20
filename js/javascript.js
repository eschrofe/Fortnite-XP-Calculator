$("input")
  .keyup(function () {
      var value = $(this).val();

      var DriftLevel1 = 10000;
      var DriftLevel2 = 25000;
      var DriftLevel3 = 50000;
      var DriftLevel4 = 100000;
      var DriftLevel5 = 200000;

      var xpFull = 0;
      var XpFullPercent = 100;

      var xpPercentD1 = (value / DriftLevel1) * 100;
      var xpPercentD2 = (value / DriftLevel2) * 100;
      var xpPercentD3 = (value / DriftLevel3) * 100;
      var xpPercentD4 = (value / DriftLevel4) * 100;
      var xpPercentD5 = (value / DriftLevel5) * 100;

      var endDate = new Date('September 25, 2018');
      var currentDate = Date.now();
      var timeLeft = endDate - currentDate;

      timeLeft = timeLeft / 1000;
      timeLeft = timeLeft / 60;
      timeLeft = timeLeft / 60;
      timeLeft = timeLeft / 24;

      if (value > DriftLevel1) {
          DriftLevel1 = xpFull;
          xpPercentD1 = XpFullPercent;
      } else {
          DriftLevel1 = DriftLevel1 - value;
      }

      if (value > DriftLevel2) {
          DriftLevel2 = xpFull;
          xpPercentD2 = XpFullPercent;
      } else {
          DriftLevel2 = DriftLevel2 - value;
      }

      if (value > DriftLevel3) {
          DriftLevel3 = xpFull;
          xpPercentD3 = XpFullPercent;
      } else {
          DriftLevel3 = DriftLevel3 - value;
      }

      if (value > DriftLevel4) {
          DriftLevel4 = xpFull;
          xpPercentD4 = XpFullPercent;
      } else {
          DriftLevel4 = DriftLevel4 - value;
      }

      if (value > DriftLevel5) {
          DriftLevel5 = xpFull;
          xpPercentD5 = XpFullPercent;
      } else {
      DriftLevel5 = DriftLevel5 - value;
  }

      $("#Drlvl1").text(DriftLevel1);
      $("#Drlvl2").text(DriftLevel2);
      $("#Drlvl3").text(DriftLevel3);
      $("#Drlvl4").text(DriftLevel4);
      $("#Drlvl5").text(DriftLevel5);

      $("#xpPercentD1").text(Math.floor(xpPercentD1) + "%");
      $("#xpPercentD2").text(Math.floor(xpPercentD2) + "%");
      $("#xpPercentD3").text(Math.floor(xpPercentD3) + "%");
      $("#xpPercentD4").text(Math.floor(xpPercentD4) + "%");
      $("#xpPercentD5").text(Math.floor(xpPercentD5) + "%");

      $("#Davg1").text(Math.ceil(DriftLevel1 / timeLeft));
      $("#Davg2").text(Math.ceil(DriftLevel2 / timeLeft));
      $("#Davg3").text(Math.ceil(DriftLevel3 / timeLeft));
      $("#Davg4").text(Math.ceil(DriftLevel4 / timeLeft));
      $("#Davg5").text(Math.ceil(DriftLevel5 / timeLeft));

      var RkLevel1 = 35000;
      var RkLevel2 = 75000;
      var RkLevel3 = 125000;
      var RkLevel4 = 250000;
      var RkLevel5 = 500000;

      var xpPerecentR1 = (value / RkLevel1) * 100;
      var xpPerecentR2 = (value / RkLevel2) * 100;
      var xpPerecentR3 = (value / RkLevel3) * 100;
      var xpPerecentR4 = (value / RkLevel4) * 100;
      var xpPerecentR5 = (value / RkLevel5) * 100;

      if (value > RkLevel1) {
          RkLevel1 = xpFull;
          xpPerecentR1 = XpFullPercent;
      } else {
          RkLevel1 = RkLevel1 - value;
      }

      if (value > RkLevel2) {
          RkLevel2 = xpFull;
          xpPerecentR2 = XpFullPercent;
      } else {
          RkLevel2 = RkLevel2 - value;
      }

      if (value > RkLevel3) {
          RkLevel3 = xpFull;
          xpPerecentR3 = XpFullPercent;
      } else {
          RkLevel3 = RkLevel3 - value;
      }

      if (value > RkLevel4) {
          RkLevel4 = xpFull;
          xpPerecentR4 = XpFullPercent;
      } else {
          RkLevel4 = RkLevel4 - value;
      }

      if (value > RkLevel5) {
          RkLevel5 = xpFull;
          xpPerecentR5 = XpFullPercent;
      } else {
          RkLevel5 = RkLevel5 - value;
      }

      $("#Rlvl1").text(RkLevel1);
      $("#Rlvl2").text(RkLevel2);
      $("#Rlvl3").text(RkLevel3);
      $("#Rlvl4").text(RkLevel4);
      $("#Rlvl5").text(RkLevel5);

      $("#xpPercentR1").text(Math.floor(xpPerecentR1) + "%");
      $("#xpPercentR2").text(Math.floor(xpPerecentR2) + "%");
      $("#xpPercentR3").text(Math.floor(xpPerecentR3) + "%");
      $("#xpPercentR4").text(Math.floor(xpPerecentR4) + "%");
      $("#xpPercentR5").text(Math.floor(xpPerecentR5) + "%");


      $("#Ravg1").text(Math.ceil(RkLevel1 / timeLeft));
      $("#Ravg2").text(Math.ceil(RkLevel2 / timeLeft));
      $("#Ravg3").text(Math.ceil(RkLevel3 / timeLeft));
      $("#Ravg4").text(Math.ceil(RkLevel4 / timeLeft));
      $("#Ravg5").text(Math.ceil(RkLevel5 / timeLeft));

  })
  .keyup();


