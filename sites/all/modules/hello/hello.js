/**
 * Created by van on 12/25/2015.
 */
jQuery(document).ready(function(){
    jQuery('#btnAjax').click(function(){
        jQuery.ajax({
            url: Drupal.settings.basePath + 'gethello',
            data: {
                name: jQuery('#edit-name').val()
            },
            success: function(data){
                jQuery('#msg-display').append(data);
            }
        });
    });

    jQuery('#btnCallTemplate').click(function(){
        jQuery.ajax({
            url: Drupal.settings.basePath + 'console/restful/template/hello/list',
            success: function(data){

            }
        });
    });

});
