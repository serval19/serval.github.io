<!DOCTYPE html>
<html class="client-nojs vector-feature-language-in-header-enabled vector-feature-language-in-main-page-header-disabled vector-feature-sticky-header-disabled vector-feature-page-tools-pinned-disabled vector-feature-toc-pinned-clientpref-1 vector-feature-main-menu-pinned-disabled vector-feature-limited-width-clientpref-1 vector-feature-limited-width-content-enabled vector-feature-custom-font-size-clientpref-1 vector-feature-appearance-enabled vector-feature-appearance-pinned-clientpref-1 vector-feature-night-mode-enabled skin-theme-clientpref-day vector-toc-available" lang="en" dir="ltr">
<head>
<meta charset="UTF-8">
<title>asm.js - Wikipedia</title>
<script>(function(){var className="client-js vector-feature-language-in-header-enabled vector-feature-language-in-main-page-header-disabled vector-feature-sticky-header-disabled vector-feature-page-tools-pinned-disabled vector-feature-toc-pinned-clientpref-1 vector-feature-main-menu-pinned-disabled vector-feature-limited-width-clientpref-1 vector-feature-limited-width-content-enabled vector-feature-custom-font-size-clientpref-1 vector-feature-appearance-enabled vector-feature-appearance-pinned-clientpref-1 vector-feature-night-mode-enabled skin-theme-clientpref-day vector-toc-available";var cookie=document.cookie.match(/(?:^|; )enwikimwclientpreferences=([^;]+)/);if(cookie){cookie[1].split('%2C').forEach(function(pref){className=className.replace(new RegExp('(^| )'+pref.replace(/-clientpref-\w+$|[^\w-]+/g,'')+'-clientpref-\\w+( |$)'),'$1'+pref+'$2');});}document.documentElement.className=className;}());RLCONF={"wgBreakFrames":false,"wgSeparatorTransformTable":["",""],"wgDigitTransformTable":[
"",""],"wgDefaultDateFormat":"dmy","wgMonthNames":["","January","February","March","April","May","June","July","August","September","October","November","December"],"wgRequestId":"d0e67095-765e-448e-ac1e-c1ea728674b7","wgCanonicalNamespace":"","wgCanonicalSpecialPageName":false,"wgNamespaceNumber":0,"wgPageName":"Asm.js","wgTitle":"Asm.js","wgCurRevisionId":1230470162,"wgRevisionId":1230470162,"wgArticleId":38962533,"wgIsArticle":true,"wgIsRedirect":false,"wgAction":"view","wgUserName":null,"wgUserGroups":["*"],"wgCategories":["Articles with short description","Short description matches Wikidata","Articles needing additional references from March 2015","All articles needing additional references","All articles with unsourced statements","Articles with unsourced statements from October 2014","Articles lacking reliable references from March 2015","All articles lacking reliable references","Articles with example C code","JavaScript","Mozilla","Web programming"],"wgPageViewLanguage":"en",
"wgPageContentLanguage":"en","wgPageContentModel":"wikitext","wgRelevantPageName":"Asm.js","wgRelevantArticleId":38962533,"wgIsProbablyEditable":true,"wgRelevantPageIsProbablyEditable":true,"wgRestrictionEdit":[],"wgRestrictionMove":[],"wgNoticeProject":"wikipedia","wgCiteReferencePreviewsActive":false,"wgFlaggedRevsParams":{"tags":{"status":{"levels":1}}},"wgMediaViewerOnClick":true,"wgMediaViewerEnabledByDefault":true,"wgPopupsFlags":6,"wgVisualEditor":{"pageLanguageCode":"en","pageLanguageDir":"ltr","pageVariantFallbacks":"en"},"wgMFDisplayWikibaseDescriptions":{"search":true,"watchlist":true,"tagline":false,"nearby":true},"wgWMESchemaEditAttemptStepOversample":false,"wgWMEPageLength":20000,"wgULSCurrentAutonym":"English","wgRelatedArticlesCompat":[],"wgCentralAuthMobileDomain":false,"wgEditSubmitButtonLabelPublish":true,"wgULSPosition":"interlanguage","wgULSisCompactLinksEnabled":false,"wgVector2022LanguageInHeader":true,"wgULSisLanguageSelectorEmpty":false,"wgWikibaseItemId":
"Q13496636","wgCheckUserClientHintsHeadersJsApi":["architecture","bitness","brands","fullVersionList","mobile","model","platform","platformVersion"],"GEHomepageSuggestedEditsEnableTopics":true,"wgGETopicsMatchModeEnabled":false,"wgGEStructuredTaskRejectionReasonTextInputEnabled":false,"wgGELevelingUpEnabledForUser":false};RLSTATE={"ext.globalCssJs.user.styles":"ready","site.styles":"ready","user.styles":"ready","ext.globalCssJs.user":"ready","user":"ready","user.options":"loading","ext.cite.styles":"ready","ext.pygments":"ready","skins.vector.search.codex.styles":"ready","skins.vector.styles":"ready","skins.vector.icons":"ready","jquery.makeCollapsible.styles":"ready","ext.wikimediamessages.styles":"ready","ext.visualEditor.desktopArticleTarget.noscript":"ready","ext.uls.interlanguage":"ready","wikibase.client.init":"ready","ext.wikimediaBadges":"ready"};RLPAGEMODULES=["ext.cite.ux-enhancements","site","mediawiki.page.ready","jquery.makeCollapsible","mediawiki.toc","skins.vector.js",
"ext.centralNotice.geoIP","ext.centralNotice.startUp","ext.gadget.ReferenceTooltips","ext.gadget.switcher","ext.urlShortener.toolbar","ext.centralauth.centralautologin","mmv.head","mmv.bootstrap.autostart","ext.popups","ext.visualEditor.desktopArticleTarget.init","ext.visualEditor.targetLoader","ext.echo.centralauth","ext.eventLogging","ext.wikimediaEvents","ext.navigationTiming","ext.uls.interface","ext.cx.eventlogging.campaigns","ext.cx.uls.quick.actions","wikibase.client.vector-2022","ext.checkUser.clientHints","ext.growthExperiments.SuggestedEditSession","wikibase.sidebar.tracking"];</script>
<script>(RLQ=window.RLQ||[]).push(function(){mw.loader.impl(function(){return["user.options@12s5i",function($,jQuery,require,module){mw.user.tokens.set({"patrolToken":"+\\","watchToken":"+\\","csrfToken":"+\\"});
}];});});</script>
<link rel="stylesheet" href="/w/load.php?lang=en&amp;modules=ext.cite.styles%7Cext.pygments%2CwikimediaBadges%7Cext.uls.interlanguage%7Cext.visualEditor.desktopArticleTarget.noscript%7Cext.wikimediamessages.styles%7Cjquery.makeCollapsible.styles%7Cskins.vector.icons%2Cstyles%7Cskins.vector.search.codex.styles%7Cwikibase.client.init&amp;only=styles&amp;skin=vector-2022">
<script async="" src="/w/load.php?lang=en&amp;modules=startup&amp;only=scripts&amp;raw=1&amp;skin=vector-2022"></script>
<meta name="ResourceLoaderDynamicStyles" content="">
<link rel="stylesheet" href="/w/load.php?lang=en&amp;modules=site.styles&amp;only=styles&amp;skin=vector-2022">
<meta name="generator" content="MediaWiki 1.43.0-wmf.18">
<meta name="referrer" content="origin">
<meta name="referrer" content="origin-when-cross-origin">
<meta name="robots" content="max-image-preview:standard">
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=1120">
<meta property="og:title" content="asm.js - Wikipedia">
<meta property="og:type" content="website">
<link rel="preconnect" href="//upload.wikimedia.org">
<link rel="alternate" media="only screen and (max-width: 640px)" href="//en.m.wikipedia.org/wiki/Asm.js">
<link rel="alternate" type="application/x-wiki" title="Edit this page" href="/w/index.php?title=Asm.js&amp;action=edit">
<link rel="apple-touch-icon" href="../static/apple-touch/wikipedia.png">
<link rel="icon" href="../static/favicon/wikipedia.ico">
<link rel="search" type="application/opensearchdescription+xml" href="/w/rest.php/v1/search" title="Wikipedia (en)">
<link rel="EditURI" type="application/rsd+xml" href="//en.wikipedia.org/w/api.php?action=rsd">
<link rel="canonical" href="https://en.wikipedia.org/wiki/Asm.js">
<link rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/deed.en">
<link rel="alternate" type="application/atom+xml" title="Wikipedia Atom feed" href="/w/index.php?title=Special:RecentChanges&amp;feed=atom">
<link rel="dns-prefetch" href="//meta.wikimedia.org" />
<link rel="dns-prefetch" href="//login.wikimedia.org">
</head>
<body class="skin--responsive skin-vector skin-vector-search-vue mediawiki ltr sitedir-ltr mw-hide-empty-elt ns-0 ns-subject mw-editable page-Asm_js rootpage-Asm_js skin-vector-2022 action-view"><a class="mw-jump-link" href="#bodyContent">Jump to content</a>
<div class="vector-header-container">
	<header class="vector-header mw-header">
		<div class="vector-header-start">
			<nav class="vector-main-menu-landmark" aria-label="Site">
				
<div id="vector-main-menu-dropdown" class="vector-dropdown vector-main-menu-dropdown vector-button-flush-left vector-button-flush-right"  >
	<input type="checkbox" id="vector-main-menu-dropdown-checkbox" role="button" aria-haspopup="true" data-event-name="ui.dropdown-vector-main-menu-dropdown" class="vector-dropdown-checkbox "  aria-label="Main menu"  >
	<label id="vector-main-menu-dropdown-label" for="vector-main-menu-dropdown-checkbox" class="vector-dropdown-label cdx-button cdx-button--fake-button cdx-button--fake-button--enabled cdx-button--weight-quiet cdx-button--icon-only " aria-hidden="true"  ><span class="vector-icon mw-ui-icon-menu mw-ui-icon-wikimedia-menu"></span>

<span class="vector-dropdown-label-text">Main menu</span>
	</label>
	<div class="vector-dropdown-content">


				<div id="vector-main-menu-unpinned-container" class="vector-unpinned-container">
		
<div id="vector-main-menu" class="vector-main-menu vector-pinnable-element">
	<div
	class="vector-pinnable-header vector-main-menu-pinnable-header vector-pinnable-header-unpinned"
	data-feature-name="main-menu-pinned"
	data-pinnable-element-id="vector-main-menu"
	data-pinned-container-id="vector-main-menu-pinned-container"
	data-unpinned-container-id="vector-main-menu-unpinned-container"
>
	<div class="vector-pinnable-header-label">Main menu</div>
	<button class="vector-pinnable-header-toggle-button vector-pinnable-header-pin-button" data-event-name="pinnable-header.vector-main-menu.pin">move to sidebar</button>
	<button class="vector-pinnable-header-toggle-button vector-pinnable-header-unpin-button" data-event-name="pinnable-header.vector-main-menu.unpin">hide</button>
</div>

	
<div id="p-navigation" class="vector-menu mw-portlet mw-portlet-navigation"  >
	<div class="vector-menu-heading">
		Navigation
	</div>
	<div class="vector-menu-content">
		
		<ul class="vector-menu-content-list">
			
			<li id="n-mainpage-description" class="mw-list-item"><a href="/wiki/Main_Page" title="Visit the main page [z]" accesskey="z"><span>Main page</span></a></li><li id="n-contents" class="mw-list-item"><a href="/wiki/Wikipedia:Contents" title="Guides to browsing Wikipedia"><span>Contents</span></a></li><li id="n-currentevents" class="mw-list-item"><a href="/wiki/Portal:Current_events" title="Articles related to current events"><span>Current events</span></a></li><li id="n-randompage" class="mw-list-item"><a href="/wiki/Special:Random" title="Visit a randomly selected article [x]" accesskey="x"><span>Random article</span></a></li><li id="n-aboutsite" class="mw-list-item"><a href="/wiki/Wikipedia:About" title="Learn about Wikipedia and how it works"><span>About Wikipedia</span></a></li><li id="n-contactpage" class="mw-list-item"><a href="//en.wikipedia.org/wiki/Wikipedia:Contact_us" title="How to contact Wikipedia"><span>Contact us</span></a></li><li id="n-sitesupport" class="mw-list-item"><a href="https://donate.wikimedia.org/wiki/Special:FundraiserRedirector?utm_source=donate&amp;utm_medium=sidebar&amp;utm_campaign=C13_en.wikipedia.org&amp;uselang=en" title="Support us by donating to the Wikimedia Foundation"><span>Donate</span></a></li>
		</ul>
		
	</div>
</div>

	
	
<div id="p-interaction" class="vector-menu mw-portlet mw-portlet-interaction"  >
	<div class="vector-menu-heading">
		Contribute
	</div>
	<div class="vector-menu-content">
		
		<ul class="vector-menu-content-list">
			
			<li id="n-help" class="mw-list-item"><a href="/wiki/Help:Contents" title="Guidance on how to use and edit Wikipedia"><span>Help</span></a></li><li id="n-introduction" class="mw-list-item"><a href="/wiki/Help:Introduction" title="Learn how to edit Wikipedia"><span>Learn to edit</span></a></li><li id="n-portal" class="mw-list-item"><a href="/wiki/Wikipedia:Community_portal" title="The hub for editors"><span>Community portal</span></a></li><li id="n-recentchanges" class="mw-list-item"><a href="/wiki/Special:RecentChanges" title="A list of recent changes to Wikipedia [r]" accesskey="r"><span>Recent changes</span></a></li><li id="n-upload" class="mw-list-item"><a href="/wiki/Wikipedia:File_upload_wizard" title="Add images or other media for use on Wikipedia"><span>Upload file</span></a></li>
		</ul>
		
	</div>
</div>

</div>

				</div>

	</div>
</div>

		</nav>
			
<a href="/wiki/Main_Page" class="mw-logo">
	<img class="mw-logo-icon" src="../static/images/icons/wikipedia.png" alt="" aria-hidden="true" height="50" width="50">
	<span class="mw-logo-container skin-invert">
		<img class="mw-logo-wordmark" alt="Wikipedia" src="../static/images/mobile/copyright/wikipedia-wordmark-en.svg" style="width: 7.5em; height: 1.125em;">
		<img class="mw-logo-tagline" alt="The Free Encyclopedia" src="../static/images/mobile/copyright/wikipedia-tagline-en.svg" width="117" height="13" style="width: 7.3125em; height: 0.8125em;">
	</span>
</a>

		</div>
		<div class="vector-header-end">
			
<div id="p-search" role="search" class="vector-search-box-vue  vector-search-box-collapses vector-search-box-show-thumbnail vector-search-box-auto-expand-width vector-search-box">
	<a href="/wiki/Special:Search" class="cdx-button cdx-button--fake-button cdx-button--fake-button--enabled cdx-button--weight-quiet cdx-button--icon-only search-toggle" title="Search Wikipedia [f]" accesskey="f"><span class="vector-icon mw-ui-icon-search mw-ui-icon-wikimedia-search"></span>

<span>Search</span>
	</a>
	<div class="vector-typeahead-search-container">
		<div class="cdx-typeahead-search cdx-typeahead-search--show-thumbnail cdx-typeahead-search--auto-expand-width">
			<form action="/w/index.php" id="searchform" class="cdx-search-input cdx-search-input--has-end-button">
				<div id="simpleSearch" class="cdx-search-input__input-wrapper"  data-search-loc="header-moved">
					<div class="cdx-text-input cdx-text-input--has-start-icon">
						<input
							class="cdx-text-input__input"
							 type="search" name="search" placeholder="Search Wikipedia" aria-label="Search Wikipedia" autocapitalize="sentences" title="Search Wikipedia [f]" accesskey="f" id="searchInput"
							>
						<span class="cdx-text-input__icon cdx-text-input__start-icon"></span>
					</div>
					<input type="hidden" name="title" value="Special:Search">
				</div>
				<button class="cdx-button cdx-search-input__end-button">Search</button>
			</form>
		</div>
	</div>
</div>

			<nav class="vector-user-links vector-user-links-wide" aria-label="Personal tools">
	<div class="vector-user-links-main">
	
<div id="p-vector-user-menu-preferences" class="vector-menu mw-portlet emptyPortlet"  >
	<div class="vector-menu-content">
		
		<ul class="vector-menu-content-list">
			
			
		</ul>
		
	</div>
</div>

	
<div id="p-vector-user-menu-userpage" class="vector-menu mw-portlet emptyPortlet"  >
	<div class="vector-menu-content">
		
		<ul class="vector-menu-content-list">
			
			
		</ul>
		
	</div>
</div>

	<nav class="vector-appearance-landmark" aria-label="Appearance">
		
<div id="vector-appearance-dropdown" class="vector-dropdown "  >
	<input type="checkbox" id="vector-appearance-dropdown-checkbox" role="button" aria-haspopup="true" data-event-name="ui.dropdown-vector-appearance-dropdown" class="vector-dropdown-checkbox "  aria-label="Appearance"  >
	<label id="vector-appearance-dropdown-label" for="vector-appearance-dropdown-checkbox" class="vector-dropdown-label cdx-button cdx-button--fake-button cdx-button--fake-button--enabled cdx-button--weight-quiet cdx-button--icon-only " aria-hidden="true"  ><span class="vector-icon mw-ui-icon-appearance mw-ui-icon-wikimedia-appearance"></span>

<span class="vector-dropdown-label-text">Appearance</span>
	</label>
	<div class="vector-dropdown-content">


			<div id="vector-appearance-unpinned-container" class="vector-unpinned-container">
				
			</div>
		
	</div>
</div>

	</nav>
	
<div id="p-vector-user-menu-notifications" class="vector-menu mw-portlet emptyPortlet"  >
	<div class="vector-menu-content">
		
		<ul class="vector-menu-content-list">
			
			
		</ul>
		
	</div>
</div>

	
<div id="p-vector-user-menu-overflow" class="vector-menu mw-portlet"  >
	<div class="vector-menu-content">
		
		<ul class="vector-menu-content-list">
			<li id="pt-createaccount-2" class="user-links-collapsible-item mw-list-item user-links-collapsible-item"><a data-mw="interface" href="/w/index.php?title=Special:CreateAccount&amp;returnto=Asm.js" title="You are encouraged to create an account and log in; however, it is not mandatory" class=""><span>Create account</span></a>
</li>
<li id="pt-login-2" class="user-links-collapsible-item mw-list-item user-links-collapsible-item"><a data-mw="interface" href="/w/index.php?title=Special:UserLogin&amp;returnto=Asm.js" title="You&#039;re encouraged to log in; however, it&#039;s not mandatory. [o]" accesskey="o" class=""><span>Log in</span></a>
</li>

			
		</ul>
		
	</div>
</div>

	</div>
	
<div id="vector-user-links-dropdown" class="vector-dropdown vector-user-menu vector-button-flush-right vector-user-menu-logged-out"  title="Log in and more options" >
	<input type="checkbox" id="vector-user-links-dropdown-checkbox" role="button" aria-haspopup="true" data-event-name="ui.dropdown-vector-user-links-dropdown" class="vector-dropdown-checkbox "  aria-label="Personal tools"  >
	<label id="vector-user-links-dropdown-label" for="vector-user-links-dropdown-checkbox" class="vector-dropdown-label cdx-button cdx-button--fake-button cdx-button--fake-button--enabled cdx-button--weight-quiet cdx-button--icon-only " aria-hidden="true"  ><span class="vector-icon mw-ui-icon-ellipsis mw-ui-icon-wikimedia-ellipsis"></span>

<span class="vector-dropdown-label-text">Personal tools</span>
	</label>
	<div class="vector-dropdown-content">


		
<div id="p-personal" class="vector-menu mw-portlet mw-portlet-personal user-links-collapsible-item"  title="User menu" >
	<div class="vector-menu-content">
		
		<ul class="vector-menu-content-list">
			
			<li id="pt-createaccount" class="user-links-collapsible-item mw-list-item"><a href="/w/index.php?title=Special:CreateAccount&amp;returnto=Asm.js" title="You are encouraged to create an account and log in; however, it is not mandatory"><span class="vector-icon mw-ui-icon-userAdd mw-ui-icon-wikimedia-userAdd"></span> <span>Create account</span></a></li><li id="pt-login" class="user-links-collapsible-item mw-list-item"><a href="/w/index.php?title=Special:UserLogin&amp;returnto=Asm.js" title="You&#039;re encouraged to log in; however, it&#039;s not mandatory. [o]" accesskey="o"><span class="vector-icon mw-ui-icon-logIn mw-ui-icon-wikimedia-logIn"></span> <span>Log in</span></a></li>
		</ul>
		
	</div>
</div>

<div id="p-user-menu-anon-editor" class="vector-menu mw-portlet mw-portlet-user-menu-anon-editor"  >
	<div class="vector-menu-heading">
		Pages for logged out editors <a href="/wiki/Help:Introduction" aria-label="Learn more about editing"><span>learn more</span></a>
	</div>
	<div class="vector-menu-content">
		
		<ul class="vector-menu-content-list">
			
			<li id="pt-anoncontribs" class="mw-list-item"><a href="/wiki/Special:MyContributions" title="A list of edits made from this IP address [y]" accesskey="y"><span>Contributions</span></a></li><li id="pt-anontalk" class="mw-list-item"><a href="/wiki/Special:MyTalk" title="Discussion about edits from this IP address [n]" accesskey="n"><span>Talk</span></a></li>
		</ul>
		
	</div>
</div>

	
	</div>
</div>

</nav>

		</div>
	</header>
