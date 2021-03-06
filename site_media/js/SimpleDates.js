var SimpleDates = {
    formatNPreviousDates: function(daysNumber) {
        var datesToFormat = this.getNDaysBackwardFromToday(daysNumber);
        var daysToShow = [];
        for (i=0; i<datesToFormat.length; i++) {
            daysToShow.push(new Date(datesToFormat[i]).format('yyyy-mm-dd'));
        }
        return daysToShow;
    },

    getNDaysBackwardFromToday: function(daysNumber) {
        var today = new Date();
        var oneDayOffsetInMillis = 24 * 60 * 60 * 1000;
        var resultDates = [];
        for (i=daysNumber-1; i>=0; i--) {
            resultDates.push(new Date(today-oneDayOffsetInMillis*i));
        }
        return resultDates;
    },

    chosenDates: function() {
        return this.formatNPreviousDates(5);
    },

    displayedDatesInActivityContext: function(activityCompleteDates) {
        var datesInActivityContext = [];
        var displayedDates = this.chosenDates();

        for (var i=0; i<this.chosenDates().length; i++) {
            var displayedDate = displayedDates[i];
            var activityCompleteness = {
                date : displayedDate,
                isComplete: jQuery.inArray(displayedDate, activityCompleteDates) > -1
            };
            datesInActivityContext.push(activityCompleteness);
        }
        return datesInActivityContext;
    }
};