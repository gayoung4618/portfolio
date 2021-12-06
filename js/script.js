window.onload = function () {
    // aos 관련
    AOS.init();

    // $('.logo').click(function (event) {
    //     event.preventDefault();
    //     $('html').scrollTop();

    // });

    //화면이동
    let screen_index = 0; // 현재 보이는 화면 번호
    let screen_move_active = true; // 휠 움직임 가능 true
    $(window).bind('mousewheel DOMMouseScroll', function(event){
        let distance = event.originalEvent.wheelDelta;
        
        if(distance == null){
            distance - event.originalEvent.detail * -1;
        }
    })

    // 햄버거 메뉴
    let fix_menu = $('.fix-menu');
    let fix_wrap = $('.fix-wrap');
    let header = $('.header')

    // 스크롤바의 위치
    let sc_y = $(window).scrollTop();

    $(window).scroll(function () {
        sc_y = $(window).scrollTop();
        if (sc_y > 0 && fix_menu.css("right") != "5rem") {
            fix_menu.addClass('fix-menu-active');
            header.stop().hide();
        } else {
            fix_menu.removeClass('fix-menu-active');
            header.show();
        }
    });

    fix_menu.click(function () {
        fix_wrap.addClass('fix-wrap-active');
        fix_menu.hide();
    })

    $('.bt-close').click(function () {
        fix_wrap.removeClass('fix-wrap-active');
        fix_menu.show();
    })

    $('.fix-gnb li a').click(function () {
        fix_wrap.removeClass('fix-wrap-active');
        fix_menu.show();
    }, )

    // progressbar
    function skill_bar (id, per){
        let bar = new ProgressBar.Circle(id, {
            color: '#ecf8f6',
            strokeWidth: 4,
            trailWidth: 2,
            easing: 'easeInOut',
            duration: 1400,
            text: {
                autoStyleContainer: false
            },
            from: {
                color: '#ecf8f6',
                width: 2
            },
            to: {
                color: '#fbd26f',
                width: 4
            },
            // Set default step function for all animate calls
            step: function (state, circle) {
                circle.path.setAttribute('stroke', state.color);
                circle.path.setAttribute('stroke-width', state.width);
    
                var value = Math.round(circle.value() * 100);
                if (value === 0) {
                    circle.setText('');
                } else {
                    circle.setText(value);
                }
            }
        });;
        bar.text.style.fontFamily = '"Roboto", sans-serif';
        bar.text.style.fontSize = '1.5rem';
        bar.animate(per)
    }

    let profile_pos = $('.profile').offset().top;    
    let pro_chk = false; // 다시 생기는거 방지
    $(window).scroll(function () {
        let sc_y = $(window).scrollTop();
        
        if (sc_y >= profile_pos-200) {
            if(pro_chk == true)return;
            skill_bar("#skill_html", 0.9)
            skill_bar("#skill_css", 0.9),
            skill_bar("#skill_jquery",0.85)
            skill_bar("#skill_js", 0.75)
            skill_bar("#skill_photoshop", 0.85)
            skill_bar("#skill_illust", 0.70)         
            pro_chk = true
        } 
    })
    // --progressbar

    // publ swiper관련
    let sw_publ = new Swiper('.sw-publ', {
        slidesPerView: 2,
        spaceBetween: 164,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        navigation: {
            prevEl: '.sw-publ-prev',
            nextEl: '.sw-publ-next'
        }
    });
    $('.sw-publ').mouseover(function () {
        sw_publ.autoplay.stop();
    });
    $('.sw-publ').mouseleave(function () {
        sw_publ.autoplay.start();
    });

    // design swiper관련
    let sw_design = new Swiper('.sw-design', {
        slidesPerView: 2,
        spaceBetween: 164,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        navigation: {
            prevEl: '.sw-design-prev',
            nextEl: '.sw-design-next'
        }
    });
    $('.sw-design').mouseover(function () {
        sw_design.autoplay.stop();
    });
    $('.sw-design').mouseleave(function () {
        sw_design.autoplay.start();
    });

    // life swiper 관련
    let sw_life = new Swiper('.sw-life', {
        slidesPerView: 4,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false
        }
    });
    $('.sw-life').mouseover(function () {
        sw_life.autoplay.stop();
    });
    $('.sw-life').mouseleave(function () {
        sw_life.autoplay.start();
    });

};