</div>
<div class="mw-page-container">
	<div class="mw-page-container-inner">
		<div class="vector-sitenotice-container">
			<div id="siteNotice" class="notheme"><!-- CentralNotice --></div>
		</div>
		<div class="vector-column-start">
			<div class="vector-main-menu-container">
		<div id="mw-navigation">
			<nav id="mw-panel" class="vector-main-menu-landmark" aria-label="Site">
				<div id="vector-main-menu-pinned-container" class="vector-pinned-container">
				
				</div>
		</nav>
		</div>
	</div>
	<div class="vector-sticky-pinned-container">
				<nav id="mw-panel-toc" aria-label="Contents" data-event-name="ui.sidebar-toc" class="mw-table-of-contents-container vector-toc-landmark">
					<div id="vector-toc-pinned-container" class="vector-pinned-container">
					<div id="vector-toc" class="vector-toc vector-pinnable-element">
	<div
	class="vector-pinnable-header vector-toc-pinnable-header vector-pinnable-header-pinned"
	data-feature-name="toc-pinned"
	data-pinnable-element-id="vector-toc"
	
	
>
	<h2 class="vector-pinnable-header-label">Contents</h2>
	<button class="vector-pinnable-header-toggle-button vector-pinnable-header-pin-button" data-event-name="pinnable-header.vector-toc.pin">move to sidebar</button>
	<button class="vector-pinnable-header-toggle-button vector-pinnable-header-unpin-button" data-event-name="pinnable-header.vector-toc.unpin">hide</button>
</div>


	<ul class="vector-toc-contents" id="mw-panel-toc-list">
		<li id="toc-mw-content-text"
			class="vector-toc-list-item vector-toc-level-1">
			<a href="#" class="vector-toc-link">
				<div class="vector-toc-text">(Top)</div>
			</a>
		</li>
		<li id="toc-Design"
		class="vector-toc-list-item vector-toc-level-1 vector-toc-list-item-expanded">
		<a class="vector-toc-link" href="#Design">
			<div class="vector-toc-text">
				<span class="vector-toc-numb">1</span>
				<span>Design</span>
			</div>
		</a>
		
		<ul id="toc-Design-sublist" class="vector-toc-list">
		</ul>
	</li>
	<li id="toc-Code_generation"
		class="vector-toc-list-item vector-toc-level-1 vector-toc-list-item-expanded">
		<a class="vector-toc-link" href="#Code_generation">
			<div class="vector-toc-text">
				<span class="vector-toc-numb">2</span>
				<span>Code generation</span>
			</div>
		</a>
		
		<ul id="toc-Code_generation-sublist" class="vector-toc-list">
		</ul>
	</li>
	<li id="toc-Performance"
		class="vector-toc-list-item vector-toc-level-1 vector-toc-list-item-expanded">
		<a class="vector-toc-link" href="#Performance">
			<div class="vector-toc-text">
				<span class="vector-toc-numb">3</span>
				<span>Performance</span>
			</div>
		</a>
		
		<ul id="toc-Performance-sublist" class="vector-toc-list">
		</ul>
	</li>
	<li id="toc-Implementations"
		class="vector-toc-list-item vector-toc-level-1 vector-toc-list-item-expanded">
		<a class="vector-toc-link" href="#Implementations">
			<div class="vector-toc-text">
				<span class="vector-toc-numb">4</span>
				<span>Implementations</span>
			</div>
		</a>
		
		<ul id="toc-Implementations-sublist" class="vector-toc-list">
		</ul>
	</li>
	<li id="toc-Adoption"
		class="vector-toc-list-item vector-toc-level-1 vector-toc-list-item-expanded">
		<a class="vector-toc-link" href="#Adoption">
			<div class="vector-toc-text">
				<span class="vector-toc-numb">5</span>
				<span>Adoption</span>
			</div>
		</a>
		
			<button aria-controls="toc-Adoption-sublist" class="cdx-button cdx-button--weight-quiet cdx-button--icon-only vector-toc-toggle">
				<span class="vector-icon mw-ui-icon-wikimedia-expand"></span>
				<span>Toggle Adoption subsection</span>
			</button>
		
		<ul id="toc-Adoption-sublist" class="vector-toc-list">
			<li id="toc-Programming_languages"
			class="vector-toc-list-item vector-toc-level-2">
			<a class="vector-toc-link" href="#Programming_languages">
				<div class="vector-toc-text">
					<span class="vector-toc-numb">5.1</span>
					<span>Programming languages</span>
				</div>
			</a>
			
			<ul id="toc-Programming_languages-sublist" class="vector-toc-list">
			</ul>
		</li>
		<li id="toc-Application_frameworks"
			class="vector-toc-list-item vector-toc-level-2">
			<a class="vector-toc-link" href="#Application_frameworks">
				<div class="vector-toc-text">
					<span class="vector-toc-numb">5.2</span>
					<span>Application frameworks</span>
				</div>
			</a>
			
			<ul id="toc-Application_frameworks-sublist" class="vector-toc-list">
			</ul>
		</li>
		<li id="toc-Programs_and_libraries"
			class="vector-toc-list-item vector-toc-level-2">
			<a class="vector-toc-link" href="#Programs_and_libraries">
				<div class="vector-toc-text">
					<span class="vector-toc-numb">5.3</span>
					<span>Programs and libraries</span>
				</div>
			</a>
			
			<ul id="toc-Programs_and_libraries-sublist" class="vector-toc-list">
			</ul>
		</li>
		<li id="toc-Game_engines"
			class="vector-toc-list-item vector-toc-level-2">
			<a class="vector-toc-link" href="#Game_engines">
				<div class="vector-toc-text">
					<span class="vector-toc-numb">5.4</span>
					<span>Game engines</span>
				</div>
			</a>
			
			<ul id="toc-Game_engines-sublist" class="vector-toc-list">
			</ul>
		</li>
		<li id="toc-Games"
			class="vector-toc-list-item vector-toc-level-2">
			<a class="vector-toc-link" href="#Games">
				<div class="vector-toc-text">
					<span class="vector-toc-numb">5.5</span>
					<span>Games</span>
				</div>
			</a>
			
			<ul id="toc-Games-sublist" class="vector-toc-list">
			</ul>
		</li>
		<li id="toc-Emulators"
			class="vector-toc-list-item vector-toc-level-2">
			<a class="vector-toc-link" href="#Emulators">
				<div class="vector-toc-text">
					<span class="vector-toc-numb">5.6</span>
					<span>Emulators</span>
				</div>
			</a>
			
			<ul id="toc-Emulators-sublist" class="vector-toc-list">
			</ul>
		</li>
		<li id="toc-Mathematics"
			class="vector-toc-list-item vector-toc-level-2">
			<a class="vector-toc-link" href="#Mathematics">
				<div class="vector-toc-text">
					<span class="vector-toc-numb">5.7</span>
					<span>Mathematics</span>
				</div>
			</a>
			
			<ul id="toc-Mathematics-sublist" class="vector-toc-list">
			</ul>
		</li>
	</ul>
	</li>
	<li id="toc-Deprecation"
		class="vector-toc-list-item vector-toc-level-1 vector-toc-list-item-expanded">
		<a class="vector-toc-link" href="#Deprecation">
			<div class="vector-toc-text">
				<span class="vector-toc-numb">6</span>
				<span>Deprecation</span>
			</div>
		</a>
		
		<ul id="toc-Deprecation-sublist" class="vector-toc-list">
		</ul>
	</li>
	<li id="toc-See_also"
		class="vector-toc-list-item vector-toc-level-1 vector-toc-list-item-expanded">
		<a class="vector-toc-link" href="#See_also">
			<div class="vector-toc-text">
				<span class="vector-toc-numb">7</span>
				<span>See also</span>
			</div>
		</a>
		
		<ul id="toc-See_also-sublist" class="vector-toc-list">
		</ul>
	</li>
	<li id="toc-References"
		class="vector-toc-list-item vector-toc-level-1 vector-toc-list-item-expanded">
		<a class="vector-toc-link" href="#References">
			<div class="vector-toc-text">
				<span class="vector-toc-numb">8</span>
				<span>References</span>
			</div>
		</a>
		
		<ul id="toc-References-sublist" class="vector-toc-list">
		</ul>
	</li>
	<li id="toc-External_links"
		class="vector-toc-list-item vector-toc-level-1 vector-toc-list-item-expanded">
		<a class="vector-toc-link" href="#External_links">
			<div class="vector-toc-text">
				<span class="vector-toc-numb">9</span>
				<span>External links</span>
			</div>
		</a>
		
		<ul id="toc-External_links-sublist" class="vector-toc-list">
		</ul>
	</li>
</ul>
</div>

					</div>
		</nav>
			</div>
		</div>
		<div class="mw-content-container">
			<main id="content" class="mw-body">
				<header class="mw-body-header vector-page-titlebar">
					<nav aria-label="Contents" class="vector-toc-landmark">
						
<div id="vector-page-titlebar-toc" class="vector-dropdown vector-page-titlebar-toc vector-button-flush-left"  >
	<input type="checkbox" id="vector-page-titlebar-toc-checkbox" role="button" aria-haspopup="true" data-event-name="ui.dropdown-vector-page-titlebar-toc" class="vector-dropdown-checkbox "  aria-label="Toggle the table of contents"  >
	<label id="vector-page-titlebar-toc-label" for="vector-page-titlebar-toc-checkbox" class="vector-dropdown-label cdx-button cdx-button--fake-button cdx-button--fake-button--enabled cdx-button--weight-quiet cdx-button--icon-only " aria-hidden="true"  ><span class="vector-icon mw-ui-icon-listBullet mw-ui-icon-wikimedia-listBullet"></span>

<span class="vector-dropdown-label-text">Toggle the table of contents</span>
	</label>
	<div class="vector-dropdown-content">


							<div id="vector-page-titlebar-toc-unpinned-container" class="vector-unpinned-container">
			</div>
		
	</div>
</div>

					</nav>
					<h1 id="firstHeading" class="firstHeading mw-first-heading">asm.js</h1>
							
<div id="p-lang-btn" class="vector-dropdown mw-portlet mw-portlet-lang"  >
	<input type="checkbox" id="p-lang-btn-checkbox" role="button" aria-haspopup="true" data-event-name="ui.dropdown-p-lang-btn" class="vector-dropdown-checkbox mw-interlanguage-selector" aria-label="Go to an article in another language. Available in 8 languages"   >
	<label id="p-lang-btn-label" for="p-lang-btn-checkbox" class="vector-dropdown-label cdx-button cdx-button--fake-button cdx-button--fake-button--enabled cdx-button--weight-quiet cdx-button--action-progressive mw-portlet-lang-heading-8" aria-hidden="true"  ><span class="vector-icon mw-ui-icon-language-progressive mw-ui-icon-wikimedia-language-progressive"></span>

<span class="vector-dropdown-label-text">8 languages</span>
	</label>
	<div class="vector-dropdown-content">

		<div class="vector-menu-content">
			
			<ul class="vector-menu-content-list">
				
				<li class="interlanguage-link interwiki-de mw-list-item"><a href="https://de.wikipedia.org/wiki/Asm.js" title="Asm.js – German" lang="de" hreflang="de" data-title="Asm.js" data-language-autonym="Deutsch" class="interlanguage-link-target"><span>Deutsch</span></a></li><li class="interlanguage-link interwiki-fa mw-list-item"><a href="https://fa.wikipedia.org/wiki/Asm.js" title="Asm.js – Persian" lang="fa" hreflang="fa" data-title="Asm.js" data-language-autonym="فارسی" class="interlanguage-link-target"><span>فارسی</span></a></li><li class="interlanguage-link interwiki-fr mw-list-item"><a href="https://fr.wikipedia.org/wiki/Asm.js" title="Asm.js – French" lang="fr" hreflang="fr" data-title="Asm.js" data-language-autonym="Français" class="interlanguage-link-target"><span>Français</span></a></li><li class="interlanguage-link interwiki-ko mw-list-item"><a href="https://ko.wikipedia.org/wiki/Asm.js" title="Asm.js – Korean" lang="ko" hreflang="ko" data-title="Asm.js" data-language-autonym="한국어" class="interlanguage-link-target"><span>한국어</span></a></li><li class="interlanguage-link interwiki-hu mw-list-item"><a href="https://hu.wikipedia.org/wiki/Asm.js" title="Asm.js – Hungarian" lang="hu" hreflang="hu" data-title="Asm.js" data-language-autonym="Magyar" class="interlanguage-link-target"><span>Magyar</span></a></li><li class="interlanguage-link interwiki-pt mw-list-item"><a href="https://pt.wikipedia.org/wiki/Asm.js" title="Asm.js – Portuguese" lang="pt" hreflang="pt" data-title="Asm.js" data-language-autonym="Português" class="interlanguage-link-target"><span>Português</span></a></li><li class="interlanguage-link interwiki-ru mw-list-item"><a href="https://ru.wikipedia.org/wiki/Asm.js" title="Asm.js – Russian" lang="ru" hreflang="ru" data-title="Asm.js" data-language-autonym="Русский" class="interlanguage-link-target"><span>Русский</span></a></li><li class="interlanguage-link interwiki-zh mw-list-item"><a href="https://zh.wikipedia.org/wiki/Asm.js" title="Asm.js – Chinese" lang="zh" hreflang="zh" data-title="Asm.js" data-language-autonym="中文" class="interlanguage-link-target"><span>中文</span></a></li>
			</ul>
			<div class="after-portlet after-portlet-lang"><span class="wb-langlinks-edit wb-langlinks-link"><a href="https://www.wikidata.org/wiki/Special:EntityPage/Q13496636#sitelinks-wikipedia" title="Edit interlanguage links" class="wbc-editpage">Edit links</a></span></div>
		</div>

	</div>
</div>
</header>
				<div class="vector-page-toolbar">
					<div class="vector-page-toolbar-container">
						<div id="left-navigation">
							<nav aria-label="Namespaces">
								
<div id="p-associated-pages" class="vector-menu vector-menu-tabs mw-portlet mw-portlet-associated-pages"  >
	<div class="vector-menu-content">
		
		<ul class="vector-menu-content-list">
			
			<li id="ca-nstab-main" class="selected vector-tab-noicon mw-list-item"><a href="/wiki/Asm.js" title="View the content page [c]" accesskey="c"><span>Article</span></a></li><li id="ca-talk" class="vector-tab-noicon mw-list-item"><a href="/wiki/Talk:Asm.js" rel="discussion" title="Discuss improvements to the content page [t]" accesskey="t"><span>Talk</span></a></li>
		</ul>
		
	</div>
</div>

								
<div id="vector-variants-dropdown" class="vector-dropdown emptyPortlet"  >
	<input type="checkbox" id="vector-variants-dropdown-checkbox" role="button" aria-haspopup="true" data-event-name="ui.dropdown-vector-variants-dropdown" class="vector-dropdown-checkbox " aria-label="Change language variant"   >
	<label id="vector-variants-dropdown-label" for="vector-variants-dropdown-checkbox" class="vector-dropdown-label cdx-button cdx-button--fake-button cdx-button--fake-button--enabled cdx-button--weight-quiet" aria-hidden="true"  ><span class="vector-dropdown-label-text">English</span>
	</label>
	<div class="vector-dropdown-content">


					
<div id="p-variants" class="vector-menu mw-portlet mw-portlet-variants emptyPortlet"  >
	<div class="vector-menu-content">
		
		<ul class="vector-menu-content-list">
			
			
		</ul>
		
	</div>
</div>

				
	</div>
</div>

							</nav>
						</div>
						<div id="right-navigation" class="vector-collapsible">
							<nav aria-label="Views">
								
<div id="p-views" class="vector-menu vector-menu-tabs mw-portlet mw-portlet-views"  >
	<div class="vector-menu-content">
		
		<ul class="vector-menu-content-list">
			
			<li id="ca-view" class="selected vector-tab-noicon mw-list-item"><a href="/wiki/Asm.js"><span>Read</span></a></li><li id="ca-edit" class="vector-tab-noicon mw-list-item"><a href="/w/index.php?title=Asm.js&amp;action=edit" title="Edit this page [e]" accesskey="e"><span>Edit</span></a></li><li id="ca-history" class="vector-tab-noicon mw-list-item"><a href="/w/index.php?title=Asm.js&amp;action=history" title="Past revisions of this page [h]" accesskey="h"><span>View history</span></a></li>
		</ul>
		
	</div>
</div>

							</nav>
				
							<nav class="vector-page-tools-landmark" aria-label="Page tools">
								
<div id="vector-page-tools-dropdown" class="vector-dropdown vector-page-tools-dropdown"  >
	<input type="checkbox" id="vector-page-tools-dropdown-checkbox" role="button" aria-haspopup="true" data-event-name="ui.dropdown-vector-page-tools-dropdown" class="vector-dropdown-checkbox "  aria-label="Tools"  >
	<label id="vector-page-tools-dropdown-label" for="vector-page-tools-dropdown-checkbox" class="vector-dropdown-label cdx-button cdx-button--fake-button cdx-button--fake-button--enabled cdx-button--weight-quiet" aria-hidden="true"  ><span class="vector-dropdown-label-text">Tools</span>
	</label>
	<div class="vector-dropdown-content">


									<div id="vector-page-tools-unpinned-container" class="vector-unpinned-container">
						
<div id="vector-page-tools" class="vector-page-tools vector-pinnable-element">
	<div
	class="vector-pinnable-header vector-page-tools-pinnable-header vector-pinnable-header-unpinned"
	data-feature-name="page-tools-pinned"
	data-pinnable-element-id="vector-page-tools"
	data-pinned-container-id="vector-page-tools-pinned-container"
	data-unpinned-container-id="vector-page-tools-unpinned-container"
>
	<div class="vector-pinnable-header-label">Tools</div>
	<button class="vector-pinnable-header-toggle-button vector-pinnable-header-pin-button" data-event-name="pinnable-header.vector-page-tools.pin">move to sidebar</button>
	<button class="vector-pinnable-header-toggle-button vector-pinnable-header-unpin-button" data-event-name="pinnable-header.vector-page-tools.unpin">hide</button>
</div>

	
<div id="p-cactions" class="vector-menu mw-portlet mw-portlet-cactions emptyPortlet vector-has-collapsible-items"  title="More options" >
	<div class="vector-menu-heading">
		Actions
	</div>
	<div class="vector-menu-content">
		
		<ul class="vector-menu-content-list">
			
			<li id="ca-more-view" class="selected vector-more-collapsible-item mw-list-item"><a href="/wiki/Asm.js"><span>Read</span></a></li><li id="ca-more-edit" class="vector-more-collapsible-item mw-list-item"><a href="/w/index.php?title=Asm.js&amp;action=edit" title="Edit this page [e]" accesskey="e"><span>Edit</span></a></li><li id="ca-more-history" class="vector-more-collapsible-item mw-list-item"><a href="/w/index.php?title=Asm.js&amp;action=history"><span>View history</span></a></li>
		</ul>
		
	</div>
</div>

<div id="p-tb" class="vector-menu mw-portlet mw-portlet-tb"  >
	<div class="vector-menu-heading">
		General
	</div>
	<div class="vector-menu-content">
		
		<ul class="vector-menu-content-list">
			
			<li id="t-whatlinkshere" class="mw-list-item"><a href="/wiki/Special:WhatLinksHere/Asm.js" title="List of all English Wikipedia pages containing links to this page [j]" accesskey="j"><span>What links here</span></a></li><li id="t-recentchangeslinked" class="mw-list-item"><a href="/wiki/Special:RecentChangesLinked/Asm.js" rel="nofollow" title="Recent changes in pages linked from this page [k]" accesskey="k"><span>Related changes</span></a></li><li id="t-upload" class="mw-list-item"><a href="/wiki/Wikipedia:File_Upload_Wizard" title="Upload files [u]" accesskey="u"><span>Upload file</span></a></li><li id="t-specialpages" class="mw-list-item"><a href="/wiki/Special:SpecialPages" title="A list of all special pages [q]" accesskey="q"><span>Special pages</span></a></li><li id="t-permalink" class="mw-list-item"><a href="/w/index.php?title=Asm.js&amp;oldid=1230470162" title="Permanent link to this revision of this page"><span>Permanent link</span></a></li><li id="t-info" class="mw-list-item"><a href="/w/index.php?title=Asm.js&amp;action=info" title="More information about this page"><span>Page information</span></a></li><li id="t-cite" class="mw-list-item"><a href="/w/index.php?title=Special:CiteThisPage&amp;page=Asm.js&amp;id=1230470162&amp;wpFormIdentifier=titleform" title="Information on how to cite this page"><span>Cite this page</span></a></li><li id="t-urlshortener" class="mw-list-item"><a href="/w/index.php?title=Special:UrlShortener&amp;url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FAsm.js"><span>Get shortened URL</span></a></li><li id="t-urlshortener-qrcode" class="mw-list-item"><a href="/w/index.php?title=Special:QrCode&amp;url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FAsm.js"><span>Download QR code</span></a></li><li id="t-wikibase" class="mw-list-item"><a href="https://www.wikidata.org/wiki/Special:EntityPage/Q13496636" title="Structured data on this page hosted by Wikidata [g]" accesskey="g"><span>Wikidata item</span></a></li>
		</ul>
		
	</div>
</div>

<div id="p-coll-print_export" class="vector-menu mw-portlet mw-portlet-coll-print_export"  >
	<div class="vector-menu-heading">
		Print/export
	</div>
	<div class="vector-menu-content">
		
		<ul class="vector-menu-content-list">
			
			<li id="coll-download-as-rl" class="mw-list-item"><a href="/w/index.php?title=Special:DownloadAsPdf&amp;page=Asm.js&amp;action=show-download-screen" title="Download this page as a PDF file"><span>Download as PDF</span></a></li><li id="t-print" class="mw-list-item"><a href="/w/index.php?title=Asm.js&amp;printable=yes" title="Printable version of this page [p]" accesskey="p"><span>Printable version</span></a></li>
		</ul>
		
	</div>
