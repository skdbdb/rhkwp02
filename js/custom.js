$(function () {


    lucide.createIcons();



    // 헤더 스크롤
    $(window).on('scroll', function () {
        console.log($(window).scrollTop());

        let num = $(window).scrollTop();

        if (num > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
        if (num > 800) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    })





    // 메인비주얼 슬라이드
    const blue = new Swiper('.blue_box_slider', {
        effect: 'fade',
        fadeEffect: { crossFade: true },
        allowTouchMove: false,
        speed: 1000,
    });

    const main = new Swiper('.main_visual_slider', {
        effect: 'fade',
        fadeEffect: { crossFade: true },
        loop: true,
        loopedSlides: 3,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
    });

    main.on('slideChangeTransitionStart', () => {
        blue.slideToLoop(main.realIndex, 1000);
    });

    blue.on('slideChangeTransitionStart', () => {
        main.slideToLoop(blue.realIndex, 1000);
    });




    // 탭메뉴
    $(function () {

        let main_project_slide;

        function initSwiper() {
            main_project_slide = new Swiper('.main_project_slide', {
                loop: false,
                slidesPerView: 3,
                spaceBetween: 10,
                observer: true,
                observeParents: true,
            });

            $('.main_project .arrow-right').off().on('click', function () {
                main_project_slide.slideNext();
            });

            $('.main_project .arrow-left').off().on('click', function () {
                main_project_slide.slidePrev();
            });
        }


        const tabData = [
            [
                { img: './images/main_project01.jpg', title: '시흥장현 시티프론트 큐브&칼리오', desc: '오피스/상가' },
                { img: './images/main_project02.jpg', title: '안양 동안구 관양동 오피스', desc: '전체' },
                { img: './images/main_project03.jpg', title: '안산 성곡동 물류센터', desc: '전체' },
                { img: './images/main_project04.jpg', title: '판교대장 디오르나인 B', desc: '주택/오피스텔' },
                { img: './images/main_project05.jpg', title: '시흥장현 시티프론트561', desc: '주택/오피스텔' },
                { img: './images/main_project06.jpg', title: '안산 KDT 지식산업센터', desc: '주택/오피스텔' },
                { img: './images/main_project07.jpg', title: '시흥장현 시티프론트561', desc: '오피스/상가' },
                { img: './images/main_project08.jpg', title: '안산 시화 마리나 아일랜드', desc: '오피스/상가' },
                { img: './images/main_project09.jpg', title: '안양 디오르나인 1BL', desc: '주택/오피스텔전체' },

            ],
            [
                { img: './images/main_project09.jpg', title: '안양 디오르나인 1BL', desc: '주택/오피스텔' },
                { img: './images/main_project04.jpg', title: '판교대장 디오르나인 B', desc: '주택/오피스텔' },
                { img: './images/main_project05.jpg', title: '시흥장현 시티프론트561', desc: '주택/오피스텔' },
                { img: './images/main_project06.jpg', title: '안산 KDT 지식산업센터', desc: '주택/오피스텔' },
            ],
            [
                { img: './images/main_project06.jpg', title: '안산 KDT 지식산업센터', desc: '오피스/상가' },
                { img: './images/main_project07.jpg', title: '시흥장현 시티프론트561', desc: '오피스/상가' },

            ],
            [
                { img: './images/main_project08.jpg', title: '안산 시화 마리나 아일랜드', desc: '지식산업센터 ' },
            ],
            [
                { img: './images/main_project03.jpg', title: '안산 성곡동 물류센터', desc: '산업시설' },
                { img: './images/main_project02.jpg', title: '안양 동안구 관양동 오피스', desc: '산업시설' },
            ],
        ];

        function renderSlides(data) {
            const wrapper = $('.main_project .swiper-wrapper');

            wrapper.html('');

            data.forEach(item => {
                wrapper.append(`
            <div class="swiper-slide">
                <img src="${item.img}">
                <div class="txt_box">
                    <h3>${item.title}</h3>
                    <span>${item.desc}</span>
                </div>
            </div>
        `);
            });


            if (main_project_slide) {
                main_project_slide.destroy(true, true);
                main_project_slide = null;
            }

            initSwiper();

            setTimeout(() => {
                $('.main_project .swiper-slide').each(function (i) {
                    setTimeout(() => {
                        $(this).addClass('show');
                    }, i * 100);
                });
            }, 50);
        }

        // 초기
        renderSlides(tabData[0]);

        // 탭 클릭
        $('.main_project .tab_menu_lnk li').on('click', function () {
            const idx = $(this).index();

            $('.main_project .tab_menu_lnk li').removeClass('on');
            $(this).addClass('on');

            renderSlides(tabData[idx]);
        });

    });


    // 패밀리링크
    $(function () {
        $('#fl').on('change', function () {
            let lnk = $(this).val();
            if (lnk) {
                window.open(lnk)
            }
        })
    })


    // 탑 버튼
    $(function () {

        $('.top_btn').hide();

        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 200) {
                $('.top_btn').fadeIn();
            } else {
                $('.top_btn').fadeOut();
            }
        });

        $('.top_btn').on('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

    });

});


