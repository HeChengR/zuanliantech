$(function(){
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationBulletRender: function (swiper, index, className) {
            return '';
        },
        onSlideChangeEnd: function (swiper) {
//            alert(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide

            switch (swiper.activeIndex) {
                case 0:
                    $('.swiper-slide-1 .content .sy-logo').addClass('animte-1');
                    $('.swiper-slide-1 .content > span').addClass('animte-1');
                    $('.swiper-slide-1 .content > p').addClass('animte-1');
                    break;
                case 1:
                    $('.swiper-slide-2 .content > h3').addClass('animte-2');
                    $('.swiper-slide-2 .content .text p').addClass('animte-2');
                    break;
                case 2:
                    $('.swiper-slide-3 .content .little-title-1').addClass('little-3-1');
                    $('.swiper-slide-3 .content .little-title-2').addClass('little-3-2');
                    $('.swiper-slide-3 .content .little-title-3').addClass('little-3-3');
                    $('.swiper-slide-3 .content .little-title-4').addClass('little-3-4');
                    break;
                case 3:

                    $('.swiper-slide-5 .content-w > img:nth-child(1)').addClass('animte-4');
                    $('.swiper-slide-5 .content-w > img:nth-child(2)').addClass('animte-4');

                    $('.swiper-slide-5 .content-m > img:nth-child(1)').addClass('animte-4');
                    $('.swiper-slide-5 .content-m > img:nth-child(2)').addClass('animte-4');
                    $('.swiper-slide-5 .content-m > img:nth-child(3)').addClass('animte-4');

                    $('.swiper-slide-5 .content-l > img:nth-child(1)').addClass('animte-4');
                    $('.swiper-slide-5 .content-l > img:nth-child(2)').addClass('animte-4');
                    $('.swiper-slide-5 .content-l > img:nth-child(3)').addClass('animte-4');

                    break;
                case 4:

                    break;
                case 5:

                    break;
                case 6:
                    $('.swiper-slide-8 .content .text > img:nth-child(2)').addClass('animte-7');
                    break;
                default :

                    break;
            }

            if (swiper.activeIndex != 2) {
                $('.swiper-slide-3 .content .little-title-1').removeClass('little-3-1');
                $('.swiper-slide-3 .content .little-title-2').removeClass('little-3-2');
                $('.swiper-slide-3 .content .little-title-3').removeClass('little-3-3');
                $('.swiper-slide-3 .content .little-title-4').removeClass('little-3-4');
            }
            if (swiper.activeIndex != 0) {
                $('.swiper-slide-1 .content .sy-logo').removeClass('animte-1');
                $('.swiper-slide-1 .content > span').removeClass('animte-1');
                $('.swiper-slide-1 .content > p').removeClass('animte-1');
            }

            if (swiper.activeIndex != 1) {
                $('.swiper-slide-2 .content > h3').removeClass('animte-2');
                $('.swiper-slide-2 .content .text p').removeClass('animte-2');
            }

            if(swiper.activeIndex != 6){
                $('.swiper-slide-8 .content .text > img:nth-child(2)').removeClass('animte-7');
            }


            if(swiper.activeIndex != 3){
                $('.swiper-slide-5 .content-w > img:nth-child(1)').removeClass('animte-4');
                $('.swiper-slide-5 .content-w > img:nth-child(2)').removeClass('animte-4');

                $('.swiper-slide-5 .content-m > img:nth-child(1)').removeClass('animte-4');
                $('.swiper-slide-5 .content-m > img:nth-child(2)').removeClass('animte-4');
                $('.swiper-slide-5 .content-m > img:nth-child(3)').removeClass('animte-4');

                $('.swiper-slide-5 .content-l > img:nth-child(1)').removeClass('animte-4');
                $('.swiper-slide-5 .content-l > img:nth-child(2)').removeClass('animte-4');
                $('.swiper-slide-5 .content-l > img:nth-child(3)').removeClass('animte-4');
            }
        }

    })
})