
//控制換頁jQuery
$(function(){
    var current_fs, next_fs, previous_fs;
    var left, opacity, scale; 
    var animating;
    $(".next").click(function(){
        if(animating) return false;
        animating = true;
        
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();
        
        // $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
        
        next_fs.show(); 
        current_fs.animate({opacity: 0},{
            step: function(now, mx) {
                scale = 1 - (1 - now) * 0.2;
                left = (now * 50)+"%";
                opacity = 1 - now;
                current_fs.css({
            'transform': 'scale('+scale+')',
            // 'position': 'relative',
            'position':'absolute'
          });
                next_fs.css({'left': left, 'opacity': opacity});
            }, 
            duration: 800, 
            complete: function(){
                current_fs.hide();
                animating = false;
            }, 
            easing: 'easeInOutBack'
        });
    });
    
    $(".previous").click(function(){
        if(animating) return false;
        animating = true;
        
        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();
        
        //de-activate current step on progressbar
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
        
        
        previous_fs.show(); 
    
        current_fs.animate({opacity: 0}, {
            step: function(now, mx) {
                scale = 0.8 + (1 - now) * 0.2;
                left = ((1-now) * 50)+"%";
                opacity = 1 - now;
                current_fs.css({'left': left});
                previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity ,'position': 'relative'});
            }, 
            duration: 800, 
            complete: function(){
                current_fs.hide();
                animating = false;
            }, 
            easing: 'easeInOutBack'
        });
    });
    
    $(".submit").click(function(){
        return false;
    })
    
    
    });
    
    
    
    
    
    
    
    //加入子題*******************************************************
    //2a
    function open2a(){
        document.querySelector('.jump2a').style.display='block';	
        }
    function close2a(){
            document.querySelector('.jump2a').style.display='none';
        }
    // 3a
    function open3a(){
    document.querySelector('.jump3a').style.display='block';	
    }
    function close3a(){
        document.querySelector('.jump3a').style.display='none';
    }
    // 4a
    function open4a(){
        document.querySelector('.jump4a').style.display='block';	
    }
    function close4a(){
        document.querySelector('.jump4a').style.display='none';
    }
    //11a
    function open11a(){
        document.querySelector('.jump11a').style.display='block';	
    }
    function close11a(){
        document.querySelector('.jump11a').style.display='none';
    }
    //12a
    function open12a(){
        document.querySelector('.jump12a').style.display='block';	
    }
    function close12a(){
        document.querySelector('.jump12a').style.display='none';
    }
    //15a
    function open15a(){
        document.querySelector('.jump15a').style.display='block';	
    }
    function close15a(){
        document.querySelector('.jump15a').style.display='none';
    }
    //18a
    function open18a(){
        document.querySelector('.jump18a').style.display='block';	
    }
    function close18a(){
        document.querySelector('.jump18a').style.display='none';
    }
    //21a
    function open21a(){
        document.querySelector('.jump21a').style.display='block';	
    }
    function close21a(){
        document.querySelector('.jump21a').style.display='none';
    }
    //22a
    function open22a(){
        document.querySelector('.jump22a').style.display='block';	
    }
    function close22a(){
        document.querySelector('.jump22a').style.display='none';
    }
    //24
    function open24a(){
        document.querySelector('.jump24a').style.display='block';	
    }
    function close24a(){
        document.querySelector('.jump24a').style.display='none';
    }
    // 25
    function open25a(){
        document.querySelector('.jump25a').style.display='block';	
    }
    function close25a(){
        document.querySelector('.jump25a').style.display='none';
    }
    // 26
    function open26a(){
        document.querySelector('.jump26a').style.display='block';	
    }
    function close26a(){
        document.querySelector('.jump26a').style.display='none';
    }

    
    
    function open35(){
        document.querySelector('.select35_1').style.display='block';
        document.querySelector('.select35_2').style.display='block';
        document.querySelector('.select35_3').style.display='block';	
    }
    function close35(){
        document.querySelector('.select35_1').style.display='none';
        document.querySelector('.select35_2').style.display='none';
        document.querySelector('.select35_3').style.display='none';
    }
    
    // 36
    function open36(){
        document.querySelector('.select36_1').style.display='block';
        document.querySelector('.select36_2').style.display='block';
        document.querySelector('.select36_3').style.display='block';	
    }
    function close36(){
        document.querySelector('.select36_1').style.display='none';
        document.querySelector('.select36_2').style.display='none';
        document.querySelector('.select36_3').style.display='none';
    }
    
    
    
    
    
    
    // 基本問卷判斷*************************************************************
    $(document).ready(function(){
        // 3性別懷孕判斷
        $("input[name=sex]").on('click', function() { 
            var sex = $('input[name=sex]:checked').val();
            if(sex =='boy'){
                $('input[name = pregnant]').attr('disabled', true);
            }
            else if(sex=='girl'){
                $('input[name = pregnant]').removeAttr('disabled');
            }     
    
        // 3性別哺乳判斷
            if(sex=='boy'){
                $('input[name = nursing]').attr('disabled', true)
            }
            else if(sex=='girl'){
                $('input[name = nursing]').removeAttr('disabled');
            } 
         } );
    
        //  8教育程度判斷
         $("select[name=education_level]").on('click', function() { 
         var selectVal = $('[name=education_level]').val()
         if(selectVal=='education_other'){
             $('.other').removeAttr('disabled');
         }
         else{
             $('.other').attr('disabled',true);
         }
        } );
    
        // 9素食判斷
        $("select[name=vegetarian]").on('click', function() { 
            var selectVal = $('[name=vegetarian]').val()
            if(selectVal=='vegetarian_other'){
                $('.vegetarian_other').removeAttr('disabled');
            }
            else{
                $('.vegetarian_other').attr('disabled',true);
            }
           } );
    
        // 13判斷牙齒痛
        $("select[name=mouth_tooth]").on('click', function() { 
            var selectVal = $('[name=mouth_tooth]').val()
            if(selectVal=='mouth_tooth7'){
                $('.mouth_tooth7').removeAttr('disabled');
            }
            else{
                $('.mouth_tooth7').attr('disabled',true);
            }
           } );
    
    
    })

// 下一頁判斷
// 1*************************************
$(".1btn").click(function (e) {
    _this = $(this).parent();
    var q01val = _this.find("input[name=Q01]:checked").val();
    var q01_6 = _this.find("input[name=q01_6]");   
    
    if (!q01val)
         e.stopImmediatePropagation();

    if (q01val == '6' && q01_6.val() == '')
        e.stopImmediatePropagation();
    if (q01val == '6' && q01_6.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }




});

// 2*************************************
$(".2btn").click(function (e) {
    _this = $(this).parent();
    var q02val = _this.find("input[name=q02]:checked").val();
    
    var q02_6 = _this.find("input[name=q02_6]");   
    
    if (q02val=='1')
    return true;
    
    if (!q02val)
         e.stopImmediatePropagation();

    if (q02val == '6' && q02_6.val() == '')
        e.stopImmediatePropagation();
    if (q02val == '6' && q02_6.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }



    var q02a = _this.find("input[name=q02a]:checked").val();
    if (!q02a)
        e.stopImmediatePropagation(); 

    var q02b = _this.find("input[name=q02b]:checked").val();
     if (!q02b)
        e.stopImmediatePropagation();

    var q02c = _this.find("input[name=q02c]:checked").val();
    if (!q02c)
         e.stopImmediatePropagation();   
});


// 3*************************************

