$(document).ready (
    function (){


        let zoom= $('.img_zoom');
            zoom.on('mousemove', function(){
                $(this).css({'width':'200px', 'height':'200px'});
            });
            // cuando se quita el raton y vuelve a la normalidad
            zoom.on('mouseout', function(){
                $(this).css({'width':'140px', 'height':'140px'});
            });

    })