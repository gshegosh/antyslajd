// below are slightly modified GPL rules from legacy Eliminator Slajdów extension - 
// see https://github.com/maestr0/eliminator-slajdow/blob/master/common/js/eliminator-slajdow-common.js
const rules = [
  {
    "selector": "body#pagetype_photo",
    "antiSelector": "body#pagetype_photo.simpleGallery #gazeta_gallery_popup .gs_navigation .gs_next, .photostoryNavigation .photostoryNextPage",
    "name": "galeria #pagetype_photo (1)"
  },
  {
    "selector": "body#pagetype_art_blog",
    "name": "galeria #pagetype_art_blog (2)",
    "container": "#gazeta_article_image img,#gazeta_article_body, div[id*='gazeta_article_image_']:not('#gazeta_article_image_overlay')"
  },
  {
    "selector": "body#pagetype_art #gazeta_article_tools",
    "name": "galeria body#pagetype_art #gazeta_article_image (3)",
    "container": "#gazeta_article_image,#gazeta_article_body, div[id*='gazeta_article_image_']:not('#gazeta_article_image_overlay')"
  },
  {
    "selector": "div#art div#container_gal",
    "name": "gazetapraca.pl ",
    "nextSelector": "#gal_btn_next a:first-child",
    "container": "div#container_gal"
  },
  {
    "selector": "div#article div#article_body",
    "name": "galeria div#article div#article_body (5)",
    "nextSelector": "#gal_btn_next a:first-child",
    "container": "div#container_gal"
  },
  {
    "selector": "div#k1 div#k1p div#gal_outer",
    "name": "galeria bez typu ('div#k1 div#k1p div#gal_outer') (6)",
    "nextSelector": "li.btn_next a:first-child",
    "container": "div#gal_picture, div.description, p.description"
  },
  {
    "selector": "div.PopupWielkosc div.ZdjecieGaleriaMaxWielkosc",
    "name": "autotrader.pl - galeria zdjec samochodu - 2013",
    "nextSelector": "div:not(.ZjecieZaznaczone).ZdjecieGaleriaMini a",
    "container": "div.ZdjecieGaleriaMaxWielkosc"
  },
  {
    "selector": " #multiGallery #multiGalleryContent #gallery",
    "name": "MultiGallery na ONET.PL",
    "nextSelector": ".navBox .navBoxContainer a.nextFixed",
    "container": "#multiGalleryContent #galleryText",
    "antiSelector": "#multiGallery #multiGalleryContent #gallery .mainMediaImg img.after"
  },
  {
    "selector": "div#page div#pageWrapper div#photo div#photoContainer div.nav a",
    "name": "Galeria MediaRegionalne ",
    "nextSelector": "p#photoNavigation a#photoNavigationNext",
    "container": "div#photo"
  },
  {
    "selector": "div#page div#pageWrapper div#article.photostory p.photoNavigation a.photoNavigationNext",
    "name": "Galeria MediaRegionalne - artykul",
    "nextSelector": "p.photoNavigation a.photoNavigationNext",
    "container": "div#article div.intextAd"
  },
  {
    "selector": "div#main-column div#photo.common-box div.inner div.photo-item div.photoElem a.next",
    "name": "Galeria MojeMiasto",
    "nextSelector": "div#main-column div#photo.common-box div.inner div.photo-item div.photoElem a.next",
    "container": "div.photo-item"
  },
  {
    "selector": "#content_wrap .photostoryNavigation .photostoryNextPage",
    "antiSelector": "body#pagetype_index .mod_suwakiRwd",
    "name": "galeria #pagetype_art .photostoryNextPage NOWA GALERIA GAZETY (12)",
    "container": "#content_wrap",
    "removeFromContainer": "#photo_comments, #article_comments, #col_right",
    "nextSelector": "div#content .photostoryNavigation .photostoryNextPage"
  },
  {
    "selector": "div#page div#pageWrapper div#photo p#photoNavigation a#photoNavigationNext",
    "name": "MediaRegionalne 1",
    "nextSelector": "p#photoNavigation a#photoNavigationNext",
    "container": "div#photo img, div#photo p:nth-child(7)"
  },
  {
    "selector": "div#wrapper > div > div#photo p#galleryNav a#galleryNavNext",
    "name": "MediaRegionalne 2",
    "nextSelector": "p#galleryNav a#galleryNavNext",
    "container": "div#photo img, #photo p:first-child"
  },
  {
    "selector": "div#LeftContent div#MainGallery img#PhotoInMainGallery",
    "name": "Autotrader Legacy",
    "nextSelector": "div:not(.ZjecieZaznaczone).ZdjecieGaleriaMini a",
    "container": "div.ZdjecieGaleriaMaxWielkosc"
  },
  {
    "selector": "div#bxGaleria div.podpisDuzaFotka div.przewijakZdjec div.slider",
    "name": "Wiadomosci Wp.pl",
    "nextSelector": "div#bxGaleriaOpis a.stgGaleriaNext",
    "container": "div.bxGaleria div.kol2",
    "removeFromContainer": "script"
  },
  {
    "selector": "div#stgGaleria div.stgGaleriaCnt .stgGaleriaNext",
    "name": "Facet wp.pl",
    "nextSelector": "div#stgGaleria a.stgGaleriaNext",
    "container": "#stgGaleria",
    "removeFromContainer": "script"
  },
  {
    "selector": "div#stgMain article.stampGaleria div.stampBxNaglowek div.stampStronicowanie div.pIndex a.pNext",
    "name": "Finanse wp.pl",
    "nextSelector": "div.stampStronicowanie div.pIndex a.pNext",
    "container": "article.stampGaleria div.articleRow",
    "removeFromContainer": "script, .stampBxStopka"
  },
  {
    "selector": "div#content div#largepic_wrapper div#largepic",
    "name": "kwejk.pl",
    "nextSelector": "div#largepic_wrapper a.next_image",
    "container": "div#content div.content",
    "removeFromContainer": ".image_carousel, script, style, div.share"
  },
  {
    "selector": "body#strona-artykulu div#glowna-kolumna div#galeria-material-zdjecie",
    "name": "gazetawroclawska.pl",
    "nextSelector": "#galeria-nastepne-2",
    "container": "#galeria-material",
    "removeFromContainer": "script, #miniatury-kontener, #galeria-poprzednie-2, #galeria-nastepne-2, .iloscZdjec"
  },
  {
    "selector": "div#main_container div.demotivator.pic #royalSliderExtraNavigation a.navigate_right",
    "name": "demotywatory.pl",
    "nextSelector": "#royalSliderExtraNavigation a.navigate_right",
    "container": ".demotivator .demot_pic .rsSlideContent",
    "removeFromContainer": "script, .share-widgets"
  },
  {
    "selector": "body#Fakt .pageContent .leftColumn .paginaHolder .paginator.panigaGalery",
    "name": "fakt.pl",
    "nextSelector": ".pageContent .leftColumn .paginaHolder .paginator.panigaGalery a.next",
    "container": "#bigPicture",
    "removeFromContainer": "script"
  },
  {
    "selector": "body#loneGallery #bigPicture",
    "name": "fakt.pl nowa",
    "nextSelector": "#imgHolder .paginator .next",
    "container": "#bigPicture, .rightColumn",
    "removeFromContainer": "script, .nrFoto, .socialButtons, .Region"
  },
  {
    "selector": ".glownyKontener #material-artykul .galeriaArtykulowa #material-galeria-nastepne",
    "name": "naszemiasto.pl",
    "nextSelector": "#material-galeria-nastepne",
    "container": ".galeriaArtykul",
    "removeFromContainer": "script"
  },
  {
    "selector": ".glownyKontener .trescOpisu .paginacja #material-galeria-nastepne",
    "name": "naszemiasto.pl szeroka",
    "nextSelector": "#material-galeria-nastepne",
    "container": "#galeria-z-opisem",
    "removeFromContainer": "script"
  },
  {
    "selector": "div#page article.single-article .gallery .paging .next",
    "name": "wawalove.pl",
    "nextSelector": "article.single-article .gallery .paging .next",
    "container": ".see-big",
    "removeFromContainer": "script"
  },
  {
    "selector": "div#page div#main div.article-slideshow .article-matter .slideshow-wrapper",
    "name": "sfora.pl",
    "nextSelector": ".article-matter .slideshow-next:first-child",
    "container": ".slideshow-controls .slideshow-title, .slideshow-wrapper",
    "removeFromContainer": "script"
  },
  {
    "selector": "div#page div#main div.article-gallery .article-matter .gallery-content .gallery-img-big",
    "name": "sfora.pl nowa",
    "nextSelector": ".gallery-img-big .next:first-child",
    "container": ".article-matter",
    "removeFromContainer": "script"
  },
  {
    "selector": ".page .main-content .article--gallery .gallery .gallery__content .gallery__image-wrapper .next-btn",
    "name": "biztok.pl",
    "nextSelector": ".gallery__image-wrapper .next-btn",
    "container": ".gallery__content",
    "removeFromContainer": "script, .social-box"
  },
  {
    "selector": "#ks_doc #ks_bd_left_col #ks_simple_pagging",
    "name": "komputerswiat.pl",
    "nextSelector": "#gallery_image a.next",
    "container": "#ks_bd_cols",
    "removeFromContainer": "#comments, script, .Nextclick_Widget_Container, #comment_form, #ks_bd_right_col div.next, #gallery_image .next, #gallery_image .prev"
  },
  {
    "selector": "body#screening #mainContainer #gallery .gallery_body .gallery_photo_desc_right",
    "name": "dziennik.pl",
    "nextSelector": ".gallery_photo_desc_right .nastepne:first-child",
    "container": ".gallery_body",
    "removeFromContainer": "script"
  },
  {
    "selector": "#miejsce2 .galeriaBig.forsalOnly .photoBg .next",
    "name": "forsal.pl",
    "nextSelector": ".galeriaBig.forsalOnly .photoBg .next",
    "container": ".tpl_sgp_galeria_artykulowa",
    "removeFromContainer": "script, .dateArt, .leadArt, .lead, .galeriaBig.forsalOnly > h2"
  },
  {
    "selector": "#pagewrap article.imgGalleryArt #ARTICLE_GALLERY_BOTTOM_1",
    "name": "przegladsportowy.pl",
    "container": ".leftColumn, .rightColumn",
    "nextSelector": ".paginator a.next:first-child",
    "removeFromContainer": "script, #ARTICLE_GALLERY_RIGHT_COLUMN_1, #ARTICLE_GALLERY_BOTTOM_1, .socialButtons"
  },
  {
    "selector": ".site .columns.columns-outer-double .box-gallery .gallery-image .gallery-controlls .gallery-image-zoom",
    "name": "sportowefakty.pl",
    "container": "#photo-start",
    "nextSelector": ".gallery-image-next:first-child",
    "removeFromContainer": "script"
  },
  {
    "selector": "#page_wrap #page #content #content-inner .box-inner .img-cnt-wrap .news-content",
    "name": "bebzol.com",
    "container": ".img-cnt-wrap",
    "nextSelector": "#handle-next:not(.next-gal):first-child",
    "removeFromContainer": "script, .like-bar, .bbz-cm-box"
  },
  {
    "selector": "#main .container #left_column #article .article-photo .photo-next-link",
    "name": "lovekrakow.pl",
    "container": "#left_column, #right_column",
    "nextSelector": ".article-photo .photo-next-link:first-child",
    "removeFromContainer": "script, .comments, h1.title"
  },
  {
    "selector": "div#doc #body #trunk #main .k_galleryLarge .k_pagination",
    "name": "biznes.pl",
    "container": ".k_gallery",
    "nextSelector": ".k_pagination .k_next a:first-child",
    "removeFromContainer": "script"
  },
  {
    "selector": "#gallery > div.content > div.flesh > div.main_img > div.big_img > div.fullscreen > div > img",
    "name": "urzadzamy.pl i se.pl",
    "container": ".flesh",
    "nextSelector": "div.content > div.main_nav > div.go.next > a",
    "removeFromContainer": "script"
  },
  {
    "selector": "div.all div#page #item > div.item-content > a.arrow-next-big",
    "name": "pudelekx.pl",
    "container": "#item",
    "nextSelector": "div.item-content > a.arrow-next-big",
    "removeFromContainer": "script, .tags, .item-options, .left"
  },
  {
    "selector": "#wrap #article article.single-entry #photo-gallery .inner a.next",
    "name": "snobka.pl",
    "container": "#photo-gallery",
    "nextSelector": ".inner a:first-child.next",
    "removeFromContainer": "script"
  },
  {
    "selector": "body#pagetype_photo.simpleGallery #gazeta_gallery_popup .gs_navigation .gs_next",
    "name": "gazeta pl nowa galeria czarna",
    "container": ".gs_image_cointainer",
    "nextSelector": ".gs_navigation .gs_next:first-child",
    "removeFromContainer": "script"
  },
  {
    "selector": "div.wrap div.main div.article__content div.gallery div.gallery__image-big a.next",
    "name": "http://www.fly4free.pl/",
    "container": "div.gallery",
    "nextSelector": "div.gallery__image-big a.next",
    "removeFromContainer": "script"
  },
  {
    "selector": "#stgMain .stampFototematRow .stampStronicowanieFototematu .stampStronicowanieFototematuContent .stampStronicowanieFototematuIndex",
    "name": "wp.pl galeria pozioma 1",
    "container": ".stampFototemat",
    "nextSelector": ".stampStronicowanieFototematuContent a.stampStronicowanieFototematuNxt:first-child",
    "removeFromContainer": "script, .pPaginSmall"
  },
  {
    "selector": "#page_wrapper #container #main .article-wraper .article-body .post-pages a.next-page.button",
    "name": "gadzetomania",
    "container": ".article-body",
    "nextSelector": ".article-body .post-pages a.next-page.button:first-child",
    "removeFromContainer": "script"
  },
  {
    "selector": "#main-wrap div#body .section-subcontent .photo-wrap a#next_link",
    "name": "trojmiasto.pl",
    "container": "#foto",
    "nextSelector": ".photo-wrap a#next_link",
    "removeFromContainer": "script"
  },
  {
    "selector": "body ul.k_controls .k_next, #photoZoom #imgNav",
    "name": "onet pozioma galeria",
    "container": "#main .kopyto:first-child, #sTop .kopyto:first-child, #cLeft .kopyto:first-child",
    "nextSelector": "li.k_next a:first-child",
    "removeFromContainer": "script"
  },
  {
    "selector": "div#page div#main-content #content-region .node-article-image .navigation-links a.next",
    "antiSelector": "",
    "name": "regiomoto",
    "container": "#content-region .node-article-image",
    "nextSelector": ".navigation-links a.next",
    "removeFromContainer": "script"
  },
  {
    "selector": "div#page div#main div.slideshow-header .slideshow-paging .slideshow-next",
    "name": "sportfan.pl",
    "nextSelector": ".slideshow-paging .slideshow-next:first-child",
    "container": ".slideshow:first-child, .slideshow-old:first-child",
    "removeFromContainer": "script"
  },
  {
    "selector": "#main > div.article > div.gallery-booth > div.gallery-big > a.gallery-next",
    "antiSelector": "",
    "name": "sportfan plaska",
    "container": "div.gallery-booth",
    "nextSelector": "div.gallery-big > a.ir.gallery-next",
    "removeFromContainer": "script"
  },
  {
    "selector": "body#Forbes #Page-Wrap .Block-Node a.Next",
    "antiSelector": "",
    "name": "forbes.pl",
    "container": "#Column-Wrap",
    "nextSelector": "#Column-Wrap .Block-Node a.Next",
    "removeFromContainer": "script, .backlink, #ARTICLE_RELATED_GALLERY_BOTTOM, .socialLine"
  },
  {
    "selector": "div#root div#content section#articles #zdjecie.right .navigation a.next",
    "antiSelector": "",
    "name": "geekweek.pl",
    "container": "#zdjecie",
    "nextSelector": ".navigation a.next:first-child",
    "removeFromContainer": "script"
  },
  {
    "selector": "#galeria-warstwa > div.boxPozycja.galeriaNaw > div #material-galeria-nastepne.btnNastepny",
    "antiSelector": "",
    "name": "naszemiasto.pl w overlay",
    "container": "#galeria-warstwa",
    "nextSelector": "link[rel=next]",
    "removeFromContainer": "script"
  },
  {
    "selector": "#content #contents .content .media.full .jcarousel-wrapper",
    "antiSelector": "",
    "name": "nowy kwejk styczen 2015",
    "container": "div.media.full > div.object div.self, div.media.full > div.object section.large",
    "nextSelector": "#contents div.media.full div.object a.next",
    "removeFromContainer": "script, .media.ad"
  },
  {
    "selector": "#stgMain #bxGaleria > div.content > div.picCol > div.bigPic > a",
    "antiSelector": "",
    "name": "WP tech sierpien 2014",
    "container": "#bxGaleria .content",
    "nextSelector": ".navPic .stgGaleriaNext:first-child",
    "removeFromContainer": "script"
  },
  {
    "selector": "#wpMain div.bxCenterMain div.bxCont div.fotkaBx h1.galeria",
    "antiSelector": "",
    "name": "nocoty.pl",
    "container": ".bxCenterMain",
    "nextSelector": "a.stgGaleriaNext:first-child",
    "removeFromContainer": "script, #stgOpinie, div.bxCenterMain div.galeriaZdjecieBx:eq(1)"
  },
  {
    "selector": "body.galleryblack #galleryImg > div.paginfixed > div > span.nextbox > a",
    "antiSelector": "",
    "name": "newsweek.pl",
    "container": ".imgGalleryArt",
    "nextSelector": "div.paginfixed > div > span.nextbox > a:first-child",
    "removeFromContainer": "script, .moregallery"
  },
  {
    "selector": "#wpMain  #wpCenter #galleryB div.pages span a",
    "antiSelector": ".photo .vdoPly",
    "name": "film.wp.pl",
    "container": "#galleryB",
    "nextSelector": "#galleryB div.pages span:last a",
    "removeFromContainer": "script"
  },
  {
    "selector": "body div.columns.columns-outer-double article.paggedArticle figure.article-image div.gallery-controlls a.gallery-image-next",
    "name": "sportowefakty.pl artykul",
    "container": "article.paggedArticle",
    "nextSelector": "article > figure > div > a.gallery-image-next",
    "removeFromContainer": "script, .article-header, .article-footer, .contentpoll"
  },
  {
    "selector": "#wrapper #article.photostory a.photoNavigationNext, #photoContainer div.nav a.next",
    "antiSelector": "",
    "name": "nowiny24 nowa galeria",
    "container": "#article.photostory",
    "nextSelector": ".photoNavigation a.photoNavigationNext:first-child",
    "removeFromContainer": "script"
  },
  {
    "selector": "div.main-content div.article--slideshow div.slideshow div.slideshow__header div.slidshow__nav a.button-next",
    "antiSelector": "",
    "name": "biztok",
    "container": "div.slideshow",
    "nextSelector": "div.slideshow__header div.slidshow__nav a.button-next:first-child",
    "removeFromContainer": "script"
  },
  {
    "selector": "#stgMain .bxGaleriaPoj .stronicowanie .stgGaleriaNext.next:first-child",
    "antiSelector": "",
    "name": "sport wp pl galeria pozioma 2",
    "container": ".bxGaleriaPoj",
    "nextSelector": ".stronicowanie .stgGaleriaNext:first-child",
    "removeFromContainer": "script"
  },
  {
    "selector": "#all #page #slideshow-header .slideshow-paging a.slideshow-next",
    "antiSelector": "",
    "name": "wawalove.pl - pozioma",
    "container": "div.content",
    "nextSelector": ".slideshow-paging a.slideshow-next:first-child",
    "removeFromContainer": "script"
  },
  {
    "selector": ".bx-galeria .bx-content #galleryNaviSide a.next",
    "antiSelector": "",
    "name": "wp.pl - pozioma",
    "container": "div.bx-content",
    "nextSelector": "#galleryNaviSide a.next",
    "removeFromContainer": "script"
  },
  {
    "selector": "#allContentArea #webMainContent .wideColumn #galeriaFoto a.fotkiNavigationBig-next",
    "antiSelector": "",
    "name": "zdrowie.wp.pl stary layout",
    "container": "#galeriaFoto",
    "nextSelector": ".fotkiNavigation a.next:first-child",
    "removeFromContainer": "script"
  },
  {
    "selector": "#doc #contentSection section#sectionmain article.gallery_detal div.gallery_detal div.next a.btn",
    "antiSelector": "",
    "name": "gotowanie.onet.pl nowy layout 2014 listopad",
    "container": "article.gallery_detal",
    "nextSelector": "div.gallery_detal div.next a.btn",
    "removeFromContainer": "script"
  },
  {
    "selector": "body#gallery #gallery_container #gallery_pagging .numbers a.next_small",
    "antiSelector": "",
    "name": "komputerswiat.pl listopad 2014",
    "container": "#gallery_container",
    "nextSelector": ".next_small:first-child",
    "removeFromContainer": "script, #comments, #comment_form, .ft, #social_buttons_box"
  },
  {
    "selector": "body#boks-galeria .kontener #glowna-kolumna section a.nastepne",
    "antiSelector": "",
    "name": "gazetawroclawska.pl grudzien 2014",
    "container": "#glowna-kolumna",
    "nextSelector": "#glowna-kolumna section a.nastepne",
    "removeFromContainer": "script"
  },
  {
    "selector": "#page #main  #content-region div.content-wrapper div.photo a.nav-photo.nav-right",
    "antiSelector": "",
    "name": "MojeMiasto grudzien 2014",
    "container": ".node-photogallery-photo div.photo:first-child",
    "nextSelector": "#photo a.right",
    "removeFromContainer": "script"
  },
  {
    "selector": ".content.content-slideshow .single-entry #slideshow-contener .slideshow-paging a.slideshow-next",
    "antiSelector": "",
    "name": "pudelek.pl",
    "container": "#slideshow-contener",
    "nextSelector": "#slideshow-contener .slideshow-paging a.slideshow-next:first-child",
    "removeFromContainer": "script"
  },
  {
    "selector": " .glassInternal .glassContent.galleryContent",
    "antiSelector": ".galleryContent .gallerySlide[data-type=video]",
    "name": "onet slideshow 2015",
    "container": "",
    "nextSelector": "",
    "removeFromContainer": "script"
  },
  {
    "selector": "div#wrap .article-slideshow article.slideshow div.slideshow-controls .slideshow-paging .slideshow-next",
    "antiSelector": "",
    "name": "Snobka 2015",
    "container": ".slideshow",
    "nextSelector": "div.slideshow-controls .slideshow-paging .slideshow-next",
    "removeFromContainer": "script, .slideshow-controls, .slideshow-paging"
  },
  {
    "selector": "#galeria-warstwa > div.boxPozycja.galeriaNaw > #material-galeria-nastepne.btnNastepny",
    "antiSelector": "",
    "name": "naszemiasto.pl w overlay 2015",
    "container": "#galeria-warstwa",
    "nextSelector": " #material-galeria-nastepne.btnNastepny",
    "removeFromContainer": "script"
  },
  {
    "selector": "body > div > div.galleryWrapper > div > button.slick-next",
    "antiSelector": "",
    "name": "Fakt 2015 slick",
    "container": "",
    "nextSelector": "",
    "removeFromContainer": "script"
  },
  {
    "selector": ".articlepage .page-wrap .ggallery-slider-box #ggallery-slider",
    "antiSelector": "",
    "name": "Dziennik PL 2015",
    "container": ".widget-box",
    "nextSelector": "link[rel='next prefetch']",
    "removeFromContainer": "script"
  },
  {
    "selector": "#stgMain .stgInner .picNav .stampGlowneFoto span.stampGlowneFotoMain a.next",
    "antiSelector": "",
    "name": "Wp.pl 2015",
    "container": ".stampGlowneFoto ,#stgCol300",
    "nextSelector": "span.stampGlowneFotoMain a.next",
    "removeFromContainer": "script, .stampGlowneFotoMain a.arr, .minGal"
  },
  {
    "selector": "nav.slideTop .photostoryNavigation .photostoryNextPage",
    "name": "galeria #pagetype_art .photostoryNextPage NOWA GALERIA GAZETY (Wrzesien 2015)",
    "container": "#content_wrap",
    "removeFromContainer": "#photo_comments, #article_comments, #col_right",
    "nextSelector": "nav.slideTop .photostoryNavigation .photostoryNextPage"
  },
  {
    "selector": "main.main--wide-col .main_article_container article.galery .galery--controls .galery--controls-next",
    "antiSelector": "",
    "name": "gwiazdy wp.pl wrzesien 2015",
    "container": "article",
    "nextSelector": "article.galery .galery--controls .galery--controls-next",
    "removeFromContainer": "script"
  },
  {
    "selector": "#galeria.single_gallery_photo .gallery_main_photo .photo_story_navigation .next_photo",
    "antiSelector": "",
    "name": "Dziennik Wschodni",
    "container": "#galeria",
    "nextSelector": "#galeria.single_gallery_photo .gallery_main_photo .photo_story_navigation .next_photo",
    "removeFromContainer": "script, .photo_story_navigation"
  },
  {
    "selector": "html.bezuzyteczna_pl #content-nav a.next_image",
    "antiSelector": "",
    "name": "bezuzyteczna.pl",
    "container": "section.entry_gallery",
    "nextSelector": "#content-nav a.next_image",
    "removeFromContainer": "script"
  },
  {
    "selector": "#p_box .p_box_nav_b3 .pop_nav_font",
    "antiSelector": "",
    "name": "",
    "container": "#p_box",
    "nextSelector": "#p_box .p_box_nav_b3 .pop_nav_font",
    "removeFromContainer": "script"
  },
  {
    "selector": "WORK IN PROGRESS article .article__navbutton--next",
    "antiSelector": "",
    "name": "http://sportowefakty.wp.pl/",
    "container": "article",
    "nextSelector": "article nav.article__innernav a.article__navbutton.article__navbutton--next:first-child",
    "removeFromContainer": "script, #Skomentuj, address.articletags, address.indicator, h1.title, .liketag, .articleteasers, div.brick.tabs.tabs--social"
  },
  {
    "selector": "body#photostory header#art-header #gazeta_article_image_new img",
    "antiSelector": "",
    "name": "wyborcza.pl 2017 duza galeria",
    "container": "header#art-header",
    "nextSelector": "header#art-header a.photostoryNextPage",
    "removeFromContainer": "script"
  },
  {
    "selector": "body#pagetype_photo section.article-and-social .galleryNavigation a.galleryNextPage",
    "antiSelector": "",
    "name": "wyborcza.pl nowa slick kwadratowa",
    "container": "section.article-and-social",
    "nextSelector": "section.article-and-social .galleryNavigation a.galleryNextPage",
    "removeFromContainer": "script, div.social"
  },
  {
    "selector": "html.fonts-loaded-plain article.gallery a[data-st-area=gallery-next]",
    "antiSelector": "",
    "name": "tech.wp.pl",
    "container": "article",
    "nextSelector": "a[data-st-area=gallery-next]",
    "removeFromContainer": "script"
  },
  {
    "selector": "body > div.container .content .row div.gallery-media #gallery-thumbnails",
    "antiSelector": "",
    "name": "national geographic",
    "container": ".gallery-media",
    "nextSelector": "#next-item",
    "removeFromContainer": "script"
  },
  {
    "selector": "body#photostory.classicPhotostory section.article-and-social > #gazeta_article_image_new img",
    "antiSelector": "",
    "name": "wyborcza.pl 2017 duza galeria 2",
    "container": "main.content.container-inner",
    "nextSelector": "header#art-header a.photostoryNextPage",
    "removeFromContainer": "script"
  }
];