$(".3btn").click(function (e) {
    _this = $(this).parent();
    var q03val = _this.find("input[name=q03]:checked").val();
    
    var q03_6 = _this.find("input[name=q03_6]");   
    
    if (q03val=='1')
    return true;

    if (!q03val)
         e.stopImmediatePropagation();

    if (q03val == '6' && q03_6.val() == '')
        e.stopImmediatePropagation();
    if (q03val == '6' && q03_6.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }



    var q03a = _this.find("input[name=q03a]:checked").val();
    if (!q03a)
        e.stopImmediatePropagation(); 

    var q03b = _this.find("input[name=q03b]:checked").val();
     if (!q03b)
        e.stopImmediatePropagation();

});



// 4*************************************
$(".4btn").click(function (e) {
    _this = $(this).parent();
    var q04val = _this.find("input[name=q04]:checked").val();
    var q04_6 = _this.find("input[name=q04_6]");   
    
    if (q04val=='1')
    return true;

    if (!q04val)
         e.stopImmediatePropagation();

    if (q04val == '6' && q04_6.val() == '')
        e.stopImmediatePropagation();
    if (q04val == '6' && q04_6.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    var q04a = _this.find("input[name=q04a]:checked").val();
    if (!q04a)
        e.stopImmediatePropagation(); 
});

// 5*************************************
$(".5btn").click(function (e) {
    _this = $(this).parent();
    var q05val = _this.find("input[name=q05]:checked").val();
    var q05_6 = _this.find("input[name=q05_6]");   

    if (!q05val)
         e.stopImmediatePropagation();

    if (q05val == '6' && q05_6.val() == '')
        e.stopImmediatePropagation();
        if (q05val == '6' && q05_6.val() < 1){
            e.stopImmediatePropagation();
            alert('數值不能為負值');
        }
});
// 6*************************************
$(".6btn").click(function (e) {
    _this = $(this).parent();
    var q06val = _this.find("input[name=q06]:checked").val();
    var q06_6 = _this.find("input[name=q06_6]");   

    if (!q06val)
         e.stopImmediatePropagation();

    if (q06val == '6' && q06_6.val() == '')
        e.stopImmediatePropagation();
    if (q06val == '6' && q06_6.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
});
// 7*************************************
$(".7btn").click(function (e) {
    _this = $(this).parent();
    var q07val = _this.find("input[name=q07]:checked").val();
    var q07_6 = _this.find("input[name=q07_6]");   

    if (!q07val)
         e.stopImmediatePropagation();

    if (q07val == '6' && q07_6.val() == '')
        e.stopImmediatePropagation();
    if (q07val == '6' && q07_6.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
});
// 8*************************************
$(".8btn").click(function (e) {
    _this = $(this).parent();
    var q08val = _this.find("input[name=q08]:checked").val();
    var q08_6 = _this.find("input[name=q08_6]");   

    if (!q08val)
         e.stopImmediatePropagation();

    if (q08val == '6' && q08_6.val() == '')
        e.stopImmediatePropagation();
    if (q08val == '6' && q08_6.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
});
// 9*************************************
$(".9btn").click(function (e) {
    _this = $(this).parent();
    var q09val = _this.find("input[name=q09]:checked").val();
    var q09_6 = _this.find("input[name=q09_6]");   

    if (!q09val)
         e.stopImmediatePropagation();

    if (q09val == '6' && q09_6.val() == '')
        e.stopImmediatePropagation();
    if (q09val == '6' && q09_6.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
});
// 10*************************************
$(".10btn").click(function (e) {
    _this = $(this).parent();
    var q10val = _this.find("input[name=q10]:checked").val();
    var q10_6 = _this.find("input[name=q10_6]");   

    if (!q10val)
         e.stopImmediatePropagation();

    if (q10val == '6' && q10_6.val() == '')
        e.stopImmediatePropagation();
    if (q10val == '6' && q10_6.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
});
// 11*************************************
$(".11btn").click(function (e) {
    _this = $(this).parent();
    var q11val = _this.find("input[name=q11]:checked").val();
    var q11_6 = _this.find("input[name=q11_6]");   


    if (q11val=='1')
    return true;
    if (!q11val)
         e.stopImmediatePropagation();

    if (q11val == '6' && q11_6.val() == '')
        e.stopImmediatePropagation();
    if (q11val == '6' && q11_6.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }

    var q11a = _this.find("input[name=q11a]:checked").val();
    if (!q11a)
            e.stopImmediatePropagation(); 
});
// 12*************************************
$(".12btn").click(function (e) {
    _this = $(this).parent();
    var q12val = _this.find("input[name=q12]:checked").val();
    var q12_6 = _this.find("input[name=q12_6]");   


    if (q12val=='1')
    return true;
    if (!q12val)
         e.stopImmediatePropagation();

    if (q12val == '6' && q12_6.val() == '')
        e.stopImmediatePropagation();
    if (q12val == '6' && q12_6.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }

    var q12a = _this.find("input[name=q12a]:checked").val();
    if (!q12a)
            e.stopImmediatePropagation(); 
});
// 13*************************************
$(".13btn").click(function (e) {
    _this = $(this).parent();
    var q13val = _this.find("input[name=q13]:checked").val();
    var q13_6 = _this.find("input[name=q13_6]");   

    if (!q13val)
         e.stopImmediatePropagation();

    if (q13val == '6' && q13_6.val() == '')
        e.stopImmediatePropagation();
    if (q13val == '6' && q13_6.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
});
// 14*************************************
$(".14btn").click(function (e) {
    _this = $(this).parent();
    var q14val = _this.find("input[name=q14]:checked").val();
    var q14_6 = _this.find("input[name=q14_6]");   

    if (!q14val)
         e.stopImmediatePropagation();

    if (q14val == '6' && q14_6.val() == '')
        e.stopImmediatePropagation();
    if (q14val == '6' && q14_6.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
});
// 15*****************************************
$(".15btn").click(function (e) {
    _this = $(this).parent();
    var q15val = _this.find("input[name=q15]:checked").val();
    var q15_6 = _this.find("input[name=q15_6]");   
   
    if (q15val=='1')
    return true;

    if (!q15val)
         e.stopImmediatePropagation();

    if (q15val == '6' && q15_6.val() == '')
        e.stopImmediatePropagation();
    if (q15val == '6' && q15_6.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }

    var q15a = _this.find(".q15a:checked").val();
    if (!q15a)
         e.stopImmediatePropagation();


    var q15a_12_1 = _this.find('.q15a_12 input[type=checkbox]').prop("checked");
    var q15a_12_2 = _this.find('input[type=text]')  

    if (q15a_12_1 && q15a_12_2.val() == '')
        e.stopImmediatePropagation();
});
// 16*****************************************
$(".16btn").click(function (e) {
    _this = $(this).parent();
    var q16val = _this.find("input[name=q16]:checked").val();
    var q16_6 = _this.find("input[name=q16_6]");   

    if (!q16val)
         e.stopImmediatePropagation();

    if (q16val == '6' && q16_6.val() == '')
        e.stopImmediatePropagation();
    if (q16val == '6' && q16_6.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
});
// 17*****************************************
$(".17btn").click(function (e) {
    _this = $(this).parent();
    var q17val = _this.find("input[name=q17]:checked").val();
    var q17_6 = _this.find("input[name=q17_6]");   

    if (!q17val)
         e.stopImmediatePropagation();

    if (q17val == '6' && q17_6.val() == '')
        e.stopImmediatePropagation();
    if (q17val == '6' && q17_6.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
});
// 18*****************************************
$(".18btn").click(function (e) {
    _this = $(this).parent();
    var qaval = _this.find("input[name=q18]:checked").val();
    var qava118_6 = _this.find("input[name=q18_6]");   
   
    if (qaval=='1')
    return true;

    if (!qaval)
         e.stopImmediatePropagation();

    if (qaval == '6' && qava118_6.val() == '')
        e.stopImmediatePropagation();
    if (qaval == '6' && qava118_6.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }

    var q18a_1 = _this.find(".q18a:checked").val();
    if (!q18a_1)
         e.stopImmediatePropagation();


    var q18a_10_1 = _this.find('.q18a_10 input[type=checkbox]').prop("checked");
    var q18a_10_2 = _this.find('input[type=text]')  
 
 

    if (q18a_10_1 && q18a_10_2.val() == '')
        e.stopImmediatePropagation();

});
// *****************************************

// 19*****************************************
$(".19btn").click(function (e) {
    _this = $(this).parent();
    var q19val = _this.find("input[name=q19]:checked").val();
    var q19_1 = _this.find("input[name=q19_1]");   
    var q19_2 = _this.find("input[name=q19_2]"); 
    var q19_3 = _this.find("input[name=q19_3]"); 
   
    if (q19val=='4')
    return true;

    if (!q19val)
         e.stopImmediatePropagation();

    if (q19val == '1' && q19_1.val() == '')
        e.stopImmediatePropagation();
    if (q19val == '1' && q19_1.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }

    if (q19val == '2' && q19_2.val() == '')
        e.stopImmediatePropagation();
    if (q19val == '2' && q19_2.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }

    if (q19val == '3' && q19_3.val() == '')
        e.stopImmediatePropagation();
    if (q19val == '3' && q19_3.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }

});
// 20*****************************************
$(".20btn").click(function (e) {
    _this = $(this).parent();
    var q20val = _this.find("input[name=q20]:checked").val();
    var q20_1 = _this.find("input[name=q20_1]");   
    var q20_2 = _this.find("input[name=q20_2]"); 
    var q20_3 = _this.find("input[name=q20_3]"); 
   
    if (q20val=='4')
    return true;

    if (!q20val)
         e.stopImmediatePropagation();

    if (q20val == '1' && q20_1.val() == '')
        e.stopImmediatePropagation();
    if (q20val == '1' && q20_1.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q20val == '2' && q20_2.val() == '')
        e.stopImmediatePropagation();
    if (q20val == '2' && q20_2.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q20val == '3' && q20_3.val() == '')
        e.stopImmediatePropagation();
    if (q20val == '3' && q20_3.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }

});
// 21*****************************************
$(".21btn").click(function (e) {
    _this = $(this).parent();
    var q21val = _this.find("input[name=q21]:checked").val();
    var q21_1 = _this.find("input[name=q21_1]");   
    var q21_2 = _this.find("input[name=q21_2]"); 
    var q21_3 = _this.find("input[name=q21_3]"); 
   
    if (q21val=='4')
    return true;

    if (!q21val)
         e.stopImmediatePropagation();

    if (q21val == '1' && q21_1.val() == '')
        e.stopImmediatePropagation();
    if (q21val == '1' && q21_1.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q21val == '2' && q21_2.val() == '')
        e.stopImmediatePropagation();
    if (q21val == '2' && q21_2.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q21val == '3' && q21_3.val() == '')
        e.stopImmediatePropagation();
    if (q21val == '3' && q21_3.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }


    var q21a = _this.find("input[name=q21a]:checked").val();
    if (!q21a)
         e.stopImmediatePropagation();

});
// 22*****************************************
$(".22btn").click(function (e) {
    _this = $(this).parent();
    var q22val = _this.find("input[name=q22]:checked").val();
    var q22_1 = _this.find("input[name=q22_1]");   
    var q22_2 = _this.find("input[name=q22_2]"); 
    var q22_3 = _this.find("input[name=q22_3]"); 
   
    if (q22val=='4')
    return true;

    if (!q22val)
         e.stopImmediatePropagation();

    if (q22val == '1' && q22_1.val() == '')
        e.stopImmediatePropagation();
    if (q22val == '1' && q22_1.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q22val == '2' && q22_2.val() == '')
        e.stopImmediatePropagation();
    if (q22val == '2' && q22_2.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q22val == '3' && q22_3.val() == '')
        e.stopImmediatePropagation();
    if (q22val == '3' && q22_3.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }


    var q22a = _this.find("input[name=q22a]:checked").val();
    if (!q22a)
         e.stopImmediatePropagation();

});
// 23*****************************************
$(".23btn").click(function (e) {
    _this = $(this).parent();
    var q23val = _this.find("input[name=q23]:checked").val();
    var q23_1 = _this.find("input[name=q23_1]");   
    var q23_2 = _this.find("input[name=q23_2]"); 
    var q23_3 = _this.find("input[name=q23_3]"); 
   
    if (q23val=='4')
    return true;

    if (!q23val)
         e.stopImmediatePropagation();

    if (q23val == '1' && q23_1.val() == '')
        e.stopImmediatePropagation();
    if (q23val == '1' && q23_1.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q23val == '2' && q23_2.val() == '')
        e.stopImmediatePropagation();
    if (q23val == '2' && q23_2.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q23val == '3' && q23_3.val() == '')
        e.stopImmediatePropagation();
    if (q23val == '3' && q23_3.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
});
// 24*****************************************
$(".24btn").click(function (e) {
    _this = $(this).parent();
    var q24val = _this.find("input[name=q24]:checked").val();
    var q24_1 = _this.find("input[name=q24_1]");   
    var q24_2 = _this.find("input[name=q24_2]"); 
    var q24_3 = _this.find("input[name=q24_3]"); 
   
    if (q24val=='4')
    return true;

    if (!q24val)
         e.stopImmediatePropagation();

    if (q24val == '1' && q24_1.val() == '')
        e.stopImmediatePropagation();
    if (q24val == '1' && q24_1.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q24val == '2' && q24_2.val() == '')
        e.stopImmediatePropagation();
    if (q24val == '2' && q24_2.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q24val == '3' && q24_3.val() == '')
        e.stopImmediatePropagation();
    if (q24val == '3' && q24_3.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }

    var q24a = _this.find("input[name=q24a]:checked").val();
    if (!q24a)
         e.stopImmediatePropagation();

});
// 25*****************************************
$(".25btn").click(function (e) {
    _this = $(this).parent();
    var q25val = _this.find("input[name=q25]:checked").val();
    var q25_1 = _this.find("input[name=q25_1]");   
    var q25_2 = _this.find("input[name=q25_2]"); 
    var q25_3 = _this.find("input[name=q25_3]"); 
   
    if (q25val=='4')
    return true;

    if (!q25val)
         e.stopImmediatePropagation();

    if (q25val == '1' && q25_1.val() == '')
        e.stopImmediatePropagation();
    if (q25val == '1' && q25_1.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q25val == '2' && q25_2.val() == '')
        e.stopImmediatePropagation();
    if (q25val == '2' && q25_2.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q25val == '3' && q25_3.val() == '')
        e.stopImmediatePropagation();
    if (q25val == '3' && q25_3.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }


    var q25a = _this.find("input[name=q25a]:checked").val();
    if (!q25a)
         e.stopImmediatePropagation();

});
// 26*****************************************
$(".26btn").click(function (e) {
    _this = $(this).parent();
    var q26val = _this.find("input[name=q26]:checked").val();  
    var q26_1_1 = _this.find("input[name=q26_1_1]"); 
    var q26_1_2 = _this.find("input[name=q26_1_2]").val(); 

    var q26_2_1 = _this.find("input[name=q26_2_1]"); 
    var q26_2_2 = _this.find("input[name=q26_2_2]").val(); 

    var q26_3_1 = _this.find("input[name=q26_3_1]"); 
    var q26_3_2 = _this.find("input[name=q26_3_2]").val();
   
    if (q26val=='4')
    return true;

    if (!q26val)
         e.stopImmediatePropagation();

    if (q26val == '1' &&  q26_1_1.val() =='')
        e.stopImmediatePropagation();
    if (q26val == '1' &&  q26_1_1.val() < 0){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q26val == '1' && q26_1_2 == '')
        e.stopImmediatePropagation();
    if (q26val == '1' && q26_1_2 < 0){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    

    if (q26val == '2' && q26_2_1.val() == '')
        e.stopImmediatePropagation();
    if (q26val == '2' && q26_2_1.val() < 0){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q26val == '2' && q26_2_2 == '')
        e.stopImmediatePropagation();
    if (q26val == '2' && q26_2_2 < 0){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
        
    if (q26val == '3' && q26_3_1.val() == '')
        e.stopImmediatePropagation();
    if (q26val == '3' && q26_3_1.val() < 0){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q26val == '3' && q26_3_2 == '')
        e.stopImmediatePropagation();
    if (q26val == '3' && q26_3_2 < 0){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }

    var q26a = _this.find("input[name=q26a]:checked").val();
    if (!q26a)
             e.stopImmediatePropagation();


});
// 27*****************************************
$(".27btn").click(function (e) {
    _this = $(this).parent();
    var q27val = _this.find("input[name=q27]:checked").val();
    var q27_1 = _this.find("input[name=q27_1]");   
    var q27_2 = _this.find("input[name=q27_2]"); 
    var q27_3 = _this.find("input[name=q27_3]"); 
   
    if (q27val=='4')
    return true;

    if (!q27val)
         e.stopImmediatePropagation();

    if (q27val == '1' && q27_1.val() == '')
        e.stopImmediatePropagation();
    if (q27val == '1' && q27_1.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q27val == '2' && q27_2.val() == '')
        e.stopImmediatePropagation();
    if (q27val == '2' && q27_2.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q27val == '3' && q27_3.val() == '')
        e.stopImmediatePropagation();
    if (q27val == '3' && q27_3.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }

});
// 28*****************************************
$(".28btn").click(function (e) {
    _this = $(this).parent();
    var q28val = _this.find("input[name=q28]:checked").val();
    var q28_1 = _this.find("input[name=q28_1]");   
    var q28_2 = _this.find("input[name=q28_2]"); 
    var q28_3 = _this.find("input[name=q28_3]"); 
   
    if (q28val=='4')
    return true;

    if (!q28val)
         e.stopImmediatePropagation();

    if (q28val == '1' && q28_1.val() == '')
        e.stopImmediatePropagation();
    if (q28val == '1' && q28_1.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q28val == '2' && q28_2.val() == '')
        e.stopImmediatePropagation();
    if (q28val == '2' && q28_2.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q28val == '3' && q28_3.val() == '')
        e.stopImmediatePropagation();
    if (q28val == '3' && q28_3.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }

});
// 29飲酒題*************************************************
$(".29btn").click(function (e) {

    _this = $(this).parent();
    var q29 = _this.find("input[name='q29']:checked");
    // let hasVal = 0;
    if (!q29.val()) e.stopImmediatePropagation();
    if (q29.val() == '1') return;

    let error = 0
    for (let i = 0; i < q29.size(); i++) {
        let q29a = _this.find('.jump29a' + i).find(`input[name='q29a${i}']:checked`);
        let q29a_5 = _this.find('.jump29a' + i).find(`input[name='q29a${i}_5']`);

        if (!q29a.val()) { error = -1; break; };
        if (q29a.val() == '5' && q29a_5.val() == '' && q29a_5.val() <= 0) { error = -2; break; };

        if(q29a.val() == '5' && q29a_5.val() <= 0){
            e.stopImmediatePropagation();
            alert('數值不能為負值');
            
        }

        let q29b = _this.find('.jump29a' + i).find(".q29b_s");       
        let hasVal = 0;

        q29b.each(function (index, item) {          
            if ($(item).val() > 0)
                hasVal = 1
        });
       
    
        if (hasVal == 0)
            error = -3;
    }

    if (error < 0) {
        // alert(error);
   
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
});
// 30*******************************************************
$(".30btn").click(function (e) {
    _this = $(this).parent();
    var q30val = _this.find("input[name=q30]:checked").val();
    var q30_1 = _this.find("input[name=q30_1]");   
    var q30_2 = _this.find("input[name=q30_2]"); 
    var q30_3 = _this.find("input[name=q30_3]"); 
    var q30_4 = _this.find("input[name=q30_4]"); 
    var q30_5 = _this.find("input[name=q30_5]"); 
   
    if (q30val=='6')
    return true;

    if (!q30val)
         e.stopImmediatePropagation();

    if (q30val == '1' && q30_1.val() == '')
        e.stopImmediatePropagation();
    if (q30val == '1' && q30_1.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q30val == '2' && q30_2.val() == '')
        e.stopImmediatePropagation();
    if (q30val == '2' && q30_2.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q30val == '3' && q30_3.val() == '')
        e.stopImmediatePropagation();
    if (q30val == '3' && q30_3.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q30val == '4' && q30_4.val() == '')
        e.stopImmediatePropagation();
    if (q30val == '4' && q30_4.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q30val == '5' && q30_5.val() == '')
        e.stopImmediatePropagation();
    if (q30val == '5' && q30_5.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }

});
// 31*****************************************
$(".31btn").click(function (e) {
    _this = $(this).parent();
    var q31val = _this.find("input[name=q31]:checked").val();
    var q31_1 = _this.find("input[name=q31_1]");   
    var q31_2 = _this.find("input[name=q31_2]"); 
    var q31_3 = _this.find("input[name=q31_3]"); 
    var q31_4 = _this.find("input[name=q31_4]"); 
    var q31_5 = _this.find("input[name=q31_5]"); 
   
    if (q31val=='6')
    return true;

    if (!q31val)
         e.stopImmediatePropagation();

    if (q31val == '1' && q31_1.val() == '')
        e.stopImmediatePropagation();
    if (q31val == '1' && q31_1.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q31val == '2' && q31_2.val() == '')
        e.stopImmediatePropagation();
    if (q31val == '2' && q31_2.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q31val == '3' && q31_3.val() == '')
        e.stopImmediatePropagation();
    if (q31val == '3' && q31_3.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q31val == '4' && q31_4.val() == '')
        e.stopImmediatePropagation();
    if (q31val == '4' && q31_4.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q31val == '5' && q31_5.val() == '')
        e.stopImmediatePropagation();
    if (q31val == '5' && q31_5.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }

});
// 32*****************************************
$(".32btn").click(function (e) {
    _this = $(this).parent();
    var q32val = _this.find("input[name=q32]:checked").val();
    var q32_1 = _this.find("input[name=q32_1]");   
    var q32_2 = _this.find("input[name=q32_2]"); 
    var q32_3 = _this.find("input[name=q32_3]"); 
    var q32_4 = _this.find("input[name=q32_4]"); 
    var q32_5 = _this.find("input[name=q32_5]"); 
   
    if (q32val=='6')
    return true;

    if (!q32val)
         e.stopImmediatePropagation();

    if (q32val == '1' && q32_1.val() == '')
        e.stopImmediatePropagation();
    if (q32val == '1' && q32_1.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q32val == '2' && q32_2.val() == '')
        e.stopImmediatePropagation();
    if (q32val == '2' && q32_2.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q32val == '3' && q32_3.val() == '')
        e.stopImmediatePropagation();
    if (q32val == '3' && q32_3.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q32val == '4' && q32_4.val() == '')
        e.stopImmediatePropagation();
    if (q32val == '4' && q32_4.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q32val == '5' && q32_5.val() == '')
        e.stopImmediatePropagation();
    if (q32val == '5' && q32_5.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }

});
// 33*****************************************
$(".33btn").click(function (e) {
    _this = $(this).parent();
    var q33val = _this.find("input[name=q33]:checked").val();
    var q33_1 = _this.find("input[name=q33_1]");   
    var q33_2 = _this.find("input[name=q33_2]"); 
    var q33_3 = _this.find("input[name=q33_3]"); 
   
    if (q33val=='4')
    return true;

    if (!q33val)
         e.stopImmediatePropagation();

    if (q33val == '1' && q33_1.val() == '')
        e.stopImmediatePropagation();
    if (q33val == '1' && q33_1.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q33val == '2' && q33_2.val() == '')
        e.stopImmediatePropagation();
    if (q33val == '2' && q33_2.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q33val == '3' && q33_3.val() == '')
        e.stopImmediatePropagation();
    if (q33val == '3' && q33_3.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
});
// 34*****************************************
$(".34btn").click(function (e) {
    _this = $(this).parent();
    var q34val = _this.find("input[name=q34]:checked").val();
    var q34_1 = _this.find("input[name=q34_1]");   
    var q34_2 = _this.find("input[name=q34_2]"); 
    var q34_3 = _this.find("input[name=q34_3]"); 
   
    if (q34val=='4')
    return true;

    if (!q34val)
         e.stopImmediatePropagation();

    if (q34val == '1' && q34_1.val() == '')
        e.stopImmediatePropagation();
    if (q34val == '1' && q34_1.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q34val == '2' && q34_2.val() == '')
        e.stopImmediatePropagation();
    if (q34val == '2' && q34_2.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
    if (q34val == '3' && q34_3.val() == '')
        e.stopImmediatePropagation();
    if (q34val == '3' && q34_3.val() < 1){
        e.stopImmediatePropagation();
        alert('數值不能為負值');
    }
});
// 35*****************************************
$(".35btn").click(function (e) {
    _this = $(this).parent();
    var q35val = _this.find("input[name=q35]:checked").val();
    var q35_select_01 = _this.find("select[name=q35_select_01]"); 
    var q35_select_02 = _this.find("select[name=q35_select_02]");   
    var q35_select_03 = _this.find("select[name=q35_select_03]");     
 
   
    if (q35val=='1')
    return true;

    if (!q35val)
         e.stopImmediatePropagation();
    if (q35val == '2' && q35_select_01.val() == 'none' && q35_select_02.val() == 'none' && q35_select_03.val() == 'none')
         e.stopImmediatePropagation();
});
// 36*****************************************
$(".36btn").click(function (e) {
    _this = $(this).parent();
    var q36val = _this.find("input[name=q36]:checked").val();
    var q36_select_01 = _this.find("select[name=q36_select_01]"); 
    var q36_select_02 = _this.find("select[name=q36_select_02]");   
    var q36_select_03 = _this.find("select[name=q36_select_03]");     
 
   
    if (q36val=='1')
    return true;

    if (!q36val)
         e.stopImmediatePropagation();
    if (q36val == '2' && q36_select_01.val() == 'q36_2_00' && q36_select_02.val() == 'q36_2_00' && q36_select_03.val() == 'q36_2_00')
         e.stopImmediatePropagation();
});




// 29題最多勾選兩種
$(document).ready(function() {

    
    $('input[name=q29]').click(function() {//checkbox的input標籤點選事件
    $("input[name='q29']").attr('disabled', true);//設定name為q29的input標籤的屬性為true,表示不可選
    if ($("input[name='q29']:checked").length >= 2) {//選中個數大於2
    $("input[name='q29']:checked").attr('disabled', false);
    }  
    else if($("input[name='q29']:checked").length >= 1){
        $("input[name='q29']").attr('disabled', false);
        $('#tr29_1').attr('disabled', true);
    }
    else {
        $("input[name='q29']").attr('disabled', false);
        $('#tr29_1').attr('disabled', false);
    }
    });


// 29題勾選1
    $('#tr29_1').click(function() {//checkbox的input標籤點選事件
        $("input[name='q29']").attr('disabled', true);//設定name為q29的input標籤的屬性為true,表示不可選
        var q29_val = $("input[name='q29']:checked").val();
        if (q29_val == '1') {//選中1
            $("input[name='q29']:checked").attr('disabled', false);
            }  
            else {
            $("input[name='q29']").attr('disabled', false);
            }
        });

    $("input[name='q29']").click(function () {
        var q29 = $("input[name='q29']:checked");
        var q29a_input = $(".q29a_input");
        
        q29a_input.attr("checked",false); 
    

        $('.jump29a0').css('display', 'none');
        $('.jump29a1').css('display', 'none');

        var wine =
            [
                { wineName: '啤酒', wineSize: [0, 1, 2, 3, 4, 5, 6, 13] },
                { wineName: '水果酒（紅、白葡萄酒、梅酒等）', wineSize: [8, 0, 1, 7, 10, 13] },
                { wineName: '白蘭地', wineSize: [0, 1, 7, 8, 13] },
                { wineName: '高粱', wineSize: [0, 1, 7, 8, 13] },
                { wineName: '維士比、保力達', wineSize: [9, 0, 1, 7, 8, 13] },
                { wineName: '米酒、米酒頭', wineSize: [0, 1, 7, 8, 13] },
                { wineName: '調酒', wineSize: [7, 8, 0, 1, 13] },
                { wineName: '沙瓦類調酒（例如：冰火）', wineSize: [5, 3, 4, 0, 1, 2, 7, 8, 13] },
                { wineName: '再製酒（例如：五加皮、竹葉青、百歲酒、龍鳳酒、玫瑰露）', wineSize: [0, 1, 7, 8, 13] },
                { wineName: '清酒', wineSize: [13, 0, 1, 7, 8, 13] },
                { wineName: '花雕酒、紹興酒、紅露酒、黃酒', wineSize: [0, 1, 7, 8, 13] },
                { wineName: '鹿茸酒、蔘茸酒、各式藥酒類', wineSize: [11, 0, 1, 7, 8, 13] },
                { wineName: '小米酒', wineSize: [0, 1, 7, 8, 13] },
                { wineName: '香檳、氣泡酒', wineSize: [8, 0, 1, 7, 10, 13] },
                { wineName: '韓國燒酒、真露', wineSize: [12, 0, 1, 7, 8, 13] },
                { wineName: '烏梅酒、賓樂酒', wineSize: [0, 1, 7, 8, 13] },
                { wineName: '奶酒', wineSize: [0, 1, 7, 8, 13] },
            ];
        

            let size = [
                {sizeName:'小杯',htmlNameB:'q29b_1',htmlNameD:'q29d_1',photo_link:'/static/img/1.png'},
                {sizeName:'小水杯',htmlNameB:'q29b_2',htmlNameD:'q29d_2',photo_link:'/static/img/2.png'},
                {sizeName:'啤酒杯',htmlNameB:'q29b_3',htmlNameD:'q29d_3',photo_link:'/static/img/3.png'},
                {sizeName:'小鋁罐',htmlNameB:'q29b_4',htmlNameD:'q29d_4',photo_link:'/static/img/4.png'},
                {sizeName:'大鋁罐',htmlNameB:'q29b_5',htmlNameD:'q29d_5',photo_link:'/static/img/5.png'},
                {sizeName:'小玻璃瓶',htmlNameB:'q29b_6',htmlNameD:'q29d_6',photo_link:'/static/img/6.png'},
                {sizeName:'大玻璃瓶',htmlNameB:'q29b_7',htmlNameD:'q29d_7',photo_link:'/static/img/7.png'},
                {sizeName:'份烈酒',htmlNameB:'q29b_8',htmlNameD:'q29d_8',photo_link:'/static/img/8.png'},
                {sizeName:'杯紅酒杯',htmlNameB:'q29b_9',htmlNameD:'q29d_9',photo_link:'/static/img/9.png'},
                {sizeName:'罐維士比杯',htmlNameB:'q29b_10',htmlNameD:'q29d_10',photo_link:'/static/img/10.png'},
                {sizeName:'杯裝清酒',htmlNameB:'q29b_11',htmlNameD:'q29d_11',photo_link:'/static/img/11.png'},
                {sizeName:'罐鹿茸酒',htmlNameB:'q29b_12',htmlNameD:'q29d_12',photo_link:'/static/img/12.png'},
                {sizeName:'罐韓國燒酒',htmlNameB:'q29b_13',htmlNameD:'q29d_13',photo_link:'/static/img/13.png'},
                {sizeName:'毫升',htmlNameB:'q29b_14',htmlNameD:'q29d_14'}];

        if (q29.val() == '1') return;


       
        for (let i = 0; i < q29.size(); i++)
        {          
            let index = q29.eq(i).val() - 2;   
            let titleA = `29a.請問您喝${wine[index].wineName}的頻率是？`;
            let titleB = `29b.請問您通常每次喝${wine[index].wineName}的份量是？`;    
            
            let _html= ''
            


            if (i == 0)
                wine[index].wineSize.forEach((item, index) => _html += `<label class="label_29b"><input type="radio" name="q29b_radio" value="${index + 1}">(${index + 1}) <input type="number" class="q29b_s" disabled="true" name="${size[item].htmlNameB}" min="1" />${size[item].sizeName} </label><img class="img_29" src="${size[item].photo_link}" alt=""><br>`);
            if (i == 1)
                wine[index].wineSize.forEach((item, index) => _html += `<label class="label_29b"><input type="radio" name="q29d_radio" value="${index + 1}">(${index + 1}) <input type="number" class="q29b_s q29d_s" disabled="true" name="${size[item].htmlNameD}" min="1" />${size[item].sizeName} </label><img class="img_29" src="${size[item].photo_link}" alt=""><br>`);



            $('.jump29a' + i).css('display', 'block');
            $('.q29a_title' + i).text(titleA);
            $('.q29b' + i).text(titleB).nextAll().remove().end().after(_html);




            // 29題radio點擊顯示
            
            $("input[name=q29b_radio]").click(function (e) {
                
                var q29b_radio_checked = $("input[name=q29b_radio]:checked") ;
                var q29b_radio = $("input[name=q29b_radio]") ;
                var q29b_s_reset = $('.q29b_s');

                q29b_radio.next().attr('disabled',true)
                q29b_radio_checked.next().attr('disabled',false);
                q29b_s_reset.val('');
   
            });

            $("input[name=q29d_radio]").click(function (e) {
                
                var q29d_radio_checked = $("input[name=q29d_radio]:checked") ;
                var q29d_radio = $("input[name=q29d_radio]") ;
                var q29d_s_reset = $('.q29d_s');
                
                q29d_radio.next().attr('disabled',true)
                q29d_radio_checked.next().attr('disabled',false);
                q29d_s_reset.val('');
   
            });

        }    



    })




// radio input 檢查 2~9題
    // for(var i=2; i<=9; i++){
    //     $("input[name = q0"+i+"]").click(function (e) {

    //         for(var a=2; a<=9; a++){
            
    //         var q01_6_checked = $("input[name = q0"+a+"]:checked") ;
    //         var q01_6_radio = $("input[name = q0"+a+"]") ;
    //         var q01_6_reset = $('input[name = q0'+a+'_6]');

    //         // q01_6_reset.val('');
    //         q01_6_radio.next().attr('disabled',true)
    //         q01_6_checked.next().attr('disabled',false);
            
            
    //         }
            
    //     });

    // }

// radio input 檢查 10~18題
    // for(var i=0; i<=8; i++){
    //     $("input[name = q1"+i+"]").click(function (e) {
    //         for(var a=0; a<=8; a++){
                
    //         var q01_6_checked = $("input[name = q1"+a+"]:checked") ;
    //         var q01_6_radio = $("input[name = q1"+a+"]") ;
    //         var q01_6_reset = $('input[name = q1'+a+'_6]');
        
    //         q01_6_radio.next().attr('disabled',true)
    //         q01_6_checked.next().attr('disabled',false);
    //         q01_6_reset.val('');
    //         }
    //     });

    // }










// radio檢查
    $("input[name = Q01]").click(function (e) {
                
        var q01_6_checked = $("input[name = Q01]:checked") ;
        var q01_6_radio = $("input[name = Q01]") ;
        var q01_6_reset = $('input[name = q01_6]');

        q01_6_radio.next().attr('disabled',true)
        q01_6_checked.next().attr('disabled',false);
        q01_6_reset.val('');

    });

    $("input[name = q02]").click(function (e) {
                
        var q02_6_checked = $("input[name = q02]:checked") ;
        var q02_6_radio = $("input[name = q02]") ;
        var q02_6_reset = $('input[name = q02_6]');

        q02_6_radio.next().attr('disabled',true)
        q02_6_checked.next().attr('disabled',false);
        q02_6_reset.val('');

    });

    $("input[name = q03]").click(function (e) {
                
        var q03_6_checked = $("input[name = q03]:checked") ;
        var q03_6_radio = $("input[name = q03]") ;
        var q03_6_reset = $('input[name = q03_6]');

        q03_6_radio.next().attr('disabled',true)
        q03_6_checked.next().attr('disabled',false);
        q03_6_reset.val('');

    });

    $("input[name = q04]").click(function (e) {
                
        var q04_6_checked = $("input[name = q04]:checked") ;
        var q04_6_radio = $("input[name = q04]") ;
        var q04_6_reset = $('input[name = q04_6]');

        q04_6_radio.next().attr('disabled',true)
        q04_6_checked.next().attr('disabled',false);
        q04_6_reset.val('');

    });
    $("input[name = q05]").click(function (e) {
                
        var q05_6_checked = $("input[name = q05]:checked") ;
        var q05_6_radio = $("input[name = q05]") ;
        var q05_6_reset = $('input[name = q05_6]');

        q05_6_radio.next().attr('disabled',true)
        q05_6_checked.next().attr('disabled',false);
        q05_6_reset.val('');

    });
    $("input[name = q06]").click(function (e) {
                
        var q06_6_checked = $("input[name = q06]:checked") ;
        var q06_6_radio = $("input[name = q06]") ;
        var q06_6_reset = $('input[name = q06_6]');

        q06_6_radio.next().attr('disabled',true)
        q06_6_checked.next().attr('disabled',false);
        q06_6_reset.val('');

    });

    $("input[name = q07]").click(function (e) {
                
        var q07_6_checked = $("input[name = q07]:checked") ;
        var q07_6_radio = $("input[name = q07]") ;
        var q07_6_reset = $('input[name = q07_6]');

        q07_6_radio.next().attr('disabled',true)
        q07_6_checked.next().attr('disabled',false);
        q07_6_reset.val('');

    });
    $("input[name = q08]").click(function (e) {
                
        var q08_6_checked = $("input[name = q08]:checked") ;
        var q08_6_radio = $("input[name = q08]") ;
        var q08_6_reset = $('input[name = q08_6]');

        q08_6_radio.next().attr('disabled',true)
        q08_6_checked.next().attr('disabled',false);
        q08_6_reset.val('');

    });
    $("input[name = q09]").click(function (e) {
                
        var q09_6_checked = $("input[name = q09]:checked") ;
        var q09_6_radio = $("input[name = q09]") ;
        var q09_6_reset = $('input[name = q09_6]');

        q09_6_radio.next().attr('disabled',true)
        q09_6_checked.next().attr('disabled',false);
        q09_6_reset.val('');

    });
    $("input[name = q10]").click(function (e) {
                
        var q10_6_checked = $("input[name = q10]:checked") ;
        var q10_6_radio = $("input[name = q10]") ;
        var q10_6_reset = $('input[name = q10_6]');

        q10_6_radio.next().attr('disabled',true)
        q10_6_checked.next().attr('disabled',false);
        q10_6_reset.val('');

    });

    $("input[name = q11]").click(function (e) {
                
        var q10_6_checked = $("input[name = q11]:checked") ;
        var q10_6_radio = $("input[name = q11]") ;
        var q10_6_reset = $('input[name = q11_6]');

        q10_6_radio.next().attr('disabled',true)
        q10_6_checked.next().attr('disabled',false);
        q10_6_reset.val('');

    });

    $("input[name = q12]").click(function (e) {
                
        var q10_6_checked = $("input[name = q12]:checked") ;
        var q10_6_radio = $("input[name = q12]") ;
        var q10_6_reset = $('input[name = q12_6]');

        q10_6_radio.next().attr('disabled',true)
        q10_6_checked.next().attr('disabled',false);
        q10_6_reset.val('');

    });
    $("input[name = q13]").click(function (e) {
                
        var q10_6_checked = $("input[name = q13]:checked") ;
        var q10_6_radio = $("input[name = q13]") ;
        var q10_6_reset = $('input[name = q13_6]');

        q10_6_radio.next().attr('disabled',true)
        q10_6_checked.next().attr('disabled',false);
        q10_6_reset.val('');

    });
    $("input[name = q14]").click(function (e) {
                
        var q10_6_checked = $("input[name = q14]:checked") ;
        var q10_6_radio = $("input[name = q14]") ;
        var q10_6_reset = $('input[name = q14_6]');

        q10_6_radio.next().attr('disabled',true)
        q10_6_checked.next().attr('disabled',false);
        q10_6_reset.val('');

    });
    $("input[name = q15]").click(function (e) {
                
        var q10_6_checked = $("input[name = q15]:checked") ;
        var q10_6_radio = $("input[name = q15]") ;
        var q10_6_reset = $('input[name = q15_6]');

        q10_6_radio.next().attr('disabled',true)
        q10_6_checked.next().attr('disabled',false);
        q10_6_reset.val('');

    });
    $("input[name = q16]").click(function (e) {
                
        var q10_6_checked = $("input[name = q16]:checked") ;
        var q10_6_radio = $("input[name = q16]") ;
        var q10_6_reset = $('input[name = q16_6]');

        q10_6_radio.next().attr('disabled',true)
        q10_6_checked.next().attr('disabled',false);
        q10_6_reset.val('');

    }); 
    $("input[name = q17]").click(function (e) {
                
        var q10_6_checked = $("input[name = q17]:checked") ;
        var q10_6_radio = $("input[name = q17]") ;
        var q10_6_reset = $('input[name = q17_6]');

        q10_6_radio.next().attr('disabled',true)
        q10_6_checked.next().attr('disabled',false);
        q10_6_reset.val('');

    });
     $("input[name = q18]").click(function (e) {
                
        var q10_6_checked = $("input[name = q18]:checked") ;
        var q10_6_radio = $("input[name = q18]") ;
        var q10_6_reset = $('input[name = q18_6]');

        q10_6_radio.next().attr('disabled',true)
        q10_6_checked.next().attr('disabled',false);
        q10_6_reset.val('');

    });


    
    $("input[name = q19]").click(function (e) {
                
        var q10_6_checked = $("input[name = q19]:checked") ;
        var q10_6_radio = $("input[name = q19]") ;
        var q19_1_reset = $('input[name = q19_1]');
        var q19_2_reset = $('input[name = q19_2]');
        var q19_3_reset = $('input[name = q19_3]');

        q10_6_radio.next().attr('disabled',true)
        q10_6_checked.next().attr('disabled',false);
        q19_1_reset.val('');
        q19_2_reset.val('');
        q19_3_reset.val('');

    });
    $("input[name = q20]").click(function (e) {
                
        var q10_6_checked = $("input[name = q20]:checked") ;
        var q10_6_radio = $("input[name = q20]") ;
        var q20_1_reset = $('input[name = q20_1]');
        var q20_2_reset = $('input[name = q20_2]');
        var q20_3_reset = $('input[name = q20_3]');

        q10_6_radio.next().attr('disabled',true)
        q10_6_checked.next().attr('disabled',false);
        q20_1_reset.val('');
        q20_2_reset.val('');
        q20_3_reset.val('');

    });
    $("input[name = q21]").click(function (e) {
                
        var q10_6_checked = $("input[name = q21]:checked") ;
        var q10_6_radio = $("input[name = q21]") ;
        var q20_1_reset = $('input[name = q21_1]');
        var q20_2_reset = $('input[name = q21_2]');
        var q20_3_reset = $('input[name = q21_3]');

        q10_6_radio.next().attr('disabled',true)
        q10_6_checked.next().attr('disabled',false);
        q20_1_reset.val('');
        q20_2_reset.val('');
        q20_3_reset.val('');

    });
    $("input[name = q22]").click(function (e) {
                
        var q10_6_checked = $("input[name = q22]:checked") ;
        var q10_6_radio = $("input[name = q22]") ;
        var q20_1_reset = $('input[name = q22_1]');
        var q20_2_reset = $('input[name = q22_2]');
        var q20_3_reset = $('input[name = q22_3]');

        q10_6_radio.next().attr('disabled',true)
        q10_6_checked.next().attr('disabled',false);
        q20_1_reset.val('');
        q20_2_reset.val('');
        q20_3_reset.val('');

    });
    $("input[name = q23]").click(function (e) {
                
        var q10_6_checked = $("input[name = q23]:checked") ;
        var q10_6_radio = $("input[name = q23]") ;
        var q20_1_reset = $('input[name = q23_1]');
        var q20_2_reset = $('input[name = q23_2]');
        var q20_3_reset = $('input[name = q23_3]');

        q10_6_radio.next().attr('disabled',true)
        q10_6_checked.next().attr('disabled',false);
        q20_1_reset.val('');
        q20_2_reset.val('');
        q20_3_reset.val('');

    });
    $("input[name = q24]").click(function (e) {
                
        var q10_6_checked = $("input[name = q24]:checked") ;
        var q10_6_radio = $("input[name = q24]") ;
        var q20_1_reset = $('input[name = q24_1]');
        var q20_2_reset = $('input[name = q24_2]');
        var q20_3_reset = $('input[name = q24_3]');

        q10_6_radio.next().attr('disabled',true)
        q10_6_checked.next().attr('disabled',false);
        q20_1_reset.val('');
        q20_2_reset.val('');
        q20_3_reset.val('');

    });
    $("input[name = q25]").click(function (e) {
                
        var q10_6_checked = $("input[name = q25]:checked") ;
        var q10_6_radio = $("input[name = q25]") ;
        var q20_1_reset = $('input[name = q25_1]');
        var q20_2_reset = $('input[name = q25_2]');
        var q20_3_reset = $('input[name = q25_3]');

        q10_6_radio.next().attr('disabled',true)
        q10_6_checked.next().attr('disabled',false);
        q20_1_reset.val('');
        q20_2_reset.val('');
        q20_3_reset.val('');

    });


    $("input[name = q26]").click(function (e) {
                
        var q10_6_checked = $("input[name = q26]:checked") ;
        var q10_6_radio = $("input[name = q26]") ;
        var q20_1_1_reset = $('input[name = q26_1_1]');
        var q20_1_2_reset = $('input[name = q26_1_2]');
        var q20_2_1_reset = $('input[name = q26_2_1]');
        var q20_2_2_reset = $('input[name = q26_2_2]');
        var q20_3_1_reset = $('input[name = q26_3_1]');
        var q20_3_2_reset = $('input[name = q26_3_2]');


        q10_6_radio.parent().next().children().children().attr('disabled',true)
        q10_6_checked.parent().next().children().children().attr('disabled',false);
        q20_1_1_reset.val('');
        q20_1_2_reset.val('');
        q20_2_1_reset.val('');
        q20_2_2_reset.val('');
        q20_3_1_reset.val('');
        q20_3_2_reset.val('');

    });

    $("input[name = q27]").click(function (e) {
                
        var q10_6_checked = $("input[name = q27]:checked") ;
        var q10_6_radio = $("input[name = q27]") ;
        var q20_1_reset = $('input[name = q27_1]');
        var q20_2_reset = $('input[name = q27_2]');
        var q20_3_reset = $('input[name = q27_3]');

        q10_6_radio.next().attr('disabled',true)
        q10_6_checked.next().attr('disabled',false);
        q20_1_reset.val('');
        q20_2_reset.val('');
        q20_3_reset.val('');

    });

    $("input[name = q28]").click(function (e) {
                
        var q10_6_checked = $("input[name = q28]:checked") ;
        var q10_6_radio = $("input[name = q28]") ;
        var q20_1_reset = $('input[name = q28_1]');
        var q20_2_reset = $('input[name = q28_2]');
        var q20_3_reset = $('input[name = q28_3]');

        q10_6_radio.next().attr('disabled',true)
        q10_6_checked.next().attr('disabled',false);
        q20_1_reset.val('');
        q20_2_reset.val('');
        q20_3_reset.val('');
    });

    $("input[name = q29a0]").click(function (e) {
                
        var q10_6_checked = $("input[name = q29a0]:checked") ;
        var q10_6_radio = $("input[name = q29a0]") ;
        var q20_1_reset = $('input[name = q29a0_5]');

        q10_6_radio.next().attr('disabled',true)
        q10_6_checked.next().attr('disabled',false);
        q20_1_reset.val('');
    });
    $("input[name = q29a1]").click(function (e) {
                
        var q10_6_checked = $("input[name = q29a1]:checked") ;
        var q10_6_radio = $("input[name = q29a1]") ;
        var q20_1_reset = $('input[name = q29a1_5]');

        q10_6_radio.next().attr('disabled',true)
        q10_6_checked.next().attr('disabled',false);
        q20_1_reset.val('');
    });

    

    $("input[name = q30]").click(function (e) {
                
        var q10_6_checked = $("input[name = q30]:checked") ;
        var q10_6_radio = $("input[name = q30]") ;
        var q20_1_1_reset = $('input[name = q30_1]');
        var q20_1_2_reset = $('input[name = q30_2]');
        var q20_2_1_reset = $('input[name = q30_3]');
        var q20_2_2_reset = $('input[name = q30_4]');
        var q20_3_1_reset = $('input[name = q30_5]');
   


        q10_6_radio.parent().next().children().children().attr('disabled',true)
        q10_6_checked.parent().next().children().children().attr('disabled',false);
        q20_1_1_reset.val('');
        q20_1_2_reset.val('');
        q20_2_1_reset.val('');
        q20_2_2_reset.val('');
        q20_3_1_reset.val('');

    });
    $("input[name = q31]").click(function (e) {
                
        var q10_6_checked = $("input[name = q31]:checked") ;
        var q10_6_radio = $("input[name = q31]") ;
        var q20_1_1_reset = $('input[name = q31_1]');
        var q20_1_2_reset = $('input[name = q31_2]');
        var q20_2_1_reset = $('input[name = q31_3]');
        var q20_2_2_reset = $('input[name = q31_4]');
        var q20_3_1_reset = $('input[name = q31_5]');
   


        q10_6_radio.parent().next().children().children().attr('disabled',true)
        q10_6_checked.parent().next().children().children().attr('disabled',false);
        q20_1_1_reset.val('');
        q20_1_2_reset.val('');
        q20_2_1_reset.val('');
        q20_2_2_reset.val('');
        q20_3_1_reset.val('');

    });
    $("input[name = q32]").click(function (e) {
                
        var q10_6_checked = $("input[name = q32]:checked") ;
        var q10_6_radio = $("input[name = q32]") ;
        var q20_1_1_reset = $('input[name = q32_1]');
        var q20_1_2_reset = $('input[name = q32_2]');
        var q20_2_1_reset = $('input[name = q32_3]');
        var q20_2_2_reset = $('input[name = q32_4]');
        var q20_3_1_reset = $('input[name = q32_5]');
   


        q10_6_radio.parent().next().children().children().attr('disabled',true)
        q10_6_checked.parent().next().children().children().attr('disabled',false);
        q20_1_1_reset.val('');
        q20_1_2_reset.val('');
        q20_2_1_reset.val('');
        q20_2_2_reset.val('');
        q20_3_1_reset.val('');

    });

    $("input[name = q33]").click(function (e) {
                
        var q10_6_checked = $("input[name = q33]:checked") ;
        var q10_6_radio = $("input[name = q33]") ;
        var q20_1_reset = $('input[name = q33_1]');
        var q20_2_reset = $('input[name = q33_2]');
        var q20_3_reset = $('input[name = q33_3]');

        q10_6_radio.next().attr('disabled',true)
        q10_6_checked.next().attr('disabled',false);
        q20_1_reset.val('');
        q20_2_reset.val('');
        q20_3_reset.val('');

    });
    $("input[name = q34]").click(function (e) {
                
        var q10_6_checked = $("input[name = q34]:checked") ;
        var q10_6_radio = $("input[name = q34]") ;
        var q20_1_reset = $('input[name = q34_1]');
        var q20_2_reset = $('input[name = q34_2]');
        var q20_3_reset = $('input[name = q34_3]');

        q10_6_radio.next().attr('disabled',true)
        q10_6_checked.next().attr('disabled',false);
        q20_1_reset.val('');
        q20_2_reset.val('');
        q20_3_reset.val('');

    });

    $(".q15a_input").click(function (e) {
                
        var q10_6_checked = $(".q15a_input:checked") ;
        var q10_6_radio = $(".q15a_input") ;
        var q20_1_reset = $('.q15a_text');
  

        q10_6_radio.parent().next().attr('disabled',true)
        q10_6_checked.parent().next().attr('disabled',false);
        q20_1_reset.val('');
  

    });
    $(".q18a_input").click(function (e) {
                
        var q10_6_checked = $(".q18a_input:checked") ;
        var q10_6_radio = $(".q18a_input") ;
        var q20_1_reset = $('.q18a_text');
  

        q10_6_radio.parent().next().attr('disabled',true)
        q10_6_checked.parent().next().attr('disabled',false);
        q20_1_reset.val('');
  

    });


        
        
});