</div>

</div>

									</div>
				
	</div>
</div>

							</nav>
						</div>
					</div>
				</div>
				<div class="vector-column-end">
					<div class="vector-sticky-pinned-container">
						<nav class="vector-page-tools-landmark" aria-label="Page tools">
							<div id="vector-page-tools-pinned-container" class="vector-pinned-container">
				
							</div>
		</nav>
						<nav class="vector-appearance-landmark" aria-label="Appearance">
							<div id="vector-appearance-pinned-container" class="vector-pinned-container">
				<div id="vector-appearance" class="vector-appearance vector-pinnable-element">
	<div
	class="vector-pinnable-header vector-appearance-pinnable-header vector-pinnable-header-pinned"
	data-feature-name="appearance-pinned"
	data-pinnable-element-id="vector-appearance"
	data-pinned-container-id="vector-appearance-pinned-container"
	data-unpinned-container-id="vector-appearance-unpinned-container"
>
	<div class="vector-pinnable-header-label">Appearance</div>
	<button class="vector-pinnable-header-toggle-button vector-pinnable-header-pin-button" data-event-name="pinnable-header.vector-appearance.pin">move to sidebar</button>
	<button class="vector-pinnable-header-toggle-button vector-pinnable-header-unpin-button" data-event-name="pinnable-header.vector-appearance.unpin">hide</button>
</div>


</div>

							</div>
		</nav>
					</div>
				</div>
				<div id="bodyContent" class="vector-body" aria-labelledby="firstHeading" data-mw-ve-target-container>
					<div class="vector-body-before-content">
							<div class="mw-indicators">
		</div>

						<div id="siteSub" class="noprint">From Wikipedia, the free encyclopedia</div>
					</div>
					<div id="contentSub"><div id="mw-content-subtitle"></div></div>
					
					
					<div id="mw-content-text" class="mw-body-content"><div class="mw-content-ltr mw-parser-output" lang="en" dir="ltr"><div class="shortdescription nomobile noexcerpt noprint searchaux" style="display:none">Intermediate programming language</div>
