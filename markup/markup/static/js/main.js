'use strict';

// import $ from 'jquery';
import 'slick-carousel';
import 'jquery-bridget';
import packery from 'packery';
import 'select2';


import 'components/slider-small/slider-small';
import 'components/slider-large/slider-large';
import 'components/btn-grid-filter/btn-grid-filter';
import 'components/categories/categories';
import 'components/date-filter/date-filter';
import 'components/filter/filter';
import 'components/birthday/biethday';
import 'components/btn-follow/btn-follow';
// import 'components/grid/grid';
import 'components/main-nav/main-nav';
import 'components/menu-left/menu-left';
import 'components/share/share';

$.bridget( 'packery', packery, $ );

$('.grid').packery({
    // options
    itemSelector: '.grid__item',
    gutter: 8
});
