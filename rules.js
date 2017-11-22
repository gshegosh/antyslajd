// below are slightly modified GPL rules from legacy Eliminator Slajdów extension - 
// see https://github.com/maestr0/eliminator-slajdow/blob/master/common/js/eliminator-slajdow-common.js
const rules = [
  {
    "trigger": "div#art div#container_gal",
    "name": "gazetapraca.pl ",
    "nextSelector": "#gal_btn_next a:first-child",
    "container": "div#container_gal"
  },
  {
    "trigger": "div#article div#article_body",
    "name": "galeria div#article div#article_body (5)",
    "nextSelector": "#gal_btn_next a:first-child",
    "container": "div#container_gal"
  },
  {
    "trigger": "div#k1 div#k1p div#gal_outer",
    "name": "galeria bez typu ('div#k1 div#k1p div#gal_outer') (6)",
    "nextSelector": "li.btn_next a:first-child",
    "container": "div#gal_picture, div.description, p.description"
  },
  {
    "trigger": "div.PopupWielkosc div.ZdjecieGaleriaMaxWielkosc",
    "name": "autotrader.pl - galeria zdjec samochodu - 2013",
    "nextSelector": "div:not(.ZjecieZaznaczone).ZdjecieGaleriaMini a",
    "container": "div.ZdjecieGaleriaMaxWielkosc"
  },
  {
    "trigger": " #multiGallery #multiGalleryContent #gallery",
    "name": "MultiGallery na ONET.PL",
    "nextSelector": ".navBox .navBoxContainer a.nextFixed",
    "container": "#multiGalleryContent #galleryText",
    "antiTrigger": "#multiGallery #multiGalleryContent #gallery .mainMediaImg img.after"
  },
  {
    "trigger": "div#page div#pageWrapper div#photo div#photoContainer div.nav a",
    "name": "Galeria MediaRegionalne ",
    "nextSelector": "p#photoNavigation a#photoNavigationNext",
    "container": "div#photo"
  },
  {
    "trigger": "div#page div#pageWrapper div#article.photostory p.photoNavigation a.photoNavigationNext",
    "name": "Galeria MediaRegionalne - artykul",
    "nextSelector": "p.photoNavigation a.photoNavigationNext",
    "container": "div#article div.intextAd"
  },
  {
    "trigger": "div#main-column div#photo.common-box div.inner div.photo-item div.photoElem a.next",
    "name": "Galeria MojeMiasto",
    "nextSelector": "div#main-column div#photo.common-box div.inner div.photo-item div.photoElem a.next",
    "container": "div.photo-item"
  },
  {
    "trigger": "#content_wrap .photostoryNavigation .photostoryNextPage",
    "antiTrigger": "body#pagetype_index .mod_suwakiRwd",
    "name": "galeria #pagetype_art .photostoryNextPage NOWA GALERIA GAZETY (12)",
    "container": "#content_wrap",
    "removeFromContainer": "#photo_comments, #article_comments, #col_right",
    "nextSelector": "div#content .photostoryNavigation .photostoryNextPage"
  },
  {
    "trigger": "div#page div#pageWrapper div#photo p#photoNavigation a#photoNavigationNext",
    "name": "MediaRegionalne 1",
    "nextSelector": "p#photoNavigation a#photoNavigationNext",
    "container": "div#photo img, div#photo p:nth-child(7)"
  },
  {
    "trigger": "div#wrapper > div > div#photo p#galleryNav a#galleryNavNext",
    "name": "MediaRegionalne 2",
    "nextSelector": "p#galleryNav a#galleryNavNext",
    "container": "div#photo img, #photo p:first-child"
  },
  {
    "trigger": "div#LeftContent div#MainGallery img#PhotoInMainGallery",
    "name": "Autotrader Legacy",
    "nextSelector": "div:not(.ZjecieZaznaczone).ZdjecieGaleriaMini a",
    "container": "div.ZdjecieGaleriaMaxWielkosc"
  },
  {
    "trigger": "div#bxGaleria div.podpisDuzaFotka div.przewijakZdjec div.slider",
    "name": "Wiadomosci Wp.pl",
    "nextSelector": "div#bxGaleriaOpis a.stgGaleriaNext",
    "container": "div.bxGaleria div.kol2",
    "removeFromContainer": "script"
  },
  {
    "trigger": "div#stgGaleria div.stgGaleriaCnt .stgGaleriaNext",
    "name": "Facet wp.pl",
    "nextSelector": "div#stgGaleria a.stgGaleriaNext",
    "container": "#stgGaleria",
    "removeFromContainer": "script"
  },
  {
    "trigger": "div#stgMain article.stampGaleria div.stampBxNaglowek div.stampStronicowanie div.pIndex a.pNext",
    "name": "Finanse wp.pl",
    "nextSelector": "div.stampStronicowanie div.pIndex a.pNext",
    "container": "article.stampGaleria div.articleRow",
    "removeFromContainer": "script, .stampBxStopka"
  },
  {
    "trigger": "div#content div#largepic_wrapper div#largepic",
    "name": "kwejk.pl",
    "nextSelector": "div#largepic_wrapper a.next_image",
    "container": "div#content div.content",
    "removeFromContainer": ".image_carousel, script, style, div.share"
  },
  {
    "trigger": "body#strona-artykulu div#glowna-kolumna div#galeria-material-zdjecie",
    "name": "gazetawroclawska.pl",
    "nextSelector": "#galeria-nastepne-2",
    "container": "#galeria-material",
    "removeFromContainer": "script, #miniatury-kontener, #galeria-poprzednie-2, #galeria-nastepne-2, .iloscZdjec"
  },
  {
    "trigger": "div#main_container div.demotivator.pic #royalSliderExtraNavigation a.navigate_right",
    "name": "demotywatory.pl",
    "nextSelector": "#royalSliderExtraNavigation a.navigate_right",
    "container": ".demotivator .demot_pic .rsSlideContent",
    "removeFromContainer": "script, .share-widgets"
  },
  {
    "trigger": "body#Fakt .pageContent .leftColumn .paginaHolder .paginator.panigaGalery",
    "name": "fakt.pl",
    "nextSelector": ".pageContent .leftColumn .paginaHolder .paginator.panigaGalery a.next",
    "container": "#bigPicture",
    "removeFromContainer": "script"
  },
  {
    "trigger": "body#loneGallery #bigPicture",
    "name": "fakt.pl nowa",
    "nextSelector": "#imgHolder .paginator .next",
    "container": "#bigPicture, .rightColumn",
    "removeFromContainer": "script, .nrFoto, .socialButtons, .Region"
  },
  {
    "trigger": ".glownyKontener #material-artykul .galeriaArtykulowa #material-galeria-nastepne",
    "name": "naszemiasto.pl",
    "nextSelector": "#material-galeria-nastepne",
    "container": ".galeriaArtykul",
    "removeFromContainer": "script"
  },
  {
    "trigger": ".glownyKontener .trescOpisu .paginacja #material-galeria-nastepne",
    "name": "naszemiasto.pl szeroka",
    "nextSelector": "#material-galeria-nastepne",
    "container": "#galeria-z-opisem",
    "removeFromContainer": "script"
  },
  {
    "trigger": "div#page article.single-article .gallery .paging .next",
    "name": "wawalove.pl",
    "nextSelector": "article.single-article .gallery .paging .next",
    "container": ".see-big",
    "removeFromContainer": "script"
  },
  {
    "trigger": "div#page div#main div.article-slideshow .article-matter .slideshow-wrapper",
    "name": "sfora.pl",
    "nextSelector": ".article-matter .slideshow-next:first-child",
    "container": ".slideshow-controls .slideshow-title, .slideshow-wrapper",
    "removeFromContainer": "script"
  },
  {
    "trigger": "div#page div#main div.article-gallery .article-matter .gallery-content .gallery-img-big",
    "name": "sfora.pl nowa",
    "nextSelector": ".gallery-img-big .next:first-child",
    "container": ".article-matter",
    "removeFromContainer": "script"
  },
  {
    "trigger": ".page .main-content .article--gallery .gallery .gallery__content .gallery__image-wrapper .next-btn",
    "name": "biztok.pl",
    "nextSelector": ".gallery__image-wrapper .next-btn",
    "container": ".gallery__content",
    "removeFromContainer": "script, .social-box"
  },
  {
    "trigger": "#ks_doc #ks_bd_left_col #ks_simple_pagging",
    "name": "komputerswiat.pl",
    "nextSelector": "#gallery_image a.next",
    "container": "#ks_bd_cols",
    "removeFromContainer": "#comments, script, .Nextclick_Widget_Container, #comment_form, #ks_bd_right_col div.next, #gallery_image .next, #gallery_image .prev"
  },
  {
    "trigger": "body#screening #mainContainer #gallery .gallery_body .gallery_photo_desc_right",
    "name": "dziennik.pl",
    "nextSelector": ".gallery_photo_desc_right .nastepne:first-child",
    "container": ".gallery_body",
    "removeFromContainer": "script"
  },
  {
    "trigger": "#miejsce2 .galeriaBig.forsalOnly .photoBg .next",
    "name": "forsal.pl",
    "nextSelector": ".galeriaBig.forsalOnly .photoBg .next",
    "container": ".tpl_sgp_galeria_artykulowa",
    "removeFromContainer": "script, .dateArt, .leadArt, .lead, .galeriaBig.forsalOnly > h2"
  },
  {
    "trigger": "#pagewrap article.imgGalleryArt #ARTICLE_GALLERY_BOTTOM_1",
    "name": "przegladsportowy.pl",
    "container": ".leftColumn, .rightColumn",
    "nextSelector": ".paginator a.next:first-child",
    "removeFromContainer": "script, #ARTICLE_GALLERY_RIGHT_COLUMN_1, #ARTICLE_GALLERY_BOTTOM_1, .socialButtons"
  },
  {
    "trigger": ".site .columns.columns-outer-double .box-gallery .gallery-image .gallery-controlls .gallery-image-zoom",
    "name": "sportowefakty.pl",
    "container": "#photo-start",
    "nextSelector": ".gallery-image-next:first-child",
    "removeFromContainer": "script"
  },
  {
    "trigger": "#page_wrap #page #content #content-inner .box-inner .img-cnt-wrap .news-content",
    "name": "bebzol.com",
    "container": ".img-cnt-wrap",
    "nextSelector": "#handle-next:not(.next-gal):first-child",
    "removeFromContainer": "script, .like-bar, .bbz-cm-box"
  },
  {
    "trigger": "#main .container #left_column #article .article-photo .photo-next-link",
    "name": "lovekrakow.pl",
    "container": "#left_column, #right_column",
    "nextSelector": ".article-photo .photo-next-link:first-child",
    "removeFromContainer": "script, .comments, h1.title"
  },
  {
    "trigger": "div#doc #body #trunk #main .k_galleryLarge .k_pagination",
    "name": "biznes.pl",
    "container": ".k_gallery",
    "nextSelector": ".k_pagination .k_next a:first-child",
    "removeFromContainer": "script"
  },
  {
    "trigger": "#gallery > div.content > div.flesh > div.main_img > div.big_img > div.fullscreen > div > img",
    "name": "urzadzamy.pl i se.pl",
    "container": ".flesh",
    "nextSelector": "div.content > div.main_nav > div.go.next > a",
    "removeFromContainer": "script"
  },
  {
    "trigger": "div.all div#page #item > div.item-content > a.arrow-next-big",
    "name": "pudelekx.pl",
    "container": "#item",
    "nextSelector": "div.item-content > a.arrow-next-big",
    "removeFromContainer": "script, .tags, .item-options, .left"
  },
  {
    "trigger": "#wrap #article article.single-entry #photo-gallery .inner a.next",
    "name": "snobka.pl",
    "container": "#photo-gallery",
    "nextSelector": ".inner a:first-child.next",
    "removeFromContainer": "script"
  },
  {
    "trigger": "body#pagetype_photo.simpleGallery #gazeta_gallery_popup .gs_navigation .gs_next",
    "name": "gazeta pl nowa galeria czarna",
    "container": ".gs_image_cointainer",
    "nextSelector": ".gs_navigation .gs_next:first-child",
    "removeFromContainer": "script"
  },
  {
    "trigger": "div.wrap div.main div.article__content div.gallery div.gallery__image-big a.next",
    "name": "http://www.fly4free.pl/",
    "container": "div.gallery",
    "nextSelector": "div.gallery__image-big a.next",
    "removeFromContainer": "script"
  },
  {
    "trigger": "#stgMain .stampFototematRow .stampStronicowanieFototematu .stampStronicowanieFototematuContent .stampStronicowanieFototematuIndex",
    "name": "wp.pl galeria pozioma 1",
    "container": ".stampFototemat",
    "nextSelector": ".stampStronicowanieFototematuContent a.stampStronicowanieFototematuNxt:first-child",
    "removeFromContainer": "script, .pPaginSmall"
  },
  {
    "trigger": "#page_wrapper #container #main .article-wraper .article-body .post-pages a.next-page.button",
    "name": "gadzetomania",
    "container": ".article-body",
    "nextSelector": ".article-body .post-pages a.next-page.button:first-child",
    "removeFromContainer": "script"
  },
  {
    "trigger": "#main-wrap div#body .section-subcontent .photo-wrap a#next_link",
    "name": "trojmiasto.pl",
    "container": "#foto",
    "nextSelector": ".photo-wrap a#next_link",
    "removeFromContainer": "script"
  },
  {
    "trigger": "body ul.k_controls .k_next, #photoZoom #imgNav",
    "name": "onet pozioma galeria",
    "container": "#main .kopyto:first-child, #sTop .kopyto:first-child, #cLeft .kopyto:first-child",
    "nextSelector": "li.k_next a:first-child",
    "removeFromContainer": "script"
  },
  {
    "trigger": "div#page div#main-content #content-region .node-article-image .navigation-links a.next",
    "antiTrigger": "",
    "name": "regiomoto",
    "container": "#content-region .node-article-image",
    "nextSelector": ".navigation-links a.next",
    "removeFromContainer": "script"
  },
  {
    "trigger": "div#page div#main div.slideshow-header .slideshow-paging .slideshow-next",
    "name": "sportfan.pl",
    "nextSelector": ".slideshow-paging .slideshow-next:first-child",
    "container": ".slideshow:first-child, .slideshow-old:first-child",
    "removeFromContainer": "script"
  },
  {
    "trigger": "#main > div.article > div.gallery-booth > div.gallery-big > a.gallery-next",
    "antiTrigger": "",
    "name": "sportfan plaska",
    "container": "div.gallery-booth",
    "nextSelector": "div.gallery-big > a.ir.gallery-next",
    "removeFromContainer": "script"
  },
  {
    "trigger": "body#Forbes #Page-Wrap .Block-Node a.Next",
    "antiTrigger": "",
    "name": "forbes.pl",
    "container": "#Column-Wrap",
    "nextSelector": "#Column-Wrap .Block-Node a.Next",
    "removeFromContainer": "script, .backlink, #ARTICLE_RELATED_GALLERY_BOTTOM, .socialLine"
  },
  {
    "trigger": "div#root div#content section#articles #zdjecie.right .navigation a.next",
    "antiTrigger": "",
    "name": "geekweek.pl",
    "container": "#zdjecie",
    "nextSelector": ".navigation a.next:first-child",
    "removeFromContainer": "script"
  },
  {
    "trigger": "#galeria-warstwa > div.boxPozycja.galeriaNaw > div #material-galeria-nastepne.btnNastepny",
    "antiTrigger": "",
    "name": "naszemiasto.pl w overlay",
    "container": "#galeria-warstwa",
    "nextSelector": "link[rel=next]",
    "removeFromContainer": "script"
  },
  {
    "trigger": "#content #contents .content .media.full .jcarousel-wrapper",
    "antiTrigger": "",
    "name": "nowy kwejk styczen 2015",
    "container": "div.media.full > div.object div.self, div.media.full > div.object section.large",
    "nextSelector": "#contents div.media.full div.object a.next",
    "removeFromContainer": "script, .media.ad"
  },
  {
    "trigger": "#stgMain #bxGaleria > div.content > div.picCol > div.bigPic > a",
    "antiTrigger": "",
    "name": "WP tech sierpien 2014",
    "container": "#bxGaleria .content",
    "nextSelector": ".navPic .stgGaleriaNext:first-child",
    "removeFromContainer": "script"
  },
  {
    "trigger": "#wpMain div.bxCenterMain div.bxCont div.fotkaBx h1.galeria",
    "antiTrigger": "",
    "name": "nocoty.pl",
    "container": ".bxCenterMain",
    "nextSelector": "a.stgGaleriaNext:first-child",
    "removeFromContainer": "script, #stgOpinie, div.bxCenterMain div.galeriaZdjecieBx:eq(1)"
  },
  {
    "trigger": "body.galleryblack #galleryImg > div.paginfixed > div > span.nextbox > a",
    "antiTrigger": "",
    "name": "newsweek.pl",
    "container": ".imgGalleryArt",
    "nextSelector": "div.paginfixed > div > span.nextbox > a:first-child",
    "removeFromContainer": "script, .moregallery"
  },
  {
    "trigger": "#wpMain  #wpCenter #galleryB div.pages span a",
    "antiTrigger": ".photo .vdoPly",
    "name": "film.wp.pl",
    "container": "#galleryB",
    "nextSelector": "#galleryB div.pages span:last a",
    "removeFromContainer": "script"
  },
  {
    "trigger": "body div.columns.columns-outer-double article.paggedArticle figure.article-image div.gallery-controlls a.gallery-image-next",
    "name": "sportowefakty.pl artykul",
    "container": "article.paggedArticle",
    "nextSelector": "article > figure > div > a.gallery-image-next",
    "removeFromContainer": "script, .article-header, .article-footer, .contentpoll"
  },
  {
    "trigger": "#wrapper #article.photostory a.photoNavigationNext, #photoContainer div.nav a.next",
    "antiTrigger": "",
    "name": "nowiny24 nowa galeria",
    "container": "#article.photostory",
    "nextSelector": ".photoNavigation a.photoNavigationNext:first-child",
    "removeFromContainer": "script"
  },
  {
    "trigger": "div.main-content div.article--slideshow div.slideshow div.slideshow__header div.slidshow__nav a.button-next",
    "antiTrigger": "",
    "name": "biztok",
    "container": "div.slideshow",
    "nextSelector": "div.slideshow__header div.slidshow__nav a.button-next:first-child",
    "removeFromContainer": "script"
  },
  {
    "trigger": "#stgMain .bxGaleriaPoj .stronicowanie .stgGaleriaNext.next:first-child",
    "antiTrigger": "",
    "name": "sport wp pl galeria pozioma 2",
    "container": ".bxGaleriaPoj",
    "nextSelector": ".stronicowanie .stgGaleriaNext:first-child",
    "removeFromContainer": "script"
  },
  {
    "trigger": "#all #page #slideshow-header .slideshow-paging a.slideshow-next",
    "antiTrigger": "",
    "name": "wawalove.pl - pozioma",
    "container": "div.content",
    "nextSelector": ".slideshow-paging a.slideshow-next:first-child",
    "removeFromContainer": "script"
  },
  {
    "trigger": ".bx-galeria .bx-content #galleryNaviSide a.next",
    "antiTrigger": "",
    "name": "wp.pl - pozioma",
    "container": "div.bx-content",
    "nextSelector": "#galleryNaviSide a.next",
    "removeFromContainer": "script"
  },
  {
    "trigger": "#allContentArea #webMainContent .wideColumn #galeriaFoto a.fotkiNavigationBig-next",
    "antiTrigger": "",
    "name": "zdrowie.wp.pl stary layout",
    "container": "#galeriaFoto",
    "nextSelector": ".fotkiNavigation a.next:first-child",
    "removeFromContainer": "script"
  },
  {
    "trigger": "#doc #contentSection section#sectionmain article.gallery_detal div.gallery_detal div.next a.btn",
    "antiTrigger": "",
    "name": "gotowanie.onet.pl nowy layout 2014 listopad",
    "container": "article.gallery_detal",
    "nextSelector": "div.gallery_detal div.next a.btn",
    "removeFromContainer": "script"
  },
  {
    "trigger": "body#gallery #gallery_container #gallery_pagging .numbers a.next_small",
    "antiTrigger": "",
    "name": "komputerswiat.pl listopad 2014",
    "container": "#gallery_container",
    "nextSelector": ".next_small:first-child",
    "removeFromContainer": "script, #comments, #comment_form, .ft, #social_buttons_box"
  },
  {
    "trigger": "body#boks-galeria .kontener #glowna-kolumna section a.nastepne",
    "antiTrigger": "",
    "name": "gazetawroclawska.pl grudzien 2014",
    "container": "#glowna-kolumna",
    "nextSelector": "#glowna-kolumna section a.nastepne",
    "removeFromContainer": "script"
  },
  {
    "trigger": "#page #main  #content-region div.content-wrapper div.photo a.nav-photo.nav-right",
    "antiTrigger": "",
    "name": "MojeMiasto grudzien 2014",
    "container": ".node-photogallery-photo div.photo:first-child",
    "nextSelector": "#photo a.right",
    "removeFromContainer": "script"
  },
  {
    "trigger": ".content.content-slideshow .single-entry #slideshow-contener .slideshow-paging a.slideshow-next",
    "antiTrigger": "",
    "name": "pudelek.pl",
    "container": "#slideshow-contener",
    "nextSelector": "#slideshow-contener .slideshow-paging a.slideshow-next:first-child",
    "removeFromContainer": "script"
  },
  {
    "trigger": " .glassInternal .glassContent.galleryContent",
    "antiTrigger": ".galleryContent .gallerySlide[data-type=video]",
    "name": "onet slideshow 2015",
    "container": "",
    "nextSelector": "",
    "removeFromContainer": "script"
  },
  {
    "trigger": "div#wrap .article-slideshow article.slideshow div.slideshow-controls .slideshow-paging .slideshow-next",
    "antiTrigger": "",
    "name": "Snobka 2015",
    "container": ".slideshow",
    "nextSelector": "div.slideshow-controls .slideshow-paging .slideshow-next",
    "removeFromContainer": "script, .slideshow-controls, .slideshow-paging"
  },
  {
    "trigger": "#galeria-warstwa > div.boxPozycja.galeriaNaw > #material-galeria-nastepne.btnNastepny",
    "antiTrigger": "",
    "name": "naszemiasto.pl w overlay 2015",
    "container": "#galeria-warstwa",
    "nextSelector": " #material-galeria-nastepne.btnNastepny",
    "removeFromContainer": "script"
  },
  {
    "trigger": "body > div > div.galleryWrapper > div > button.slick-next",
    "antiTrigger": "",
    "name": "Fakt 2015 slick",
    "container": "",
    "nextSelector": "",
    "removeFromContainer": "script"
  },
  {
    "trigger": ".articlepage .page-wrap .ggallery-slider-box #ggallery-slider",
    "antiTrigger": "",
    "name": "Dziennik PL 2015",
    "container": ".widget-box",
    "nextSelector": "link[rel='next prefetch']",
    "removeFromContainer": "script"
  },
  {
    "trigger": "#stgMain .stgInner .picNav .stampGlowneFoto span.stampGlowneFotoMain a.next",
    "antiTrigger": "",
    "name": "Wp.pl 2015",
    "container": ".stampGlowneFoto ,#stgCol300",
    "nextSelector": "span.stampGlowneFotoMain a.next",
    "removeFromContainer": "script, .stampGlowneFotoMain a.arr, .minGal"
  },
  {
    "trigger": "nav.slideTop .photostoryNavigation .photostoryNextPage",
    "name": "galeria #pagetype_art .photostoryNextPage NOWA GALERIA GAZETY (Wrzesien 2015)",
    "container": "#content_wrap",
    "removeFromContainer": "#photo_comments, #article_comments, #col_right, #top_wrap, #gazeta_article_miniatures, #bottom_wrap, .nextSlideWrapper",
    "nextSelector": "nav.slideTop .photostoryNavigation .photostoryNextPage"
  },
  {
    "trigger": "main.main--wide-col .main_article_container article.galery .galery--controls .galery--controls-next",
    "antiTrigger": "",
    "name": "gwiazdy wp.pl wrzesien 2015",
    "container": "article",
    "nextSelector": "article.galery .galery--controls .galery--controls-next",
    "removeFromContainer": "script"
  },
  {
    "trigger": "#galeria.single_gallery_photo .gallery_main_photo .photo_story_navigation .next_photo",
    "antiTrigger": "",
    "name": "Dziennik Wschodni",
    "container": "#galeria",
    "nextSelector": "#galeria.single_gallery_photo .gallery_main_photo .photo_story_navigation .next_photo",
    "removeFromContainer": "script, .photo_story_navigation"
  },
  {
    "trigger": "html.bezuzyteczna_pl #content-nav a.next_image",
    "antiTrigger": "",
    "name": "bezuzyteczna.pl",
    "container": "section.entry_gallery",
    "nextSelector": "#content-nav a.next_image",
    "removeFromContainer": "script"
  },
  {
    "trigger": "#p_box .p_box_nav_b3 .pop_nav_font",
    "antiTrigger": "",
    "name": "",
    "container": "#p_box",
    "nextSelector": "#p_box .p_box_nav_b3 .pop_nav_font",
    "removeFromContainer": "script"
  },
  {
    "trigger": "WORK IN PROGRESS article .article__navbutton--next",
    "antiTrigger": "",
    "name": "http://sportowefakty.wp.pl/",
    "container": "article",
    "nextSelector": "article nav.article__innernav a.article__navbutton.article__navbutton--next:first-child",
    "removeFromContainer": "script, #Skomentuj, address.articletags, address.indicator, h1.title, .liketag, .articleteasers, div.brick.tabs.tabs--social"
  },
  {
    "trigger": "body#photostory header#art-header #gazeta_article_image_new img",
    "antiTrigger": "",
    "name": "wyborcza.pl 2017 duza galeria",
    "container": "header#art-header",
    "nextSelector": "header#art-header a.photostoryNextPage",
    "removeFromContainer": "script"
  },
  {
    "trigger": "body#pagetype_photo section.article-and-social .galleryNavigation a.galleryNextPage",
    "antiTrigger": "",
    "name": "wyborcza.pl nowa slick kwadratowa",
    "container": "section.article-and-social",
    "nextSelector": "section.article-and-social .galleryNavigation a.galleryNextPage",
    "removeFromContainer": "script, div.social"
  },
  {
    "trigger": "html.fonts-loaded-plain article.gallery a[data-st-area=gallery-next]",
    "antiTrigger": "",
    "name": "tech.wp.pl",
    "container": "article",
    "nextSelector": "a[data-st-area=gallery-next]",
    "removeFromContainer": "script"
  },
  {
    "trigger": "body > div.container .content .row div.gallery-media #gallery-thumbnails",
    "antiTrigger": "",
    "name": "national geographic",
    "container": ".gallery-media",
    "nextSelector": "#next-item",
    "removeFromContainer": "script"
  },
  {
    "trigger": "body#photostory.classicPhotostory section.article-and-social > #gazeta_article_image_new img",
    "antiTrigger": "",
    "name": "wyborcza.pl 2017 duza galeria 2",
    "container": "main.content.container-inner",
    "nextSelector": "header#art-header a.photostoryNextPage",
    "removeFromContainer": "script"
  }
];
