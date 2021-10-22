const form = document.getElementById('request-quote');
const html = new HTMLUI();





eventListeners();

function eventListeners(){
    document.addEventListener('DOMContentLoaded', function(){

        const html = new HTMLUI();
        html.displayYears();
    });
    
    
    form.addEventListener('submit', function(e){
        e.preventDefault();

        const make = document.getElementById('make').value;
        const year = document.getElementById('year').value;

        const level = document.querySelector('input[name="level"]:checked').value;

        if( make === '' || year === '' || level === '') {
             html.displayError('All the fields are mandatory');
        } else {
            const insurance = new Insurance(make,year, level );
            const price = insurance.calculateQuotation(insurance);

            const prevResult = document.querySelector ('#result div');

                if(prevResult !=null) {
                    prevResult.remove();
                }
            html.showResults(price, insurance);
        }
    });
    

}