<style data-mw-deduplicate="TemplateStyles:r1237879389">.mw-parser-output .infobox-subbox{padding:0;border:none;margin:-3px;width:auto;min-width:100%;font-size:100%;clear:none;float:none;background-color:transparent}.mw-parser-output .infobox-3cols-child{margin:auto}.mw-parser-output .infobox .navbar{font-size:100%}body.skin-minerva .mw-parser-output .infobox-header,body.skin-minerva .mw-parser-output .infobox-subheader,body.skin-minerva .mw-parser-output .infobox-above,body.skin-minerva .mw-parser-output .infobox-title,body.skin-minerva .mw-parser-output .infobox-image,body.skin-minerva .mw-parser-output .infobox-full-data,body.skin-minerva .mw-parser-output .infobox-below{text-align:center}@media screen{html.skin-theme-clientpref-night .mw-parser-output .infobox-full-data:not(.notheme)>div:not(.notheme)[style]{background:#1f1f23!important;color:#f8f9fa}}@media screen and (prefers-color-scheme:dark){html.skin-theme-clientpref-os .mw-parser-output .infobox-full-data:not(.notheme) div:not(.notheme){background:#1f1f23!important;color:#f8f9fa}}@media(min-width:640px){body.skin--responsive .mw-parser-output .infobox-table{display:table!important}body.skin--responsive .mw-parser-output .infobox-table>caption{display:table-caption!important}body.skin--responsive .mw-parser-output .infobox-table>tbody{display:table-row-group}body.skin--responsive .mw-parser-output .infobox-table tr{display:table-row!important}body.skin--responsive .mw-parser-output .infobox-table th,body.skin--responsive .mw-parser-output .infobox-table td{padding-left:inherit;padding-right:inherit}}</style><table class="infobox vevent"><caption class="infobox-title summary">asm.js</caption><tbody><tr><th scope="row" class="infobox-label"><a href="/wiki/Software_design" title="Software design">Designed&#160;by</a></th><td class="infobox-data"><a href="/wiki/Mozilla" title="Mozilla">Mozilla</a></td></tr><tr><th scope="row" class="infobox-label">First&#160;appeared</th><td class="infobox-data">21&#160;March 2013<span class="noprint">&#59;&#32;11 years ago</span><span style="display:none">&#160;(<span class="bday dtstart published updated">2013-03-21</span>)</span><sup id="cite_ref-1" class="reference"><a href="#cite_note-1"><span class="cite-bracket">&#91;</span>1<span class="cite-bracket">&#93;</span></a></sup></td></tr><tr><th scope="row" class="infobox-label"><a href="/wiki/Operating_system" title="Operating system">OS</a></th><td class="infobox-data"><a href="/wiki/Platform_independent" class="mw-redirect" title="Platform independent">Platform independent</a></td></tr><tr><th scope="row" class="infobox-label">Website</th><td class="infobox-data"><span class="url"><a rel="nofollow" class="external text" href="http://asmjs.org">asmjs<wbr />.org</a></span></td></tr><tr><th colspan="2" class="infobox-header" style="background-color: #eee;">Influenced by</th></tr><tr><td colspan="2" class="infobox-full-data"><a href="/wiki/JavaScript" title="JavaScript">JavaScript</a></td></tr><tr><th colspan="2" class="infobox-header" style="background-color: #eee;">Influenced</th></tr><tr><td colspan="2" class="infobox-full-data"><a href="/wiki/WebAssembly" title="WebAssembly">WebAssembly</a></td></tr></tbody></table>
<p><b>asm.js</b> is a <a href="/wiki/Subset" title="Subset">subset</a> of <a href="/wiki/JavaScript" title="JavaScript">JavaScript</a> designed to allow <a href="/wiki/Computer_software" class="mw-redirect" title="Computer software">computer software</a> written in languages such as <a href="/wiki/C_programming_language" class="mw-redirect" title="C programming language">C</a> to be run as <a href="/wiki/Web_application" title="Web application">web applications</a> while maintaining performance characteristics considerably better than standard <a href="/wiki/JavaScript" title="JavaScript">JavaScript</a>, which is the typical language used for such applications.
</p><p>asm.js consists of a <a href="/wiki/Strict_subset" class="mw-redirect" title="Strict subset">strict subset</a> of JavaScript, to which code written in <a href="/wiki/Type_system#Static_type_checking" title="Type system">statically typed</a> languages with manual memory management (such as C) is translated by a <a href="/wiki/Source-to-source_compiler" title="Source-to-source compiler">source-to-source compiler</a> such as <a href="/wiki/Emscripten" title="Emscripten">Emscripten</a> (based on <a href="/wiki/LLVM" title="LLVM">LLVM</a>).<sup id="cite_ref-github.com_2-0" class="reference"><a href="#cite_note-github.com-2"><span class="cite-bracket">&#91;</span>2<span class="cite-bracket">&#93;</span></a></sup> Performance is improved by limiting language features to those amenable to <a href="/wiki/Ahead-of-time_optimization" class="mw-redirect" title="Ahead-of-time optimization">ahead-of-time optimization</a> and other performance improvements.
</p><p><a href="/wiki/Firefox" title="Firefox">Mozilla Firefox</a> was the first web browser to implement asm.js-specific optimizations, starting with version 22.<sup id="cite_ref-languages_3-0" class="reference"><a href="#cite_note-languages-3"><span class="cite-bracket">&#91;</span>3<span class="cite-bracket">&#93;</span></a></sup>
</p><p>asm.js is superseded by <a href="/wiki/WebAssembly" title="WebAssembly">WebAssembly</a>.
</p>
<meta property="mw:PageProp/toc" />
<div class="mw-heading mw-heading2"><h2 id="Design">Design</h2><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Asm.js&amp;action=edit&amp;section=1" title="Edit section: Design"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<p>asm.js enables significant performance improvements for <a href="/wiki/Web_application" title="Web application">web applications</a>, but does not aim to improve the performance of hand-written JavaScript code, nor does it enable anything other than enhanced performance.
</p><p>It is intended to have performance characteristics closer to that of native code than standard JavaScript by limiting language features to those amenable to <a href="/wiki/Ahead-of-time_optimization" class="mw-redirect" title="Ahead-of-time optimization">ahead-of-time optimization</a> and other performance improvements.<sup id="cite_ref-4" class="reference"><a href="#cite_note-4"><span class="cite-bracket">&#91;</span>4<span class="cite-bracket">&#93;</span></a></sup> By using a subset of JavaScript, asm.js is largely supported by all major <a href="/wiki/Web_browser" title="Web browser">web browsers</a>,<sup id="cite_ref-5" class="reference"><a href="#cite_note-5"><span class="cite-bracket">&#91;</span>5<span class="cite-bracket">&#93;</span></a></sup> unlike alternative approaches such as <a href="/wiki/Google_Native_Client" title="Google Native Client">Google Native Client</a>.
</p>
<div class="mw-heading mw-heading2"><h2 id="Code_generation">Code generation</h2><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Asm.js&amp;action=edit&amp;section=2" title="Edit section: Code generation"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<style data-mw-deduplicate="TemplateStyles:r1236091366">.mw-parser-output .ambox{border:1px solid #a2a9b1;border-left:10px solid #36c;background-color:#fbfbfb;box-sizing:border-box}.mw-parser-output .ambox+link+.ambox,.mw-parser-output .ambox+link+style+.ambox,.mw-parser-output .ambox+link+link+.ambox,.mw-parser-output .ambox+.mw-empty-elt+link+.ambox,.mw-parser-output .ambox+.mw-empty-elt+link+style+.ambox,.mw-parser-output .ambox+.mw-empty-elt+link+link+.ambox{margin-top:-1px}html body.mediawiki .mw-parser-output .ambox.mbox-small-left{margin:4px 1em 4px 0;overflow:hidden;width:238px;border-collapse:collapse;font-size:88%;line-height:1.25em}.mw-parser-output .ambox-speedy{border-left:10px solid #b32424;background-color:#fee7e6}.mw-parser-output .ambox-delete{border-left:10px solid #b32424}.mw-parser-output .ambox-content{border-left:10px solid #f28500}.mw-parser-output .ambox-style{border-left:10px solid #fc3}.mw-parser-output .ambox-move{border-left:10px solid #9932cc}.mw-parser-output .ambox-protection{border-left:10px solid #a2a9b1}.mw-parser-output .ambox .mbox-text{border:none;padding:0.25em 0.5em;width:100%}.mw-parser-output .ambox .mbox-image{border:none;padding:2px 0 2px 0.5em;text-align:center}.mw-parser-output .ambox .mbox-imageright{border:none;padding:2px 0.5em 2px 0;text-align:center}.mw-parser-output .ambox .mbox-empty-cell{border:none;padding:0;width:1px}.mw-parser-output .ambox .mbox-image-div{width:52px}html.client-js body.skin-minerva .mw-parser-output .mbox-text-span{margin-left:23px!important}@media(min-width:720px){.mw-parser-output .ambox{margin:0 10%}}@media print{body.ns-0 .mw-parser-output .ambox{display:none!important}}</style><table class="box-Unreferenced_section plainlinks metadata ambox ambox-content ambox-Unreferenced" role="presentation"><tbody><tr><td class="mbox-image"><div class="mbox-image-div"><span typeof="mw:File"><a href="File-Question_book-new.svg" class="mw-file-description"><img alt="" src="../../../../wikipedia/en/thumb/9/99/Question_book-new_svg/50px-Question_book-new.svg.png" decoding="async" width="50" height="39" class="mw-file-element" srcset="//upload.wikimedia.org/wikipedia/en/thumb/9/99/Question_book-new.svg/75px-Question_book-new.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/9/99/Question_book-new.svg/100px-Question_book-new.svg.png 2x" data-file-width="512" data-file-height="399" /></a></span></div></td><td class="mbox-text"><div class="mbox-text-span">This section <b>does not <a href="/wiki/Wikipedia:Citing_sources" title="Wikipedia:Citing sources">cite</a> any <a href="/wiki/Wikipedia:Verifiability" title="Wikipedia:Verifiability">sources</a></b>.<span class="hide-when-compact"> Please help <a href="/wiki/Special:EditPage/Asm.js" title="Special:EditPage/Asm.js">improve this section</a> by <a href="/wiki/Help:Referencing_for_beginners" title="Help:Referencing for beginners">adding citations to reliable sources</a>. Unsourced material may be challenged and <a href="/wiki/Wikipedia:Verifiability#Burden_of_evidence" title="Wikipedia:Verifiability">removed</a>.</span>  <span class="date-container"><i>(<span class="date">March 2015</span>)</i></span><span class="hide-when-compact"><i> (<small><a href="/wiki/Help:Maintenance_template_removal" title="Help:Maintenance template removal">Learn how and when to remove this message</a></small>)</i></span></div></td></tr></tbody></table>
<p>asm.js is not typically written directly: instead, as an intermediate language, it is generated through the use of a <a href="/wiki/Compiler" title="Compiler">compiler</a> that takes source code in a language such as <a href="/wiki/C%2B%2B" title="C++">C++</a> and outputs asm.js.
</p><p>For example, given the following C code:
</p>
<div class="mw-highlight mw-highlight-lang-c mw-content-ltr" dir="ltr"><pre><span></span><span class="kt">int</span><span class="w"> </span><span class="nf">f</span><span class="p">(</span><span class="kt">int</span><span class="w"> </span><span class="n">i</span><span class="p">)</span><span class="w"> </span><span class="p">{</span>
<span class="w">  </span><span class="k">return</span><span class="w"> </span><span class="n">i</span><span class="w"> </span><span class="o">+</span><span class="w"> </span><span class="mi">1</span><span class="p">;</span>
<span class="p">}</span>
</pre></div>
<p>Emscripten would output the following JS code:
</p>
<div class="mw-highlight mw-highlight-lang-js mw-content-ltr" dir="ltr"><pre><span></span><span class="kd">function</span><span class="w"> </span><span class="nx">f</span><span class="p">(</span><span class="nx">i</span><span class="p">)</span><span class="w"> </span><span class="p">{</span>
<span class="w">  </span><span class="nx">i</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="nx">i</span><span class="o">|</span><span class="mf">0</span><span class="p">;</span>
<span class="w">  </span><span class="k">return</span><span class="w"> </span><span class="p">(</span><span class="nx">i</span><span class="w"> </span><span class="o">+</span><span class="w"> </span><span class="mf">1</span><span class="p">)</span><span class="o">|</span><span class="mf">0</span><span class="p">;</span>
<span class="p">}</span>
</pre></div>
<p>Note the addition of <code>|0</code> and the lack of type specifiers. In JavaScript, bitwise operators convert their operands to 32-bit signed integers and give integer results. This means that a <a href="/wiki/Bitwise_OR" class="mw-redirect" title="Bitwise OR">bitwise OR</a> with zero converts a value to an integer (a very simple "conceptual" presentation of bitwise operators may not deal with type conversion at all, but every programming language defines operators for its own convenience, as Javascript does here). By doing this for each parameter, this ensures that if the function is called from outside code, the value will be converted to the correct type. This is also used on the return value, in this case to ensure that the result of adding 1 to i will be an integer (as otherwise it could become too large), and to mark the return type of the function. These conversions are required by asm.js, so that an optimising compiler can produce highly efficient native code ahead-of-time. In such an optimising compiler, no conversions are performed when asm.js code calls other asm.js code, as the required type specifiers mean it is guaranteed that values will already have the correct type. Furthermore, rather than performing a floating-point addition and converting to an integer, it can simply do a native integer operation. Together, this leads to significant performance benefits.
</p><p>Here is another example to calculate the length of a string:
</p>
<div class="mw-highlight mw-highlight-lang-c mw-content-ltr" dir="ltr"><pre><span></span><span class="kt">size_t</span><span class="w"> </span><span class="nf">strlen</span><span class="p">(</span><span class="kt">char</span><span class="w"> </span><span class="o">*</span><span class="n">ptr</span><span class="p">)</span><span class="w"> </span><span class="p">{</span>
<span class="w">  </span><span class="kt">char</span><span class="w"> </span><span class="o">*</span><span class="n">curr</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="n">ptr</span><span class="p">;</span>
<span class="w">  </span><span class="k">while</span><span class="w"> </span><span class="p">(</span><span class="o">*</span><span class="n">curr</span><span class="w"> </span><span class="o">!=</span><span class="w"> </span><span class="mi">0</span><span class="p">)</span><span class="w"> </span><span class="p">{</span>
<span class="w">    </span><span class="n">curr</span><span class="o">++</span><span class="p">;</span>
<span class="w">  </span><span class="p">}</span>
<span class="w">  </span><span class="k">return</span><span class="w"> </span><span class="p">(</span><span class="n">curr</span><span class="w"> </span><span class="o">-</span><span class="w"> </span><span class="n">ptr</span><span class="p">);</span>
<span class="p">}</span>
</pre></div>
<p>This would result in the following asm.js code:
</p>
<div class="mw-highlight mw-highlight-lang-js mw-content-ltr" dir="ltr"><pre><span></span><span class="kd">function</span><span class="w"> </span><span class="nx">strlen</span><span class="p">(</span><span class="nx">ptr</span><span class="p">)</span><span class="w"> </span><span class="p">{</span>
<span class="w">  </span><span class="nx">ptr</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="nx">ptr</span><span class="o">|</span><span class="mf">0</span><span class="p">;</span>
<span class="w">  </span><span class="kd">var</span><span class="w"> </span><span class="nx">curr</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="mf">0</span><span class="p">;</span>
<span class="w">  </span><span class="nx">curr</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="nx">ptr</span><span class="p">;</span>
<span class="w">  </span><span class="k">while</span><span class="w"> </span><span class="p">((</span><span class="nx">MEM8</span><span class="p">[</span><span class="nx">curr</span><span class="o">&gt;&gt;</span><span class="mf">0</span><span class="p">]</span><span class="o">|</span><span class="mf">0</span><span class="p">)</span><span class="w"> </span><span class="o">!=</span><span class="w"> </span><span class="mf">0</span><span class="p">)</span><span class="w"> </span><span class="p">{</span>
<span class="w">    </span><span class="nx">curr</span><span class="w"> </span><span class="o">=</span><span class="w"> </span><span class="p">(</span><span class="nx">curr</span><span class="w"> </span><span class="o">+</span><span class="w"> </span><span class="mf">1</span><span class="p">)</span><span class="o">|</span><span class="mf">0</span><span class="p">;</span>
<span class="w">  </span><span class="p">}</span>
<span class="w">  </span><span class="k">return</span><span class="w"> </span><span class="p">(</span><span class="nx">curr</span><span class="w"> </span><span class="o">-</span><span class="w"> </span><span class="nx">ptr</span><span class="p">)</span><span class="o">|</span><span class="mf">0</span><span class="p">;</span>
<span class="p">}</span>
</pre></div>
<p>In the generated code, the variable MEM8 is actually a byte-by-byte "view" of a typed buffer, which serves as the "heap" of the asm.js code.
</p>
<div class="mw-heading mw-heading2"><h2 id="Performance">Performance</h2><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Asm.js&amp;action=edit&amp;section=3" title="Edit section: Performance"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<p>Since asm.js runs in a browser, the performance heavily depends on both the browser and hardware. Preliminary benchmarks of C programs compiled to asm.js are usually within a factor of 2 slower than native compilation with <a href="/wiki/Clang" title="Clang">Clang</a>.<sup id="cite_ref-6" class="reference"><a href="#cite_note-6"><span class="cite-bracket">&#91;</span>6<span class="cite-bracket">&#93;</span></a></sup>
</p><p>Much of this performance gain over normal JavaScript is due to 100% <a href="/wiki/Type_(computer_programming)" class="mw-redirect" title="Type (computer programming)">type</a> consistency and virtually no <a href="/wiki/Garbage_collection_(computer_science)" title="Garbage collection (computer science)">garbage collection</a> (memory is manually managed in a large typed array). This simpler model with no dynamic behavior, no memory allocation or deallocation, just a narrow set of well-defined integer and floating point operations enables much greater performance and potential for <a href="/wiki/Optimization_(computer_science)" class="mw-redirect" title="Optimization (computer science)">optimization</a>.<sup class="noprint Inline-Template Template-Fact" style="white-space:nowrap;">&#91;<i><a href="/wiki/Wikipedia:Citation_needed" title="Wikipedia:Citation needed"><span title="This claim needs references to reliable sources. (October 2014)">citation needed</span></a></i>&#93;</sup>
</p><p>Mozilla's benchmark from December 2013 showed significant improvements: "Firefox with <a href="/wiki/Float32" class="mw-redirect" title="Float32">float32</a> optimizations can run all those benchmarks at around 1.5× slower than native, or better."<sup id="cite_ref-float32_7-0" class="reference"><a href="#cite_note-float32-7"><span class="cite-bracket">&#91;</span>7<span class="cite-bracket">&#93;</span></a></sup> Mozilla points out that the performance of natively compiled code is not a single measure but rather a range, with different native compilers (in this case <a href="/wiki/Clang" title="Clang">Clang</a> and <a href="/wiki/GNU_Compiler_Collection" title="GNU Compiler Collection">GCC</a>) delivering code of differing performance. "In fact, on some benchmarks, like <a href="/wiki/Box2D" title="Box2D">Box2D</a>, <a href="/wiki/FASTA" title="FASTA">FASTA</a> and copy, asm.js is as close or closer to Clang than Clang is to GCC. In one case, asm.js even beats Clang by a slight amount on Box2D."<sup id="cite_ref-float32_7-1" class="reference"><a href="#cite_note-float32-7"><span class="cite-bracket">&#91;</span>7<span class="cite-bracket">&#93;</span></a></sup>
</p>
<div class="mw-heading mw-heading2"><h2 id="Implementations">Implementations</h2><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Asm.js&amp;action=edit&amp;section=4" title="Edit section: Implementations"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<p>The <a href="/wiki/Emscripten" title="Emscripten">Emscripten</a> project provides tools that can be used to compile C and C++ codebases (or any other languages that can be converted to <a href="/wiki/LLVM" title="LLVM">LLVM</a> <a href="/wiki/Intermediate_representation" title="Intermediate representation">IR</a>) into asm.js.<sup id="cite_ref-github.com_2-1" class="reference"><a href="#cite_note-github.com-2"><span class="cite-bracket">&#91;</span>2<span class="cite-bracket">&#93;</span></a></sup>
</p><p>All browsers with support for <a href="/wiki/ES6" class="mw-redirect" title="ES6">ECMAScript 6</a> should be able to run asm.js code, as it is a subset of that specification.  However, since features were added in that edition to enable full asm.js support (<code class="mw-highlight mw-highlight-lang-text mw-content-ltr" id="" style="" dir="ltr">Math.fround()</code>), older browsers lacking those features may encounter problems.
</p><p>Some browser implementations are especially optimised for asm.js:
</p>
<ul><li><a href="/wiki/Mozilla_Firefox" class="mw-redirect" title="Mozilla Firefox">Mozilla Firefox</a> was the first web browser to implement asm.js-specific optimizations, starting with Firefox 22.<sup id="cite_ref-languages_3-1" class="reference"><a href="#cite_note-languages-3"><span class="cite-bracket">&#91;</span>3<span class="cite-bracket">&#93;</span></a></sup> <a href="/wiki/OdinMonkey" class="mw-redirect" title="OdinMonkey">OdinMonkey</a>, Mozilla's asm.js ahead-of-time compiler used in Firefox, is a component of <a href="/wiki/IonMonkey" class="mw-redirect" title="IonMonkey">IonMonkey</a>, the JIT compiler of <a href="/wiki/SpiderMonkey" title="SpiderMonkey">SpiderMonkey</a>.</li>
<li>Microsoft was implementing support for asm.js in <a href="/wiki/Chakra_(JavaScript_engine)" title="Chakra (JavaScript engine)">Chakra</a>, the JavaScript engine used by <a href="/wiki/Microsoft_Edge" title="Microsoft Edge">Microsoft Edge Legacy</a>, performing validation to produce highly optimised JIT code.<sup id="cite_ref-edge_8-0" class="reference"><a href="#cite_note-edge-8"><span class="cite-bracket">&#91;</span>8<span class="cite-bracket">&#93;</span></a></sup></li>
<li>The optimizations of <a href="/wiki/Google_Chrome" title="Google Chrome">Google Chrome</a>'s <a href="/wiki/V8_(JavaScript_engine)" title="V8 (JavaScript engine)">V8 JavaScript engine</a> in Chrome 28 made asm.js benchmarks more than twice as fast as prior versions of Chrome,<sup id="cite_ref-chromiumblog_9-0" class="reference"><a href="#cite_note-chromiumblog-9"><span class="cite-bracket">&#91;</span>9<span class="cite-bracket">&#93;</span></a></sup> although Chrome's V8 does not use ahead-of-time compilation.</li></ul>
<div class="mw-heading mw-heading2"><h2 id="Adoption">Adoption</h2><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Asm.js&amp;action=edit&amp;section=5" title="Edit section: Adoption"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1236091366"><table class="box-Primary_sources plainlinks metadata ambox ambox-content ambox-Primary_sources" role="presentation"><tbody><tr><td class="mbox-image"><div class="mbox-image-div"><span typeof="mw:File"><a href="File-Question_book-new.svg" class="mw-file-description"><img src="../../../../wikipedia/en/thumb/9/99/Question_book-new_svg/50px-Question_book-new.svg.png" decoding="async" width="50" height="39" class="mw-file-element" srcset="//upload.wikimedia.org/wikipedia/en/thumb/9/99/Question_book-new.svg/75px-Question_book-new.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/9/99/Question_book-new.svg/100px-Question_book-new.svg.png 2x" data-file-width="512" data-file-height="399" /></a></span></div></td><td class="mbox-text"><div class="mbox-text-span">This section <b>relies excessively on <a href="/wiki/Wikipedia:Verifiability" title="Wikipedia:Verifiability">references</a> to <a href="/wiki/Wikipedia:No_original_research#Primary,_secondary_and_tertiary_sources" title="Wikipedia:No original research">primary sources</a></b>.<span class="hide-when-compact"> Please improve this section by adding <a href="/wiki/Wikipedia:No_original_research#Primary,_secondary_and_tertiary_sources" title="Wikipedia:No original research">secondary or tertiary sources</a>. <br /><small><span class="plainlinks"><i>Find sources:</i>&#160;<a rel="nofollow" class="external text" href="https://www.google.com/search?as_eq=wikipedia&amp;q=%22Asm.js%22">"Asm.js"</a>&#160;–&#160;<a rel="nofollow" class="external text" href="https://www.google.com/search?tbm=nws&amp;q=%22Asm.js%22+-wikipedia&amp;tbs=ar:1">news</a>&#160;<b>·</b> <a rel="nofollow" class="external text" href="https://www.google.com/search?&amp;q=%22Asm.js%22&amp;tbs=bkt:s&amp;tbm=bks">newspapers</a>&#160;<b>·</b> <a rel="nofollow" class="external text" href="https://www.google.com/search?tbs=bks:1&amp;q=%22Asm.js%22+-wikipedia">books</a>&#160;<b>·</b> <a rel="nofollow" class="external text" href="https://scholar.google.com/scholar?q=%22Asm.js%22">scholar</a>&#160;<b>·</b> <a rel="nofollow" class="external text" href="https://www.jstor.org/action/doBasicSearch?Query=%22Asm.js%22&amp;acc=on&amp;wc=on">JSTOR</a></span></small></span>  <span class="date-container"><i>(<span class="date">March 2015</span>)</i></span><span class="hide-when-compact"><i> (<small><a href="/wiki/Help:Maintenance_template_removal" title="Help:Maintenance template removal">Learn how and when to remove this message</a></small>)</i></span></div></td></tr></tbody></table>
<p>Almost all of the current applications based on asm.js are C/C++ applications compiled to asm.js using <a href="/wiki/Emscripten" title="Emscripten">Emscripten</a> or Mandreel. With that in mind, the kind of applications that are going to target asm.js in the near future are those that will benefit from the portability of running in a browser but which have a level of complexity for which a direct port to JavaScript would be infeasible.
</p><p>So far, a number of <a href="/wiki/Programming_language" title="Programming language">programming languages</a>, <a href="/wiki/Application_framework" title="Application framework">application frameworks</a>, <a href="/wiki/Program_(computing)" class="mw-redirect" title="Program (computing)">programs</a>, <a href="/wiki/Library_(computing)" title="Library (computing)">libraries</a>, <a href="/wiki/Computer_game" class="mw-redirect" title="Computer game">games</a>, <a href="/wiki/Game_engine" title="Game engine">game engines</a> and other software have already been <a href="/wiki/Porting" title="Porting">ported</a>.<sup id="cite_ref-10" class="reference"><a href="#cite_note-10"><span class="cite-bracket">&#91;</span>10<span class="cite-bracket">&#93;</span></a></sup> Some of them are given below.
</p>
<div class="mw-heading mw-heading3"><h3 id="Programming_languages">Programming languages</h3><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Asm.js&amp;action=edit&amp;section=6" title="Edit section: Programming languages"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<ul><li><a href="/wiki/C/C%2B%2B" class="mw-redirect" title="C/C++">C/C++</a>: <a href="/wiki/Clang" title="Clang">Clang</a> and <a href="/wiki/LLVM" title="LLVM">LLVM</a></li>
<li><a href="/wiki/Rust_(programming_language)" title="Rust (programming language)">Rust</a>: targets <a href="/wiki/Emscripten" title="Emscripten">Emscripten</a></li>
<li><a href="/wiki/Perl" title="Perl">Perl</a>: port of (micro)perl-5.16.3<sup id="cite_ref-11" class="reference"><a href="#cite_note-11"><span class="cite-bracket">&#91;</span>11<span class="cite-bracket">&#93;</span></a></sup></li>
<li><a href="/wiki/Python_(programming_language)" title="Python (programming language)">Python</a> – port of <a href="/wiki/CPython" title="CPython">CPython</a><sup id="cite_ref-12" class="reference"><a href="#cite_note-12"><span class="cite-bracket">&#91;</span>12<span class="cite-bracket">&#93;</span></a></sup></li>
<li><a href="/wiki/Ruby_(programming_language)" title="Ruby (programming language)">Ruby</a> – port of Ruby<sup id="cite_ref-13" class="reference"><a href="#cite_note-13"><span class="cite-bracket">&#91;</span>13<span class="cite-bracket">&#93;</span></a></sup></li></ul>
<div class="mw-heading mw-heading3"><h3 id="Application_frameworks">Application frameworks</h3><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Asm.js&amp;action=edit&amp;section=7" title="Edit section: Application frameworks"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<ul><li>pepper.js: Ports of miscellaneous <a href="/wiki/PNaCl" class="mw-redirect" title="PNaCl">PNaCl</a> apps (earth, voronoi, bullet, etc.)<sup id="cite_ref-14" class="reference"><a href="#cite_note-14"><span class="cite-bracket">&#91;</span>14<span class="cite-bracket">&#93;</span></a></sup></li>
<li><a href="/wiki/Qt_Software" class="mw-redirect" title="Qt Software">Qt</a>: ports of various Qt demos, plus KDE apps, such as <a href="/wiki/Kate_(text_editor)" title="Kate (text editor)">Kate</a><sup id="cite_ref-15" class="reference"><a href="#cite_note-15"><span class="cite-bracket">&#91;</span>15<span class="cite-bracket">&#93;</span></a></sup></li></ul>
<div class="mw-heading mw-heading3"><h3 id="Programs_and_libraries">Programs and libraries</h3><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Asm.js&amp;action=edit&amp;section=8" title="Edit section: Programs and libraries"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<ul><li><a href="/wiki/OpenGL" title="OpenGL">OpenGL</a>, <a href="/wiki/Simple_DirectMedia_Layer" title="Simple DirectMedia Layer">SDL</a>, and <a href="/wiki/Simple_DirectMedia_Layer" title="Simple DirectMedia Layer">SDL2</a><sup id="cite_ref-16" class="reference"><a href="#cite_note-16"><span class="cite-bracket">&#91;</span>16<span class="cite-bracket">&#93;</span></a></sup></li>
<li><a href="/wiki/Vim_(text_editor)" title="Vim (text editor)">Vim</a> (Vi IMproved)<sup id="cite_ref-17" class="reference"><a href="#cite_note-17"><span class="cite-bracket">&#91;</span>17<span class="cite-bracket">&#93;</span></a></sup></li>
<li><a href="/wiki/FreeType" title="FreeType">FreeType</a>: <a href="/wiki/TrueType" title="TrueType">TrueType</a> <a href="/wiki/Font_rendering" class="mw-redirect" title="Font rendering">font rendering</a> in JavaScript, using FreeType<sup id="cite_ref-18" class="reference"><a href="#cite_note-18"><span class="cite-bracket">&#91;</span>18<span class="cite-bracket">&#93;</span></a></sup></li>
<li><a href="/wiki/SQLite" title="SQLite">SQLite</a><sup id="cite_ref-19" class="reference"><a href="#cite_note-19"><span class="cite-bracket">&#91;</span>19<span class="cite-bracket">&#93;</span></a></sup></li>
<li><a href="/wiki/GNU_Privacy_Guard" title="GNU Privacy Guard">GNU Privacy Guard</a><sup id="cite_ref-20" class="reference"><a href="#cite_note-20"><span class="cite-bracket">&#91;</span>20<span class="cite-bracket">&#93;</span></a></sup></li>
<li><a href="/wiki/Ctags" title="Ctags">ctags</a><sup id="cite_ref-21" class="reference"><a href="#cite_note-21"><span class="cite-bracket">&#91;</span>21<span class="cite-bracket">&#93;</span></a></sup></li>
<li><a href="/wiki/Gnuplot" title="Gnuplot">gnuplot</a><sup id="cite_ref-22" class="reference"><a href="#cite_note-22"><span class="cite-bracket">&#91;</span>22<span class="cite-bracket">&#93;</span></a></sup></li>
<li><a href="/wiki/Graphviz" title="Graphviz">Graphviz</a><sup id="cite_ref-23" class="reference"><a href="#cite_note-23"><span class="cite-bracket">&#91;</span>23<span class="cite-bracket">&#93;</span></a></sup></li>
<li><a href="/wiki/Zlib" title="Zlib">zlib</a><sup id="cite_ref-24" class="reference"><a href="#cite_note-24"><span class="cite-bracket">&#91;</span>24<span class="cite-bracket">&#93;</span></a></sup></li></ul>
<div class="mw-heading mw-heading3"><h3 id="Game_engines">Game engines</h3><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Asm.js&amp;action=edit&amp;section=9" title="Edit section: Game engines"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<ul><li><a href="/wiki/Unreal_Engine_3" title="Unreal Engine 3">Unreal Engine 3</a>: was ported in 4 days<sup id="cite_ref-25" class="reference"><a href="#cite_note-25"><span class="cite-bracket">&#91;</span>25<span class="cite-bracket">&#93;</span></a></sup><sup id="cite_ref-26" class="reference"><a href="#cite_note-26"><span class="cite-bracket">&#91;</span>26<span class="cite-bracket">&#93;</span></a></sup></li>
<li><a href="/wiki/Unreal_Engine_4" title="Unreal Engine 4">Unreal Engine 4</a></li>
<li><a href="/wiki/Unity_(game_engine)" title="Unity (game engine)">Unity</a><sup id="cite_ref-27" class="reference"><a href="#cite_note-27"><span class="cite-bracket">&#91;</span>27<span class="cite-bracket">&#93;</span></a></sup></li>
<li><a href="/wiki/ScummVM" title="ScummVM">ScummVM</a>, which supports numerous classic adventure games<sup id="cite_ref-28" class="reference"><a href="#cite_note-28"><span class="cite-bracket">&#91;</span>28<span class="cite-bracket">&#93;</span></a></sup></li>
<li><a href="/wiki/Godot_(game_engine)" title="Godot (game engine)">Godot</a><sup id="cite_ref-29" class="reference"><a href="#cite_note-29"><span class="cite-bracket">&#91;</span>29<span class="cite-bracket">&#93;</span></a></sup></li></ul>
<div class="mw-heading mw-heading3"><h3 id="Games">Games</h3><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Asm.js&amp;action=edit&amp;section=10" title="Edit section: Games"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<ul><li><i><a href="/wiki/Doom_(1993_video_game)" title="Doom (1993 video game)">Doom</a></i>: the open source <a href="/wiki/Freedoom" class="mw-redirect" title="Freedoom">Freedoom</a> game assets running on <a href="/wiki/PrBoom" class="mw-redirect" title="PrBoom">PrBoom</a>, which is based on the open source Doom code<sup id="cite_ref-30" class="reference"><a href="#cite_note-30"><span class="cite-bracket">&#91;</span>30<span class="cite-bracket">&#93;</span></a></sup></li>
<li><i><a href="/wiki/SuperTux" title="SuperTux">SuperTux</a></i><sup id="cite_ref-31" class="reference"><a href="#cite_note-31"><span class="cite-bracket">&#91;</span>31<span class="cite-bracket">&#93;</span></a></sup></li>
<li><i><a href="/wiki/Dune_II" title="Dune II">Dune II</a></i> via OpenDune<sup id="cite_ref-32" class="reference"><a href="#cite_note-32"><span class="cite-bracket">&#91;</span>32<span class="cite-bracket">&#93;</span></a></sup></li>
<li><i><a href="/w/index.php?title=BananaBread&amp;action=edit&amp;redlink=1" class="new" title="BananaBread (page does not exist)">BananaBread</a></i> based on <a href="/wiki/Cube_2:_Sauerbraten" title="Cube 2: Sauerbraten">Cube 2</a><sup id="cite_ref-33" class="reference"><a href="#cite_note-33"><span class="cite-bracket">&#91;</span>33<span class="cite-bracket">&#93;</span></a></sup></li>
<li>Every game in the <a href="/wiki/Humble_Bundle" title="Humble Bundle">Humble Mozilla Bundle</a><sup id="cite_ref-34" class="reference"><a href="#cite_note-34"><span class="cite-bracket">&#91;</span>34<span class="cite-bracket">&#93;</span></a></sup> (<i><a href="/wiki/Super_Hexagon" title="Super Hexagon">Super Hexagon</a></i>, <i><a href="/wiki/AaaaaAAaaaAAAaaAAAAaAAAAA!!!_for_the_Awesome" class="mw-redirect" title="AaaaaAAaaaAAAaaAAAAaAAAAA!!! for the Awesome">AaAaAA! for the Awesome</a></i>, <i><a href="/wiki/Osmos" title="Osmos">Osmos</a></i>, <i><a href="/wiki/Zen_Bound_2" class="mw-redirect" title="Zen Bound 2">Zen Bound 2</a></i>, <i><a href="/wiki/Dustforce#DX_update" title="Dustforce">Dustforce DX</a></i>, <i><a href="/wiki/Voxatron" class="mw-redirect" title="Voxatron">Voxatron</a></i>, <i><a href="/wiki/FTL:_Advanced_Edition" class="mw-redirect" title="FTL: Advanced Edition">FTL: Advanced Edition</a></i> and <i><a href="/wiki/Democracy_3" class="mw-redirect" title="Democracy 3">Democracy 3</a></i>)</li></ul>
<div class="mw-heading mw-heading3"><h3 id="Emulators">Emulators</h3><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Asm.js&amp;action=edit&amp;section=11" title="Edit section: Emulators"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<ul><li>EM-DOSBox: an Emscripten port of <a href="/wiki/DOSBox" title="DOSBox">DOSBox</a><sup id="cite_ref-35" class="reference"><a href="#cite_note-35"><span class="cite-bracket">&#91;</span>35<span class="cite-bracket">&#93;</span></a></sup></li>
<li><a href="/w/index.php?title=Start9.io&amp;action=edit&amp;redlink=1" class="new" title="Start9.io (page does not exist)">Start9.io</a>: a web emulation platform targeting multiple gaming architectures</li>
<li>JSMESS: a port of the <a href="/wiki/Multi_Emulator_Super_System" title="Multi Emulator Super System">MESS</a> emulator for many game consoles and computer systems<sup id="cite_ref-36" class="reference"><a href="#cite_note-36"><span class="cite-bracket">&#91;</span>36<span class="cite-bracket">&#93;</span></a></sup></li></ul>
<div class="mw-heading mw-heading3"><h3 id="Mathematics">Mathematics</h3><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Asm.js&amp;action=edit&amp;section=12" title="Edit section: Mathematics"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<ul><li>HTML5 Fractal Playground<sup id="cite_ref-37" class="reference"><a href="#cite_note-37"><span class="cite-bracket">&#91;</span>37<span class="cite-bracket">&#93;</span></a></sup> – draws iterating-function generated <a href="/wiki/Fractal" title="Fractal">fractals</a>, such as the <a href="/wiki/Mandelbrot_set" title="Mandelbrot set">Mandelbrot set</a>.</li></ul>
<div class="mw-heading mw-heading2"><h2 id="Deprecation">Deprecation</h2><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Asm.js&amp;action=edit&amp;section=13" title="Edit section: Deprecation"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<p>asm.js is mostly rendered obsolete with the introduction of <a href="/wiki/WebAssembly" title="WebAssembly">WebAssembly</a> (wasm), which has a bytecode format that is faster to parse.<sup id="cite_ref-38" class="reference"><a href="#cite_note-38"><span class="cite-bracket">&#91;</span>38<span class="cite-bracket">&#93;</span></a></sup> Efforts to extend JavaScript with more low-level features like SIMD.js has also been suspended since 2017.<sup id="cite_ref-39" class="reference"><a href="#cite_note-39"><span class="cite-bracket">&#91;</span>39<span class="cite-bracket">&#93;</span></a></sup>
</p><p>asm.js remains useful primarily as a "fallback" for wasm, through a program written by the WebAssembly organization that converts wasm to asm.js. There is no dedicated converter from asm.js to wasm, but <a href="/wiki/TypeScript" title="TypeScript">TypeScript</a>-to-wasm compilers can be partially used.<sup id="cite_ref-40" class="reference"><a href="#cite_note-40"><span class="cite-bracket">&#91;</span>40<span class="cite-bracket">&#93;</span></a></sup> The reference WebAssembly emitter binaryen used to contain an <code class="mw-highlight mw-highlight-lang-text mw-content-ltr" id="" style="" dir="ltr">asm2wasm</code> module, but it was removed after Emscripten stopped using it.<sup id="cite_ref-41" class="reference"><a href="#cite_note-41"><span class="cite-bracket">&#91;</span>41<span class="cite-bracket">&#93;</span></a></sup>
</p>
<div class="mw-heading mw-heading2"><h2 id="See_also">See also</h2><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Asm.js&amp;action=edit&amp;section=14" title="Edit section: See also"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<style data-mw-deduplicate="TemplateStyles:r1239009302">.mw-parser-output .portalbox{padding:0;margin:0.5em 0;display:table;box-sizing:border-box;max-width:175px;list-style:none}.mw-parser-output .portalborder{border:1px solid var(--border-color-base,#a2a9b1);padding:0.1em;background:var(--background-color-neutral-subtle,#f8f9fa)}.mw-parser-output .portalbox-entry{display:table-row;font-size:85%;line-height:110%;height:1.9em;font-style:italic;font-weight:bold}.mw-parser-output .portalbox-image{display:table-cell;padding:0.2em;vertical-align:middle;text-align:center}.mw-parser-output .portalbox-link{display:table-cell;padding:0.2em 0.2em 0.2em 0.3em;vertical-align:middle}@media(min-width:720px){.mw-parser-output .portalleft{clear:left;float:left;margin:0.5em 1em 0.5em 0}.mw-parser-output .portalright{clear:right;float:right;margin:0.5em 0 0.5em 1em}}</style><ul role="navigation" aria-label="Portals" class="noprint portalbox portalborder portalright">
<li class="portalbox-entry"><span class="portalbox-image"><span class="noviewer" typeof="mw:File"><span><img alt="" src="//upload.wikimedia.org/wikipedia/commons/thumb/3/31/Free_and_open-source_software_logo_%282009%29.svg/28px-Free_and_open-source_software_logo_%282009%29.svg.png" decoding="async" width="28" height="28" class="mw-file-element" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/3/31/Free_and_open-source_software_logo_%282009%29.svg/42px-Free_and_open-source_software_logo_%282009%29.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/3/31/Free_and_open-source_software_logo_%282009%29.svg/56px-Free_and_open-source_software_logo_%282009%29.svg.png 2x" data-file-width="512" data-file-height="512" /></span></span></span><span class="portalbox-link"><a href="/wiki/Portal:Free_and_open-source_software" title="Portal:Free and open-source software">Free and open-source software portal</a></span></li></ul>
<ul><li><a href="/wiki/CrossBridge" title="CrossBridge">CrossBridge</a></li>
<li><a href="/wiki/RPython" class="mw-redirect" title="RPython">RPython</a></li>
<li><a href="/wiki/AssemblyScript" title="AssemblyScript">AssemblyScript</a></li></ul>
<div class="mw-heading mw-heading2"><h2 id="References">References</h2><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Asm.js&amp;action=edit&amp;section=15" title="Edit section: References"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<style data-mw-deduplicate="TemplateStyles:r1239543626">.mw-parser-output .reflist{margin-bottom:0.5em;list-style-type:decimal}@media screen{.mw-parser-output .reflist{font-size:90%}}.mw-parser-output .reflist .references{font-size:100%;margin-bottom:0;list-style-type:inherit}.mw-parser-output .reflist-columns-2{column-width:30em}.mw-parser-output .reflist-columns-3{column-width:25em}.mw-parser-output .reflist-columns{margin-top:0.3em}.mw-parser-output .reflist-columns ol{margin-top:0}.mw-parser-output .reflist-columns li{page-break-inside:avoid;break-inside:avoid-column}.mw-parser-output .reflist-upper-alpha{list-style-type:upper-alpha}.mw-parser-output .reflist-upper-roman{list-style-type:upper-roman}.mw-parser-output .reflist-lower-alpha{list-style-type:lower-alpha}.mw-parser-output .reflist-lower-greek{list-style-type:lower-greek}.mw-parser-output .reflist-lower-roman{list-style-type:lower-roman}</style><div class="reflist reflist-columns references-column-width" style="column-width: 30em;">
<ol class="references">
<li id="cite_note-1"><span class="mw-cite-backlink"><b><a href="#cite_ref-1">^</a></b></span> <span class="reference-text"><style data-mw-deduplicate="TemplateStyles:r1238218222">.mw-parser-output cite.citation{font-style:inherit;word-wrap:break-word}.mw-parser-output .citation q{quotes:"\"""\"""'""'"}.mw-parser-output .citation:target{background-color:rgba(0,127,255,0.133)}.mw-parser-output .id-lock-free.id-lock-free a{background:url("../../../../wikipedia/commons/6/65/Lock-green.svg")right 0.1em center/9px no-repeat}.mw-parser-output .id-lock-limited.id-lock-limited a,.mw-parser-output .id-lock-registration.id-lock-registration a{background:url("../../../../wikipedia/commons/d/d6/Lock-gray-alt-2.svg")right 0.1em center/9px no-repeat}.mw-parser-output .id-lock-subscription.id-lock-subscription a{background:url("../../../../wikipedia/commons/a/aa/Lock-red-alt-2.svg")right 0.1em center/9px no-repeat}.mw-parser-output .cs1-ws-icon a{background:url("../../../../wikipedia/commons/4/4c/Wikisource-logo.svg")right 0.1em center/12px no-repeat}body:not(.skin-timeless):not(.skin-minerva) .mw-parser-output .id-lock-free a,body:not(.skin-timeless):not(.skin-minerva) .mw-parser-output .id-lock-limited a,body:not(.skin-timeless):not(.skin-minerva) .mw-parser-output .id-lock-registration a,body:not(.skin-timeless):not(.skin-minerva) .mw-parser-output .id-lock-subscription a,body:not(.skin-timeless):not(.skin-minerva) .mw-parser-output .cs1-ws-icon a{background-size:contain;padding:0 1em 0 0}.mw-parser-output .cs1-code{color:inherit;background:inherit;border:none;padding:inherit}.mw-parser-output .cs1-hidden-error{display:none;color:var(--color-error,#d33)}.mw-parser-output .cs1-visible-error{color:var(--color-error,#d33)}.mw-parser-output .cs1-maint{display:none;color:#085;margin-left:0.3em}.mw-parser-output .cs1-kern-left{padding-left:0.2em}.mw-parser-output .cs1-kern-right{padding-right:0.2em}.mw-parser-output .citation .mw-selflink{font-weight:inherit}@media screen{.mw-parser-output .cs1-format{font-size:95%}html.skin-theme-clientpref-night .mw-parser-output .cs1-maint{color:#18911f}}@media screen and (prefers-color-scheme:dark){html.skin-theme-clientpref-os .mw-parser-output .cs1-maint{color:#18911f}}</style><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://blog.mozilla.org/luke/2013/03/21/asm-js-in-firefox-nightly/">"asm.js in Firefox Nightly"</a>. <i>Luke Wagner's blog</i>. 21 Mar 2013<span class="reference-accessdate">. Retrieved <span class="nowrap">13 Nov</span> 2014</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=Luke+Wagner%27s+blog&amp;rft.atitle=asm.js+in+Firefox+Nightly&amp;rft.date=2013-03-21&amp;rft_id=https%3A%2F%2Fblog.mozilla.org%2Fluke%2F2013%2F03%2F21%2Fasm-js-in-firefox-nightly%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-github.com-2"><span class="mw-cite-backlink">^ <a href="#cite_ref-github.com_2-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-github.com_2-1"><sup><i><b>b</b></i></sup></a></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://github.com/kripken/emscripten">"kripken/emscripten · GitHub"</a>. Github.com<span class="reference-accessdate">. Retrieved <span class="nowrap">2015-03-05</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=kripken%2Femscripten+%C2%B7+GitHub&amp;rft.pub=Github.com&amp;rft_id=https%3A%2F%2Fgithub.com%2Fkripken%2Femscripten&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-languages-3"><span class="mw-cite-backlink">^ <a href="#cite_ref-languages_3-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-languages_3-1"><sup><i><b>b</b></i></sup></a></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://www.mozilla.org/en-US/firefox/22.0/releasenotes/">"Firefox 22.0 release notes"</a>. Mozilla<span class="reference-accessdate">. Retrieved <span class="nowrap">July 4,</span> 2013</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Firefox+22.0+release+notes&amp;rft.pub=Mozilla&amp;rft_id=https%3A%2F%2Fwww.mozilla.org%2Fen-US%2Ffirefox%2F22.0%2Freleasenotes%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-4"><span class="mw-cite-backlink"><b><a href="#cite_ref-4">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="http://asmjs.org/spec/latest/">"Asm.js"</a>. Asm.js<span class="reference-accessdate">. Retrieved <span class="nowrap">2015-03-05</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Asm.js&amp;rft.pub=Asm.js&amp;rft_id=http%3A%2F%2Fasmjs.org%2Fspec%2Flatest%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-5"><span class="mw-cite-backlink"><b><a href="#cite_ref-5">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="http://asmjs.org/faq.html">"asm.js&#160;— frequently asked questions"</a>. Asmjs.org. July 26, 2014.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=asm.js+%E2%80%94+frequently+asked+questions&amp;rft.pub=Asmjs.org&amp;rft.date=2014-07-26&amp;rft_id=http%3A%2F%2Fasmjs.org%2Ffaq.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-6"><span class="mw-cite-backlink"><b><a href="#cite_ref-6">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="http://asmjs.org/faq.html">"asm.js"</a>. Asm.js<span class="reference-accessdate">. Retrieved <span class="nowrap">2015-03-05</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=asm.js&amp;rft.pub=Asm.js&amp;rft_id=http%3A%2F%2Fasmjs.org%2Ffaq.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-float32-7"><span class="mw-cite-backlink">^ <a href="#cite_ref-float32_7-0"><sup><i><b>a</b></i></sup></a> <a href="#cite_ref-float32_7-1"><sup><i><b>b</b></i></sup></a></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFAlon_ZakaiRobert_Nyman2013" class="citation web cs1">Alon Zakai; Robert Nyman (20 December 2013). <a rel="nofollow" class="external text" href="https://hacks.mozilla.org/2013/12/gap-between-asm-js-and-native-performance-gets-even-narrower-with-float32-optimizations/">"Gap between asm.js and native performance gets even narrower with float32 optimizations"</a><span class="reference-accessdate">. Retrieved <span class="nowrap">11 April</span> 2014</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Gap+between+asm.js+and+native+performance+gets+even+narrower+with+float32+optimizations&amp;rft.date=2013-12-20&amp;rft.au=Alon+Zakai&amp;rft.au=Robert+Nyman&amp;rft_id=https%3A%2F%2Fhacks.mozilla.org%2F2013%2F12%2Fgap-between-asm-js-and-native-performance-gets-even-narrower-with-float32-optimizations%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-edge-8"><span class="mw-cite-backlink"><b><a href="#cite_ref-edge_8-0">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://blogs.windows.com/msedgedev/2015/05/07/bringing-asm-js-to-chakra-microsoft-edge/">"Bringing Asm.js to Chakra and Microsoft Edge"</a>. Microsoft. May 7, 2015<span class="reference-accessdate">. Retrieved <span class="nowrap">May 7,</span> 2015</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Bringing+Asm.js+to+Chakra+and+Microsoft+Edge&amp;rft.pub=Microsoft&amp;rft.date=2015-05-07&amp;rft_id=https%3A%2F%2Fblogs.windows.com%2Fmsedgedev%2F2015%2F05%2F07%2Fbringing-asm-js-to-chakra-microsoft-edge%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-chromiumblog-9"><span class="mw-cite-backlink"><b><a href="#cite_ref-chromiumblog_9-0">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://blog.chromium.org/2013/05/chrome-28-beta-more-immersive-web.html">"Chrome 28 Beta: A more immersive web, everywhere"</a>. Google<span class="reference-accessdate">. Retrieved <span class="nowrap">2013-07-06</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Chrome+28+Beta%3A+A+more+immersive+web%2C+everywhere&amp;rft.pub=Google&amp;rft_id=https%3A%2F%2Fblog.chromium.org%2F2013%2F05%2Fchrome-28-beta-more-immersive-web.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-10"><span class="mw-cite-backlink"><b><a href="#cite_ref-10">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://github.com/kripken/emscripten/wiki#games-and-game-engines">"Home&#160;— Demos&#160;— Games and Game Engines"</a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Home+%E2%80%94+Demos+%E2%80%94+Games+and+Game+Engines&amp;rft_id=https%3A%2F%2Fgithub.com%2Fkripken%2Femscripten%2Fwiki%23games-and-game-engines&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-11"><span class="mw-cite-backlink"><b><a href="#cite_ref-11">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://web.archive.org/web/20130803065424/http://themucker.github.io/plu/">"plu"</a>. Themucker.github.io. Archived from <a rel="nofollow" class="external text" href="https://themucker.github.io/plu/">the original</a> on 2013-08-03<span class="reference-accessdate">. Retrieved <span class="nowrap">2015-03-05</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=plu&amp;rft.pub=Themucker.github.io&amp;rft_id=https%3A%2F%2Fthemucker.github.io%2Fplu%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-12"><span class="mw-cite-backlink"><b><a href="#cite_ref-12">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://replit.com/languages/python3">"repl.it&#160;— Python"</a>. Repl.it<span class="reference-accessdate">. Retrieved <span class="nowrap">2015-03-05</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=repl.it+%E2%80%94+Python&amp;rft.pub=Repl.it&amp;rft_id=https%3A%2F%2Freplit.com%2Flanguages%2Fpython3&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-13"><span class="mw-cite-backlink"><b><a href="#cite_ref-13">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="http://repl.it/languages/Ruby">"repl.it&#160;— Ruby"</a>. Repl.it<span class="reference-accessdate">. Retrieved <span class="nowrap">2015-03-05</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=repl.it+%E2%80%94+Ruby&amp;rft.pub=Repl.it&amp;rft_id=http%3A%2F%2Frepl.it%2Flanguages%2FRuby&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-14"><span class="mw-cite-backlink"><b><a href="#cite_ref-14">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://web.archive.org/web/20200214073858/http://trypepperjs.appspot.com/examples.html">"pepper.js Examples"</a>. Trypepperjs.appspot.com. Archived from <a rel="nofollow" class="external text" href="https://trypepperjs.appspot.com/examples.html">the original</a> on 2020-02-14<span class="reference-accessdate">. Retrieved <span class="nowrap">2015-03-05</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=pepper.js+Examples&amp;rft.pub=Trypepperjs.appspot.com&amp;rft_id=https%3A%2F%2Ftrypepperjs.appspot.com%2Fexamples.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-15"><span class="mw-cite-backlink"><b><a href="#cite_ref-15">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://web.archive.org/web/20150213134306/http://vps2.etotheipiplusone.com:30176/redmine/projects/emscripten-qt/wiki/Demos">"emscripten-qt&#160;— Demos"</a>. Vps.etotheipiplusone.com. Archived from <a rel="nofollow" class="external text" href="http://vps2.etotheipiplusone.com:30176/redmine/projects/emscripten-qt/wiki/Demos">the original</a> on 2015-02-13<span class="reference-accessdate">. Retrieved <span class="nowrap">2015-03-05</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=emscripten-qt+%E2%80%94+Demos&amp;rft.pub=Vps.etotheipiplusone.com&amp;rft_id=http%3A%2F%2Fvps2.etotheipiplusone.com%3A30176%2Fredmine%2Fprojects%2Femscripten-qt%2Fwiki%2FDemos&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-16"><span class="mw-cite-backlink"><b><a href="#cite_ref-16">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://kripken.github.io/emscripten-site/docs/introducing_emscripten/about_emscripten.html#porting-code-to-use-emscripten">"About Emscripten"</a>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=About+Emscripten&amp;rft_id=https%3A%2F%2Fkripken.github.io%2Femscripten-site%2Fdocs%2Fintroducing_emscripten%2Fabout_emscripten.html%23porting-code-to-use-emscripten&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-17"><span class="mw-cite-backlink"><b><a href="#cite_ref-17">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://coolwanglu.github.io/vim.js/web/vim.html">"Vim.js&#160;— JavaScript port of Vim"</a>. Coolwanglu.github.io<span class="reference-accessdate">. Retrieved <span class="nowrap">2015-03-05</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Vim.js+%E2%80%94+JavaScript+port+of+Vim&amp;rft.pub=Coolwanglu.github.io&amp;rft_id=https%3A%2F%2Fcoolwanglu.github.io%2Fvim.js%2Fweb%2Fvim.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-18"><span class="mw-cite-backlink"><b><a href="#cite_ref-18">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://web.archive.org/web/20121012061814/http://www.syntensity.com/static/freetype.html">"TrueType Fonts in JavaScript"</a>. Archived from <a rel="nofollow" class="external text" href="http://www.syntensity.com/static/freetype.html">the original</a> on 2012-10-12.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=TrueType+Fonts+in+JavaScript&amp;rft_id=http%3A%2F%2Fwww.syntensity.com%2Fstatic%2Ffreetype.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-19"><span class="mw-cite-backlink"><b><a href="#cite_ref-19">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://github.com/kripken/sql.js">"Port of SQLite to Javascript"</a>. Github.com<span class="reference-accessdate">. Retrieved <span class="nowrap">2015-03-05</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Port+of+SQLite+to+Javascript&amp;rft.pub=Github.com&amp;rft_id=https%3A%2F%2Fgithub.com%2Fkripken%2Fsql.js&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-20"><span class="mw-cite-backlink"><b><a href="#cite_ref-20">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://manuels.github.io/unix-toolbox.js-gnupg/">"GnuPG.js"</a>. Manuuels.github.io<span class="reference-accessdate">. Retrieved <span class="nowrap">2015-03-05</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=GnuPG.js&amp;rft.pub=Manuuels.github.io&amp;rft_id=https%3A%2F%2Fmanuels.github.io%2Funix-toolbox.js-gnupg%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-21"><span class="mw-cite-backlink"><b><a href="#cite_ref-21">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://github.com/larsxschneider/ctags.js">"ctags in the browser"</a>. Github.com<span class="reference-accessdate">. Retrieved <span class="nowrap">2015-03-05</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=ctags+in+the+browser&amp;rft.pub=Github.com&amp;rft_id=https%3A%2F%2Fgithub.com%2Flarsxschneider%2Fctags.js&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-22"><span class="mw-cite-backlink"><b><a href="#cite_ref-22">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://web.archive.org/web/20150222081533/http://gnuplot.respawned.com/">"Gnuplot online"</a>. Gnuplot.respawned.com. Archived from <a rel="nofollow" class="external text" href="http://gnuplot.respawned.com/">the original</a> on 2015-02-22<span class="reference-accessdate">. Retrieved <span class="nowrap">2015-03-05</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Gnuplot+online&amp;rft.pub=Gnuplot.respawned.com&amp;rft_id=http%3A%2F%2Fgnuplot.respawned.com%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-23"><span class="mw-cite-backlink"><b><a href="#cite_ref-23">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://github.com/mdaines/viz.js">"A hack to put GraphViz on the web"</a>. Github.com<span class="reference-accessdate">. Retrieved <span class="nowrap">2015-03-05</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=A+hack+to+put+GraphViz+on+the+web.&amp;rft.pub=Github.com&amp;rft_id=https%3A%2F%2Fgithub.com%2Fmdaines%2Fviz.js&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-24"><span class="mw-cite-backlink"><b><a href="#cite_ref-24">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://github.com/richardassar/zpipe">"JavaScript port of ZLib DEFLATE for the browser"</a>. Github.com<span class="reference-accessdate">. Retrieved <span class="nowrap">2015-03-05</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=JavaScript+port+of+ZLib+DEFLATE+for+the+browser&amp;rft.pub=Github.com&amp;rft_id=https%3A%2F%2Fgithub.com%2Frichardassar%2Fzpipe&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-25"><span class="mw-cite-backlink"><b><a href="#cite_ref-25">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation pressrelease cs1"><a rel="nofollow" class="external text" href="https://web.archive.org/web/20161130004131/https://www.unrealengine.com/news/epic-games-releases-epic-citadel-on-the-web">"Epic Games Releases 'Epic Citadel' on the Web"</a>. <i>UnrealEngine.com</i> (Press release). May 2, 2013. Archived from <a rel="nofollow" class="external text" href="https://www.unrealengine.com/news/epic-games-releases-epic-citadel-on-the-web">the original</a> on November 30, 2016<span class="reference-accessdate">. Retrieved <span class="nowrap">October 24,</span> 2014</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Epic+Games+Releases+%E2%80%98Epic+Citadel%E2%80%99+on+the+Web&amp;rft.date=2013-05-02&amp;rft_id=https%3A%2F%2Fwww.unrealengine.com%2Fnews%2Fepic-games-releases-epic-citadel-on-the-web&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-26"><span class="mw-cite-backlink"><b><a href="#cite_ref-26">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="http://www.extremetech.com/gaming/151900-unreal-engine-3-ported-to-javascript-and-webgl-works-in-any-modern-browser">"Unreal Engine 3 ported to JavaScript and WebGL, works in any modern browser"</a>. <i><a href="/wiki/ExtremeTech" title="ExtremeTech">ExtremeTech</a></i>. <a href="/wiki/Ziff_Davis" title="Ziff Davis">Ziff Davis</a><span class="reference-accessdate">. Retrieved <span class="nowrap">2015-03-05</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=ExtremeTech&amp;rft.atitle=Unreal+Engine+3+ported+to+JavaScript+and+WebGL%2C+works+in+any+modern+browser&amp;rft_id=http%3A%2F%2Fwww.extremetech.com%2Fgaming%2F151900-unreal-engine-3-ported-to-javascript-and-webgl-works-in-any-modern-browser&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-27"><span class="mw-cite-backlink"><b><a href="#cite_ref-27">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="http://blogs.unity3d.com/2014/04/29/on-the-future-of-web-publishing-in-unity/">"On the future of Web publishing in Unity"</a>. Blogs.unity3d.com. April 29, 2014.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=On+the+future+of+Web+publishing+in+Unity&amp;rft.pub=Blogs.unity3d.com&amp;rft.date=2014-04-29&amp;rft_id=http%3A%2F%2Fblogs.unity3d.com%2F2014%2F04%2F29%2Fon-the-future-of-web-publishing-in-unity%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-28"><span class="mw-cite-backlink"><b><a href="#cite_ref-28">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://web.archive.org/web/20150306054337/http://clb.demon.fi/html5scummvm/">"HTML5"</a>. Clb.demon.fi. Archived from <a rel="nofollow" class="external text" href="http://clb.demon.fi/html5scummvm/">the original</a> on 2015-03-06<span class="reference-accessdate">. Retrieved <span class="nowrap">2015-03-05</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=HTML5&amp;rft.pub=Clb.demon.fi&amp;rft_id=http%3A%2F%2Fclb.demon.fi%2Fhtml5scummvm%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-29"><span class="mw-cite-backlink"><b><a href="#cite_ref-29">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="http://docs.godotengine.org/en/stable/reference/compiling_for_web.html">"Compiling for the Web"</a>. <i>godotengine.org</i>. November 10, 2016.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=godotengine.org&amp;rft.atitle=Compiling+for+the+Web&amp;rft.date=2016-11-10&amp;rft_id=http%3A%2F%2Fdocs.godotengine.org%2Fen%2Fstable%2Freference%2Fcompiling_for_web.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-30"><span class="mw-cite-backlink"><b><a href="#cite_ref-30">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://kripken.github.io/boon/boon.html">"Emscripten-Generated Code"</a>. Kripken.github.io<span class="reference-accessdate">. Retrieved <span class="nowrap">2015-03-05</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Emscripten-Generated+Code&amp;rft.pub=Kripken.github.io&amp;rft_id=https%3A%2F%2Fkripken.github.io%2Fboon%2Fboon.html&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-31"><span class="mw-cite-backlink"><b><a href="#cite_ref-31">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://forandom.github.io/WebSupertux/">"Emscripten-Generated Code"</a>. Forandom.github.io<span class="reference-accessdate">. Retrieved <span class="nowrap">2015-03-05</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Emscripten-Generated+Code&amp;rft.pub=Forandom.github.io&amp;rft_id=https%3A%2F%2Fforandom.github.io%2FWebSupertux%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-32"><span class="mw-cite-backlink"><b><a href="#cite_ref-32">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite id="CITEREFGuryanov_Aleksander" class="citation web cs1">Guryanov Aleksander. <a rel="nofollow" class="external text" href="http://epicport.com/en/dune2">"Dune 2 - Online (browser version)"</a>. Epicport<span class="reference-accessdate">. Retrieved <span class="nowrap">2015-03-05</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Dune+2+-+Online+%28browser+version%29&amp;rft.pub=Epicport&amp;rft.au=Guryanov+Aleksander&amp;rft_id=http%3A%2F%2Fepicport.com%2Fen%2Fdune2&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-33"><span class="mw-cite-backlink"><b><a href="#cite_ref-33">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://developer.mozilla.org/en-US/demos/detail/bananabread/">"Mozilla Banana Bread Demo"</a>. Developer.mozilla.org<span class="reference-accessdate">. Retrieved <span class="nowrap">2015-03-05</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Mozilla+Banana+Bread+Demo&amp;rft.pub=Developer.mozilla.org&amp;rft_id=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdemos%2Fdetail%2Fbananabread%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-34"><span class="mw-cite-backlink"><b><a href="#cite_ref-34">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://arstechnica.com/gaming/2014/10/humble-mozilla-bundle-pushes-webgl-powered-browser-gaming/">"Humble Mozilla Bundle pushes WebGL-powered browser gaming"</a>. Ars Technica. 15 Oct 2014<span class="reference-accessdate">. Retrieved <span class="nowrap">15 Oct</span> 2014</span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Humble+Mozilla+Bundle+pushes+WebGL-powered+browser+gaming&amp;rft.pub=Ars+Technica&amp;rft.date=2014-10-15&amp;rft_id=https%3A%2F%2Farstechnica.com%2Fgaming%2F2014%2F10%2Fhumble-mozilla-bundle-pushes-webgl-powered-browser-gaming%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-35"><span class="mw-cite-backlink"><b><a href="#cite_ref-35">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://github.com/dreamlayers/em-dosbox">"EM-Dosbox on Github"</a><span class="reference-accessdate">. Retrieved <span class="nowrap">2015-04-09</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=EM-Dosbox+on+Github&amp;rft_id=https%3A%2F%2Fgithub.com%2Fdreamlayers%2Fem-dosbox&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-36"><span class="mw-cite-backlink"><b><a href="#cite_ref-36">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="http://jsmess.textfiles.com/">"Page Redirection"</a>. Jsmess.textfiles.com<span class="reference-accessdate">. Retrieved <span class="nowrap">2015-03-05</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=Page+Redirection&amp;rft.pub=Jsmess.textfiles.com&amp;rft_id=http%3A%2F%2Fjsmess.textfiles.com%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-37"><span class="mw-cite-backlink"><b><a href="#cite_ref-37">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://web.archive.org/web/20150222131913/http://danielsadventure.info/html5fractal/">"HTML5 Fractal Playground"</a>. Danielsadvernture.info. Archived from <a rel="nofollow" class="external text" href="http://danielsadventure.info/html5fractal">the original</a> on 2015-02-22<span class="reference-accessdate">. Retrieved <span class="nowrap">2015-03-05</span></span>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=HTML5+Fractal+Playground&amp;rft.pub=Danielsadvernture.info&amp;rft_id=http%3A%2F%2Fdanielsadventure.info%2Fhtml5fractal&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-38"><span class="mw-cite-backlink"><b><a href="#cite_ref-38">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://webassembly.org/docs/faq/">"FAQ"</a>. <i>WebAssembly</i>.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=WebAssembly&amp;rft.atitle=FAQ&amp;rft_id=https%3A%2F%2Fwebassembly.org%2Fdocs%2Ffaq%2F&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-39"><span class="mw-cite-backlink"><b><a href="#cite_ref-39">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://github.com/tc39/ecmascript_simd">"TC39 proposal for SIMD.js"</a>. Ecma TC39. 23 June 2020.</cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook&amp;rft.genre=unknown&amp;rft.btitle=TC39+proposal+for+SIMD.js&amp;rft.pub=Ecma+TC39&amp;rft.date=2020-06-23&amp;rft_id=https%3A%2F%2Fgithub.com%2Ftc39%2Fecmascript_simd&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-40"><span class="mw-cite-backlink"><b><a href="#cite_ref-40">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://github.com/WebAssembly/binaryen">"WebAssembly/binaryen"</a>. <i>GitHub</i>. WebAssembly. 25 June 2020. <q>AssemblyScript which compiles TypeScript to Binaryen IR; wasm2js which compiles WebAssembly to JS</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=GitHub&amp;rft.atitle=WebAssembly%2Fbinaryen&amp;rft.date=2020-06-25&amp;rft_id=https%3A%2F%2Fgithub.com%2FWebAssembly%2Fbinaryen&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span></span>
</li>
<li id="cite_note-41"><span class="mw-cite-backlink"><b><a href="#cite_ref-41">^</a></b></span> <span class="reference-text"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1238218222"><cite class="citation web cs1"><a rel="nofollow" class="external text" href="https://github.com/WebAssembly/binaryen/blob/47c15838ad4378430b2d216fbf4474b71d3fb66f/CHANGELOG.md#v97">"Binaryen Changelog"</a>. <i>GitHub</i>. <q>v97: Remove asm2wasm, which supported Emscripten's fastcomp backend, after fastcomp was removed.</q></cite><span title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=unknown&amp;rft.jtitle=GitHub&amp;rft.atitle=Binaryen+Changelog&amp;rft_id=https%3A%2F%2Fgithub.com%2FWebAssembly%2Fbinaryen%2Fblob%2F47c15838ad4378430b2d216fbf4474b71d3fb66f%2FCHANGELOG.md%23v97&amp;rfr_id=info%3Asid%2Fen.wikipedia.org%3AAsm.js" class="Z3988"></span> (See also the <a rel="nofollow" class="external text" href="https://github.com/WebAssembly/binaryen/pull/3042">PR#3042</a>.)</span>
</li>
</ol></div>
<div class="mw-heading mw-heading2"><h2 id="External_links">External links</h2><span class="mw-editsection"><span class="mw-editsection-bracket">[</span><a href="/w/index.php?title=Asm.js&amp;action=edit&amp;section=16" title="Edit section: External links"><span>edit</span></a><span class="mw-editsection-bracket">]</span></span></div>
<ul><li><span class="official-website"><span class="url"><a rel="nofollow" class="external text" href="http://asmjs.org">Official website</a></span></span> <span class="mw-valign-text-top" typeof="mw:File/Frameless"><a href="https://www.wikidata.org/wiki/Q13496636#P856" title="Edit this at Wikidata"><img alt="Edit this at Wikidata" src="../../../../wikipedia/en/thumb/8/8a/OOjs_UI_icon_edit-ltr-progressive_svg/10px-OOjs_UI_icon_edit-ltr-progressive.svg.png" decoding="async" width="10" height="10" class="mw-file-element" srcset="//upload.wikimedia.org/wikipedia/en/thumb/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg/15px-OOjs_UI_icon_edit-ltr-progressive.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg/20px-OOjs_UI_icon_edit-ltr-progressive.svg.png 2x" data-file-width="20" data-file-height="20" /></a></span></li></ul>
<div class="navbox-styles"><style data-mw-deduplicate="TemplateStyles:r1129693374">.mw-parser-output .hlist dl,.mw-parser-output .hlist ol,.mw-parser-output .hlist ul{margin:0;padding:0}.mw-parser-output .hlist dd,.mw-parser-output .hlist dt,.mw-parser-output .hlist li{margin:0;display:inline}.mw-parser-output .hlist.inline,.mw-parser-output .hlist.inline dl,.mw-parser-output .hlist.inline ol,.mw-parser-output .hlist.inline ul,.mw-parser-output .hlist dl dl,.mw-parser-output .hlist dl ol,.mw-parser-output .hlist dl ul,.mw-parser-output .hlist ol dl,.mw-parser-output .hlist ol ol,.mw-parser-output .hlist ol ul,.mw-parser-output .hlist ul dl,.mw-parser-output .hlist ul ol,.mw-parser-output .hlist ul ul{display:inline}.mw-parser-output .hlist .mw-empty-li{display:none}.mw-parser-output .hlist dt::after{content:": "}.mw-parser-output .hlist dd::after,.mw-parser-output .hlist li::after{content:" · ";font-weight:bold}.mw-parser-output .hlist dd:last-child::after,.mw-parser-output .hlist dt:last-child::after,.mw-parser-output .hlist li:last-child::after{content:none}.mw-parser-output .hlist dd dd:first-child::before,.mw-parser-output .hlist dd dt:first-child::before,.mw-parser-output .hlist dd li:first-child::before,.mw-parser-output .hlist dt dd:first-child::before,.mw-parser-output .hlist dt dt:first-child::before,.mw-parser-output .hlist dt li:first-child::before,.mw-parser-output .hlist li dd:first-child::before,.mw-parser-output .hlist li dt:first-child::before,.mw-parser-output .hlist li li:first-child::before{content:" (";font-weight:normal}.mw-parser-output .hlist dd dd:last-child::after,.mw-parser-output .hlist dd dt:last-child::after,.mw-parser-output .hlist dd li:last-child::after,.mw-parser-output .hlist dt dd:last-child::after,.mw-parser-output .hlist dt dt:last-child::after,.mw-parser-output .hlist dt li:last-child::after,.mw-parser-output .hlist li dd:last-child::after,.mw-parser-output .hlist li dt:last-child::after,.mw-parser-output .hlist li li:last-child::after{content:")";font-weight:normal}.mw-parser-output .hlist ol{counter-reset:listitem}.mw-parser-output .hlist ol>li{counter-increment:listitem}.mw-parser-output .hlist ol>li::before{content:" "counter(listitem)"\a0 "}.mw-parser-output .hlist dd ol>li:first-child::before,.mw-parser-output .hlist dt ol>li:first-child::before,.mw-parser-output .hlist li ol>li:first-child::before{content:" ("counter(listitem)"\a0 "}</style><style data-mw-deduplicate="TemplateStyles:r1236075235">.mw-parser-output .navbox{box-sizing:border-box;border:1px solid #a2a9b1;width:100%;clear:both;font-size:88%;text-align:center;padding:1px;margin:1em auto 0}.mw-parser-output .navbox .navbox{margin-top:0}.mw-parser-output .navbox+.navbox,.mw-parser-output .navbox+.navbox-styles+.navbox{margin-top:-1px}.mw-parser-output .navbox-inner,.mw-parser-output .navbox-subgroup{width:100%}.mw-parser-output .navbox-group,.mw-parser-output .navbox-title,.mw-parser-output .navbox-abovebelow{padding:0.25em 1em;line-height:1.5em;text-align:center}.mw-parser-output .navbox-group{white-space:nowrap;text-align:right}.mw-parser-output .navbox,.mw-parser-output .navbox-subgroup{background-color:#fdfdfd}.mw-parser-output .navbox-list{line-height:1.5em;border-color:#fdfdfd}.mw-parser-output .navbox-list-with-group{text-align:left;border-left-width:2px;border-left-style:solid}.mw-parser-output tr+tr>.navbox-abovebelow,.mw-parser-output tr+tr>.navbox-group,.mw-parser-output tr+tr>.navbox-image,.mw-parser-output tr+tr>.navbox-list{border-top:2px solid #fdfdfd}.mw-parser-output .navbox-title{background-color:#ccf}.mw-parser-output .navbox-abovebelow,.mw-parser-output .navbox-group,.mw-parser-output .navbox-subgroup .navbox-title{background-color:#ddf}.mw-parser-output .navbox-subgroup .navbox-group,.mw-parser-output .navbox-subgroup .navbox-abovebelow{background-color:#e6e6ff}.mw-parser-output .navbox-even{background-color:#f7f7f7}.mw-parser-output .navbox-odd{background-color:transparent}.mw-parser-output .navbox .hlist td dl,.mw-parser-output .navbox .hlist td ol,.mw-parser-output .navbox .hlist td ul,.mw-parser-output .navbox td.hlist dl,.mw-parser-output .navbox td.hlist ol,.mw-parser-output .navbox td.hlist ul{padding:0.125em 0}.mw-parser-output .navbox .navbar{display:block;font-size:100%}.mw-parser-output .navbox-title .navbar{float:left;text-align:left;margin-right:0.5em}body.skin--responsive .mw-parser-output .navbox-image img{max-width:none!important}@media print{body.ns-0 .mw-parser-output .navbox{display:none!important}}</style></div><div role="navigation" class="navbox" aria-labelledby="JavaScript" style="padding:3px"><table class="nowraplinks mw-collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit"><tbody><tr><th scope="col" class="navbox-title" colspan="2"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1129693374"><style data-mw-deduplicate="TemplateStyles:r1239400231">.mw-parser-output .navbar{display:inline;font-size:88%;font-weight:normal}.mw-parser-output .navbar-collapse{float:left;text-align:left}.mw-parser-output .navbar-boxtext{word-spacing:0}.mw-parser-output .navbar ul{display:inline-block;white-space:nowrap;line-height:inherit}.mw-parser-output .navbar-brackets::before{margin-right:-0.125em;content:"[ "}.mw-parser-output .navbar-brackets::after{margin-left:-0.125em;content:" ]"}.mw-parser-output .navbar li{word-spacing:-0.125em}.mw-parser-output .navbar a>span,.mw-parser-output .navbar a>abbr{text-decoration:inherit}.mw-parser-output .navbar-mini abbr{font-variant:small-caps;border-bottom:none;text-decoration:none;cursor:inherit}.mw-parser-output .navbar-ct-full{font-size:114%;margin:0 7em}.mw-parser-output .navbar-ct-mini{font-size:114%;margin:0 4em}html.skin-theme-clientpref-night .mw-parser-output .navbar li a abbr{color:var(--color-base)!important}@media(prefers-color-scheme:dark){html.skin-theme-clientpref-os .mw-parser-output .navbar li a abbr{color:var(--color-base)!important}}@media print{.mw-parser-output .navbar{display:none!important}}</style><div class="navbar plainlinks hlist navbar-mini"><ul><li class="nv-view"><a href="/wiki/Template:JavaScript" title="Template:JavaScript"><abbr title="View this template">v</abbr></a></li><li class="nv-talk"><a href="/wiki/Template_talk:JavaScript" title="Template talk:JavaScript"><abbr title="Discuss this template">t</abbr></a></li><li class="nv-edit"><a href="/wiki/Special:EditPage/Template:JavaScript" title="Special:EditPage/Template:JavaScript"><abbr title="Edit this template">e</abbr></a></li></ul></div><div id="JavaScript" style="font-size:114%;margin:0 4em"><a href="/wiki/JavaScript" title="JavaScript">JavaScript</a></div></th></tr><tr><th scope="row" class="navbox-group" style="width:1%"><a href="/wiki/Static_program_analysis" title="Static program analysis">Code analysis</a></th><td class="navbox-list-with-group navbox-list navbox-odd hlist" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/ESLint" title="ESLint">ESLint</a></li>
<li><a href="/wiki/JSHint" title="JSHint">JSHint</a></li>
<li><a href="/wiki/JSLint" title="JSLint">JSLint</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%"><a href="/wiki/Subset" title="Subset">Supersets</a></th><td class="navbox-list-with-group navbox-list navbox-even hlist" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/JS%2B%2B" title="JS++">JS++</a></li>
<li><a href="/wiki/TypeScript" title="TypeScript">TypeScript</a></li>
<li><a href="/wiki/ArkTS" title="ArkTS">ArkTS</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%"><a href="/wiki/Source-to-source_compiler" title="Source-to-source compiler">Transpilers</a></th><td class="navbox-list-with-group navbox-list navbox-odd hlist" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/AtScript" title="AtScript">AtScript</a></li>
<li><a href="/wiki/Babel_(transcompiler)" title="Babel (transcompiler)">Babel</a></li>
<li><a href="/wiki/ClojureScript" class="mw-redirect" title="ClojureScript">ClojureScript</a></li>
<li><a href="/wiki/CoffeeScript" title="CoffeeScript">CoffeeScript</a></li>
<li><a href="/wiki/Dart_(programming_language)" title="Dart (programming language)">Dart</a></li>
<li><a href="/wiki/Elm_(programming_language)" title="Elm (programming language)">Elm</a></li>
<li><a href="/wiki/Emscripten" title="Emscripten">Emscripten</a></li>
<li><a href="/wiki/Google_Closure_Compiler" class="mw-redirect" title="Google Closure Compiler">Google Closure Compiler</a></li>
<li><a href="/wiki/Google_Web_Toolkit" title="Google Web Toolkit">Google Web Toolkit</a></li>
<li><a href="/wiki/Haxe" title="Haxe">Haxe</a></li>
<li><a href="/wiki/LiveScript_(programming_language)" title="LiveScript (programming language)">LiveScript</a></li>
<li><a href="/wiki/Morfik" title="Morfik">Morfik</a></li>
<li><a href="/wiki/Nim_(programming_language)" title="Nim (programming language)">Nim</a></li>
<li><a href="/wiki/Opa_(programming_language)" title="Opa (programming language)">Opa</a></li>
<li><a href="/wiki/PureScript" title="PureScript">PureScript</a></li>
<li><a href="/wiki/Reason_(programming_language)" title="Reason (programming language)">Reason</a></li>
<li><a href="/wiki/WebSharper" title="WebSharper">WebSharper</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%">Concepts</th><td class="navbox-list-with-group navbox-list navbox-even hlist" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/JavaScript_library" title="JavaScript library">JavaScript library</a></li>
<li><a href="/wiki/JavaScript_syntax" title="JavaScript syntax">JavaScript syntax</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%"><a href="/wiki/Debugger" title="Debugger">Debuggers</a></th><td class="navbox-list-with-group navbox-list navbox-odd hlist" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Chrome_(browser)" class="mw-redirect" title="Chrome (browser)">Chrome DevTools</a></li>
<li><a href="/wiki/Firefox" title="Firefox">Firefox Inspector</a></li>
<li><a href="/wiki/Komodo_IDE" title="Komodo IDE">Komodo IDE</a></li>
<li><a href="/wiki/Microsoft_Edge" title="Microsoft Edge">Microsoft Edge DevTools</a></li>
<li><a href="/wiki/Opera_(web_browser)" title="Opera (web browser)">Opera DevTools</a></li>
<li><a href="/wiki/Safari_(web_browser)" title="Safari (web browser)">Safari Web Inspector</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%"><a href="/wiki/Documentation_generator" title="Documentation generator">Doc generators</a></th><td class="navbox-list-with-group navbox-list navbox-even hlist" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/JSDoc" title="JSDoc">JSDoc</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%">Editors <span style="font-weight:normal">(<a href="/wiki/Comparison_of_JavaScript-based_source_code_editors" title="Comparison of JavaScript-based source code editors">comparison</a>)</span></th><td class="navbox-list-with-group navbox-list navbox-odd hlist" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Ace_(editor)" title="Ace (editor)">Ace</a>
<ul><li><a href="/wiki/Cloud9_IDE" title="Cloud9 IDE">Cloud9 IDE</a></li></ul></li>
<li><a href="/wiki/Atom_(text_editor)" title="Atom (text editor)">Atom</a></li>
<li><a href="/wiki/CodeMirror" title="CodeMirror">CodeMirror</a>
<ul><li><a href="/wiki/Brackets_(text_editor)" title="Brackets (text editor)">Brackets</a></li>
<li><a href="/wiki/Light_Table_(software)" title="Light Table (software)">Light Table</a></li></ul></li>
<li><a href="/wiki/PhpStorm" class="mw-redirect" title="PhpStorm">PhpStorm</a></li>
<li><a href="/wiki/List_of_Eclipse_projects#Top-level_sub-projects" title="List of Eclipse projects">Orion</a></li>
<li><a href="/wiki/Visual_Studio" title="Visual Studio">Visual Studio</a>
<ul><li><a href="/wiki/Microsoft_Visual_Studio_Express" title="Microsoft Visual Studio Express">Visual Studio Express</a></li></ul></li>
<li><a href="/wiki/Visual_Studio_Code" title="Visual Studio Code">Visual Studio Code</a></li>
<li><a href="/wiki/Visual_Studio#Azure_DevOps_Services" title="Visual Studio">Visual Studio Team Services</a></li>
<li><a href="/wiki/Vim_(text_editor)" title="Vim (text editor)">Vim</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%"><a href="/wiki/JavaScript_engine" title="JavaScript engine">Engines</a></th><td class="navbox-list-with-group navbox-list navbox-even hlist" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/List_of_ECMAScript_engines" title="List of ECMAScript engines">List of ECMAScript engines</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%"><a href="/wiki/Software_framework" title="Software framework">Frameworks</a></th><td class="navbox-list-with-group navbox-list navbox-odd hlist" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Comparison_of_JavaScript-based_web_frameworks" title="Comparison of JavaScript-based web frameworks">Comparison of JavaScript frameworks</a></li>
<li><a href="/wiki/List_of_JavaScript_libraries" title="List of JavaScript libraries">List of JavaScript libraries</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%">Related <a href="/wiki/Technology" title="Technology">technologies</a></th><td class="navbox-list-with-group navbox-list navbox-even hlist" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Ajax_(programming)" title="Ajax (programming)">Ajax</a></li>
<li><a href="/wiki/AssemblyScript" title="AssemblyScript">AssemblyScript</a></li>
<li><a class="mw-selflink selflink">asm.js</a></li>
<li><a href="/wiki/Cascading_Style_Sheets" class="mw-redirect" title="Cascading Style Sheets">Cascading Style Sheets</a></li>
<li><a href="/wiki/Document_Object_Model" title="Document Object Model">Document Object Model</a></li>
<li><a href="/wiki/HTML" title="HTML">HTML</a>
<ul><li><a href="/wiki/HTML5" title="HTML5">HTML5</a></li></ul></li>
<li><a href="/wiki/JSON" title="JSON">JSON</a></li>
<li><a href="/wiki/WebAssembly" title="WebAssembly">WebAssembly</a></li>
<li><a href="/wiki/WebAuthn" title="WebAuthn">WebAuthn</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%"><a href="/wiki/Package_manager" title="Package manager">Package managers</a></th><td class="navbox-list-with-group navbox-list navbox-odd hlist" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Npm" title="Npm">npm</a></li>
<li><a href="/wiki/Yarn_(package_manager)" title="Yarn (package manager)">yarn</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%">Module bundlers</th><td class="navbox-list-with-group navbox-list navbox-even hlist" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Webpack" title="Webpack">Webpack</a></li>
<li><a href="/wiki/Vite_(software)" title="Vite (software)">Vite</a></li>
<li><a href="/wiki/Esbuild" title="Esbuild">esbuild</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%"><a href="/wiki/Server-side_JavaScript" class="mw-redirect" title="Server-side JavaScript">Server-side</a></th><td class="navbox-list-with-group navbox-list navbox-odd hlist" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Active_Server_Pages" title="Active Server Pages">Active Server Pages</a></li>
<li><a href="/wiki/Bun_(software)" title="Bun (software)">Bun</a></li>
<li><a href="/wiki/CommonJS" title="CommonJS">CommonJS</a></li>
<li><a href="/wiki/Deno_(software)" title="Deno (software)">Deno</a></li>
<li><a href="/wiki/JSGI" title="JSGI">JSGI</a></li>
<li><a href="/wiki/Node.js" title="Node.js">Node.js</a></li>
<li>Wakanda</li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%"><a href="/wiki/Unit_testing" title="Unit testing">Unit testing</a> frameworks <span style="font-weight:normal">(<a href="/wiki/List_of_unit_testing_frameworks#JavaScript" title="List of unit testing frameworks">list</a>)</span></th><td class="navbox-list-with-group navbox-list navbox-even hlist" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Jasmine_(JavaScript_testing_framework)" class="mw-redirect" title="Jasmine (JavaScript testing framework)">Jasmine</a></li>
<li><a href="/w/index.php?title=Jest_(JavaScript_framework)&amp;action=edit&amp;redlink=1" class="new" title="Jest (JavaScript framework) (page does not exist)">Jest</a></li>
<li><a href="/wiki/Mocha_(JavaScript_framework)" title="Mocha (JavaScript framework)">Mocha</a></li>
<li><a href="/wiki/QUnit" title="QUnit">QUnit</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%">People</th><td class="navbox-list-with-group navbox-list navbox-odd hlist" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Douglas_Crockford" title="Douglas Crockford">Douglas Crockford</a></li>
<li><a href="/wiki/Ryan_Dahl" title="Ryan Dahl">Ryan Dahl</a></li>
<li><a href="/wiki/Brendan_Eich" title="Brendan Eich">Brendan Eich</a></li>
<li><a href="/wiki/John_Resig" title="John Resig">John Resig</a></li></ul>
</div></td></tr></tbody></table></div>
<div class="navbox-styles"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1129693374"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1236075235"></div><div role="navigation" class="navbox" aria-labelledby="ECMAScript" style="padding:3px"><table class="nowraplinks hlist mw-collapsible autocollapse navbox-inner" style="border-spacing:0;background:transparent;color:inherit"><tbody><tr><th scope="col" class="navbox-title" colspan="2"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1129693374"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1239400231"><div class="navbar plainlinks hlist navbar-mini"><ul><li class="nv-view"><a href="/wiki/Template:ECMAScript" title="Template:ECMAScript"><abbr title="View this template">v</abbr></a></li><li class="nv-talk"><a href="/wiki/Template_talk:ECMAScript" title="Template talk:ECMAScript"><abbr title="Discuss this template">t</abbr></a></li><li class="nv-edit"><a href="/wiki/Special:EditPage/Template:ECMAScript" title="Special:EditPage/Template:ECMAScript"><abbr title="Edit this template">e</abbr></a></li></ul></div><div id="ECMAScript" style="font-size:114%;margin:0 4em"><a href="/wiki/ECMAScript" title="ECMAScript">ECMAScript</a></div></th></tr><tr><th scope="row" class="navbox-group" style="width:1%">Dialects</th><td class="navbox-list-with-group navbox-list navbox-odd" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/ActionScript" title="ActionScript">ActionScript</a></li>
<li><a href="/wiki/Caja_project" title="Caja project">Caja</a></li>
<li><a href="/wiki/JavaScript" title="JavaScript">JavaScript</a>
<ul><li><a href="/wiki/JavaScript_engine" title="JavaScript engine">engines</a></li>
<li><a class="mw-selflink selflink">asm.js</a></li></ul></li>
<li><a href="/wiki/JScript" title="JScript">JScript</a></li>
<li><a href="/wiki/JScript_.NET" title="JScript .NET">JScript .NET</a></li>
<li><a href="/wiki/QtScript" title="QtScript">QtScript</a></li>
<li><a href="/wiki/TypeScript" title="TypeScript">TypeScript</a></li>
<li><a href="/wiki/WMLScript" title="WMLScript">WMLScript</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%"><a href="/wiki/List_of_ECMAScript_engines" title="List of ECMAScript engines">Engines</a><br />(comparison)</th><td class="navbox-list-with-group navbox-list navbox-even" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Presto_(layout_engine)#JavaScript_engines" class="mw-redirect" title="Presto (layout engine)">Carakan</a></li>
<li><a href="/wiki/Presto_(layout_engine)#JavaScript_engines" class="mw-redirect" title="Presto (layout engine)">Futhark</a></li>
<li><a href="/wiki/InScript_(JavaScript_engine)" title="InScript (JavaScript engine)">InScript</a></li>
<li><a href="/wiki/WebKit#JavaScriptCore" title="WebKit">JavaScriptCore</a></li>
<li><a href="/wiki/JScript" title="JScript">JScript</a></li>
<li><a href="/wiki/KJS_(software)" class="mw-redirect" title="KJS (software)">KJS</a></li>
<li><a href="/wiki/Presto_(layout_engine)#ECMAScript_engines" class="mw-redirect" title="Presto (layout engine)">Linear B</a></li>
<li><a href="/wiki/QtScript" title="QtScript">QtScript</a></li>
<li><a href="/wiki/Rhino_(JavaScript_engine)" title="Rhino (JavaScript engine)">Rhino</a></li>
<li><a href="/wiki/SpiderMonkey" title="SpiderMonkey">SpiderMonkey</a>
<ul><li><a href="/wiki/SpiderMonkey#TraceMonkey" title="SpiderMonkey">TraceMonkey</a></li>
<li><a href="/wiki/SpiderMonkey#JägerMonkey" title="SpiderMonkey">JägerMonkey</a></li></ul></li>
<li><a href="/wiki/Tamarin_(software)" title="Tamarin (software)">Tamarin</a></li>
<li><a href="/wiki/V8_(JavaScript_engine)" title="V8 (JavaScript engine)">V8</a></li>
<li><a href="/wiki/Chakra_(JavaScript_engine)" title="Chakra (JavaScript engine)">ChakraCore</a>
<ul><li><a href="/wiki/Chakra_(JScript_engine)" title="Chakra (JScript engine)">Chakra</a></li></ul></li>
<li><a href="/wiki/JScript_.NET" title="JScript .NET">JScript .NET</a></li>
<li><a href="/wiki/Nashorn_(JavaScript_engine)" title="Nashorn (JavaScript engine)">Nashorn</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%"><a href="/wiki/Software_framework" title="Software framework">Frameworks</a></th><td class="navbox-list-with-group navbox-list navbox-odd" style="width:100%;padding:0"><div style="padding:0 0.25em"></div><table class="nowraplinks navbox-subgroup" style="border-spacing:0"><tbody><tr><th scope="row" class="navbox-group" style="width:1%"><a href="/wiki/Client-side_JavaScript" class="mw-redirect" title="Client-side JavaScript">Client-side</a></th><td class="navbox-list-with-group navbox-list navbox-odd" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Dojo_Toolkit" title="Dojo Toolkit">Dojo</a></li>
<li><a href="/wiki/Echo_(framework)" title="Echo (framework)">Echo</a></li>
<li><a href="/wiki/Ext_JS" title="Ext JS">Ext JS</a></li>
<li><a href="/wiki/Google_Web_Toolkit" title="Google Web Toolkit">Google Web Toolkit</a></li>
<li><a href="/wiki/JQuery" title="JQuery">jQuery</a></li>
<li><a href="/wiki/Lively_Kernel" title="Lively Kernel">Lively Kernel</a></li>
<li>midori</li>
<li><a href="/wiki/MochiKit" title="MochiKit">MochiKit</a></li>
<li><a href="/wiki/MooTools" title="MooTools">MooTools</a></li>
<li><a href="/wiki/Prototype_JavaScript_Framework" title="Prototype JavaScript Framework">Prototype</a></li>
<li><a href="/wiki/Pyjs" title="Pyjs">Pyjs</a></li>
<li><a href="/wiki/Qooxdoo" title="Qooxdoo">qooxdoo</a></li>
<li class="mw-empty-elt"></li>
<li><a href="/wiki/SproutCore" title="SproutCore">SproutCore</a></li>
<li><a href="/wiki/Spry_framework" title="Spry framework">Spry</a></li>
<li>Wakanda Framework</li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%"><a href="/wiki/Server-side_JavaScript" class="mw-redirect" title="Server-side JavaScript">Server-side</a></th><td class="navbox-list-with-group navbox-list navbox-even" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Node.js" title="Node.js">Node.js</a></li>
<li><a href="/wiki/Deno_(software)" title="Deno (software)">Deno</a></li>
<li><a href="/wiki/Bun_(software)" title="Bun (software)">Bun</a></li>
<li><a href="/wiki/Jaxer#Aptana_Jaxer" class="mw-redirect" title="Jaxer">Jaxer</a></li>
<li><a href="/wiki/AppJet" title="AppJet">AppJet</a></li>
<li>WakandaDB</li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%">Multiple</th><td class="navbox-list-with-group navbox-list navbox-odd" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li>Cappuccino</li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%"><a href="/wiki/JavaScript_library" title="JavaScript library">Libraries</a></th><td class="navbox-list-with-group navbox-list navbox-even" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Backbone.js" title="Backbone.js">Backbone.js</a></li>
<li><a href="/wiki/SWFObject" title="SWFObject">SWFObject</a></li>
<li><a href="/wiki/Underscore.js" title="Underscore.js">Underscore.js</a></li></ul>
</div></td></tr></tbody></table><div></div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%">People</th><td class="navbox-list-with-group navbox-list navbox-odd" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Brendan_Eich" title="Brendan Eich">Brendan Eich</a></li>
<li><a href="/wiki/Douglas_Crockford" title="Douglas Crockford">Douglas Crockford</a></li>
<li><a href="/wiki/John_Resig" title="John Resig">John Resig</a></li>
<li>Scott Isaacs</li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%">Other</th><td class="navbox-list-with-group navbox-list navbox-even" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Dynamic_HTML" title="Dynamic HTML">DHTML</a></li>
<li><a href="/wiki/Ecma_International" title="Ecma International">Ecma International</a></li>
<li><a href="/wiki/JSDoc" title="JSDoc">JSDoc</a></li>
<li><a href="/wiki/JSGI" title="JSGI">JSGI</a></li>
<li><a href="/wiki/JSHint" title="JSHint">JSHint</a></li>
<li><a href="/wiki/JSLint" title="JSLint">JSLint</a></li>
<li><a href="/wiki/JSON" title="JSON">JSON</a></li>
<li><a href="/wiki/JavaScript_Style_Sheets" title="JavaScript Style Sheets">JSSS</a></li>
<li><a href="/wiki/Sputnik_(JavaScript_conformance_test)" title="Sputnik (JavaScript conformance test)">Sputnik</a></li>
<li><a href="/wiki/Browser_speed_test#SunSpider" title="Browser speed test">SunSpider</a></li>
<li><a href="/wiki/Asynchronous_module_definition" title="Asynchronous module definition">Asynchronous module definition</a></li>
<li><a href="/wiki/CommonJS" title="CommonJS">CommonJS</a></li></ul>
</div></td></tr><tr><td class="navbox-abovebelow" colspan="2"><div>
<dl><dt><span class="noviewer" typeof="mw:File"><span title="List-Class article"><img alt="" src="../../../../wikipedia/en/thumb/d/db/Symbol_list_class_svg/16px-Symbol_list_class.svg.png" decoding="async" width="16" height="16" class="mw-file-element" srcset="//upload.wikimedia.org/wikipedia/en/thumb/d/db/Symbol_list_class.svg/23px-Symbol_list_class.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/d/db/Symbol_list_class.svg/31px-Symbol_list_class.svg.png 2x" data-file-width="180" data-file-height="185" /></span></span> Lists</dt>
<dd><a href="/wiki/List_of_JavaScript_libraries" title="List of JavaScript libraries">JavaScript libraries</a></dd>
<dd><a href="/wiki/List_of_Ajax_frameworks#JavaScript" title="List of Ajax frameworks">Ajax frameworks</a></dd>
<dt><span class="noviewer" typeof="mw:File"><span title="List-Class article"><img alt="" src="../../../../wikipedia/en/thumb/d/db/Symbol_list_class_svg/16px-Symbol_list_class.svg.png" decoding="async" width="16" height="16" class="mw-file-element" srcset="//upload.wikimedia.org/wikipedia/en/thumb/d/db/Symbol_list_class.svg/23px-Symbol_list_class.svg.png 1.5x, //upload.wikimedia.org/wikipedia/en/thumb/d/db/Symbol_list_class.svg/31px-Symbol_list_class.svg.png 2x" data-file-width="180" data-file-height="185" /></span></span> Comparisons</dt>
<dd><a href="/wiki/Comparison_of_JavaScript_frameworks" class="mw-redirect" title="Comparison of JavaScript frameworks">JavaScript frameworks</a></dd>
<dd><a href="/wiki/Comparison_of_server-side_JavaScript_solutions" class="mw-redirect" title="Comparison of server-side JavaScript solutions">server-side JavaScript</a></dd></dl>
</div></td></tr></tbody></table></div>
<div class="navbox-styles"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1129693374"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1236075235"></div><div role="navigation" class="navbox" aria-labelledby="Mozilla" style="padding:3px"><table class="nowraplinks hlist mw-collapsible mw-collapsed navbox-inner" style="border-spacing:0;background:transparent;color:inherit"><tbody><tr><th scope="col" class="navbox-title" colspan="2"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1129693374"><link rel="mw-deduplicated-inline-style" href="mw-data:TemplateStyles:r1239400231"><div class="navbar plainlinks hlist navbar-mini"><ul><li class="nv-view"><a href="/wiki/Template:Mozilla" title="Template:Mozilla"><abbr title="View this template">v</abbr></a></li><li class="nv-talk"><a href="/wiki/Template_talk:Mozilla" title="Template talk:Mozilla"><abbr title="Discuss this template">t</abbr></a></li><li class="nv-edit"><a href="/wiki/Special:EditPage/Template:Mozilla" title="Special:EditPage/Template:Mozilla"><abbr title="Edit this template">e</abbr></a></li></ul></div><div id="Mozilla" style="font-size:114%;margin:0 4em"><a href="/wiki/Mozilla" title="Mozilla">Mozilla</a></div></th></tr><tr><td colspan="2" class="navbox-list navbox-odd" style="width:100%;padding:0"><div style="padding:0 0.25em"></div><table class="nowraplinks mw-collapsible mw-collapsed navbox-subgroup" style="border-spacing:0"><tbody><tr><th scope="col" class="navbox-title" colspan="2"><div id="Projects" style="font-size:114%;margin:0 4em">Projects</div></th></tr><tr><td colspan="2" class="navbox-list navbox-odd" style="width:100%;padding:0"><div style="padding:0 0.25em"></div><table class="nowraplinks navbox-subgroup" style="border-spacing:0"><tbody><tr><th scope="row" class="navbox-group" style="width:1%">Mozilla<br />Labs</th><td class="navbox-list-with-group navbox-list navbox-odd" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Bugzilla" title="Bugzilla">Bugzilla</a></li>
<li><a href="/wiki/ChatZilla" title="ChatZilla">ChatZilla</a></li>
<li><i><a href="/wiki/Jetpack_(Firefox_project)" title="Jetpack (Firefox project)">Jetpack</a></i></li>
<li><i><a href="/wiki/Lightning_(software)" title="Lightning (software)">Lightning</a></i></li>
<li><i><a href="/wiki/Mozilla_Persona" title="Mozilla Persona">Persona</a></i></li>
<li><i><a href="/wiki/Mozilla_Prism" title="Mozilla Prism">Prism</a></i></li>
<li><i><a href="/wiki/Mozilla_Raindrop" title="Mozilla Raindrop">Raindrop</a></i></li>
<li><i><a href="/wiki/Mozilla_Skywriter" title="Mozilla Skywriter">Skywriter</a></i></li>
<li><i><a href="/wiki/Mozilla_Sunbird" title="Mozilla Sunbird">Sunbird</a></i></li>
<li><a href="/wiki/PDF.js" title="PDF.js">PDF.js</a></li>
<li><i><a href="/wiki/Ubiquity_(Firefox)" title="Ubiquity (Firefox)">Ubiquity</a></i></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%">Mozilla<br />Research</th><td class="navbox-list-with-group navbox-list navbox-even" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Alliance_for_Open_Media" title="Alliance for Open Media">Open Media</a></li>
<li><a href="/wiki/Rust_(programming_language)" title="Rust (programming language)">Rust</a></li>
<li><a href="/wiki/Shumway_(software)" title="Shumway (software)">Shumway</a></li>
<li><a href="/wiki/WebAssembly" title="WebAssembly">WebAssembly</a></li>
<li><a href="/wiki/WebXR" title="WebXR">WebXR</a></li>
<li><i><a class="mw-selflink selflink">asm.js</a></i></li>
<li><i><a href="/wiki/Daala" title="Daala">Daala</a></i></li>
<li><i><a href="/wiki/Firefox_OS" title="Firefox OS">Firefox OS</a></i></li>
<li><i><a href="/wiki/OpenFlint" title="OpenFlint">OpenFlint</a></i></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%">Mozilla<br />Foundation</th><td class="navbox-list-with-group navbox-list navbox-odd" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Mozilla_Location_Service" title="Mozilla Location Service">Mozilla Location Service</a></li>
<li><a href="/wiki/SeaMonkey" title="SeaMonkey">SeaMonkey</a></li>
<li><a href="/wiki/Mozilla_Thunderbird" title="Mozilla Thunderbird">Thunderbird</a></li>
<li><a href="/wiki/List_of_Mozilla_products" title="List of Mozilla products">List of products</a></li></ul>
</div><table class="nowraplinks navbox-subgroup" style="border-spacing:0"><tbody><tr><th scope="row" class="navbox-group" style="width:1%">Firefox</th><td class="navbox-list-with-group navbox-list navbox-even" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Firefox" title="Firefox">Firefox Browser</a>
<ul><li><a href="/wiki/Firefox_early_version_history" title="Firefox early version history">Early version history</a></li>
<li><i><a href="/wiki/Firefox_2" title="Firefox 2">2</a></i></li>
<li><i><a href="/wiki/Firefox_3.0" title="Firefox 3.0">3</a></i></li>
<li><i><a href="/wiki/Firefox_3.5" title="Firefox 3.5">3.5</a></i></li>
<li><i><a href="/wiki/Firefox_3.6" title="Firefox 3.6">3.6</a></i></li>
<li><i><a href="/wiki/Firefox_4" title="Firefox 4">4</a></i></li>
<li><a href="/wiki/Firefox_version_history" title="Firefox version history">Version history</a></li>
<li><a href="/wiki/Firefox_for_Android" title="Firefox for Android">for Android</a></li>
<li><a href="/wiki/Firefox_Focus" title="Firefox Focus">Focus</a></li></ul></li>
<li><a href="/wiki/Firefox_Lockwise" title="Firefox Lockwise">Firefox Lockwise</a></li>
<li><a href="/wiki/Firefox_Monitor" title="Firefox Monitor">Firefox Monitor</a></li>
<li><a href="/wiki/Firefox_Sync" title="Firefox Sync">Sync</a></li>
<li><a href="/wiki/Mozilla_VPN" title="Mozilla VPN">Mozilla VPN</a></li>
<li><a href="/wiki/Pocket_(service)" title="Pocket (service)">Pocket</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%">Origins</th><td class="navbox-list-with-group navbox-list navbox-odd" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><i><a href="/wiki/Mozilla_Application_Suite" title="Mozilla Application Suite">Mozilla Application Suite</a></i></li>
<li><i><a href="/wiki/Netscape_Navigator" title="Netscape Navigator">Netscape Navigator</a></i></li>
<li><i><a href="/wiki/Netscape_Communicator" title="Netscape Communicator">Netscape Communicator</a></i></li>
<li><i><a href="/wiki/Netscape" title="Netscape">Netscape Communications</a></i></li>
<li><i><a href="/wiki/Beonex_Communicator" title="Beonex Communicator">Beonex Communicator</a></i></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%">Frameworks</th><td class="navbox-list-with-group navbox-list navbox-even" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Add-on_(Mozilla)" title="Add-on (Mozilla)">Add-on</a></li>
<li><a href="/wiki/Gecko_(software)" title="Gecko (software)">Gecko</a></li>
<li><a href="/wiki/Mozilla_application_framework" title="Mozilla application framework">Necko</a></li>
<li><a href="/wiki/NPAPI" title="NPAPI">NPAPI</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%">Components</th><td class="navbox-list-with-group navbox-list navbox-odd" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Mozilla_Composer" title="Mozilla Composer">Composer</a></li>
<li><a href="/wiki/Netscape_Portable_Runtime" title="Netscape Portable Runtime">NSPR</a></li>
<li><a href="/wiki/Network_Security_Services" title="Network Security Services">NSS</a></li>
<li><a href="/wiki/Rhino_(JavaScript_engine)" title="Rhino (JavaScript engine)">Rhino</a></li>
<li><a href="/wiki/SpiderMonkey" title="SpiderMonkey">SpiderMonkey</a></li>
<li><i><a href="/wiki/Tamarin_(software)" title="Tamarin (software)">Tamarin</a></i></li>
<li><a href="/wiki/Features_of_Firefox" title="Features of Firefox">Features</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%">Typefaces</th><td class="navbox-list-with-group navbox-list navbox-even" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Fira_(typeface)" title="Fira (typeface)">Fira</a></li>
<li><a href="/wiki/Zilla_Slab" title="Zilla Slab">Zilla Slab</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%">Discontinued</th><td class="navbox-list-with-group navbox-list navbox-odd" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><i><a href="/wiki/Mozilla_Calendar_Project" title="Mozilla Calendar Project">Calendar Project</a></i></li>
<li><i><a href="/wiki/Camino_(web_browser)" title="Camino (web browser)">Camino</a></i></li>
<li><i><a href="/wiki/Firefox_Send" title="Firefox Send">Firefox Send</a></i></li>
<li><i><a href="/wiki/Minimo" title="Minimo">Minimo</a></i></li>
<li><u><a href="/wiki/XUL" title="XUL">XUL</a></u>
<ul><li><u><a href="/wiki/XBL" title="XBL">XBL</a></u></li>
<li><u><a href="/wiki/XPCOM" title="XPCOM">XPCOM</a></u></li>
<li><u><a href="/wiki/XPInstall" title="XPInstall">XPInstall</a></u></li>
<li><u><a href="/wiki/XULRunner" title="XULRunner">XULRunner</a></u></li></ul></li></ul>
</div></td></tr></tbody></table><div>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%">Forks</th><td class="navbox-list-with-group navbox-list navbox-even" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Basilisk_(web_browser)" title="Basilisk (web browser)">Basilisk</a></li>
<li><i><a href="/wiki/Classilla" title="Classilla">Classilla</a></i></li>
<li><i><a href="/wiki/Flock_(web_browser)" title="Flock (web browser)">Flock</a></i></li>
<li><a href="/wiki/Goanna_(software)" title="Goanna (software)">Goanna</a></li>
<li><a href="/wiki/GNU_IceCat" title="GNU IceCat">IceCat</a></li>
<li><a href="/wiki/LibreWolf" title="LibreWolf">LibreWolf</a></li>
<li><i><a href="/wiki/Miro_(video_software)" title="Miro (video software)">Miro</a></i></li>
<li><i><a href="/wiki/Netscape_Navigator_9" title="Netscape Navigator 9">Netscape 9</a></i></li>
<li><a href="/wiki/Pale_Moon" title="Pale Moon">Pale Moon</a></li>
<li><a href="/wiki/Firefox_Portable" title="Firefox Portable">Portable Edition</a></li>
<li><i><a href="/wiki/Swiftfox" title="Swiftfox">Swiftfox</a></i></li>
<li><i><a href="/wiki/Swiftweasel" title="Swiftweasel">Swiftweasel</a></i></li>
<li><a href="/wiki/Waterfox" title="Waterfox">Waterfox</a></li>
<li><i><a href="/wiki/XB_Browser" title="XB Browser">xB Browser</a></i></li></ul>
</div></td></tr><tr><td class="navbox-abovebelow" colspan="2"><div>Discontinued projects are in <i>italics</i>. Some projects abandoned by Mozilla that are still maintained by third parties are in <u>underline</u>.</div></td></tr></tbody></table><div></div></td></tr></tbody></table><div></div></td></tr><tr><td colspan="2" class="navbox-list navbox-odd" style="width:100%;padding:0"><div style="padding:0 0.25em"></div><table class="nowraplinks mw-collapsible mw-collapsed navbox-subgroup" style="border-spacing:0"><tbody><tr><th scope="col" class="navbox-title" colspan="2"><div id="Organization" style="font-size:114%;margin:0 4em">Organization</div></th></tr><tr><td colspan="2" class="navbox-list navbox-odd" style="width:100%;padding:0"><div style="padding:0 0.25em"></div><table class="nowraplinks navbox-subgroup" style="border-spacing:0"><tbody><tr><th id="Foundation" scope="row" class="navbox-group" style="width:1%">Foundation</th><td class="navbox-list-with-group navbox-list navbox-odd" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Mozilla_Foundation" title="Mozilla Foundation">Mozilla Foundation</a></li>
<li><a href="/wiki/Mozilla_Corporation" title="Mozilla Corporation">Mozilla Corporation</a></li>
<li><a href="/wiki/Mozilla_Messaging" title="Mozilla Messaging">Mozilla Messaging</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%">Official affiliates</th><td class="navbox-list-with-group navbox-list navbox-even" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Mozilla_China" title="Mozilla China">Mozilla China</a></li>
<li><a href="/wiki/Mozilla_Europe" title="Mozilla Europe">Mozilla Europe</a> (defunct)</li>
<li><a href="/wiki/Mozilla_Japan" title="Mozilla Japan">Mozilla Japan</a></li></ul>
</div></td></tr><tr><th scope="row" class="navbox-group" style="width:1%">People</th><td class="navbox-list-with-group navbox-list navbox-odd" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Mitchell_Baker" title="Mitchell Baker">Mitchell Baker</a></li>
<li><a href="/wiki/David_Baron_(computer_scientist)" title="David Baron (computer scientist)">David Baron</a></li>
<li><a href="/wiki/Tantek_%C3%87elik" title="Tantek Çelik">Tantek Çelik</a></li>
<li><a href="/wiki/Laura_Chambers" title="Laura Chambers">Laura Chambers</a></li>
<li><a href="/wiki/Brendan_Eich" title="Brendan Eich">Brendan Eich</a></li>
<li><a href="/wiki/John_Hammink" title="John Hammink">John Hammink</a></li>
<li><a href="/wiki/Johnny_Stenb%C3%A4ck" title="Johnny Stenbäck">Johnny Stenbäck</a></li>
<li><a href="/wiki/Doug_Turner_(Mozilla)" title="Doug Turner (Mozilla)">Doug Turner</a></li></ul>
</div></td></tr></tbody></table><div></div></td></tr></tbody></table><div></div></td></tr><tr><td colspan="2" class="navbox-list navbox-odd" style="width:100%;padding:0"><div style="padding:0 0.25em"></div><table class="nowraplinks mw-collapsible mw-collapsed navbox-subgroup" style="border-spacing:0"><tbody><tr><th scope="col" class="navbox-title" colspan="2"><div id="Community" style="font-size:114%;margin:0 4em">Community</div></th></tr><tr><td colspan="2" class="navbox-list navbox-odd" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Mozdev.org" title="Mozdev.org">mozdev.org</a></li>
<li><a href="/wiki/MDN_Web_Docs" title="MDN Web Docs">MDN Web Docs</a></li>
<li><a href="/wiki/MozillaZine" title="MozillaZine">MozillaZine</a></li></ul>
</div></td></tr></tbody></table><div></div></td></tr><tr><td colspan="2" class="navbox-list navbox-odd" style="width:100%;padding:0"><div style="padding:0 0.25em"></div><table class="nowraplinks mw-collapsible mw-collapsed navbox-subgroup" style="border-spacing:0"><tbody><tr><th scope="col" class="navbox-title" colspan="2"><div id="Other_topics" style="font-size:114%;margin:0 4em">Other topics</div></th></tr><tr><td colspan="2" class="navbox-list navbox-odd" style="width:100%;padding:0"><div style="padding:0 0.25em">
<ul><li><a href="/wiki/Mozilla_Manifesto" title="Mozilla Manifesto">Mozilla Manifesto</a></li>
<li><i><a href="/wiki/The_Book_of_Mozilla" title="The Book of Mozilla">The Book of Mozilla</a></i></li>
<li><i><a href="/wiki/Code_Rush" title="Code Rush">Code Rush</a></i></li>
<li><a href="/wiki/Mozilla_Public_License" title="Mozilla Public License">Mozilla Public License</a></li>
<li><a href="/wiki/Mozilla_(mascot)" title="Mozilla (mascot)">Mascot</a></li>
<li><a href="/wiki/Debian%E2%80%93Mozilla_trademark_dispute" title="Debian–Mozilla trademark dispute">Debian–Mozilla trademark dispute</a></li>
<li><a href="/wiki/Common_Voice" title="Common Voice">Common Voice</a></li></ul>
</div></td></tr></tbody></table><div></div></td></tr></tbody></table></div>
<!-- 
NewPP limit report
Parsed by mw‐web.eqiad.main‐56f9f7b4c5‐cdbr6
Cached time: 20240819102650
Cache expiry: 2592000
Reduced expiry: false
Complications: [vary‐revision‐sha1, show‐toc]
CPU time usage: 0.836 seconds
Real time usage: 1.087 seconds
Preprocessor visited node count: 3460/1000000
Post‐expand include size: 157495/2097152 bytes
Template argument size: 1950/2097152 bytes
Highest expansion depth: 19/100
Expensive parser function count: 13/500
Unstrip recursion depth: 1/20
Unstrip post‐expand size: 168530/5000000 bytes
Lua time usage: 0.497/10.000 seconds
Lua memory usage: 7018939/52428800 bytes
Number of Wikibase entities loaded: 1/400
-->
<!--
Transclusion expansion time report (%,ms,calls,template)
100.00%  920.039      1 -total
 36.96%  340.042      1 Template:Reflist
 31.03%  285.454     40 Template:Cite_web
 13.63%  125.371      6 Template:Navbox
 11.27%  103.651      1 Template:JavaScript
  9.85%   90.610      1 Template:Infobox_programming_language
  9.66%   88.863      1 Template:Short_description
  9.41%   86.607      1 Template:Primary_sources
  9.30%   85.609      1 Template:Infobox
  8.64%   79.468      2 Template:Ambox
-->

<!-- Saved in parser cache with key enwiki:pcache:idhash:38962533-0!canonical and timestamp 20240819102650 and revision id 1230470162. Rendering was triggered because: page-view
 -->
</div><!--esi <esi:include src="/esitest-fa8a495983347898/content" /> --><noscript><img src="https://login.wikimedia.org/wiki/Special:CentralAutoLogin/start?type=1x1" alt="" width="1" height="1" style="border: none; position: absolute;"></noscript>
<div class="printfooter" data-nosnippet="">Retrieved from "<a dir="ltr" href="https://en.wikipedia.org/w/index.php?title=Asm.js&amp;oldid=1230470162">https://en.wikipedia.org/w/index.php?title=Asm.js&amp;oldid=1230470162</a>"</div></div>
					<div id="catlinks" class="catlinks" data-mw="interface"><div id="mw-normal-catlinks" class="mw-normal-catlinks"><a href="/wiki/Help:Category" title="Help:Category">Categories</a>: <ul><li><a href="/wiki/Category:JavaScript" title="Category:JavaScript">JavaScript</a></li><li><a href="/wiki/Category:Mozilla" title="Category:Mozilla">Mozilla</a></li><li><a href="/wiki/Category:Web_programming" title="Category:Web programming">Web programming</a></li></ul></div><div id="mw-hidden-catlinks" class="mw-hidden-catlinks mw-hidden-cats-hidden">Hidden categories: <ul><li><a href="/wiki/Category:Articles_with_short_description" title="Category:Articles with short description">Articles with short description</a></li><li><a href="/wiki/Category:Short_description_matches_Wikidata" title="Category:Short description matches Wikidata">Short description matches Wikidata</a></li><li><a href="/wiki/Category:Articles_needing_additional_references_from_March_2015" title="Category:Articles needing additional references from March 2015">Articles needing additional references from March 2015</a></li><li><a href="/wiki/Category:All_articles_needing_additional_references" title="Category:All articles needing additional references">All articles needing additional references</a></li><li><a href="/wiki/Category:All_articles_with_unsourced_statements" title="Category:All articles with unsourced statements">All articles with unsourced statements</a></li><li><a href="/wiki/Category:Articles_with_unsourced_statements_from_October_2014" title="Category:Articles with unsourced statements from October 2014">Articles with unsourced statements from October 2014</a></li><li><a href="/wiki/Category:Articles_lacking_reliable_references_from_March_2015" title="Category:Articles lacking reliable references from March 2015">Articles lacking reliable references from March 2015</a></li><li><a href="/wiki/Category:All_articles_lacking_reliable_references" title="Category:All articles lacking reliable references">All articles lacking reliable references</a></li><li><a href="/wiki/Category:Articles_with_example_C_code" title="Category:Articles with example C code">Articles with example C code</a></li></ul></div></div>
				</div>
			</main>
			
		</div>
		<div class="mw-footer-container">
			
<footer id="footer" class="mw-footer" >
	<ul id="footer-info">
	<li id="footer-info-lastmod"> This page was last edited on 22 June 2024, at 21:58<span class="anonymous-show">&#160;(UTC)</span>.</li>
	<li id="footer-info-copyright">Text is available under the <a rel="license" href="//en.wikipedia.org/wiki/Wikipedia:Text_of_the_Creative_Commons_Attribution-ShareAlike_4.0_International_License">Creative Commons Attribution-ShareAlike License 4.0</a><a rel="license" href="//en.wikipedia.org/wiki/Wikipedia:Text_of_the_Creative_Commons_Attribution-ShareAlike_4.0_International_License" style="display:none;"></a>;
additional terms may apply. By using this site, you agree to the <a href="//foundation.wikimedia.org/wiki/Special:MyLanguage/Policy:Terms_of_Use">Terms of Use</a> and <a href="//foundation.wikimedia.org/wiki/Special:MyLanguage/Policy:Privacy_policy">Privacy Policy</a>. Wikipedia® is a registered trademark of the <a href="//wikimediafoundation.org/">Wikimedia Foundation, Inc.</a>, a non-profit organization.</li>
</ul>

	<ul id="footer-places">
	<li id="footer-places-privacy"><a href="https://foundation.wikimedia.org/wiki/Special:MyLanguage/Policy:Privacy_policy">Privacy policy</a></li>
	<li id="footer-places-about"><a href="/wiki/Wikipedia:About">About Wikipedia</a></li>
	<li id="footer-places-disclaimers"><a href="/wiki/Wikipedia:General_disclaimer">Disclaimers</a></li>
	<li id="footer-places-contact"><a href="//en.wikipedia.org/wiki/Wikipedia:Contact_us">Contact Wikipedia</a></li>
	<li id="footer-places-wm-codeofconduct"><a href="https://foundation.wikimedia.org/wiki/Special:MyLanguage/Policy:Universal_Code_of_Conduct">Code of Conduct</a></li>
	<li id="footer-places-developers"><a href="https://developer.wikimedia.org">Developers</a></li>
	<li id="footer-places-statslink"><a href="https://stats.wikimedia.org/#/en.wikipedia.org">Statistics</a></li>
	<li id="footer-places-cookiestatement"><a href="https://foundation.wikimedia.org/wiki/Special:MyLanguage/Policy:Cookie_statement">Cookie statement</a></li>
	<li id="footer-places-mobileview"><a href="//en.m.wikipedia.org/w/index.php?title=Asm.js&amp;mobileaction=toggle_view_mobile" class="noprint stopMobileRedirectToggle">Mobile view</a></li>
</ul>

	<ul id="footer-icons" class="noprint">
	<li id="footer-copyrightico"><a class="cdx-button cdx-button--fake-button cdx-button--size-large cdx-button--fake-button--enabled" style="padding-left: 8px; padding-right: 8px;" href="https://wikimediafoundation.org/" target="https://wikimediafoundation.org/"><img src="../static/images/footer/wikimedia-button.svg" width="84" height="29" alt="Wikimedia Foundation"></a></li>
	<li id="footer-poweredbyico"><a class="cdx-button cdx-button--fake-button cdx-button--size-large cdx-button--fake-button--enabled" style="padding-left: 8px; padding-right: 8px;" href="https://www.mediawiki.org" target="https://www.mediawiki.org"><img src="../static/images/footer/poweredby_mediawiki.svg" width="84" height="29" alt="Powered by MediaWiki"></a></li>
</ul>

</footer>

		</div>
	</div> 
</div> 
<div class="vector-settings" id="p-dock-bottom">
	<ul>
		<li>
		</li>
	</ul>
</div>
<script>(RLQ=window.RLQ||[]).push(function(){mw.config.set({"wgHostname":"mw-web.eqiad.main-6d5d45df6-2ldjv","wgBackendResponseTime":278,"wgPageParseReport":{"limitreport":{"cputime":"0.836","walltime":"1.087","ppvisitednodes":{"value":3460,"limit":1000000},"postexpandincludesize":{"value":157495,"limit":2097152},"templateargumentsize":{"value":1950,"limit":2097152},"expansiondepth":{"value":19,"limit":100},"expensivefunctioncount":{"value":13,"limit":500},"unstrip-depth":{"value":1,"limit":20},"unstrip-size":{"value":168530,"limit":5000000},"entityaccesscount":{"value":1,"limit":400},"timingprofile":["100.00%  920.039      1 -total"," 36.96%  340.042      1 Template:Reflist"," 31.03%  285.454     40 Template:Cite_web"," 13.63%  125.371      6 Template:Navbox"," 11.27%  103.651      1 Template:JavaScript","  9.85%   90.610      1 Template:Infobox_programming_language","  9.66%   88.863      1 Template:Short_description","  9.41%   86.607      1 Template:Primary_sources","  9.30%   85.609      1 Template:Infobox","  8.64%   79.468      2 Template:Ambox"]},"scribunto":{"limitreport-timeusage":{"value":"0.497","limit":"10.000"},"limitreport-memusage":{"value":7018939,"limit":52428800}},"cachereport":{"origin":"mw-web.eqiad.main-56f9f7b4c5-cdbr6","timestamp":"20240819102650","ttl":2592000,"transientcontent":false}}});});</script>
<script type="application/ld+json">{"@context":"https:\/\/schema.org","@type":"Article","name":"Asm.js","url":"https:\/\/en.wikipedia.org\/wiki\/Asm.js","sameAs":"http:\/\/www.wikidata.org\/entity\/Q13496636","mainEntity":"http:\/\/www.wikidata.org\/entity\/Q13496636","author":{"@type":"Organization","name":"Contributors to Wikimedia projects"},"publisher":{"@type":"Organization","name":"Wikimedia Foundation, Inc.","logo":{"@type":"ImageObject","url":"https:\/\/www.wikimedia.org\/static\/images\/wmf-hor-googpub.png"}},"datePublished":"2013-03-30T10:28:36Z","dateModified":"2024-06-22T21:58:42Z","headline":"intermediate programming language"}</script>
</body>
</html>