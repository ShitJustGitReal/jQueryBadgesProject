$(function () {

    $.ajax({
        url: 'https://www.codeschool.com/users/bramlaurijsen.json',
        dataType: 'jsonp',
        success: function (response) {
            let badge, badges = response.courses.completed;
            let filltemplate, template = '<div class="course"><h3>%title%</h3><img src="%image%" alt="%title% badge"><a class="btn btn-primary" href="%url%" target="_blank">See course</a></div>';
            let container = $('#badges');
            for (i=0; i < badges.length; i++){
                badge = badges[i];
                filltemplate = template.replace(/%title%/g, badge.title).replace('%image%', badge.badge).replace('%url%', badge.url);
                container.append(filltemplate);
                // to check json object of each badge in the console, use: console.log(badge);
            }
        }
    });

});