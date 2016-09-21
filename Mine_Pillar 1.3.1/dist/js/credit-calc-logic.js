$(function() {
    //jQuery code here

    function getEstimate( NUM_OF_SCHOOLS, DURATION, NUM_OF_CAMPAIGNS) {

        var CREDITS_REQUIRED = (((DURATION -1)*3)+5);

        var PER_CREDIT_PRICE;

        if ( NUM_OF_SCHOOLS > 19 || NUM_OF_CAMPAIGNS > 19 ) {

          PER_CREDIT_PRICE = 5;

        } else {

          PER_CREDIT_PRICE = (5 * 0.9);

        }


        console.log(CREDITS_REQUIRED);

        // var DISCOUNT;
        // var BASE;

        // if (NUM_OF_SCHOOLS < 19 || NUM_OF_CAMPAIGNS ) {
        //     DISCOUNT = 1;
        //     BASE = 25;
        // } else {
        //     DISCOUNT = 0.9;
        //     BASE = 22.5;
        // }
        
        return CREDITS_REQUIRED;
       
        // return  ((CREDITS_REQUIRED) + (BASE * NUM_OF_SCHOOLS) * DISCOUNT);
    }

    var estimate = getEstimate(1, 3, 1);
    console.log(estimate);

});
