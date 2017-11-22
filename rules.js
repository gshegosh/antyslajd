// below are slightly modified GPL rules from legacy Eliminator Slajdów extension - 
// see https://github.com/maestr0/eliminator-slajdow/blob/master/common/js/eliminator-slajdow-common.js
const rules = [
  {
    "name":"galeria #pagetype_photo (1)",
    "trigger":"body#pagetype_photo",
    "antiTrigger":"body#pagetype_photo.simpleGallery #gazeta_gallery_popup .gs_navigation .gs_next, .photostoryNavigation .photostoryNextPage",
    "removeFromPage":"#gazeta_article_top .navigation, #gazeta_article .navigation, #gazeta_article_image .overlayBright",
    "elementsToEmpty":"#gazeta_article_miniatures",
    "customStyles":{
      "#col_left":"width:auto",
      "#columns_wrap":"background:none",
      ".path_duzy_kadr .imageContainerEliminatorSlajdow p.headerLogo, .path_duzy_kadr .slideTitle":"color: white"
    }
  },
  {
    "name":"galeria #pagetype_art_blog (2)",
    "trigger":"body#pagetype_art_blog",
    "itemSelector":"#gazeta_article_image img,#gazeta_article_body, div[id*='gazeta_article_image_']:not('#gazeta_article_image_overlay')",
    "customStyles":{
      ".path_duzy_kadr #col_left":"width:auto",
      ".path_duzy_kadr .imageContainerEliminatorSlajdow p.headerLogo, .path_duzy_kadr .slideTitle":"color: white"
    }
  },
  {
    "name":"galeria body#pagetype_art #gazeta_article_image (3)",
    "trigger":"body#pagetype_art #gazeta_article_tools",
    "removeFromPage":"#gazeta_article_image div.overlayBright",
    "itemSelector":"#gazeta_article_image,#gazeta_article_body, div[id*='gazeta_article_image_']:not('#gazeta_article_image_overlay')"
  },
  {
    "name":"gazetapraca.pl ",
    "trigger":"div#art div#container_gal",
    "nextSelector":"#gal_btn_next a:first-child",
    "elementsToEmpty":"div#gal_navi_wrp, #gal_navi_wrp",
    "placeholderSelector":"#art",
    "itemSelector":"div#container_gal"
  },
  {
    "name":"galeria div#article div#article_body (5)",
    "trigger":"div#article div#article_body",
    "nextSelector":"#gal_btn_next a:first-child",
    "elementsToEmpty":"#gal_navi_wrp",
    "placeholderSelector":"#article_body",
    "itemSelector":"div#container_gal"
  },
  {
    "name":"galeria bez typu ('div#k1 div#k1p div#gal_outer') (6)",
    "trigger":"div#k1 div#k1p div#gal_outer",
    "nextSelector":"li.btn_next a:first-child",
    "elementsToEmpty":"div#article ul, #gal_navi_wrp, div#gal_miniatures",
    "placeholderSelector":"div#gal_outer .description",
    "itemSelector":"div#gal_picture, div.description, p.description"
  },
  {
    "name":"autotrader.pl - galeria zdjec samochodu - 2013",
    "trigger":"div.PopupWielkosc div.ZdjecieGaleriaMaxWielkosc",
    "nextSelector":"div:not(.ZjecieZaznaczone).ZdjecieGaleriaMini a",
    "elementsToEmpty":"div.DetaleZdjeciaMiniOdstep, div.GaleriaPopupNastepne, div.FloatRight.PopupReklamaPoPrawej, div.TextAlignCenter.PopupReklamaNaDole",
    "placeholderSelector":"div#Zawartosc div.Detale",
    "itemSelector":"div.ZdjecieGaleriaMaxWielkosc"
  },
  {
    "name":"MultiGallery na ONET.PL",
    "trigger":" #multiGallery #multiGalleryContent #gallery",
    "antiTrigger":"#multiGallery #multiGalleryContent #gallery .mainMediaImg img.after",
    "nextSelector":".navBox .navBoxContainer a.nextFixed",
    "removeFromPage":".imageContainerEliminatorSlajdow .navBoxClose, .ad_adInfo, .ad_adInfoEnd, #multiGalleryContent .navBox, .formTools",
    "elementsToEmpty":"*[id='mediaList'], script, .onet-ad, .navBox .navBoxContainer, .imageContainerEliminatorSlajdow .navBoxClose, .ad_adInfo, .ad_adInfoEnd",
    "placeholderSelector":"#multiGallery #multiGalleryContent #galleryText",
    "itemSelector":"#multiGalleryContent #galleryText",
    "customStyles":{
      "body":"height:auto"
    }
  },
  {
    "name":"Galeria MediaRegionalne ",
    "trigger":"div#page div#pageWrapper div#photo div#photoContainer div.nav a",
    "nextSelector":"p#photoNavigation a#photoNavigationNext",
    "removeFromPage":"div#tngallery, p#photoNavigation, .imageContainerEliminatorSlajdow div#photoRelatedArticles, .imageContainerEliminatorSlajdow div#photo p.photoMeta",
    "elementsToEmpty":"script",
    "placeholderSelector":"div#photo",
    "itemSelector":"div#photo"
  },
  {
    "name":"Galeria MediaRegionalne - artykul",
    "trigger":"div#page div#pageWrapper div#article.photostory p.photoNavigation a.photoNavigationNext",
    "nextSelector":"p.photoNavigation a.photoNavigationNext",
    "removeFromPage":"p.photoNavigation, div#photoContainer div.nav, div#photoElement div.nav, h2",
    "elementsToEmpty":"script",
    "placeholderSelector":"div#article",
    "itemSelector":"div#article div.intextAd"
  },
  {
    "name":"Galeria MojeMiasto",
    "trigger":"div#main-column div#photo.common-box div.inner div.photo-item div.photoElem a.next",
    "nextSelector":"div#main-column div#photo.common-box div.inner div.photo-item div.photoElem a.next",
    "removeFromPage":"div.photoElem a, .top-slider",
    "elementsToEmpty":"script",
    "placeholderSelector":"div#photo div.photo-item",
    "itemSelector":"div.photo-item"
  },
  {
    "name":"galeria #pagetype_art .photostoryNextPage NOWA GALERIA GAZETY (12)",
    "trigger":"#content_wrap .photostoryNavigation .photostoryNextPage",
    "antiTrigger":"body#pagetype_index .mod_suwakiRwd",
    "nextSelector":"div#content .photostoryNavigation .photostoryNextPage",
    "removeFromPage":"#holder_404.holder_bottom, .relatedHolder, .photostoryNavigation, #gazeta_article_miniatures, #banP1, #banP2, #banP3, #banP4,#banP62, .photostoryNextPage, .photostoryPrevPage, #gazeta_article_image div.overlayBright, #gazeta_article .nextSlideWrapper, .galleryNavigation",
    "elementsToEmpty":"script:not([src])",
    "removeFromContainer":"#photo_comments, #article_comments, #col_right",
    "placeholderSelector":"#columns_wrap",
    "itemSelector":"#content_wrap",
    "customStyles":{
      "#article_comments":"float:left"
    }
  },
  {
    "name":"MediaRegionalne 1",
    "trigger":"div#page div#pageWrapper div#photo p#photoNavigation a#photoNavigationNext",
    "nextSelector":"p#photoNavigation a#photoNavigationNext",
    "removeFromPage":"#tngallery, #photoRelatedArticles, #photoNavigation, #photoElement div.nav",
    "elementsToEmpty":"script",
    "placeholderSelector":"div#photo",
    "itemSelector":"div#photo img, div#photo p:nth-child(7)"
  },
  {
    "name":"MediaRegionalne 2",
    "trigger":"div#wrapper > div > div#photo p#galleryNav a#galleryNavNext",
    "nextSelector":"p#galleryNav a#galleryNavNext",
    "removeFromPage":"#galleryNav, #tngalleryScroll",
    "elementsToEmpty":"script",
    "placeholderSelector":"div#photo",
    "itemSelector":"div#photo img, #photo p:first-child"
  },
  {
    "name":"Autotrader Legacy",
    "trigger":"div#LeftContent div#MainGallery img#PhotoInMainGallery",
    "nextSelector":"div:not(.ZjecieZaznaczone).ZdjecieGaleriaMini a",
    "elementsToEmpty":"div.DetaleZdjeciaMiniOdstep, div.GaleriaPopupNastepne, div.FloatRight.PopupReklamaPoPrawej, div.TextAlignCenter.PopupReklamaNaDole",
    "placeholderSelector":"div#MainGallery",
    "itemSelector":"div.ZdjecieGaleriaMaxWielkosc"
  },
  {
    "name":"Wiadomosci Wp.pl",
    "trigger":"div#bxGaleria div.podpisDuzaFotka div.przewijakZdjec div.slider",
    "nextSelector":"div#bxGaleriaOpis a.stgGaleriaNext",
    "removeFromPage":"#bxGaleriaOpis .stro, .przewijakGalerii, div.duzaFotka > a",
    "elementsToEmpty":"div.podpisDuzaFotka",
    "removeFromContainer":"script",
    "placeholderSelector":"div#bxGaleria",
    "itemSelector":"div.bxGaleria div.kol2",
    "customStyles":{
      "*[id='bxGaleriaOpis']":"margin-top:0 !important"
    }
  },
  {
    "name":"Facet wp.pl",
    "trigger":"div#stgGaleria div.stgGaleriaCnt .stgGaleriaNext",
    "nextSelector":"div#stgGaleria a.stgGaleriaNext",
    "removeFromPage":".stgGaleriaCnt > a",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"div.bxArt",
    "itemSelector":"#stgGaleria"
  },
  {
    "name":"Finanse wp.pl",
    "trigger":"div#stgMain article.stampGaleria div.stampBxNaglowek div.stampStronicowanie div.pIndex a.pNext",
    "nextSelector":"div.stampStronicowanie div.pIndex a.pNext",
    "removeFromPage":".stampGlowneFoto .stampGlowneFotoMain > a, div.stampStronicowanie div.pIndex",
    "elementsToEmpty":"",
    "removeFromContainer":"script, .stampBxStopka",
    "placeholderSelector":"#stgMain article.stampGaleria",
    "itemSelector":"article.stampGaleria div.articleRow",
    "customStyles":{
      ".stampGlowneFoto":"overflow: visible"
    }
  },
  {
    "name":"kwejk.pl",
    "trigger":"div#content div#largepic_wrapper div#largepic",
    "nextSelector":"div#largepic_wrapper a.next_image",
    "removeFromPage":".image_carousel, div#largepic_wrapper > a, div.media",
    "elementsToEmpty":"",
    "removeFromContainer":".image_carousel, script, style, div.share",
    "placeholderSelector":"div#content div.content",
    "itemSelector":"div#content div.content",
    "customStyles":{

    }
  },
  {
    "name":"gazetawroclawska.pl",
    "trigger":"body#strona-artykulu div#glowna-kolumna div#galeria-material-zdjecie",
    "nextSelector":"#galeria-nastepne-2",
    "removeFromPage":"#miniatury-kontener",
    "elementsToEmpty":"#miniatury-kontener, #galeria-poprzednie-2, #galeria-nastepne-2, .iloscZdjec",
    "removeFromContainer":"script, #miniatury-kontener, #galeria-poprzednie-2, #galeria-nastepne-2, .iloscZdjec",
    "placeholderSelector":"#galeria-material",
    "itemSelector":"#galeria-material",
    "customStyles":{

    }
  },
  {
    "name":"demotywatory.pl",
    "trigger":"div#main_container div.demotivator.pic #royalSliderExtraNavigation a.navigate_right",
    "nextSelector":"#royalSliderExtraNavigation a.navigate_right",
    "removeFromPage":"#royalSliderExtraNavigation, .share-widgets, .demot_info_stats, .fakeRsArrow, #pics_gallery_slider, .demot_pic",
    "elementsToEmpty":"",
    "removeFromContainer":"script, .share-widgets",
    "placeholderSelector":"#main_container .demotivator .demot_pic",
    "itemSelector":".demotivator .demot_pic .rsSlideContent",
    "customStyles":{
      "rsSlideContent h3":"display:none",
      "#main_container article, #main_container .demotivator":"float:left",
      ".rsSlideContent .relative":"text-align: center;margin: 40px;",
      ".rsSlideContent":"margin-bottom: 20px;color:white;font-size:16px"
    }
  },
  {
    "name":"fakt.pl",
    "trigger":"body#Fakt .pageContent .leftColumn .paginaHolder .paginator.panigaGalery",
    "nextSelector":".pageContent .leftColumn .paginaHolder .paginator.panigaGalery a.next",
    "removeFromPage":".pageBigGallery .zoomer, .paginaHolder",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"body#Fakt .pageContent .leftColumn .Scroll-View-Gallery",
    "itemSelector":"#bigPicture",
    "customStyles":{

    }
  },
  {
    "name":"fakt.pl nowa",
    "trigger":"body#loneGallery #bigPicture",
    "nextSelector":"#imgHolder .paginator .next",
    "removeFromPage":"#galleryslider, .paginator, .zoomer",
    "elementsToEmpty":"",
    "removeFromContainer":"script, .nrFoto, .socialButtons, .Region",
    "placeholderSelector":"#bigPicture",
    "itemSelector":"#bigPicture, .rightColumn",
    "customStyles":{
      ".imageContainerEliminatorSlajdow .rightColumn":"float:left;width:100%"
    }
  },
  {
    "name":"naszemiasto.pl",
    "trigger":".glownyKontener #material-artykul .galeriaArtykulowa #material-galeria-nastepne",
    "nextSelector":"#material-galeria-nastepne",
    "removeFromPage":"#galeria, .paginacja, .lupa, .strzalka, #powrot-miniaturki",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":".galeriaArtykulowa",
    "itemSelector":".galeriaArtykul",
    "customStyles":{
      "*[id=\"galeria-z-opisem\"]":"float:left"
    }
  },
  {
    "name":"naszemiasto.pl szeroka",
    "trigger":".glownyKontener .trescOpisu .paginacja #material-galeria-nastepne",
    "nextSelector":"#material-galeria-nastepne",
    "removeFromPage":"#galeria, .paginacja, .lupa, .strzalka, #powrot-miniaturki, #material-galeria-nastepne-czytaj",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"#galeria-z-opisem",
    "itemSelector":"#galeria-z-opisem",
    "customStyles":{

    }
  },
  {
    "name":"wawalove.pl",
    "trigger":"div#page article.single-article .gallery .paging .next",
    "nextSelector":"article.single-article .gallery .paging .next",
    "removeFromPage":".paging, .thumbs",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":".see-big",
    "itemSelector":".see-big",
    "customStyles":{

    }
  },
  {
    "name":"sfora.pl",
    "trigger":"div#page div#main div.article-slideshow .article-matter .slideshow-wrapper",
    "nextSelector":".article-matter .slideshow-next:first-child",
    "removeFromPage":".slideshow-paging",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":".slideshow-wrapper",
    "itemSelector":".slideshow-controls .slideshow-title, .slideshow-wrapper",
    "customStyles":{
      ".imageContainerEliminatorSlajdow":"margin-top:20px"
    }
  },
  {
    "name":"sfora.pl nowa",
    "trigger":"div#page div#main div.article-gallery .article-matter .gallery-content .gallery-img-big",
    "nextSelector":".gallery-img-big .next:first-child",
    "removeFromPage":".prev, .next, .gallery-top",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":".article-matter",
    "itemSelector":".article-matter",
    "customStyles":{
      ".imageContainerEliminatorSlajdow":"margin-top:20px"
    }
  },
  {
    "name":"biztok.pl",
    "trigger":".page .main-content .article--gallery .gallery .gallery__content .gallery__image-wrapper .next-btn",
    "nextSelector":".gallery__image-wrapper .next-btn",
    "removeFromPage":".next-btn, .prev-btn, .gallery__header",
    "elementsToEmpty":"",
    "removeFromContainer":"script, .social-box",
    "placeholderSelector":".gallery__content",
    "itemSelector":".gallery__content",
    "customStyles":{
      ".imageContainerEliminatorSlajdow":"margin-top:20px"
    }
  },
  {
    "name":"komputerswiat.pl",
    "trigger":"#ks_doc #ks_bd_left_col #ks_simple_pagging",
    "nextSelector":"#gallery_image a.next",
    "removeFromPage":"#ks_simple_pagging, #ks_bd_right_col div.next, #gallery_image .next",
    "removeFromContainer":"#comments, script, .Nextclick_Widget_Container, #comment_form, #ks_bd_right_col div.next, #gallery_image .next, #gallery_image .prev",
    "placeholderSelector":"#ks_bd_cols",
    "itemSelector":"#ks_bd_cols",
    "customStyles":{
      "#gallery #ks_bd":"float:left",
      ".imageContainerEliminatorSlajdow":"margin-top:20px",
      ".comments":"width:720px"
    }
  },
  {
    "name":"dziennik.pl",
    "trigger":"body#screening #mainContainer #gallery .gallery_body .gallery_photo_desc_right",
    "nextSelector":".gallery_photo_desc_right .nastepne:first-child",
    "removeFromPage":".belka-spol, .cl_right, .gallery_list_photos_header, .gallery_photo_desc_right, .gallery_list_photos, .art_data_tags, .belka-spol-bottom",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":".gallery_body",
    "itemSelector":".gallery_body",
    "customStyles":{

    }
  },
  {
    "name":"forsal.pl",
    "trigger":"#miejsce2 .galeriaBig.forsalOnly .photoBg .next",
    "nextSelector":".galeriaBig.forsalOnly .photoBg .next",
    "removeFromPage":".photoBg .hoverPhoto, .photoBg .next, .photoBg .prev, .nextPrev ul",
    "removeFromContainer":"script, .dateArt, .leadArt, .lead, .galeriaBig.forsalOnly > h2",
    "placeholderSelector":".tpl_sgp_galeria_artykulowa",
    "itemSelector":".tpl_sgp_galeria_artykulowa",
    "customStyles":{
      ".imageContainerEliminatorSlajdow":"margin-top:20px"
    }
  },
  {
    "name":"przegladsportowy.pl",
    "trigger":"#pagewrap article.imgGalleryArt #ARTICLE_GALLERY_BOTTOM_1",
    "nextSelector":".paginator a.next:first-child",
    "removeFromPage":".paginator",
    "elementsToEmpty":"",
    "removeFromContainer":"script, #ARTICLE_GALLERY_RIGHT_COLUMN_1, #ARTICLE_GALLERY_BOTTOM_1, .socialButtons",
    "placeholderSelector":"#pagewrap .rightColumn",
    "itemSelector":".leftColumn, .rightColumn",
    "customStyles":{
      ".sharebx, .Comments":"float:left"
    }
  },
  {
    "name":"sportowefakty.pl",
    "trigger":".site .columns.columns-outer-double .box-gallery .gallery-image .gallery-controlls .gallery-image-zoom",
    "nextSelector":".gallery-image-next:first-child",
    "removeFromPage":".gallery-navigation, .gallery-controlls",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"#photo-start",
    "itemSelector":"#photo-start",
    "customStyles":{

    }
  },
  {
    "name":"bebzol.com",
    "trigger":"#page_wrap #page #content #content-inner .box-inner .img-cnt-wrap .news-content",
    "nextSelector":"#handle-next:not(.next-gal):first-child",
    "removeFromPage":".handle:not(.next-gal), .categ-list-cnt, .pluginConnectButton",
    "elementsToEmpty":"",
    "removeFromContainer":"script, .like-bar, .bbz-cm-box",
    "placeholderSelector":".img-cnt-wrap",
    "itemSelector":".img-cnt-wrap",
    "customStyles":{
      ".imageContainerEliminatorSlajdow":"margin-top:20px",
      ".like-bar":"float:left;width:100%"
    }
  },
  {
    "name":"lovekrakow.pl",
    "trigger":"#main .container #left_column #article .article-photo .photo-next-link",
    "nextSelector":".article-photo .photo-next-link:first-child",
    "removeFromPage":".thumbnails, .photo-pagination, .col-md-12, .photo-next-link, .photo-prev-link, .article-photo-pagination",
    "elementsToEmpty":"",
    "removeFromContainer":"script, .comments, h1.title",
    "placeholderSelector":"#main .container .row:first-child",
    "itemSelector":"#left_column, #right_column",
    "customStyles":{

    }
  },
  {
    "name":"biznes.pl",
    "trigger":"div#doc #body #trunk #main .k_galleryLarge .k_pagination",
    "nextSelector":".k_pagination .k_next a:first-child",
    "removeFromPage":".k_pagination",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"#main .k_gallery",
    "itemSelector":".k_gallery",
    "customStyles":{

    }
  },
  {
    "name":"urzadzamy.pl i se.pl",
    "trigger":"#gallery > div.content > div.flesh > div.main_img > div.big_img > div.fullscreen > div > img",
    "nextSelector":"div.content > div.main_nav > div.go.next > a",
    "removeFromPage":".mini_img, .main_nav",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":".flesh",
    "itemSelector":".flesh",
    "customStyles":{

    }
  },
  {
    "name":"pudelekx.pl",
    "trigger":"div.all div#page #item > div.item-content > a.arrow-next-big",
    "nextSelector":"div.item-content > a.arrow-next-big",
    "removeFromPage":".thumbs, .item-header .btn2, .arrow-next-big, .arrow-prev-big, .item-header, div.sidebar",
    "elementsToEmpty":"",
    "removeFromContainer":"script, .tags, .item-options, .left",
    "placeholderSelector":"#item .item-content",
    "itemSelector":"#item",
    "customStyles":{

    }
  },
  {
    "name":"snobka.pl",
    "trigger":"#wrap #article article.single-entry #photo-gallery .inner a.next",
    "nextSelector":".inner a:first-child.next",
    "removeFromPage":"div.thumbs, .inner .next, .inner .prev",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"#photo-gallery",
    "itemSelector":"#photo-gallery",
    "customStyles":{
      "section.comments":"float:left"
    }
  },
  {
    "name":"gazeta pl nowa galeria czarna",
    "trigger":"body#pagetype_photo.simpleGallery #gazeta_gallery_popup .gs_navigation .gs_next",
    "nextSelector":".gs_navigation .gs_next:first-child",
    "removeFromPage":".gs_navigation",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"#gazeta_gallery_popup .gs_image_cointainer",
    "itemSelector":".gs_image_cointainer",
    "customStyles":{
      "body":"overflow: auto",
      ".gs_image_cointainer img":"position:relative;max-height:inherit;min-height:inherit",
      "#gazeta_gallery_popup":"position:absolute",
      "#page22":"height:0",
      ".headerLogo, .icon-facebook-squared":"color:white",
      "#gazeta_gallery_popup .gs_image_cointainer":"height:auto"
    }
  },
  {
    "name":"http://www.fly4free.pl/",
    "trigger":"div.wrap div.main div.article__content div.gallery div.gallery__image-big a.next",
    "nextSelector":"div.gallery__image-big a.next",
    "removeFromPage":".gallery__nav, .gallery__image-big .next, .gallery__image-big .prev",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"div.gallery",
    "itemSelector":"div.gallery",
    "customStyles":{

    }
  },
  {
    "name":"wp.pl galeria pozioma 1",
    "trigger":"#stgMain .stampFototematRow .stampStronicowanieFototematu .stampStronicowanieFototematuContent .stampStronicowanieFototematuIndex",
    "nextSelector":".stampStronicowanieFototematuContent a.stampStronicowanieFototematuNxt:first-child",
    "removeFromPage":".pPaginSmall, .stampStronicowanieFototematu, .stampFototematBigFotoNxt, .stampFototematBigFotoPrv",
    "elementsToEmpty":"",
    "removeFromContainer":"script, .pPaginSmall",
    "placeholderSelector":"#stgMain .stampFototemat",
    "itemSelector":".stampFototemat",
    "customStyles":{

    }
  },
  {
    "name":"gadzetomania",
    "trigger":"#page_wrapper #container #main .article-wraper .article-body .post-pages a.next-page.button",
    "nextSelector":".article-body .post-pages a.next-page.button:first-child",
    "removeFromPage":".post-pages",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":".article-body",
    "itemSelector":".article-body",
    "customStyles":{

    }
  },
  {
    "name":"trojmiasto.pl",
    "trigger":"#main-wrap div#body .section-subcontent .photo-wrap a#next_link",
    "nextSelector":".photo-wrap a#next_link",
    "removeFromPage":"#fotoshift, .simple-nav, #hover_nav",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"#foto",
    "itemSelector":"#foto",
    "customStyles":{

    }
  },
  {
    "name":"onet pozioma galeria",
    "trigger":"body ul.k_controls .k_next, #photoZoom #imgNav",
    "nextSelector":"li.k_next a:first-child",
    "removeFromPage":".k_preview, .k_index, .k_controls, .k_insets",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"#main .kopyto:first-child, #sTop .kopyto:first-child, #cLeft .kopyto:first-child",
    "itemSelector":"#main .kopyto:first-child, #sTop .kopyto:first-child, #cLeft .kopyto:first-child",
    "customStyles":{

    }
  },
  {
    "name":"regiomoto",
    "trigger":"div#page div#main-content #content-region .node-article-image .navigation-links a.next",
    "antiTrigger":"",
    "nextSelector":".navigation-links a.next",
    "removeFromPage":"",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"#content-region .node-article-image",
    "itemSelector":"#content-region .node-article-image",
    "customStyles":{
      "#comments":"float:left"
    }
  },
  {
    "name":"sportfan.pl",
    "trigger":"div#page div#main div.slideshow-header .slideshow-paging .slideshow-next",
    "nextSelector":".slideshow-paging .slideshow-next:first-child",
    "removeFromPage":".slideshow-paging",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":".slideshow, .slideshow-old",
    "itemSelector":".slideshow:first-child, .slideshow-old:first-child",
    "customStyles":{
      ".imageContainerEliminatorSlajdow":"margin-top:20px"
    }
  },
  {
    "name":"sportfan plaska",
    "trigger":"#main > div.article > div.gallery-booth > div.gallery-big > a.gallery-next",
    "antiTrigger":"",
    "nextSelector":"div.gallery-big > a.ir.gallery-next",
    "removeFromPage":"div.gallery-preview, .gallery-big .ir",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"#main > div.article > div.gallery-booth",
    "itemSelector":"div.gallery-booth",
    "customStyles":{
      ".article .gallery-big":"width:auto"
    }
  },
  {
    "name":"forbes.pl",
    "trigger":"body#Forbes #Page-Wrap .Block-Node a.Next",
    "antiTrigger":"",
    "nextSelector":"#Column-Wrap .Block-Node a.Next",
    "removeFromPage":".navigation, .Next, .Previous, .showMini",
    "elementsToEmpty":"",
    "removeFromContainer":"script, .backlink, #ARTICLE_RELATED_GALLERY_BOTTOM, .socialLine",
    "placeholderSelector":"#Column-Wrap",
    "itemSelector":"#Column-Wrap",
    "customStyles":{
      ".headerLogo, .icon-facebook-squared":"color:white",
      ".imageContainerEliminatorSlajdow":"margin-top:15px"
    }
  },
  {
    "name":"geekweek.pl",
    "trigger":"div#root div#content section#articles #zdjecie.right .navigation a.next",
    "antiTrigger":"",
    "nextSelector":".navigation a.next:first-child",
    "removeFromPage":".navigation",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"#zdjecie div:last",
    "itemSelector":"#zdjecie",
    "customStyles":{

    }
  },
  {
    "name":"naszemiasto.pl w overlay",
    "trigger":"#galeria-warstwa > div.boxPozycja.galeriaNaw > div #material-galeria-nastepne.btnNastepny",
    "antiTrigger":"",
    "nextSelector":"link[rel=next]",
    "removeFromPage":".galeriaNaw",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"#galeria-warstwa",
    "itemSelector":"#galeria-warstwa",
    "customStyles":{

    }
  },
  {
    "name":"nowy kwejk styczen 2015",
    "trigger":"#content #contents .content .media.full .jcarousel-wrapper",
    "antiTrigger":"",
    "nextSelector":"#contents div.media.full div.object a.next",
    "removeFromPage":".jcarousel-wrapper, a.next, a.prev, .content .media.ad",
    "elementsToEmpty":"",
    "removeFromContainer":"script, .media.ad",
    "placeholderSelector":"div.media.full > div.object div.self, div.media.full > div.object section.large",
    "itemSelector":"div.media.full > div.object div.self, div.media.full > div.object section.large",
    "customStyles":{
      ".btn-goback":"float:left; width:100%",
      "article.content .media.ad":"display:none !important",
      ".actions":"position:static !important",
      ".es_slide img":"margin-bottom: 0 !important",
      ".media.full > div.object":"margin-top: 50px !important",
      ".media.full > div.object .self img":"margin-bottom: 0 !important",
      ".media-gallery-title":"margin: 30px 0",
      ".imageContainerEliminatorSlajdow":"margin-top: 15px;"
    }
  },
  {
    "name":"WP tech sierpien 2014",
    "trigger":"#stgMain #bxGaleria > div.content > div.picCol > div.bigPic > a",
    "antiTrigger":"",
    "nextSelector":".navPic .stgGaleriaNext:first-child",
    "removeFromPage":".navPic, .bigPic a",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"#bxGaleria .content",
    "itemSelector":"#bxGaleria .content",
    "customStyles":{

    }
  },
  {
    "name":"nocoty.pl",
    "trigger":"#wpMain div.bxCenterMain div.bxCont div.fotkaBx h1.galeria",
    "antiTrigger":"",
    "nextSelector":"a.stgGaleriaNext:first-child",
    "removeFromPage":".fotoPrev_v2, .fotoNext_v2, .body .rt",
    "elementsToEmpty":"",
    "removeFromContainer":"script, #stgOpinie, div.bxCenterMain div.galeriaZdjecieBx:eq(1)",
    "placeholderSelector":".bxCenterMain .bxCont",
    "itemSelector":".bxCenterMain",
    "customStyles":{

    }
  },
  {
    "name":"newsweek.pl",
    "trigger":"body.galleryblack #galleryImg > div.paginfixed > div > span.nextbox > a",
    "antiTrigger":"",
    "nextSelector":"div.paginfixed > div > span.nextbox > a:first-child",
    "removeFromPage":".paginfixed, .stripeList, .gallery-mini-holder",
    "elementsToEmpty":"",
    "removeFromContainer":"script, .moregallery",
    "placeholderSelector":".imgGalleryArt #galleryImg",
    "itemSelector":".imgGalleryArt",
    "customStyles":{

    }
  },
  {
    "name":"film.wp.pl",
    "trigger":"#wpMain #wpCenter #galleryB div.pages span a",
    "antiTrigger":".photo .vdoPly",
    "nextSelector":"#galleryB div.pages span:last a",
    "removeFromPage":".ST-BX-Zobacz-takze-gal, .pages",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"#galleryB",
    "itemSelector":"#galleryB",
    "customStyles":{

    }
  },
  {
    "name":"sportowefakty.pl artykul",
    "trigger":"body div.columns.columns-outer-double article.paggedArticle figure.article-image div.gallery-controlls a.gallery-image-next",
    "nextSelector":"article > figure > div > a.gallery-image-next",
    "removeFromPage":".fullsizedPaggedNavigation, .gallery-image-previous, .gallery-image-next",
    "elementsToEmpty":"",
    "removeFromContainer":"script, .article-header, .article-footer, .contentpoll",
    "placeholderSelector":"article.paggedArticle",
    "itemSelector":"article.paggedArticle",
    "customStyles":{

    }
  },
  {
    "name":"nowiny24 nowa galeria",
    "trigger":"#wrapper #article.photostory a.photoNavigationNext, #photoContainer div.nav a.next",
    "antiTrigger":"",
    "nextSelector":".photoNavigation a.photoNavigationNext:first-child",
    "removeFromPage":"#photoContainer div.nav, #photostoryConnections, .photoNavigation",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"#article.photostory",
    "itemSelector":"#article.photostory",
    "customStyles":{

    }
  },
  {
    "name":"biztok",
    "trigger":"div.main-content div.article--slideshow div.slideshow div.slideshow__header div.slidshow__nav a.button-next",
    "antiTrigger":"",
    "nextSelector":"div.slideshow__header div.slidshow__nav a.button-next:first-child",
    "removeFromPage":".slidshow__nav",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"div.slideshow",
    "itemSelector":"div.slideshow",
    "customStyles":{

    }
  },
  {
    "name":"sport wp pl galeria pozioma 2",
    "trigger":"#stgMain .bxGaleriaPoj .stronicowanie .stgGaleriaNext.next:first-child",
    "antiTrigger":"",
    "nextSelector":".stronicowanie .stgGaleriaNext:first-child",
    "removeFromPage":".stronicowanie",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":".bxGaleriaPoj:first-child",
    "itemSelector":".bxGaleriaPoj",
    "customStyles":{

    }
  },
  {
    "name":"wawalove.pl - pozioma",
    "trigger":"#all #page #slideshow-header .slideshow-paging a.slideshow-next",
    "antiTrigger":"",
    "nextSelector":".slideshow-paging a.slideshow-next:first-child",
    "removeFromPage":".slideshow header, .slideshow footer",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"div.content",
    "itemSelector":"div.content",
    "customStyles":{

    }
  },
  {
    "name":"wp.pl - pozioma",
    "trigger":".bx-galeria .bx-content #galleryNaviSide a.next",
    "antiTrigger":"",
    "nextSelector":"#galleryNaviSide a.next",
    "removeFromPage":"#galleryNaviSide a.next, #galleryNaviSide a.prev, *[id='galleryNaviTop']",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"div.bx-content",
    "itemSelector":"div.bx-content",
    "customStyles":{

    }
  },
  {
    "name":"zdrowie.wp.pl stary layout",
    "trigger":"#allContentArea #webMainContent .wideColumn #galeriaFoto a.fotkiNavigationBig-next",
    "antiTrigger":"",
    "nextSelector":".fotkiNavigation a.next:first-child",
    "removeFromPage":".fotkiNavigation, .fotkiNavigationBig-next, .fotkiNavigationBig-prev",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"#galeriaFoto",
    "itemSelector":"#galeriaFoto",
    "customStyles":{

    }
  },
  {
    "name":"gotowanie.onet.pl nowy layout 2014 listopad",
    "trigger":"#doc #contentSection section#sectionmain article.gallery_detal div.gallery_detal div.next a.btn",
    "antiTrigger":"",
    "nextSelector":"div.gallery_detal div.next a.btn",
    "removeFromPage":".gallery_detal .next, .gallery_detal .prev, aside.count",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"article.gallery_detal",
    "itemSelector":"article.gallery_detal",
    "customStyles":{

    }
  },
  {
    "name":"komputerswiat.pl listopad 2014",
    "trigger":"body#gallery #gallery_container #gallery_pagging .numbers a.next_small",
    "antiTrigger":"",
    "nextSelector":".next_small:first-child",
    "removeFromPage":".numbers",
    "elementsToEmpty":"",
    "removeFromContainer":"script, #comments, #comment_form, .ft, #social_buttons_box",
    "placeholderSelector":"#gallery_container",
    "itemSelector":"#gallery_container",
    "customStyles":{
      ".imageContainerEliminatorSlajdow":"margin-top: 20px"
    }
  },
  {
    "name":"gazetawroclawska.pl grudzien 2014",
    "trigger":"body#boks-galeria .kontener #glowna-kolumna section a.nastepne",
    "antiTrigger":"",
    "nextSelector":"#glowna-kolumna section a.nastepne",
    "removeFromPage":"a.nastepne, a.poprzednie, header p.info span:first-child",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"#glowna-kolumna",
    "itemSelector":"#glowna-kolumna",
    "customStyles":{
      "header p.info":"position:fixed; right:0",
      "header p.info a.zamknij":"padding:20px;"
    }
  },
  {
    "name":"MojeMiasto grudzien 2014",
    "trigger":"#page #main #content-region div.content-wrapper div.photo a.nav-photo.nav-right",
    "antiTrigger":"",
    "nextSelector":"#photo a.right",
    "removeFromPage":".nav-left, .nav-right, .images, .photo-index",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":".node-photogallery-photo div.photo:first-child",
    "itemSelector":".node-photogallery-photo div.photo:first-child",
    "customStyles":{

    }
  },
  {
    "name":"pudelek.pl",
    "trigger":".content.content-slideshow .single-entry #slideshow-contener .slideshow-paging a.slideshow-next",
    "antiTrigger":"",
    "nextSelector":"#slideshow-contener .slideshow-paging a.slideshow-next:first-child",
    "removeFromPage":".slideshow-paging",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"#slideshow-contener",
    "itemSelector":"#slideshow-contener",
    "customStyles":{
      ".slideshow-paging":"display:none"
    }
  },
  {
    "name":"onet slideshow 2015",
    "trigger":" .glassInternal .glassContent.galleryContent",
    "antiTrigger":".galleryContent .gallerySlide[data-type=video]",
    "nextSelector":"",
    "removeFromPage":"",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"",
    "itemSelector":"",
    "customStyles":{
      ".glassFrame":"overflow: auto",
      ".glassFrame .galleryContent .gallerySlide .containerRight":"padding: inherit",
      ".glassFrame .galleryContent .gallerySlide .containerRight h1.title":"position: initial"
    }
  },
  {
    "name":"Snobka 2015",
    "trigger":"div#wrap .article-slideshow article.slideshow div.slideshow-controls .slideshow-paging .slideshow-next",
    "antiTrigger":"",
    "nextSelector":"div.slideshow-controls .slideshow-paging .slideshow-next",
    "removeFromPage":".slideshow-controls, .slideshow-paging",
    "elementsToEmpty":"",
    "removeFromContainer":"script, .slideshow-controls, .slideshow-paging",
    "placeholderSelector":".slideshow",
    "itemSelector":".slideshow",
    "customStyles":{

    }
  },
  {
    "name":"naszemiasto.pl w overlay 2015",
    "trigger":"#galeria-warstwa > div.boxPozycja.galeriaNaw > #material-galeria-nastepne.btnNastepny",
    "antiTrigger":"",
    "nextSelector":" #material-galeria-nastepne.btnNastepny",
    "removeFromPage":".galeriaNaw",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"#galeria-warstwa",
    "itemSelector":"#galeria-warstwa",
    "customStyles":{

    }
  },
  {
    "name":"Fakt 2015 slick",
    "trigger":"body > div > div.galleryWrapper > div > button.slick-next",
    "antiTrigger":"",
    "nextSelector":"",
    "removeFromPage":"",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":".slick-slide ",
    "itemSelector":"",
    "customStyles":{

    }
  },
  {
    "name":"Dziennik PL 2015",
    "trigger":".articlepage .page-wrap .ggallery-slider-box #ggallery-slider",
    "antiTrigger":"",
    "nextSelector":"link[rel='next prefetch']",
    "removeFromPage":".ggallery-pager-box, .bx-controls",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":".page-wrap .row .widget-ggallery-box",
    "itemSelector":".widget-box",
    "customStyles":{
      ".imageContainerEliminatorSlajdow":"position: relative; z-index:1"
    }
  },
  {
    "name":"Wp.pl 2015",
    "trigger":"#stgMain .stgInner .picNav .stampGlowneFoto span.stampGlowneFotoMain a.next",
    "antiTrigger":"",
    "nextSelector":"span.stampGlowneFotoMain a.next",
    "removeFromPage":".stampGlowneFotoMain a.arr, .minGal",
    "elementsToEmpty":"",
    "removeFromContainer":"script, .stampGlowneFotoMain a.arr, .minGal",
    "placeholderSelector":"#stgCol300",
    "itemSelector":".stampGlowneFoto ,#stgCol300",
    "customStyles":{
      ".stampGlowneFoto":"float:left;"
    }
  },
  {
    "name":"galeria #pagetype_art .photostoryNextPage NOWA GALERIA GAZETY (Wrzesien 2015)",
    "trigger":"nav.slideTop .photostoryNavigation .photostoryNextPage",
    "nextSelector":"nav.slideTop .photostoryNavigation .photostoryNextPage",
    "removeFromPage":"#bottom_wrap, .photostoryNavigation, #gazeta_article_miniatures, #banP1, #banP2, #banP3, #banP4,#banP62, .photostoryNextPage, .photostoryPrevPage, #gazeta_article_image div.overlayBright, #gazeta_article .nextSlideWrapper, .galleryNavigation",
    "elementsToEmpty":"script:not([src])",
    "removeFromContainer":"#photo_comments, #article_comments, #col_right, #gazeta_article_miniatures, .holder_bottom, .nextSlideWrapper",
    "placeholderSelector":"#columns_wrap",
    "itemSelector":"#content_wrap",
    "customStyles":{
      "#article_comments":"float:left"
    }
  },
  {
    "name":"gwiazdy wp.pl wrzesien 2015",
    "trigger":"main.main--wide-col .main_article_container article.galery .galery--controls .galery--controls-next",
    "antiTrigger":"",
    "nextSelector":"article.galery .galery--controls .galery--controls-next",
    "removeFromPage":".galery--controls, .article--next-wrapper",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"article",
    "itemSelector":"article",
    "customStyles":{

    }
  },
  {
    "name":"Dziennik Wschodni",
    "trigger":"#galeria.single_gallery_photo .gallery_main_photo .photo_story_navigation .next_photo",
    "antiTrigger":"",
    "nextSelector":"#galeria.single_gallery_photo .gallery_main_photo .photo_story_navigation .next_photo",
    "removeFromPage":".thumbnail_section, .photo_story_navigation, .box-separator",
    "elementsToEmpty":"",
    "removeFromContainer":"script, .photo_story_navigation",
    "placeholderSelector":".thumbnail_section:last",
    "itemSelector":"#galeria",
    "customStyles":{

    }
  },
  {
    "name":"bezuzyteczna.pl",
    "trigger":"html.bezuzyteczna_pl #content-nav a.next_image",
    "antiTrigger":"",
    "nextSelector":"#content-nav a.next_image",
    "removeFromPage":"#content-nav, section.thumbs",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"section.entry_gallery",
    "itemSelector":"section.entry_gallery",
    "customStyles":{

    }
  },
  {
    "name":"",
    "trigger":"#p_box .p_box_nav_b3 .pop_nav_font",
    "antiTrigger":"",
    "nextSelector":"#p_box .p_box_nav_b3 .pop_nav_font",
    "removeFromPage":"#p_box_nav .p_box_nav_b3, #p_box_nav .p_box_nav_b1",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"#p_box",
    "itemSelector":"#p_box",
    "customStyles":{

    }
  },
  {
    "name":"http://sportowefakty.wp.pl/",
    "trigger":"WORK IN PROGRESS article .article__navbutton--next",
    "antiTrigger":"",
    "nextSelector":"article nav.article__innernav a.article__navbutton.article__navbutton--next:first-child",
    "removeFromPage":".article__innernav",
    "elementsToEmpty":"",
    "removeFromContainer":"script, #Skomentuj, address.articletags, address.indicator, h1.title, .liketag, .articleteasers, div.brick.tabs.tabs--social",
    "placeholderSelector":"article",
    "itemSelector":"article",
    "customStyles":{

    }
  },
  {
    "name":"wyborcza.pl 2017 duza galeria",
    "trigger":"body#photostory header#art-header #gazeta_article_image_new img",
    "antiTrigger":"",
    "nextSelector":"header#art-header a.photostoryNextPage",
    "removeFromPage":".photostoryNavigation, #gazeta_article_miniatures, section.ads",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"header#art-header",
    "itemSelector":"header#art-header",
    "customStyles":{

    }
  },
  {
    "name":"wyborcza.pl nowa slick kwadratowa",
    "trigger":"body#pagetype_photo section.article-and-social .galleryNavigation a.galleryNextPage",
    "antiTrigger":"",
    "nextSelector":"section.article-and-social .galleryNavigation a.galleryNextPage",
    "removeFromPage":".galleryNavigation, #gazeta_article_miniatures",
    "elementsToEmpty":"",
    "removeFromContainer":"script, div.social",
    "placeholderSelector":"#article_body",
    "itemSelector":"section.article-and-social",
    "customStyles":{
      "article.mod_comments":"float:left"
    }
  },
  {
    "name":"tech.wp.pl",
    "trigger":"html.fonts-loaded-plain article.gallery a[data-st-area=gallery-next]",
    "antiTrigger":"",
    "nextSelector":"a[data-st-area=gallery-next]",
    "removeFromPage":"*[data-st-area=gbot-next], a[data-st-area*='gallery']",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"article",
    "itemSelector":"article",
    "customStyles":{

    }
  },
  {
    "name":"national geographic",
    "trigger":"body > div.container .content .row div.gallery-media #gallery-thumbnails",
    "antiTrigger":"",
    "nextSelector":"#next-item",
    "removeFromPage":"#gallery-thumbnails, a.next.btn.btn-fix.next-fix, #next-item",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":".gallery-media",
    "itemSelector":".gallery-media",
    "customStyles":{

    }
  },
  {
    "name":"wyborcza.pl 2017 duza galeria 2",
    "trigger":"body#photostory.classicPhotostory section.article-and-social > #gazeta_article_image_new img",
    "antiTrigger":"",
    "nextSelector":"header#art-header a.photostoryNextPage",
    "removeFromPage":".photostoryNavigation, #gazeta_article_miniatures, div.social, .nextSlideWrapper, section.ads",
    "elementsToEmpty":"",
    "removeFromContainer":"script",
    "placeholderSelector":"main.content.container-inner",
    "itemSelector":"main.content.container-inner",
    "customStyles":{

    }
  }
];
